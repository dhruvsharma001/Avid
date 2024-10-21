import getFirebaseAdmin from "@/firebase/admin";
import { getSignedUrl } from "@/firebase/utils";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = new URLSearchParams(request.url.split('?')[1])

    const result = await verifyTokenInAPI();
    //read json body


    if (!result.success) {

        throw new Error(result.error)
    }
    const { decodedToken } = result;


    const category = searchParams.get('category')
    const userMedia = searchParams.get('userMedia')
    const page = searchParams.get('page') || 0

    if (!category) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED });
    }

    const admin = await getFirebaseAdmin();
    const firestore = await admin.firestore();
    let assets;
    if (userMedia) {
        if (!decodedToken) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNAUTHORIZED });
        assets = await firestore.collection('assets').where("owner", "==", decodedToken.uid).get();
    } else {
        assets = await firestore.collection('assets').where("category", "==", category).where("access", '==', "public").offset(+page).limit(10).get();
    }

    if (!assets) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND });
    }

    const allAssets = await assets.docs.map(async doc => {

        const data = doc.data()
        data.source = data.source ? await getSignedUrl(data.source) : null;
        return data;
    });






    return sendNextResponse({ type: 'success', data: allAssets, responseCodes: RESPONSE_CODES.API.SUCCESS.OK });
}