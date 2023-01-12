import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Rating from "~/components.tsx/rating";
import { getReviews } from "~/models/test.server";

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
          <p className="p-4">No tests yet</p>
        ) : (
          <div>
            {data.noteListItems.map((review) => (
              <div key={review.id}>
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
