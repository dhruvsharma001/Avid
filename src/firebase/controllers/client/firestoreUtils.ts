import { doc, getDoc, setDoc } from 'firebase/firestore';
import firestore from '../../db';

export async function addDocFromClientSide(collection: string, data: any) {
    const db = firestore;
    const res = await setDoc(doc(db, collection), data);
    return res;
}

export async function updateDocFromClientSide(collection: string, docId: string, data: any): Promise<any> {
    const db = firestore;
    const res = await setDoc(doc(db, collection, docId), data, { merge: true });
    return res;
}

export async function deleteDocFromClientSide(collection: string, docId: string) {
    const db = firestore;
    const res = await setDoc(doc(db, collection, docId), { deleted: true });
    return res;
}

export async function getDocByIdFromClientSide(collection: string, docId: string) {
    const db = firestore;
    const res = await getDoc(doc(db, collection, docId));
    return res;
}