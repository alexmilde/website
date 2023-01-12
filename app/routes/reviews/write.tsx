import { Form, useActionData, useTransition, Link } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { createReview } from "~/models/review.server";
import invariant from "tiny-invariant";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const action = async ({ request }: ActionArgs) => {
  // TODO: remove me - delay response
  await new Promise((res) => setTimeout(res, 1000));

  const formData = await request.formData();

  const name = formData.get("name");
  const text = formData.get("text");
  const rating = Number(formData.get("rating"));

  const errors = {
    name: name ? null : "Name is required",
    text: text ? null : "text is required",
    rating: rating ? null : "Rating is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors) {
    return json(errors);
  }

  invariant(typeof name === "string", "name must be a string");
  invariant(typeof text === "string", "text must be a string");
  invariant(typeof rating === "number", "rating must be a number");

  await createReview({ name, text, rating });

  return redirect("../");
};

const inputClassName = `w-full border-b border-gray-500 px-2 py-1 text-base font-light invalid:border-black`;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NewPost() {
  const [rating, setRating] = useState(3);
  const errors = useActionData<typeof action>();
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);

  return (
    <Form method="post" className="mb-8">
      <p>
        <input
          type="text"
          name="name"
          className={inputClassName}
          placeholder="Name"
          required
        />
      </p>
      <div className="my-4 flex">
        <div className="text-sm text-gray-700">
          <span className="sr-only">{rating} out of 5 stars</span>
        </div>
        <div className="items-cente ml-1 flex">
        <input
          type="hidden"
          name="rating"
          value={rating}
          required
        />
          {[0, 1, 2, 3, 4].map((ratingTemp) => (
            <StarIcon
              key={ratingTemp}
              className={classNames(
                rating > ratingTemp ? "text-yellow-400" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
              onClick={() => setRating(ratingTemp + 1)}
            />
          ))}
        </div>
      </div>
      <p>
        <textarea
          id="text"
          rows={4}
          name="text"
          className={inputClassName}
          required
        />
      </p>
      <p className="flex justify-between">
        <Link
          to="../"
          className="rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="rounded bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700"
          disabled={isCreating}
        >
          {isCreating ? "Sending..." : "Send"}
        </button>
      </p>
    </Form>
  );
}
