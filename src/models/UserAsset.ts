import { z } from "zod";


export const UserAssetSchema = z.object({
    assets: z.array(z.string())
});
// {userID : [asset Ids...]}