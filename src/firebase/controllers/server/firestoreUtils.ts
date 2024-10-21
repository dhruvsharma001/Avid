import getFirebaseAdmin from "@/firebase/admin";
import { ZodSchema } from "zod";

export async function getFirestore() {
    const admin = await getFirebaseAdmin();
    const fsdb = admin.firestore();
    return fsdb;

}
export async function addDocument(collection: string, data: any, storeId?: boolean, zodSchema?: ZodSchema<any>) {
    try {
        const fsdb = await getFirestore();
        const doc = fsdb.collection(collection).doc();
        let safeObj = storeId ? { ...data, id: doc.id } : data;
        if (zodSchema) {
            try {
                safeObj = zodSchema.parse(data);

            }
            catch (e) {
                return { success: false, error: e };

            }
        }
        const res = await doc.set(safeObj)
        return res
    } catch (e) {
        console.error(e);
    }
}

