import { inputSchema } from '@/remotion/textVideo/types';
import { z } from 'zod';

// ID = random ID
export const renderStatusEnum = z.enum(['awaitingQueue', 'queued', 'processing', 'completed', 'failed'])

export const optionSchemaCommon = z.object({

    fps: z.number(),
    width: z.number().optional(),
    height: z.number().optional(),
    format: z.string(),
    access: z.enum(['public', 'private']),

})
export const optionSchemaVideo = optionSchemaCommon.merge(z.object({
    media: z.literal('video'),
}))
export const optionSchemaImage = optionSchemaCommon.merge(z.object({
    media: z.literal('image'),
    frame: z.number().optional(),
    format: z.enum(['jpeg', 'png', 'webp']),
}))
export const optionSchema = z.union([optionSchemaVideo, optionSchemaImage])
export const renderSchema = z.object({
    projectId: z.string(),
    userId: z.string(),
    remotionRenderId: z.string().nullish(),
    url: z.string().nullish(),
    options: optionSchema,
    previewUrl: z.string().nullish(),
    serveUrl: z.string().nullish(),
    length: z.number().optional(),
    size: z.number().optional(),
    thumbnail: z.string().optional(),
    props: inputSchema, //{propId: value}
    progress: z.number().default(-1),
    status: renderStatusEnum,
    error: z.string().optional(),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),
});

export type TRender = z.infer<typeof renderSchema>;
export type TRenderStatusEnum = z.infer<typeof renderStatusEnum>;
export type TRenderOption = z.infer<typeof optionSchema>;