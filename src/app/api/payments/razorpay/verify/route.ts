import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { NextRequest } from "next/server";

import getFirebaseAdmin from "@/firebase/admin";
import { TTransaction, TransactionStatusEnum } from "@/models/Transaction";

import { createNotificationEvent } from "@/lib/novu";

import { getPriceString } from "@/lib/utils";

import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { createUserSubscription } from "../../controller";



export async function POST(request: NextRequest) {
    try {
        const { transactionId, response, subscriptionPlanId } = await request.json();
        if (!transactionId || !response || !subscriptionPlanId) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })
        }
        const userToken = await verifyTokenInAPI();

        if (!userToken.success) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_AUTH_TOKEN })
        }
        const { decodedToken } = userToken;




        const firebaseAdmin = await getFirebaseAdmin();
        const db = await firebaseAdmin.firestore();
        const transactionDoc = db.collection('transactions').doc(transactionId)
        const transactionDocR = await transactionDoc.get();
        if (!transactionDocR.exists) {
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND })
        }
        const res = await transactionDoc.set({
            status: TransactionStatusEnum.Values.completed,
            thirdPartyDetails: {
                razorpay: {
                    payment: response
                }
            },
            updatedAt: new Date()
        }, { merge: true })

        const transaction = await transactionDocR.data()
        if (!transaction) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND })


        const userDoc = db.collection('users').doc(decodedToken.uid);
        const userRef = await userDoc.get();
        const user = await userRef.data();


        if (user && user.email)
            await createNotificationEvent('payment-success', decodedToken.uid, {

                transactionId, subscriptionId: transaction.subscriptionId, paymentDetails: response,
                amount: getPriceString(transaction.amount, transaction.currency),
                email: user.email
            })

        // create user Subscription
        const subscriptionObjId = await createUserSubscription(subscriptionPlanId, decodedToken.uid, transactionId) // subscription ID here is the constant value of subscription available in the controller
        if (!subscriptionObjId) throw new Error('Failed to create subscription')
        //update user 
        userDoc.set({
            subscriptions: firebaseAdmin.firestore.FieldValue.arrayUnion(subscriptionObjId)
        })

        return sendNextResponse({ type: 'success', data: { ...res, subscriptionId: subscriptionObjId }, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED })
    }

    catch (e) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT })
    }

}