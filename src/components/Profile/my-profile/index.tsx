import Image from "next/image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useStore } from "zustand";
import { useUserStore } from "@/stores/user";
// Firebase
import { auth } from "@/firebase/firebase";
// Hooks
import { useFirestore } from "@/hooks/useFirestore";
// NextUi Components
import { Button, Input } from "@nextui-org/react";
// Components
import ProfilePicture from "./ProfilePicture";
// Icons
import { FaRegSave } from "react-icons/fa";
// Utils
import { FIREBASE_CONSTANTS } from "@/constants";
import { MyProfileSchema, MyProfileSchemaType } from "../schemas";

export default function MyProfile() {
  const { user, setUser } = useStore(useUserStore, (state) => state);

  const { uid, photoURL, displayName, phoneNumber, email } = user!;

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<MyProfileSchemaType>({
    resolver: zodResolver(MyProfileSchema),
    defaultValues: {
      displayName: displayName || "",
      phoneNumber: phoneNumber || "",
      email: email || "",
    },
  });

  const {
    data: updatedUserProfile,
    success: isUserProfileUpdateSuccess,
    error: userProfileUpdateError,
    isPending: isUserProfileUpdating,
    updateUserProfile,
  } = useFirestore();

  const {
    data: updatedUser,
    success: isUserUpdateSuccess,
    error: userUpdateError,
    isPending: isUserUpdating,
    updateDocument,
  } = useFirestore();

  const handleSave: SubmitHandler<MyProfileSchemaType> = async (data) => {
    const { displayName } = data;
    // Update auth-user
    await updateUserProfile(auth.currentUser!, { displayName });

    if (userProfileUpdateError) {
      toast.error(userProfileUpdateError);
    }

    if (isUserProfileUpdateSuccess) {
      // Update userStore
      setUser(updatedUserProfile);

      // Update user in users collection
      await updateDocument(FIREBASE_CONSTANTS.COLLECTIONS.USERS, uid, {
        displayName,
      });

      toast.success("Your profile updated successfully");
    }
  };

  return (
    <section>
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full h-20 md:h-44 rounded-tl-xl rounded-tr-xl overflow-hidden duration-300 bg-avid-accent">
          <Image
            className="bg-blend-color-dodge opacity-50"
            src="/assets/profile/default-profile-bg-cover.png"
            fill
            alt="Profile background cover"
            priority
          />
        </div>
        <ProfilePicture
          id={uid}
          photoURL={photoURL}
          displayName={displayName}
        />

        {/* Form-------------------------------------------------- starts here */}
        <form className="w-full max-w-2xl" onSubmit={handleSubmit(handleSave)}>
          <div className="w-full flex flex-col gap-4 mt-8 md:grid md:grid-cols-2">
            <div>
              <Controller
                control={control}
                name="displayName"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    className="w-full"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="text"
                    variant="bordered"
                    placeholder="Full Name"
                  />
                )}
              />
              {errors.displayName && (
                <p className="text-red-500 text-sm">
                  {errors.displayName.message}
                </p>
              )}
            </div>
            <div>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    className="w-full"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="text"
                    variant="bordered"
                    placeholder="Phone Number"
                    readOnly
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    className="w-full"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    type="text"
                    variant="bordered"
                    placeholder="Email Address"
                    readOnly
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <Button
            className="w-fit mt-5"
            color="primary"
            type="submit"
            disabled={isUserProfileUpdating}
            isLoading={isUserProfileUpdating}
          >
            <FaRegSave /> Save
          </Button>
        </form>
        {/* Form-------------------------------------------------- ends here */}
      </div>
    </section>
  );
}
