import { collection, doc, limit, query, where } from "firebase/firestore";
import firestore from "@/firebase/db";
import { FIREBASE_CONSTANTS } from "@/constants";


export const getRenders = (templateId: string, userId?: string) => {
  if (!userId) return null;
  return query(
    collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.PROJECTS),
    where("templateId", "==", templateId),
    where("userId", "==", userId),

    limit(1)
  );
}

export const getRating = (templateId: string, userId?: string) =>
  doc(
    firestore,
    FIREBASE_CONSTANTS.COLLECTIONS.RATINGS,
    `${userId}_${templateId}`
  );

export const getLike = (templateId: string, userId?: string) =>
  doc(
    firestore,
    FIREBASE_CONSTANTS.COLLECTIONS.LIKES,
    `${templateId}_${userId}`
  );
