import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebase/firebase";

export function useStorage(uploadPath: string, file?: File) {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDownloadUrl("");
    setError(null);
    setProgress(0);

    if (!file) return;

    (async () => {
      try {
        const uploadTask = uploadBytesResumable(ref(storage, uploadPath), file);

        const unsubscribe = uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error: any) => {
            throw error;
          },
          async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            setDownloadUrl(downloadUrl);
          }
        );

        return () => unsubscribe();
      } catch (error: any) {
        console.error("Error while uploading file: ", error);

        setError(error.message);
      }
    })();
  }, [file, uploadPath]);

  return { downloadUrl, progress, error };
}
