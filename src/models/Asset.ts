import { z } from "zod";


const assetCategoryEnum = z.enum(["sticker", "soundEffect", "backgroundAudio", "image", "video", "gradient"]) // all stickers will be lottie files.
const assetFormatEnum = z.enum(["gif", "json", "mp3", "png", "webm"])

export const AssetSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.set(z.string()).optional(),
    category: assetCategoryEnum,
    format: assetFormatEnum,
    access: z.enum(["public", "private"]),
    owner: z.string(), // the user id of the owner or "system" for system assets
    source: z.string(), // the gs:// path to the asset
    isAIGenerated: z.boolean().default(false),
    listed: z.boolean().default(true),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export type TAsset = z.infer<typeof AssetSchema>;
export type TAssetCategory = z.infer<typeof assetCategoryEnum>;
export type TAssetFormat = z.infer<typeof assetFormatEnum>;