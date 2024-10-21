import { z } from "zod";
import { CurrencySchema } from "./Wallet";
import { ProjectSchema } from "./Project";
import { TemplateSchema } from "./Template";

export const PaypalSchema = z.object({
    id: z.string(),
    status: z.string(),
    payer: z.object({
        email_address: z.string(),
        payer_id: z.string(),
        name: z.object({
            given_name: z.string(),
            surname: z.string(),
        }),
    }),
    purchase_units: z.array(z.object({
        amount: z.object({
            value: z.string(),
            currency_code: z.string(),
        }),
    })),
    create_time: z.string(),
    update_time: z.string(),
    links: z.array(z.object({
        href: z.string(),
        rel: z.string(),
        method: z.string(),
    })),
}).optional();

const razorPaySchema = z.object({
    order: z.any(),
    payment: z.any(),
}).optional();

export const TransactionStatusEnum = z.enum(["created", "pending", "completed", "failed", "refunded"])
export const TransactionSchema = z.object({
    id: z.string(),
    userId: z.string(),
    amount: z.number().positive(),
    currency: CurrencySchema,
    type: z.enum(["credit", "debit"]),
    status: TransactionStatusEnum,
    walletBalance: z.number().positive(),
    thirdPartyDetails: z.object({
        paypal: PaypalSchema,
        razorpay: razorPaySchema,
    }).optional().or(z.null()),
    couponCode: z.string().optional(),
    discount: z.number().optional(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export type TTransaction = z.infer<typeof TransactionSchema>;
export type TTransactionStatusEnum = z.infer<typeof TransactionStatusEnum>;

