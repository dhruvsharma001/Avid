import { useState } from "react";
import { User, updateProfile } from "firebase/auth";
import {
  getDocByIdFromClientSide,
  updateDocFromClientSide,
} from "@/firebase/controllers/client/firestoreUtils";
import { FIREBASE_CONSTANTS } from "@/constants";
import { MyProfileSchemaType } from "@/components/Profile/schemas";

export function useFirestore() {
  const [data, setData] = useState<any>();
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(null);

  const updateUserProfile = async (
    currentUser: User,
    data: MyProfileSchemaType
  ) => {
    setData(undefined);
    setError(null);
    setIsPending(true);

    try {
      await updateProfile(currentUser, data);

      setData(currentUser);
    } catch (error: any) {
      console.error("Error while updating user's profile: ", error);

      setSuccess(false);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  const updateDocument = async (
    collectionName: string,
    docId: string,
    data: any
  ) => {
    setError(null);
    setIsPending(true);

    try {
      await updateDocFromClientSide(collectionName, docId, data);

      // Get updated document
      const docSnap = await getDocByIdFromClientSide(
        FIREBASE_CONSTANTS.COLLECTIONS.USERS,
        docId
      );

      const doc = { ...docSnap.data(), id: docSnap.id };

      setData(doc);
    } catch (error: any) {
      console.error("Error while updating document: ", error);

      setSuccess(false);
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return {
    data,
    isPending,
    success,
    error,
    updateUserProfile,
    updateDocument,
  };
}
