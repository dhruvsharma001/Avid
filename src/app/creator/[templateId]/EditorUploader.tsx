import firestore from "@/firebase/db";
import { storage } from "@/firebase/firebase";
import { nextFetch } from "@/lib/fetch";
import { generateUUID } from "@/lib/utils";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { collection, query, where } from "firebase/firestore";
import { ref as storageRef } from "firebase/storage";
import { useState } from "react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { useUploadFile } from "react-firebase-hooks/storage";
import toast from "react-hot-toast";

type TProps = {
  templateId: string;
};
export default function EditorUploader(props: TProps) {
  const { templateId } = props;
  const [uploadFile, uploading, error] = useUploadFile();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [templateAssets, loading, templateError] = useCollectionDataOnce(
    query(
      collection(firestore, "assets"),
      where("generatedForId", "==", templateId)
    )
  );

  const [selectedFile, setSelectedFile] = useState<File>();
  const getContentType = () => {
    if (selectedFile) {
      if (selectedFile.type.includes("image")) {
        if (selectedFile.type.includes("gif")) {
          return "image/gif";
        } else if (selectedFile.type.includes("jpeg")) {
          return "image/jpeg";
        }
        return "image/png";
      } else if (selectedFile.type.includes("video")) {
        return "video/mp4";
      } else if (selectedFile.type.includes("audio")) {
        return "audio/mpeg";
      }
    }
  };

  const upload = async () => {
    if (selectedFile) {
      const category = "gradient";
      const uploadURL = `/assets/${category}/${generateUUID()}.${
        selectedFile.name.split(".")[1]
      }`;
      const ref = storageRef(storage, uploadURL);

      const result = await uploadFile(ref, selectedFile, {
        contentType: getContentType(),
      });

      //create entry in assets collection
      const res = await nextFetch(`/api/asset`, {
        method: "POST",
        body: JSON.stringify({
          name: selectedFile.name.split(".")[0],
          url: uploadURL,
          category: category,
          templateId,
        }),
      });
      if (res.ok) {
        toast.success(`Asset uploaded at /templates/${templateId}/${ref.name}`);
      } else {
        toast.error("Failed to upload asset");
      }
    } else {
      toast.error("No file selected");
    }
  };

  return (
    <div className="flex gap-4">
      <p>
        {uploading && <span>Uploading file...</span>}
        {/* {selectedFile && <span>Selected file: {selectedFile.name}</span>} */}
        <Input
          type="file"
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : undefined;
            setSelectedFile(file);
          }}
        />
        <Button variant="ghost" color="primary" onClick={upload}>
          {" "}
          Upload Asset
        </Button>
        <Button variant="ghost" color="secondary" onClick={onOpen}>
          {" "}
          View Assets
        </Button>
      </p>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Assets</ModalHeader>
              <ModalBody>
                {templateAssets ? (
                  templateAssets.map((asset) => {
                    return (
                      <p key={asset.source}>{asset.source.replace("/", "")}</p>
                    );
                  })
                ) : (
                  <div> No assets found</div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
