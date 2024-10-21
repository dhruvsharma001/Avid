import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import RESPONSE_CODES from "@/lib/responseCodes";
import { NextRequest } from "next/server";
import { getRate, getRazorpay } from "../controller";

import { TransactionStatusEnum } from "@/models/Transaction";
import { DEFAULT_COUNTRY, FIREBASE_CONSTANTS, SUBSCRIPTION_PLANS } from "@/constants";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { getErrorText } from "@/lib/utils";


export async function POST(request: NextRequest) {
    try {
        // get project ID from request
        const { subscriptionId, couponCode } = await request.json();
        // Initialize razorpay object
        const razorpay = getRazorpay();
        // get template ID from project ID
        // apply coupon code if any
        // get amount to be paid
        // return razorpay order ID

        const firebaseAdmin = await getFirebaseAdmin();
        const db = await firebaseAdmin.firestore();

        const res = await verifyTokenInAPI();

        if (!res.success) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })
        const { decodedToken } = res;

        if (!subscriptionId) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })

        if (!Object.keys(SUBSCRIPTION_PLANS).includes(subscriptionId)) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })

        const country = request.geo?.country || DEFAULT_COUNTRY;
        const rate = await getRate({ subscriptionId, couponCode }, country)

        const transactionCollection = await db.collection('transactions')
        const transactionsDocs = await transactionCollection.where("userId", '==', decodedToken.uid).where("subscriptionId", "==", subscriptionId).where("status", "in", ["attempted", TransactionStatusEnum.Values.created]).orderBy('createdAt', 'desc').get();
        let order: any;
        let transactionId: string;
        if (transactionsDocs.size > 0) {
            order = transactionsDocs.docs[0].data().thirdPartyDetails.razorpay.order;
            transactionId = transactionsDocs.docs[0].id;
        } else {
            const newTransaction = await db.collection('transactions').doc()
            //create new order
            transactionId = newTransaction.id;
            const options = {
                amount: rate.rate,
                currency: rate.currency,
                receipt: transactionId,
                notes: {
                    subscriptionId, couponCode
                }

            };

            order = await razorpay.orders.create(options);
            const transaction = await newTransaction.create({
                id: transactionId,
                subscriptionId: subscriptionId,
                userId: decodedToken.uid,
                amount: rate.rate,
                currency: rate.currency,
                type: 'credit',
                status: TransactionStatusEnum.Values.created,
                thirdPartyDetails: {
                    razorpay: {
                        order: order
                    }
                },
                couponCode: rate.couponCode,
                discount: rate.discount,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            if (!transaction) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT })
        }




        return sendNextResponse({
            type: 'success', data: {
                id: order.id,
                currency: order.currency,
                amount: order.amount,
                transactionId: transactionId,
                description: `payment for ${subscriptionId} subscription`
            }, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED
        })


    } catch (err) {

        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT, error: getErrorText(err) })
    }



}