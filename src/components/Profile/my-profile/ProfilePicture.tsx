import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { auth } from "@/firebase/firebase";
// Hooks
import { useUserStore } from "@/stores/user";
import { useFirestore } from "@/hooks/useFirestore";
import { useStorage } from "@/hooks/useStorage";
// NextUi Components
import { CircularProgress, Input } from "@nextui-org/react";
// Icons
import { PiPencilSimpleLine } from "react-icons/pi";
// Utils
import { validateSelectedProfilePicture } from "../helpers/validateSelectedProfilePicture";
import { FIREBASE_CONSTANTS, NOTIFICATION_TEXTS } from "@/constants";

type TProps = {
  id: string;
  photoURL?: string | null;
  displayName?: string | null;
};
export default function ProfilePicture({
  id,
  photoURL = "",
  displayName,
}: TProps) {
  const { user, setUser } = useUserStore((state) => state);

  const [selectedPicture, setSelectedPicture] = useState<File>();
  const [isSelectedPictureValid, setIsSelectedPictureValid] = useState(false);

  // Storing the image with name of user-id so it replaces the old profile picture in storage
  const { downloadUrl, progress, error } = useStorage(
    FIREBASE_CONSTANTS.STORAGE.PATHS.PROFILE_PICTURE(id, `${id}`),
    isSelectedPictureValid ? selectedPicture : undefined
  );

  const {
    data: updatedUserProfile,
    success: isUserProfileUpdateSuccess,
    error: userProfileUpdateError,
    isPending: isUserProfileUpdating,
    updateUserProfile,
  } = useFirestore();
  const {
    isPending: isUserUpdating,
    success: isUserUpdateSucceeded,
    error: userUpdateError,
    updateDocument: updateUser,
  } = useFirestore();

  useEffect(() => {
    if (userUpdateError || userProfileUpdateError || error) {
      toast.error(userUpdateError || userProfileUpdateError || error);
    }

    // Validate image
    if (selectedPicture) {
      const { success: isSelectedProfilePictureValid, message } =
        validateSelectedProfilePicture(selectedPicture);

      if (!isSelectedProfilePictureValid && message) {
        setSelectedPicture(undefined);

        toast.error(message);
      } else {
        setIsSelectedPictureValid(true);
      }
    }

    // Update photoURL in user document
    if (!downloadUrl) return;
    (async () => {
      // Update auth-user
      await updateUserProfile(auth.currentUser!, { photoURL: downloadUrl });

      if (isUserProfileUpdateSuccess) {
        // Update userStore
        setUser(updatedUserProfile);

        // Update user in users collection
        await updateUser(FIREBASE_CONSTANTS.COLLECTIONS.USERS, id, {
          photoURL: downloadUrl,
        });

        toast.success(NOTIFICATION_TEXTS.PROFILE.PICTURE_UPDATE_SUCCESS);
      }

      setSelectedPicture(undefined);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloadUrl, id, user, userUpdateError, error, selectedPicture]);

  return (
    <div className="relative w-20 h-20 md:w-44 md:h-44 rounded-full bg-avid-main-500 -mt-10 md:-mt-20 p-1 md:p-2 duration-300">
      <div className="relative w-full h-full">
        <Image
          className="object-cover rounded-full"
          src={photoURL || ""}
          fill
          alt={displayName || "Profile picture"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <label className="absolute bottom-1 -right-2 md:bottom-5 md:right-0 bg-white rounded-full p-2 cursor-pointer text-avid-accent hover:text-avid-main-500 duration-300">
        <Input
          className="h-0 w-0 opacity-0"
          type="file"
          onChange={(e) => setSelectedPicture(e.target.files?.[0])}
          isDisabled={isUserProfileUpdating || isUserUpdating || !!progress}
        />
        <PiPencilSimpleLine className="md:text-xl" />
      </label>
      {selectedPicture && (
        <>
          <CircularProgress
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            aria-label="Updating..."
            size="lg"
            value={progress}
            color="primary"
            showValueLabel={true}
          />
          <div className="bg-avid-main-500 w-full h-full rounded-full grid place-items-center opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse" />
        </>
      )}
    </div>
  );
}
