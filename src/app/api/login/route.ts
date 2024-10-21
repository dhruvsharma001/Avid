
import { NextRequest, NextResponse } from "next/server";
// import { getTokensFromObject } from "next-firebase-auth-edge/lib/next/tokens";
// import { getFirebaseAuth } from "next-firebase-auth-edge/lib/auth";
import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import { getIronSessionOfUser } from "@/lib/ironSession";
import { registerSubscriber } from "@/lib/novu";
import RESPONSE_CODES from "@/lib/responseCodes";



/**
 * @swagger
 * /login:
 *   get:
 *     summary: Verify Firebase token and return user data
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Firebase token
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 verified:
 *                   type: object
 *                   description: Verified user data
 *                   properties:
 *                     uid:
 *                       type: string
 *                     email:
 *                       type: string
 *                     displayName:
 *                       type: string
 *                     photoURL:
 *                       type: string
 *                     emailVerified:
 *                       type: boolean
 *       400:
 *         description: Invalid Auth
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid Auth
 */

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)

    const auth = requestHeaders.get('Authorization')

    if (!auth) return Response.json({ error: 'Invalid Auth' })

    // const { verifyIdToken } = getFirebaseAuth(authConfig.serviceAccount, authConfig.apiKey)
    const admin = await getFirebaseAdmin();
    const adminAuth = await admin.auth();
    try {
        const firebaseToken = auth.replace('Bearer ', '')
        const decodedToken = await adminAuth.verifyIdToken(firebaseToken, true)
        if (!decodedToken) return sendNextResponse({ responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_AUTH_TOKEN, type: 'error' })



        //create subscriber
        const userRef = await admin.firestore().collection('users').doc(decodedToken.uid).get();
        const subscriptionRef = await admin.firestore().collection('subscriptions').where('userId', '==', userRef.ref).where('status', '==', 'active').limit(1);
        const subscription = await subscriptionRef.get();
        const subscriptionData = subscription.docs.map(doc => doc.data());
        if (subscriptionData.length > 0) {
            decodedToken.isPro = true;
            decodedToken.proValidity = subscriptionData[0].validTill;
        } else {
            decodedToken.isPro = false;
        }
        if (userRef.exists) {

            const res = await registerSubscriber({
                uid: decodedToken.uid,
                displayName: decodedToken.name,
                email: decodedToken.email,
                photoURL: decodedToken.picture,
                phoneNumber: decodedToken.phone_number,
                isEmailVerified: decodedToken.email_verified || false
            })

        }

        const userData = await userRef.data();


        const session = await getIronSessionOfUser()
        session.user = {
            uid: decodedToken.uid,
            displayName: decodedToken.name,
            email: decodedToken.email,
            phoneNumber: decodedToken.phone_number,
            photoURL: decodedToken.picture,
            emailVerified: decodedToken.email_verified || false,
            role: userData && userData.role ? userData.role : 'user',
            isPro: decodedToken.isPro,
            proValidity: decodedToken.proValidity

        };
        session.isLoggedIn = true;

        await session.save();
        return NextResponse.json({ message: 'success', decodedToken }, {
            headers: {
                // 'set-cookie': `${authConfig.cookieName}=${firebaseToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400; Domain=${process.env.NEXT_PUBLIC_HOSTNAME || 'dev.clipyfy.com'}`,
                'Content-Type': 'application/json'
            },
            status: 200
        });

    } catch (e) {

        return NextResponse.json({ message: 'error', e }, {
            headers: {
                'set-cookie': ``,
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }

}