import bcrypt from "bcryptjs";
import {
    createCookieSessionStorage,
    redirect
} from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
    throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
    cookie: {
        name: "RJ_session",
        // normally you want this to be `secure: true`
        // but that doesn't work on localhost for Safari
        // https://web.dev/when-to-use-local-https/
        //secure: process.env.NODE_ENV === "production",
        secrets: [sessionSecret],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
    },
});

export async function login(password: string) {
/*
    const hashedPass = await bcrypt.hash('letmein',10)
    console.log(hashedPass)
    const isCorrectPassword = await bcrypt.compare(
        password,
        'letmein'
    );
*/
    let isCorrectPassword = password === 'letmein';

   return isCorrectPassword;
}

function getUserSession(request: Request) {
    return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
    const session = await getUserSession(request);
    const userId = session.get("userId");
    if (!userId || typeof userId !== "string") return null;
    return userId;
}

export async function createUserSession(
    userId: string,
    redirectTo: string
) {

    console.log("create session")

    const session = await storage.getSession();
    session.set("userId", userId);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session),
        },
    });
}