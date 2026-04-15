import Image from "next/image";
import CodeDemo from "@/components/CodeDemo";
import MarketplaceInstall from "@/components/MarketplaceInstall";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center gap-[clamp(1.5rem,3vw,2.5rem)] overflow-hidden px-6 py-10 text-center">
      <BackgroundGlow />

      <header className="flex flex-col items-center gap-4">
        <Image
          src="/logo.svg"
          alt="PxPeek logo"
          width={72}
          height={72}
          priority
          className="drop-shadow-[0_8px_30px_rgba(78,201,176,0.25)]"
        />
        <h1 className="font-mono text-[clamp(2.25rem,6vw,3.5rem)] font-bold tracking-[-0.03em] text-paper">
          PxPeek
        </h1>
      </header>

      <p className="max-w-xl text-balance text-[clamp(1.05rem,1.8vw,1.35rem)] text-paper/85">
        See the pixels behind your units.
      </p>

      <CodeDemo />

      <p className="max-w-md text-balance text-sm leading-6 text-gutter sm:text-base">
        Inline pixel equivalents for every relative CSS unit — rem, em, %, vh,
        vw, and more. Works in every JetBrains IDE with CSS support.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <MarketplaceInstall />
        <a
          href="https://github.com/Stianlars1/pxpeek"
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
        >
          <GithubIcon className="size-5" />
          View on GitHub
          <span className="opacity-0 transition-opacity group-hover:opacity-100">
            ↗
          </span>
        </a>
      </div>

      <footer className="absolute bottom-6 text-xs text-gutter">
        Made by{" "}
        <a
          href="https://github.com/Stianlars1"
          className="underline-offset-4 hover:text-paper hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Stian Larsen
        </a>
        {" · "}
        <a
          href="https://plugins.jetbrains.com/plugin/31286"
          className="underline-offset-4 hover:text-paper hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          JetBrains Marketplace
        </a>
      </footer>
    </main>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_top,rgba(78,201,176,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(78,201,176,0.06),transparent_55%)]"
    />
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
    </svg>
  );
}
