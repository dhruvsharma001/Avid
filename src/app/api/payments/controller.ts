import { DEFAULT_COUNTRY, SUBSCRIPTION_PLANS } from "@/constants";
import getFirebaseAdmin from "@/firebase/admin";
import { TSubscription } from "@/models/Subscription";


import { DocumentData } from "firebase/firestore";
import moment from "moment";

const Razorpay = require('razorpay');


type TProps = {
    subscriptionId: 'pro_one_day' | 'pro_one_month' | 'pro_one_year';
    couponCode?: string;

}
export function getRazorpay() {
    const razorpay = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        key_secret: process.env.NEXT_PRIVATE_RAZORPAY_SECRET,
    });
    return razorpay;
}
export async function getRate(props: TProps, country: string): Promise<{ rate: number, discount: number, couponCode: string, currency: string }> {
    const { subscriptionId, couponCode } = props;
    if (!Object.keys(SUBSCRIPTION_PLANS).includes(subscriptionId)) throw new Error('Invalid subscriptionId');
    const userCurrency = country === 'IN' ? 'INR' : 'USD';
    try {
        const returnRate = {
            rate: 0,
            discount: 0,
            couponCode: '',
            currency: userCurrency,
            message: ''
        }
        const firebaseAdmin = await getFirebaseAdmin();
        const db = await firebaseAdmin.firestore();
        let rate = SUBSCRIPTION_PLANS[subscriptionId as keyof typeof SUBSCRIPTION_PLANS]?.price[userCurrency].amount;
        if (rate === 0) {
            return returnRate;
        }


        returnRate.rate = rate;
        returnRate.discount = 0;



        if (couponCode) {
            const coupon = await db.collection('coupons').doc(couponCode).get();
            if (coupon.exists) {
                const couponObj = coupon.data() as DocumentData;
                if (couponObj.subscriptionIds.includes(subscriptionId) || (couponObj.subscriptionIds.length === 1 && couponObj.subscriptionIds[0] == "*")) {
                    rate = rate - (rate * couponObj.discount / 100);
                    returnRate.discount = couponObj.discount;
                    returnRate.couponCode = couponObj.coupon;
                    returnRate.rate = rate;
                    returnRate.message = 'Coupon applied !';
                }
            } else {
                returnRate.message = 'Coupon not found';
            }


        }
        return returnRate;
    } catch (e: any) {
        throw new Error(e)
    }
}

const getSubscriptionUnit = (subscriptionId: string): 'day' | 'month' | 'year' => {
    if (subscriptionId.includes('day')) return 'day';
    if (subscriptionId.includes('month')) return 'month';
    if (subscriptionId.includes('year')) return 'year';
    throw new Error('Invalid subscriptionId');
}
export async function createUserSubscription(subscriptionId: string, userId: string, transactionId: string) {
    const firebaseAdmin = await getFirebaseAdmin();
    const db = await firebaseAdmin.firestore();
    const userSubscription = db.collection('subscriptions').doc();
    const userDoc = db.collection('users').doc(userId)
    const now = new Date();
    const validTill = moment(now).add(1, getSubscriptionUnit(subscriptionId));
    const userSubscriptionDoc: TSubscription = {
        status: 'active',
        userId: userDoc as any,
        subscriptionId,
        transactionId,
        validFrom: now,
        validTill: validTill.toDate(),
        createdAt: now,
        updatedAt: now

    }
    const subscription = await userSubscription.create(userSubscriptionDoc);
    if (!subscription) throw new Error('Failed to create subscription');

    return userSubscription.id;
}




