import { TChat, TProject, TPromptOptions } from "@/models/Project";

import getFirebaseAdmin from "@/firebase/admin";

import { API_ROUTES, DEFAULT_BRAND, FIREBASE_CONSTANTS } from "@/constants";
import { generateRandomRenderName, getErrorText, getValueByPath } from "@/lib/utils";
import { TTemplate } from "@/models/Template";
import { TClipContent, TInput } from "@/remotion/textVideo/types";

import { TRender, TRenderOption } from "@/models/Render";

import { getSignedUrl } from "@/firebase/utils";
import { TBrand } from "@/models/Brand";
import moment from "moment";


export function addBrandToSchema(input: TInput, brand: TBrand) {
    if (!brand) return input;
    // Create a copy of input to avoid mutating the original object
    let updatedInput = { ...input };

    // Use map instead of forEach when you want to create a new array
    updatedInput.clips = input.clips.map(clip => ({
        ...clip,
        // Map over content and return new objects
        content: clip.content.map((content: TClipContent) => {
            // If content.variable doesn't start with 'brand', return content as is
            if (!content.variable || !content.variable.startsWith('brand')) {
                return content;
            }
            const key = content.variable.replace('brand.', '') as keyof TBrand;
            const value = getValueByPath(brand, key)
            // Create a new object to return
            let newContent = { ...content, data: value };

            return newContent;
        })
    }));

    return updatedInput;
}

export async function createNewProject(userId: string, inputSchema: any, templateId?: string, prompt?: string, chat?: TChat[], brand?: TBrand, options?: TPromptOptions) {
    try {
        //create a doc and get it's id
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const projectCollection = fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS)
        const doc = projectCollection.doc();
        const id = doc.id;
        let modifiedSchema = inputSchema;
        if (brand)
            modifiedSchema = addBrandToSchema(inputSchema, brand)

        if (options?.productImage) {
            for (let i = 0; i < modifiedSchema.clips.length; i++) {
                for (let j = 0; j < modifiedSchema.clips[i].content.length; j++) {
                    if (modifiedSchema.clips[i].content[j].type == "image" && modifiedSchema.clips[i].content[j].variable === 'product.image') {
                        const productImage = Array.isArray(options.productImage) ? options.productImage[j] : options.productImage;
                        modifiedSchema.clips[i].content[j].data = await getSignedUrl(productImage)
                    }
                }
            }


        }
        const project: TProject = {
            id: id,
            name: generateRandomRenderName(),
            userId: userId,
            chat: chat ? chat : [],
            props: modifiedSchema as TInput,
            createdAt: new Date(),
            updatedAt: new Date(),

        }
        if (templateId) project.templateId = templateId;
        if (prompt) project.initialPrompt = {
            prompt: prompt,
            options: options
        };

        //create new collection
        const res = await doc.set(project).then(res => {

        }).catch(e => { throw new Error(e) });


        return id;
    } catch (e) {
        console.error(e);
    }

}


export async function getProject(projectId: string) {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const docRef = fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS).doc(projectId);
        const res = await docRef.get()
        return res.data() as TProject
    }
    catch (e) {
        return null;

    }
}


export async function renderProject(projectId: string, uid: string, options: TRenderOption) {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const docRef = fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS).doc(projectId);
        const project = (await docRef.get()).data() as TProject;
        // create a render object with the provided options
        const renderObj: TRender = {
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'awaitingQueue',
            options: options,
            projectId: projectId,
            userId: uid,
            props: project.props,
            progress: -1,



        }
        const resp = await fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.RENDER).add(renderObj)
        const renderRef = await resp.get()
        if (!resp.id) throw new Error('Error creating render object')
        const projectUpdateResult = await docRef.update({ renders: admin.firestore.FieldValue.arrayUnion(renderRef.ref) })
        if (!projectUpdateResult) throw new Error('Error updating project with render id')
        const renderRes = await callRenderingAPI(resp.id, options);
        return { renderId: resp.id, renderRes: renderRes };


    }
    catch (e) {
        throw new Error(getErrorText(e));

    }
}

export async function callRenderingAPI(renderId: string, options: TRenderOption) {
    try {
        const res = await fetch(`${API_ROUTES.RENDERER_SERVICE.ROOT}${API_ROUTES.RENDERER_SERVICE.RENDER}`,
            {
                method: 'POST', body: JSON.stringify({ renderId: renderId, options }),
                headers: { 'Content-Type': 'application/json' }
            })
        if (res.status === 200)
            return res
        else throw new Error('Error calling rendering API')
    }
    catch (e) {
        throw new Error(getErrorText(e));

    }
}

