import { z } from "zod";

export const MyProfileSchema = z.object({
  displayName: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
  photoURL: z.string().optional(),
});

export type MyProfileSchemaType = z.infer<typeof MyProfileSchema>;
