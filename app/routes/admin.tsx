import type {
    ActionArgs,
    LoaderArgs,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
    Link,
    useActionData,
    useCatch,
} from "@remix-run/react";

import {
    getUserId,
} from "~/utils/session.server";

export const loader = async ({ request }: LoaderArgs) => {
    const userId = await getUserId(request);
    if (!userId) {
        throw new Response("Unauthorized", { status: 401 });
    }
    return json({});
};


export default function Login() {
    return (
        <div className="">
            <h1>admin</h1>
        </div>
    );
}
