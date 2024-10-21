import { z } from 'zod';

export const TagSchema = z.object({
    name: z.string(),
    templates: z.array(z.string()),
    assets: z.array(z.string()),
    blogs: z.array(z.string()),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),
});