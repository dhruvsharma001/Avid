import { z } from "zod";

export const CategorySchema = z.object({
    name: z.string(),
    isShownInFilter: z.boolean(),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),

});

export type TCategory = z.infer<typeof CategorySchema>;


