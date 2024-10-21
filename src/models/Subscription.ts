import { z } from 'zod';
import { UserSchema } from './User';
export const SubscriptionStatusEnum = z.enum(["active", "inactive", "cancelled", "trial", "expired"]);
export const SubscriptionSchema = z.object({
    userId: UserSchema,
    subscriptionId: z.string(), //["pro_one_day", "pro_one_month", "pro_one_year","pro_trial"]
    transactionId: z.string().optional(),
    status: SubscriptionStatusEnum,
    validFrom: z.date(),
    validTill: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type TSubscription = z.infer<typeof SubscriptionSchema>;
export type TSubscriptionStatusEnum = z.infer<typeof SubscriptionStatusEnum>;
