import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Rating(props : any) {
  return (
    <div className="flex">
      <p className="text-sm text-gray-700">
        {props.rating}
        <span className="sr-only"> out of 5 stars</span>
      </p>
      <div className="items-cente ml-1 flex">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            className={classNames(
                props.rating > rating ? "text-yellow-400" : "text-gray-200",
              "h-5 w-5 flex-shrink-0"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
