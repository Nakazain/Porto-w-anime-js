import Image from "next/image";
type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  github: string;
  placeholder: string;
  className?: string;
  weblink?: string;
};
export default function Card({
  title,
  description,
  imageUrl,
  github,
  placeholder,
  className,
  weblink,
}: CardProps) {
  return (
    <div
      className={`card relative bg-neutral-800 border border-neutral-700 w-96 p-4 z-10 duration-100 rounded-2xl hover:scale-[1.02] overflow-hidden ${className}`}
      style={{ opacity: "0%", translate: "0 100px" }}
    >
      <div>
        <Image
          className="h-48 w-full object-cover rounded-xl"
          src={imageUrl}
          width={1280}
          height={720}
          alt={placeholder}
        />
      </div>
      <div className="my-4">
        <p className="text-xl font-bold mb-2 text-center">{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex justify-between w-full text-neutral-400">
        {weblink ? (
          <div className="flex justify-center gap-1.5 items-center cursor-pointer hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"
              />
            </svg>
            <a target="_blank" rel="noopener noreferrer" href={`https://${weblink}`}>{weblink}</a>
          </div>
        ) : null}
        <div className="flex justify-center gap-1 items-center cursor-pointer">
          <a target="_blank" rel="noopener noreferrer" href={github}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg></a>
        </div>
      </div>
    </div>
  );
}
