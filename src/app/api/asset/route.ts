import { FIREBASE_CONSTANTS } from "@/constants";
import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { TAsset } from "@/models/Asset";
import { NextRequest } from "next/server";


/**
 * @swagger
 * /asset:
 *   get:
 *     summary: Retrieve an asset by ID
 *     tags:
 *       - Asset
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the asset to retrieve
 *     responses:
 *       200:
 *         description: Success - Asset retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                 responseCodes:
 *                   type: string
 *                   example: OK
 *       400:
 *         description: Invalid Data Provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: INVALID_DATA_PROVIDED
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: UNAUTHORIZED
 *       404:
 *         description: Asset Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: NOT_FOUND
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 */
export async function GET(request: NextRequest) {
    const searchParams = new URLSearchParams(request.url.split('?')[1])

    const result = await verifyTokenInAPI();
    //read json body


    if (!result.success) {

        throw new Error(result.error)
    }
    const { decodedToken } = result;


    const id = searchParams.get('id')
    if (!id) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED });
    }

    const admin = await getFirebaseAdmin();
    const firestore = await admin.firestore();

    const asset = await firestore.collection('assets').doc(id).get();
    if (!asset.exists) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND });
    }

    const data = await asset.data();
    if (!data) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND });
    }

    if (data.access === 'private' && data.owner !== decodedToken.uid) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED });
    }
    return sendNextResponse({ type: 'success', data: data, responseCodes: RESPONSE_CODES.API.SUCCESS.OK });
}

function getAssetCategoryFromName(name: string) {
    const extentsion = name.split('.').pop();
    if (extentsion === 'png' || extentsion === 'jpg' || extentsion === 'jpeg') {
        return 'image';
    }
    else if (extentsion === 'mp3') {
        return 'soundEffect';
    }
    else if (extentsion === 'mp4' || extentsion === 'webm') {
        return 'video';
    }
    else if (extentsion === 'json') {
        return 'sticker';
    }
    else {
        return 'image';

    }

}




/**
 * @swagger
 * /asset:
 *   post:
 *     summary: Create a new asset
 *     tags:
 *       - Asset
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'image.png'
 *               url:
 *                 type: string
 *                 example: 'https://example.com/image.png'
 *               isTemplate:
 *                 type: boolean
 *                 example: false
 *               category:
 *                 type: string
 *                 example: 'nature'
 *     responses:
 *       201:
 *         description: Success - Asset created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                 responseCodes:
 *                   type: string
 *                   example: CREATED
 *       400:
 *         description: Invalid Data Provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: INVALID_DATA_PROVIDED
 *       401:
 *         description: Invalid Auth
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: INVALID_AUTH_TOKEN
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                   example: error
 *                 responseCodes:
 *                   type: string
 *                   example: INTERNAL_SERVER_ERROR
 */
export async function POST(request: NextRequest) {
    const result = await verifyTokenInAPI();
    //read json body
    const body = await request.json();
    if (!result.success) {
        throw new Error(result.error)
    }
    const { decodedToken } = result;

    const admin = await getFirebaseAdmin();
    const firestore = await admin.firestore();
    const { name, url, isTemplate = false, category } = body;
    if (!name || !url) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED });
    }
    const asset: TAsset = {
        title: name.split('.').shift() || name,
        category: category,
        format: name.split('.').pop() || 'png',
        access: isTemplate ? 'public' : 'private',
        owner: decodedToken.uid,
        source: url,
        listed: true,
        isAIGenerated: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    const assetCreationResult = await firestore.collection(FIREBASE_CONSTANTS.COLLECTIONS.ASSETS).add(asset);
    //add to user asset for indexing 

    const userAssetDoc = await firestore.collection(FIREBASE_CONSTANTS.COLLECTIONS.USER_ASSETS).doc(decodedToken.uid);
    const userAssetData = await userAssetDoc.get();
    if (!userAssetData.exists) {
        await userAssetDoc.set({ assets: [assetCreationResult.id] });
    } else {

        await userAssetDoc.update({ assets: admin.firestore.FieldValue.arrayUnion(assetCreationResult.id) });
    }

    if (!assetCreationResult) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INTERNAL_SERVER_ERROR });
    }
    return sendNextResponse({ type: 'success', data: result, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED });
}