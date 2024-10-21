import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { RateSchema } from "@/models/Rate";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {

    /* The code snippet provided is a TypeScript function that handles a POST request. Here is a
    breakdown of what the code is doing: */
    const token = await verifyTokenInAPI()

    if (!token.success || !token) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_AUTH_TOKEN })

    }



    //create a rating for project or template
    const { ...ratingData } = await request.json();
    const res = RateSchema.omit({ userId: true }).safeParse(ratingData);
    if (!res.success) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED, error: res.error })
    }

    const rating = res.data

    // create rating

    try {
        const admin = await getFirebaseAdmin();
        const firestore = admin.firestore();
        let ratingId = `${token.decodedToken.uid}_${rating.resourceId}`
        //check if not already existing 
        const existingRating = await firestore.collection('ratings').doc(ratingId).get();
        if (existingRating.exists) {
            // update rating
            await existingRating.ref.update({
                ...rating,
                updatedAt: new Date(),
            })
            return sendNextResponse({ type: 'success', data: { id: ratingId }, responseCodes: RESPONSE_CODES.API.SUCCESS.OK })
        }


        //create rating 
        const docRef = await firestore.collection('ratings').doc(ratingId).create({
            ...rating,
            userId: token.decodedToken.uid,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        if (!docRef)
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_CREATE })

        return sendNextResponse({ type: 'success', data: { id: ratingId }, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED })

    } catch (e) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN, error: getErrorText(e) })
    }


}