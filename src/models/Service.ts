import { z } from 'zod';


export const ServiceSchema = z.object({
    id: z.string(),
    fullName: z.string(),
    shortName: z.string(),
    uri: z.string(),
    currentRenders: z.number(),
    totalRenders: z.number(),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),

});

export type TSite = z.infer<typeof ServiceSchema>;