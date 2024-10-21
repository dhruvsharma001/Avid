import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getIronSessionOfUser } from "./lib/ironSession";


const PUBLIC_PATHS = ["/login", "/studio/MPE2Gk1ns9tnSer4ZdSy", "/templates", "/templates/[A-Za-z0-9]+", "/templates/[A-Za-z0-9]+/[A-Za-z0-9]+?/composer", "/", '/blog', '/blog/[A-Za-z0-9\-]+', '/privacy-snapshot', '/terms-and-conditions', '/contact-us'];
const PUBLIC_API_PATHS = ["/api/.*"]; // all apis are public and auth is handled in the api
const CREATOR_ALLOWED_PATHS = ["/creator", "/creator/[A-Za-z0-9]+"]
function redirectToHome(request: NextRequest) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
}

function redirectToLogin(request: NextRequest, force = false) {


    const url = request.nextUrl.clone();

    url.pathname = "/login";
    url.search = `from=${encodeURIComponent(request.nextUrl.pathname)}${encodeURIComponent(url.search)}`;
    return NextResponse.redirect(url);
}

export async function middleware(request: NextRequest) {
    // write a code the match regex in PUBLIC_PATHS and PUBLIC_API_PATHS and return nextResponse.next()
    const publicPathsRegex = new RegExp(`^(${PUBLIC_PATHS.map(path => `^${path}$`).join('|')})$`);
    const publicApiPathsRegex = new RegExp(`^(${PUBLIC_API_PATHS.map(path => `^${path}$`).join('|')})$`);
    const creatorPathsRegex = new RegExp(`^(${CREATOR_ALLOWED_PATHS.map(path => `^${path}$`).join('|')})$`);
    const session = await getIronSessionOfUser();

    if (publicPathsRegex.test(request.nextUrl.pathname) || publicApiPathsRegex.test(request.nextUrl.pathname)) {
        if (request.nextUrl.pathname === '/login' && session && session.isLoggedIn) {
            return redirectToHome(request);

        }
        return NextResponse.next();
    }

    if (!session || !session.isLoggedIn) {
        return redirectToLogin(request);
    }
    if (creatorPathsRegex.test(request.nextUrl.pathname) && session.user.role !== 'creator') {
        return redirectToHome(request);

    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/",
        "/((?!_next|favicon.ico|.*\\.).*)",
        "/api/login",
        "/api/logout",
    ],
};