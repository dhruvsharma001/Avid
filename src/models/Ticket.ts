import { z } from 'zod';
export const commentSchema = z.object({
    comment: z.string(),
    by: z.string(),
    created_at: z.date(),
});

const TicketStatusEnum = z.enum(["OPEN", "IN_PROGRESS", "CLOSED"])
const TicketUrgencyEnum = z.enum(["Low", "Medium", "High"])
const TicketTypeEnum = z.enum(["CUST_DEV", "COMPLAINT", "FEEDBACK", "OTHER"])

export const ticketSchema = z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    status: TicketStatusEnum,
    assignee: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string(),
    type: TicketTypeEnum,
    urgency: TicketUrgencyEnum,
    comments: z.array(commentSchema).optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
});

export type TTicket = z.infer<typeof ticketSchema>;
export type TComment = z.infer<typeof commentSchema>;
export type TTicketStatus = z.infer<typeof TicketStatusEnum>;
export type TTicketUrgency = z.infer<typeof TicketUrgencyEnum>;
export type TTicketType = z.infer<typeof TicketTypeEnum>;
