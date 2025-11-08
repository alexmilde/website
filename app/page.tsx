import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black dark:bg-black sm:items-start">
        <Image
          className="w-48 h-48 rounded-full object-cover object-top"
          src="/me_cropped_small.jpeg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-2xl font-semibold tracking-tight text-white dark:text-zinc-50 mt-10 line-clamp-1">
            Alex Milde
          </h1>
          <p className="max-w-2xl text-md leading-8 text-zinc-600 dark:text-zinc-300">
            Experienced Full Stack Software Engineer specializing in typescript
            and node.js, with expertise in cloud architecture, microservices,
            and scalable web applications. Skilled in react, postgres, ETL, SQS,
            CI/CD, AWS and DevOps tools like Terraform and Docker.
            <br />
            Proven ability to lead projects and deliver robust high-performance
            applications for startups and enterprises.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[120px]"
            href="https://github.com/alexmilde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github-mark-white.svg"
              alt="Github logomark"
              width={16}
              height={16}
            />
            Github
          </a>
          <a
            className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[120px]"
            href="https://www.linkedin.com/in/alexander-milde-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/InBug-White.png"
              alt="LinkedIn logomark"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
