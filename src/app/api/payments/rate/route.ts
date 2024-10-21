
import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import { NextRequest } from "next/server";
import { getRate } from "../controller";
import { DEFAULT_COUNTRY, FIREBASE_CONSTANTS } from "@/constants";

export async function GET(request: NextRequest) {

    try {
        // const token = await verifyTokenInAPI()
        const searchParams = new URLSearchParams(request.url.split('?')[1])
        const subscriptionName = searchParams.get('subscriptionName');

        const couponCode = searchParams.get('couponCode') || undefined;
        if (!subscriptionName) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED, error: 'subscriptionName is required' })


        const admin = await getFirebaseAdmin();
        const db = admin.firestore();
        const country = request.geo?.country || DEFAULT_COUNTRY;

        const rate = await getRate({ subscriptionId: subscriptionName as any, couponCode }, country)



        if (!rate) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN })

        }
        return sendNextResponse({ type: 'success', data: rate, responseCodes: RESPONSE_CODES.API.SUCCESS.OK })

    }
    catch (error) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN, error: getErrorText(error) })
    }

}