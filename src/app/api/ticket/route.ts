import getFirebaseAdmin from "@/firebase/admin";
import { sendNextResponse } from "@/lib/apiResponse";
import { createNotificationEvent, registerSubscriber } from "@/lib/novu";
import RESPONSE_CODES from "@/lib/responseCodes";
import { getErrorText } from "@/lib/utils";
import verifyTokenInAPI from "@/lib/verifyTokenAPI";
import { TTicket, ticketSchema } from "@/models/Ticket";
import { NextRequest } from "next/server";

/**
 * @swagger
 * /ticket:
 *   post:
 *     summary: Create a new ticket
 *     tags:
 *       - Ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'John Doe'
 *               email:
 *                 type: string
 *                 example: 'john.doe@example.com'
 *               phoneNumber:
 *                 type: string
 *                 example: '123-456-7890'
 *               issue:
 *                 type: string
 *                 example: 'Unable to access the dashboard'
 *     responses:
 *       201:
 *         description: Success - Ticket created
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
 *                       example: 'ticket123'
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
 *                 error:
 *                   type: string
 *                   example: 'Validation error details'
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
    let userDetails;
    try {
        const token = await verifyTokenInAPI()
        if (!token.success || !token) {
            userDetails = null;

        } else {
            userDetails = token.decodedToken;
        }

    } catch (e) {
        userDetails = null;
    }




    const { ...ticketData } = await request.json();
    const res = ticketSchema.safeParse(ticketData);
    if (!res.success) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED, error: res.error })
    }

    const ticket: TTicket = res.data




    // create ticket
    try {
        /* This block of code is responsible for creating a new ticket in a Firestore database using
        Firebase Admin SDK. Here's a breakdown of what each step is doing: */
        const admin = await getFirebaseAdmin();
        const firestore = admin.firestore();

        const docRef = await firestore.collection('tickets').add({
            ...ticket,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        })



        if (!docRef.id)
            return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_CREATE })


        if (!userDetails) {
            await registerSubscriber({
                email: ticket.email,
                displayName: ticket.name || "User",
                phoneNumber: ticket.phoneNumber || undefined,
                uid: ticket.email,
                photoURL: undefined,
                isEmailVerified: false
            })
            await createNotificationEvent('ticket', ticket.email, { ...ticket, ticketId: docRef.id })
        } else {
            await createNotificationEvent('ticket', userDetails.uid, { ...ticket, ticketId: docRef.id })
        }



        return sendNextResponse({ type: 'success', data: { id: docRef.id }, responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED })



    } catch (e) {
        return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN, error: getErrorText(e) })
    }



}