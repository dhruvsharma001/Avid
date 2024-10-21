import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { NextRequest } from "next/server";

/**
 * @swagger
 * /like:
 *   post:
 *     summary: Create or toggle a like for a template
 *     tags:
 *       - Like
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               templateId:
 *                 type: string
 *                 example: 'template123'
 *     responses:
 *       200:
 *         description: Success - Like toggled
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
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 'template123_user456'
 *                 responseCodes:
 *                   type: string
 *                   example: OK
 *       201:
 *         description: Success - Like created
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
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 'template123_user456'
 *                 responseCodes:
 *                   type: string
 *                   example: CREATED
 *       400:
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
 *       404:
 *         description: Template not found
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
 *                   example: UNKNOWN
 *                 error:
 *                   type: string
 *                   example: 'Detailed error message'
 */

export async function POST(request: NextRequest) {
    // create like

    try {
        const token = await verifyTokenInAPI()

        if (!token.success || !token) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_AUTH_TOKEN })
        }

        //create a like for a tempalte
        const { templateId } = await request.json();

        const admin = await getFirebaseAdmin();
        const firestore = await admin.firestore();
        //check template exists 
        const templateExists = await firestore.collection('templates').doc(templateId).get()
        if (!templateExists.exists)
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND })
        //check if not already existing 
        const docId = `${templateId}_${token.decodedToken.uid}`
        const existingLike = await firestore.collection('likes').doc(docId).get();
        if (existingLike.exists) {
            const likeData = existingLike.data();

            // if already liked
            if (likeData) {
                existingLike.ref.update({
                    updatedAt: new Date(),
                    liked: !likeData.liked

                })
                return sendNextResponse({ type: 'success', data: { id: docId }, responseCodes: RESPONSE_CODES.API.SUCCESS.OK })
            }


        }



        const newDoc = firestore.collection('likes').doc(docId)
        const resp = await newDoc.create({
            templateId: templateId,
            userId: token.decodedToken.uid,
            liked: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        })


        if (!resp)
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_CREATE })

        return sendNextResponse({ type: 'success', data: { id: docId }, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED })
    } catch (error) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN, error: getErrorText(error) })
    }
}