'use server';

import { TUser } from '@/models/User';

// Next.js Server Components and Server Actions (App Router)

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { z } from 'zod';

const TIronSessionSchema = z.object({
    user: z.object({
        email: z.string().optional(),
        uid: z.string(),
        phoneNumber: z.string().optional(),
        displayName: z.string(),
        photoURL: z.string().optional(),
        emailVerified: z.boolean(),
        role: z.enum(['admin', 'user', 'creator']).nullish(),
        isPro: z.boolean().optional(),
        proValidity: z.date().optional(),
    }),
    isLoggedIn: z.boolean(),

});
export type TIronSession = z.infer<typeof TIronSessionSchema>;
export async function getIronSessionOfUser() {
    const session = await getIronSession<TIronSession>(cookies(), {
        password: "asdasdk123kalsjdlks9023u83iejqwdkjndsbnsdnand", cookieName: "clipyfySession", cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 14,
        }
    },);
    return session;
}

