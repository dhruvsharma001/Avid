import { ROOT_URL } from "@/constants";
import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import { TNovuSubscriber, createNotificationEvent, registerSubscriber, updateSubscriber } from "@/lib/novu";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import { UserSchema } from "@/models/User";
import { NextRequest } from "next/server";
import { z } from "zod";
import { getUserCountryFromRequest } from "../meta/route";

export async function POST(request: NextRequest) {
    const { user } = await request.json();
    const res = UserSchema.safeParse(user);
    if (!res.success) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED, error: res.error })
    }
    // check if user exists with the given email or phone number
    const firebaseAdmin = getFirebaseAdmin();
    const auth = (await firebaseAdmin).auth()
    if (!user.email && !user.phone) {
        sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })
    }
    let userRecord;
    if (user.email) {
        userRecord = await auth.getUserByEmail(user.email);

    }
    if (!userRecord && user.phone) {
        userRecord = await auth.getUserByPhoneNumber(user.phone);

    }

    if (!userRecord) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.USER.USER_NOT_FOUND })
    }

    // create user
    try {
        const country = await getUserCountryFromRequest(request)

        // create user in firestore
        const firestore = (await firebaseAdmin).firestore();
        await firestore.collection('users').doc(userRecord.uid).set({
            uid: userRecord.uid,
            email: userRecord.email,
            displayName: userRecord.displayName,
            photoURL: userRecord.photoURL || null,
            phoneNumber: userRecord.phoneNumber || null,
            emailVerified: userRecord.emailVerified,
            creationTime: userRecord.metadata.creationTime,
            lastSignInTime: userRecord.metadata.lastSignInTime,
            country: country,
            providerId: user.providerId || null,
        })
        const novuData: TNovuSubscriber = {
            uid: userRecord.uid,
            email: userRecord.email,
            displayName: userRecord.displayName || 'John Doe',
            phoneNumber: userRecord.phoneNumber,
            photoURL: userRecord.photoURL,
            isEmailVerified: userRecord.emailVerified
        }
        //create new subscriber in novu
        await registerSubscriber(novuData);

        if (userRecord.email) {
            const confirmationLink = await auth.generateEmailVerificationLink(userRecord.email, { url: ROOT_URL + `/verify-email?email=${userRecord.email}` })
            // generate a novu event for user creation
            await createNotificationEvent('new-registration', userRecord.uid, { ...userRecord, country: user.country, confirmationLink: confirmationLink })
        } else if (userRecord.phoneNumber) {
            // user is already OTP Verified via phone so we just create a novu event
            await createNotificationEvent('new-registration', userRecord.uid, { ...userRecord, country: user.country })
        }
        return sendNextResponse({ type: 'success', responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED, data: userRecord })
    } catch (error) {
        const err = getErrorText(error)
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN, error: err })
    }

}



/**
 * This TypeScript function handles patch requests to update user data in a Firestore database,
 * performing validation checks and updating the user record accordingly.
 * @param {NextRequest} request - The `PATCH` function you provided is responsible for updating user
 * data in a Firestore database. Here's a breakdown of the key steps in the function:
 * @returns The PATCH function returns a response object based on different conditions:
 * 1. If the keys of updateParams are not valid or are not part of the User schema, it returns an error
 * response with the code RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED.
 * 2. If the user with the given uid is not found, it returns an error response with the code
 * RESPONSE_CODES.API.ERRORS.USER.USER_NOT_FOUND
 */
export async function PATCH(request: NextRequest) {

    const UserPartialSchema = UserSchema.partial();
    const { uid, updateParams } = await request.json();
    //make sure  keys of updateParams are valid and are not something other than that of TUser
    const resp = UserPartialSchema.safeParse(updateParams);

    if (!resp.success) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED, error: resp.error })
    }
    const safeUpdateParams = resp.data;


    // check if user exists with the given email or phone number
    const firebaseAdmin = getFirebaseAdmin();
    const auth = (await firebaseAdmin).auth()
    let userRecord;
    if (uid) {
        userRecord = await auth.getUser(uid);
    }
    if (!userRecord) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.USER.USER_NOT_FOUND })
    }
    if (userRecord.emailVerified) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.USER.EMAIL_CANNOT_BE_CHANGED })
    }




    let novuUpdateableData = {
        email: safeUpdateParams.email,  // user Cannot change if email is already verified
        displayName: safeUpdateParams.displayName && safeUpdateParams.displayName,
        phoneNumber: safeUpdateParams.phoneNumber && safeUpdateParams.phoneNumber != null ? safeUpdateParams.phoneNumber : undefined,
        photoURL: safeUpdateParams.photoURL && safeUpdateParams.photoURL,
        isEmailVerified: userRecord.emailVerified,

    }

    if (safeUpdateParams.email && userRecord.email != safeUpdateParams.email) {
        novuUpdateableData.isEmailVerified = false;
    }

    await updateSubscriber(uid, novuUpdateableData);

    // update user
    try {
        const firestore = (await firebaseAdmin).firestore();
        await firestore.collection('users').doc(userRecord.uid).update(updateParams, { merge: true })
        return sendNextResponse({ type: 'success', responseCodes: RESPONSE_CODES.API.SUCCESS.OK, data: userRecord })
    } catch (error) {
        const err = getErrorText(error)
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN, error: err })
    }

}