export async function getTransactionForRender(renderId: string) {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const res = await fsdb.collection('transactions').where('project', '==', fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS).doc(renderId)).orderBy('createdAt', 'desc').get()
        return res.docs
    }
    catch (e) {
        return null;

    }
}





export async function getTemplateSchema(templateId: string) {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const docRef = fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.TEMPLATES).doc(templateId);
        const res = await docRef.get()
        return res.data() as TTemplate
    } catch (e) {
        console.error(e);
    }
}

export async function deleteProject(projectId: string) {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const docRef = fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS).doc(projectId);
        const res = await docRef.delete()
        return res
    } catch (e) {
        console.error(e);
    }
}

export async function checkIfAllowedToRender(uid: string): Promise<{ isAllowed: boolean, reason?: string }> {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();

        const renders = await fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.RENDER).where("userId", "==", uid).where("createdAt", ">=", moment().subtract('24', 'hours').toDate()).where('state', "==", "completed").get();
        if (renders.size >= 10) return { isAllowed: false, reason: 'Maximum FUP renders reached' }

        if (renders.size === 0) return { isAllowed: true };

        const subscriptionRef = fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.SUBSCRIPTION).where("userId", "==", uid).where("status", "==", "active");
        const sub = await subscriptionRef.get();
        if (sub.empty) return { isAllowed: false, reason: 'No active subscription found' };



        return { isAllowed: true };
    } catch (e) {
        console.error(e);
        return { isAllowed: false, reason: 'Error checking subscription status' };
    }
}

export async function getUserBrands(uid: string): Promise<TBrand[]> {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const res = await fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.BRANDS).where('owner', '==', uid).get();
        if (res.empty) return [DEFAULT_BRAND] as TBrand[];
        return res.docs.map(doc => doc.data()) as TBrand[]
    }
    catch (e) {
        return [DEFAULT_BRAND] as TBrand[]

    }
}

export function getPathFromSignedUrl(url: string) {
    // from the google full signed url get the path
    // example 
    // from this https://storage.googleapis.com/avid-ec61f.appspot.com/templates/JKonHntnFMmA3JDs4CbF/office_chair.png?GoogleAccessId=firebase-adminsdk-db7f1%40avid-ec61f.iam.gserviceaccount.com&Expires=1715682827&Signature=idYBuCnrUCsaYQiuqE1fo%2F3yhFjIH7sC8GHeJN6RJfeSMzsuIaFeCp%2FLwzMcWvbsuH8Lk2qau6VRAoh8kCj34bE3pJXTwzvbWCR49FpATK5%2B1GcMvTA7uHdKFl0wmkUhEY0648%2FX6QY7992%2B4nlKXMERTgwZOgapgIOjOWt7d4k%2BCbVSbANManhyljOiC4eanfQpg8FptFiQ%2FCs%2BhD3lOGjiCYZp8XIZUsZLopOYWnohq1jEGIEFOArDktGANsMszESJ81CNT5WrW3hIJgafapU2zm0PRdEZIG495ArhRXmw4X9n0K3B%2BZQt1gFYAZ8QokUISiB0OmuYFS7RgogJSg%3D%3D
    // get templates/JKonHntnFMmA3JDs4CbF/office_chair.png
    const fieldPath = url.split('?')[0].split('/').slice(4).join('/')
    return fieldPath

}
type TProjectUpdatableProps = {
    name?: string;
    props?: TInput;
}
export async function updateProject(projectId: string, data: TProjectUpdatableProps) {
    try {
        const admin = await getFirebaseAdmin();
        const fsdb = admin.firestore();
        const docRef = fsdb.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS).doc(projectId);
        const updatableData: { props?: any, updatedAt: Date, name?: string } = {

            updatedAt: new Date(),

        }
        if (data.props) {
            if (data.props.clips) {
                for (let i = 0; i < data.props.clips.length; i++) {
                    for (let j = 0; j < data.props.clips[i].content.length; j++) {
                        const clipContent = data.props.clips[i].content[j];
                        if (clipContent.type != 'text' && clipContent.data.startsWith('http')) {
                            data.props.clips[i].content[j].data = getPathFromSignedUrl(clipContent.data)
                        }
                    }
                }
            }
            updatableData['props'] = data.props;

        }
        if (data.name) updatableData['name'] = data.name;
        const res = await docRef.update(updatableData)
        return res
    } catch (e) {
        console.error(e);
    }
}