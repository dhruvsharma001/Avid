import { auth } from "@/firebase/firebase";

import { nextFetch } from "./fetch";
import { API_ROUTES } from "@/constants";
import { getErrorText } from "./utils";
export async function loginUserOnServer() {

    const tokenO = await auth.currentUser?.getIdToken(true);

    try {

        const resp = await nextFetch(API_ROUTES.AUTH.LOGIN, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${tokenO}`,

            },
        });
        if (!resp.ok) throw new Error('Error refreshing cookie')

        return resp;
    } catch (e) {

        throw new Error(getErrorText(e));

    }



}