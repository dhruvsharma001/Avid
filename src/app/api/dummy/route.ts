

import getFirebaseAdmin from "@/firebase/admin";

import { NextRequest } from "next/server";
import dynamic from 'next/dynamic'
import RESPONSE_CODES from "@/lib/responseCodes";
import { sendNextResponse } from "@/lib/apiResponse";
// import { generateMock } from '@anatine/zod-mock';
import { ProjectSchema } from "@/models/Project";
import { TemplateSchema } from "@/models/Template";
import { UserSchema } from "@/models/User";
import { WalletSchema } from "@/models/Wallet";
import { TransactionSchema } from "@/models/Transaction";
import { createNotificationEvent } from "@/lib/novu";
import { BlogSchema } from "@/models/Blog";
import { FIREBASE_CONSTANTS } from "@/constants";
import { AssetSchema } from "@/models/Asset";



async function createDummyModelData(request: NextRequest) {
    let newDocument: any = {};
    const admin = await getFirebaseAdmin()
    const generateMock = await import('@anatine/zod-mock').then(m => m.generateMock);
    //read json body
    const body = await request.json()
    const { firebaseCollectionName, data } = body
    if (!data) {
        let schema;
        switch (firebaseCollectionName) {
            case 'projects':
                schema = ProjectSchema;
                break;
            case 'assets':
                schema = AssetSchema
                break;
            case 'templates':
                schema = TemplateSchema;
                break;
            case 'users':
                schema = UserSchema;
                break;
            case 'wallets':
                schema = WalletSchema;
                break;
            case 'transactions':
                schema = TransactionSchema;
                break;
            case 'blogs':
                schema = BlogSchema;
                break;
            default:
                return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN })

        }
        const fakedData: any = generateMock(schema)
        if (fakedData.createdAt) fakedData.createdAt = new Date(fakedData.createdAt)
        if (fakedData.updatedAt) fakedData.updatedAt = new Date(fakedData.updatedAt)
        if (fakedData.userId) fakedData.userId = '32Pe6dv4d0TmmKLfLU7GKINlcPP2'
        if (firebaseCollectionName === 'assets') {
            fakedData.owner = '32Pe6dv4d0TmmKLfLU7GKINlcPP2'
            delete fakedData.tags
        }
        newDocument = fakedData
        //create template
    } else {
        newDocument = data
    }
    let response;

    if (firebaseCollectionName === 'blogs' || newDocument.id) response = await admin.firestore().collection(firebaseCollectionName).doc(newDocument.slug || newDocument.id).set(newDocument)
    else response = await admin.firestore().collection(firebaseCollectionName).add(newDocument)
    if (!response) return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT })
    //return success
    return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED, data: { message: `${firebaseCollectionName} created successfully` } })

}

async function createNotificationInNovu(request: NextRequest) {
    const { userId, email } = await request.json();

    const res = await createNotificationEvent('payment-success', userId, {
        transactionId: 'tansactionId', renderId: 'renderID', paymentDetails: { order: { amount: 999 } }, template: {
            id: "template.id",
            name: "template.name",
            image: "template.samples.image[0]"
        },
        email
    })
    return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED, data: res });
}

async function updateAllRender(request: NextRequest) {
    const { data } = await request.json();
    const admin = await getFirebaseAdmin()
    const res = await admin.firestore().collection(FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS)
    // update all docs with name
    const docs = await res.listDocuments()
    docs.forEach(async doc => {
        await doc.update(data)
    })
    if (!res) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_UPDATE })
    return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.OK, data: { message: `project patched successfully` } })
}

