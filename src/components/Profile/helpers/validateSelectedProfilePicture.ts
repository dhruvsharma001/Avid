import { PROFILE_CONSTANTS } from "@/constants";

export const validateSelectedProfilePicture = (file: File) => {
  let allowedExtension = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/webp",
  ];

  const fileType = file.type;

  if (allowedExtension.indexOf(fileType) === -1) {
    return {
      success: false,
      message: "Please select valid image file",
    };
  }

  const fileSize = file.size;

  if (fileSize > PROFILE_CONSTANTS.PROFILE_PICTURE_MAX_SIZE) {
    return {
      success: false,
      message: "Image size must not excced 2 mb",
    };
  }

  return {
    success: true,
  };
};
