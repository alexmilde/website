import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { getReviews } from "~/models/review.server";

export async function loader({ request }: LoaderArgs) {
  const noteListItems = await getReviews();
  return json({ noteListItems });
}

export default function NotesPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex h-full min-h-screen flex-col">
      {data.noteListItems.length === 0 ? (
        <p className="p-4">No notes yet</p>
      ) : (
        <div>
          {data.noteListItems.map((review) => (
            <div>
              <h2>{review.name}</h2>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
