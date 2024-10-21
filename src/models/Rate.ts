
import { z } from 'zod'

const ratingResourceEnum = z.enum(["template", "project"])
export const RateSchema = z.object({
    userId: z.string(), // intentionally used string and not ref so as to avoid circular dependency as this will be used in a way that requires get  only
    resourceId: z.string(),
    resourceType: ratingResourceEnum,
    rating: z.number().min(0).max(5),
    review: z.string().optional(),
    createdAt: z.string().datetime().or(z.date()).optional(),
    updatedAt: z.string().datetime().or(z.date()).optional(),

});

export type TRate = z.infer<typeof RateSchema>;
