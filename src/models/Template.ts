import { inputSchema } from "@/remotion/textVideo/types";
import { z } from "zod";


/**
 * "Country_CODE":{
 * "amount": 100,
 * .....
 * ......
 *
 * }
 */
/* This code snippet is defining a schema called `PriceSchema` using Zod, a TypeScript-first schema
declaration and validation library. 

*/
export const PriceSchema = z.record(
  z.string(),
  z.object({

    amount: z.number().min(0),
    saleAmount: z.number().min(0).optional(),
    saleEndDate: z.string().optional(),
    currency: z.string().max(3),
  })
);


export const ETemplateType = z.enum(["modern", "classic", "futuristic", "retro", "vintage", "text-only"])
export const ETemplateTargetPlatform = z.enum(["youtube", "tiktok", "instagram", "facebook", "twitter", "linkedin"])
export const ETemplateIndustry = z.enum(["ecommerce", "fashion", "beauty", "health", "fitness", "wellness", "tech", "education", "entertainment", "food", "travel", "sports", "finance", "real-estate", "automotive", "other"])
export const ETemplateTargetUser = z.enum(["gen-z", "millenials", "gen-x", "baby-boomers", "other"])

export const TemplateSchema = z.object({
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  thumbnailClipIndex: z.number().default(0),
  samples: z.object({
    video: z.array(z.string()).optional(),
    image: z.array(z.string()).optional(),
    pdf: z.array(z.string()).optional(),
  }),
  tags: z.set(z.string()), // this will will be a set of refs to tags
  isPremium: z.boolean(),
  props: inputSchema,
  author: z.string(),
  category: z.string(),
  listed: z.boolean(),
  rating: z.number().optional(),
  industry: z.set(ETemplateIndustry),
  targetUser: z.set(ETemplateTargetUser),
  targetPlatform: z.set(ETemplateTargetPlatform),
  lengthInSeconds: z.number().optional(),
  type: ETemplateType,
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type TTemplate = z.infer<typeof TemplateSchema>;
export type TPriceSchema = z.infer<typeof PriceSchema>;
export type TTemplateType = z.infer<typeof ETemplateType>;
export type TTemplateIndustry = z.infer<typeof ETemplateIndustry>;
export type TTemplateTargetUser = z.infer<typeof ETemplateTargetUser>;
export type TTemplateTargetPlatform = z.infer<typeof ETemplateTargetPlatform>;

export type TTemplateWithId = TTemplate & { id: string };

