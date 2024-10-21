import { z } from "zod";

export const CustomDevelopmentSchema = z.object({
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
  description: z.string(),
  urgency: z.string(),
});

export type CustomDevelopmentSchemaType = z.infer<
  typeof CustomDevelopmentSchema
>;
