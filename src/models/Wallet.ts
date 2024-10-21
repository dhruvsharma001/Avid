import { z } from "zod";
export const CurrencySchema = z.enum(["USD", "INR"]);
export const WalletSchema = z.object({
    id: z.string(),
    balance: z.number().positive(),
    currency: CurrencySchema,
    userId: z.string(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export type Wallet = z.infer<typeof WalletSchema>;


