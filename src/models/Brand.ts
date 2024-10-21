import { z } from "zod";

export const colorSchema = z.object({
    primary: z.string(),
    secondary: z.string(),
    tertiary: z.string(),
    contrast: z.string(),
});

export const fontSchema = z.object({
    family: z.string(),
    size: z.number(),
    weight: z.number(),
});

export const fontTypesSchema = z.object({
    heading: fontSchema,
    subheading: fontSchema,
    body: fontSchema,
})
export const EIndustry = z.enum(
    ["Technology", "Healthcare", "Finance", "Retail", "Education", "Real Estate", "Automotive", "Hospitality", "Food & Beverage", "Fashion", "Sports", "Entertainment", "Travel", "Other"]
);

export const ETargetUser = z.enum(
    ["Children", "Teenagers", "Young Adults", "Adults", "Seniors"]
);
export const BrandSchema = z.object({
    name: z.string(),
    logo: z.string().optional(),
    website: z.string().optional(),
    colors: colorSchema,
    font: fontTypesSchema,
    industry: z.array(EIndustry).optional(),
    targetUser: z.array(ETargetUser).optional(),
    owner: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type TBrand = z.infer<typeof BrandSchema>;
export type TBrandColor = z.infer<typeof colorSchema>;
export type TBrandFont = z.infer<typeof fontSchema>;