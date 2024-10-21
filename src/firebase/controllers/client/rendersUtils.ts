
import { TProject } from '@/models/Project';
import { updateDocFromClientSide } from './firestoreUtils';
import { FIREBASE_CONSTANTS } from '@/constants';
export const updateRenderFromClient = async (renderId: string, project: Partial<TProject>) => {
    try {
        const res = await updateDocFromClientSide(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS, renderId, project);
        return res;
    } catch (e) {

        return null;
    }

}