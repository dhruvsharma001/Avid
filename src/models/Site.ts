import { z } from 'zod';


export const SiteSchema = z.object({
    id: z.string(),
    templateId: z.string(), // intentionally used string and not ref so as to avoid circular dependency as this will be used in a way that requires get  only
    serveUrl: z.string(),
    siteName: z.string(),
    requireRedeployment: z.boolean(),
    stats: z.object({
        uploadedFiles: z.number(),
        deletedFiles: z.number(),
        untouchedFiles: z.number(),
    }),
    createdAt: z.string().datetime().or(z.date()),
    updatedAt: z.string().datetime().or(z.date()),

});

export type TSite = z.infer<typeof SiteSchema>;