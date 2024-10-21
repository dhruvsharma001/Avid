import { z } from "zod";
import { TemplateSchema } from "./Template";

export const CouponSchema = z.object({
    coupon: z.string(),
    discount: z.number().positive(),
    subscriptionIds: z.array(z.string()),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),

});

export type TCoupon = z.infer<typeof CouponSchema>;


