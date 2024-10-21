import { getIronSessionOfUser } from "@/lib/ironSession";
import { NextRequest, NextResponse } from "next/server";
/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Destroy user session and log out
 *     tags:
 *       - Auth
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
 */
export async function GET(request: NextRequest) {

    const session = await getIronSessionOfUser();
    if (session.isLoggedIn) {

        await session.destroy();
    }

    return NextResponse.json({ message: 'success', }, {
        headers: {
            // 'set-cookie': `AuthToken=deleted; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Domain=${process.env.NEXT_PUBLIC_HOSTNAME || `dev.clipyfy.com`}`,
            'Content-Type': 'application/json'
        },
        status: 200
    });
}