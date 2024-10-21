import { API_ROUTES } from "@/constants";
import { User } from "firebase/auth";


export const createNewProjectForUser = async (
  templateId: string,
  user: User
) => {

  //create initial project object for user
  const res = await fetch(API_ROUTES.PROJECT.INIT, {
    method: "POST",
    body: JSON.stringify({
      templateId,
      data: { user },
    }),
  });

  if (![200, 201].includes(res.status)) {

    const data = await res.json();

    if (data.error && data.error === "Token Expired") {
      // emit a logout event
      throw new Error("Token Expired");
    } else {
      throw new Error("Unable to create a new Render");
    }



  }

  return res.json();
};
