import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import Rating from "~/components.tsx/rating";
import { XCircleIcon } from "@heroicons/react/20/solid";

import { getReviews } from "~/models/review.server";

export async function loader({ request }: LoaderArgs) {
  const noteListItems = await getReviews();
  return json({ noteListItems });
}

export default function Reviews() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-2/3">

      <div className="mt-4">



        {data.noteListItems.length === 0 ? (
          <p className="p-4">No notes yet</p>
        ) : (
          <div>
            {data.noteListItems.map((review) => (
              <div key={review.id}>
                <h2 className="mb-4 text-sm font-medium text-gray-900">
                  {review.name}
                </h2>
                <Rating rating={review.rating}></Rating>
                <p className="prose prose-sm mt-4 text-gray-500">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