export async function POST(request: NextRequest) {

    try {
        // const token = await verifyTokenInAPI()
        // take action from search params
        const searchParams = new URLSearchParams(request.url.split('?')[1])
        const action = searchParams.get('action')
        if (!action) return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })

        switch (action) {
            case 'createDummyModelData':
                return createDummyModelData(request)
                break;

            case 'createNotificationEvent':
                return createNotificationInNovu(request)
                break;

            case 'updateAllRender':
                return updateAllRender(request)
                break;
            case 'updateTemplate':
                const { data, templateId } = await request.json();
                const admin = await getFirebaseAdmin()
                const res = await admin.firestore().collection(FIREBASE_CONSTANTS.COLLECTIONS.TEMPLATES).doc(templateId).update(data, { merge: true })
                if (!res) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_UPDATE })
                return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.OK, data: { message: `template patched successfully` } })
                break;
            default:
                break;
        }
    } catch (error) {

        return sendNextResponse({ type: 'error', error: error as Error, responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN })
    }
}
export async function GET(request: NextRequest) {

    try {
        // const token = await verifyTokenInAPI()
        const searchParams = new URLSearchParams(request.url.split('?')[1])
        const firebaseCollectionName = searchParams.get('firebaseCollectionName')
        if (!firebaseCollectionName) return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })
        const admin = await getFirebaseAdmin()
        const response = await admin.firestore().collection(firebaseCollectionName).get()
        return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.OK, data: { message: `${firebaseCollectionName} fetched successfully`, data: response.docs.map(doc => doc.data()) } })


        // const admin = await getFirebaseAdmin()

        // //read json body
        // const body = await request.json()
        // const { firebaseCollectionName, schemaName } = body
        // const schema = await import(`@/models/Template/${schemaName}`).then(m => m[schemaName.toLowerCase() + 'Schema'] as ZodSchema<any>)
        // const fakedData = generateMock(schema)
        // //create template
        // const response = await admin.firestore().collection(firebaseCollectionName).add(fakedData)
        // if (!response.id) return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.NO_INSERT })
        // //return success
        // return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED, data: { message: `${firebaseCollectionName} created successfully` } })

    } catch (error) {

        return sendNextResponse({ type: 'error', error: error as Error, responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        // const token = await verifyTokenInAPI()

        const body = await request.json()

        const firebaseCollectionName = body.firebaseCollectionName;
        const data = body.data;
        const documentId = body.documentId;
        if (!firebaseCollectionName) return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.INVALID_DATA_PROVIDED })
        const admin = await getFirebaseAdmin()
        //patch the collections
        // const res = await admin.firestore().collection(firebaseCollectionName).doc(documentId).update(data);
        const doc = admin.firestore().collection(firebaseCollectionName).doc(documentId)
        const docRef = await doc.get();
        const docData: any = docRef.data();
        if (!docData) return sendNextResponse({ type: "error", responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND });
        docData.compositions.video.props[12].schema = data;
        const res = await doc.update(docData);



        if (!res) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NO_UPDATE })
        return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.OK, data: { message: `${firebaseCollectionName} patched successfully` } })
    } catch (error) {
        return sendNextResponse({ type: 'error', error: error as Error, responseCodes: RESPONSE_CODES.API.ERRORS.UNKNOWN })
    }
}

export async function PUT(request: NextRequest) {


    // const { transactionId } = await request.json();
    // const firebaseAdmin = await getFirebaseAdmin();

    // const admin = await getFirebaseAdmin()
    // const transactionDoc = admin.firestore().collection('transactions').doc(transactionId)
    // const transactionDocR = await transactionDoc.get();
    // if (!transactionDocR.exists) {
    //     return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND })
    // }
    // const transaction = await transactionDocR.data()
    // if (!transaction) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND })

    // const project = await transaction.project;
    // const renderRef = await project.get();
    // const renderData = await renderRef.data();
    // const templateRef = await admin.firestore().collection('templates').doc(renderData.templateId).get();
    // const template = await templateRef.data();
    // if (!template) return sendNextResponse({ type: 'error', responseCodes: RESPONSE_CODES.API.ERRORS.NOT_FOUND })

    // const userRef = await admin.firestore().collection('users').doc(renderData.userId).get();
    // const user = await userRef.data();


    // const generatedPDF = await generateInvoice({
    //     project: renderData,
    //     template: template as TTemplate,
    //     transaction: transaction as TTransaction,
    //     user: user as TUser
    // })
    // //save the pdf to GCP storage
    // const pdfBuffer = generatedPDF.toString();
    // const storage = firebaseAdmin.storage();
    // const bucket = storage.bucket();
    // const fileName = `invoices/${transaction.id}.pdf`;
    // const file = bucket.file(fileName);
    // const res = await file.save(pdfBuffer);


    // return sendNextResponse({ type: "success", responseCodes: RESPONSE_CODES.API.SUCCESS.CREATED, data: { fileName } });
}