import { z } from 'zod';


export const LikeSchema = z.object({
    userId: z.string(), // intentionally used string and not ref so as to avoid circular dependency as this will be used in a way that requires get  only
    templateId: z.string(), // intentionally used string and not ref so as to avoid circular dependency as this will be used in a way that requires get  only
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),
    liked: z.boolean()

});

export type TLike = z.infer<typeof LikeSchema>;