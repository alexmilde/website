import {Form} from "@remix-run/react";
import type {ActionArgs} from "@remix-run/node";
import {redirect} from "@remix-run/node";
import {login, createUserSession} from "~/utils/session.server";

export const action = async ({request}: ActionArgs) => {

    const formData = await request.formData();
    const password = formData.get("password");

    const loginResult = await login(password);
    if (!loginResult) {
        return redirect("");
    }

    return createUserSession("user", "../admin");
};


export default function Login() {
    return (


        <div className="">
            <h1>Login</h1>
            <Form method="post" className="mb-8">
                <p>
                    <input
                        type="password"
                        name="password"
                        required
                    />
                </p>
                <button
                    type="submit"
                    className="rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700"

                >
                    Send
                </button>
            </Form>
        </div>
    );
}
