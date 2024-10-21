import { z } from 'zod';


export const settingSchema = z.object({
    notifications: z.object({
        email: z.boolean().default(true),
        push: z.boolean().default(true),
    }),
    billing: z.object({

    }).optional(),

})



export const UserSchema = z.object({
    uid: z.string(),
    displayName: z.string(),
    email: z.string(),
    role: z.enum(['creator', 'user', 'admin']).nullish(),
    photoURL: z.string().optional(),
    phoneNumber: z.string().nullish().optional(),
    providerId: z.string().optional(),
    creationTime: z.string().optional(),
    lastSignInTime: z.string().optional(),
    active: z.boolean().default(true),
    emailVerified: z.boolean(),
    settings: settingSchema.optional(),
    subscriptions: z.array(z.string()).optional(),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),



});

export type TUser = z.infer<typeof UserSchema>;
