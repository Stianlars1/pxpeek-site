import Image from "next/image";
import InlineHintsDemo from "@/components/InlineHintsDemo";
import MarketplaceInstall from "@/components/MarketplaceInstall";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
      <>
          <div className={styles.navbar}>
            <Link                   href="https://github.com/Stianlars1/pxpeek"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper">
              <JetbrainsIcon />
              Get from Marketplace
              <span className="opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
            </Link>
              <Link
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
              </Link>
          </div>

    <main className="relative flex min-h-dvh flex-col items-center justify-center-safe gap-[clamp(1.5rem,3vw,2.5rem)] px-6 py-10 pb-20 text-center">
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

      <InlineHintsDemo />

      <p className="max-w-md text-balance text-sm leading-6 text-gutter sm:text-base">
        Pixel equivalents for rem, em, vh, vw, and more — shown inline or
        aggregated at end of line. Choose your style in settings.
        Works in every JetBrains IDE with CSS support.
      </p>



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
      </>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pxp-bg-glow pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_top,rgba(78,201,176,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(78,201,176,0.06),transparent_55%)]"
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
function JetbrainsIcon({ className }: { className?: string }) {
  return (


  <svg       aria-hidden
             className={className}
             fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
    <path d="M0 0h32v32h-32zM2.803 28h12v-2h-12zM4.401 9.197h0.401c0.932-0.129 1.599-0.932 1.599-2v-3.197h-1.469v3.333c0 0.531-0.129 0.667-0.531 0.667s-0.667-0.136-0.803-0.401l-0.932 0.803c0.401 0.667 1.068 0.932 1.735 0.796zM11.068 9.197v-1.197h-2.803v-0.803h2.401v-1.197h-2.401v-0.803h2.803v-1.197h-4.265v5.333h4.265zM12.803 9.197h1.463v-4h1.599v-1.197h-4.531v1.197h1.599v4zM7.469 14.265c0-0.667-0.401-1.197-1.068-1.197 0.531-0.136 0.796-0.667 0.796-1.204 0-0.265-0.129-0.667-0.265-0.932-0.401-0.401-0.932-0.531-1.463-0.531h-2.667v5.197h2.667c1.197 0 2-0.531 2-1.333zM4.136 11.599h0.932c0.401 0 0.667 0.136 0.667 0.401 0 0.401-0.265 0.531-0.667 0.531h-0.932zM4.136 14.401v-0.932h1.061c0.537 0 0.803 0.129 0.667 0.395 0 0.272-0.265 0.537-0.667 0.537zM14 10.401l-2 4.667-0.803-1.204c0.667-0.265 1.068-0.932 1.068-1.599 0-0.401-0.129-0.932-0.401-1.197-0.531-0.537-1.197-0.667-1.728-0.667h-2.537v5.197h1.469v-1.599h0.667l1.068 1.599h2.395l0.401-0.932h2l0.401 0.932h1.599l-2.129-5.333h-1.469zM10 12.932h-0.932v-1.197h0.932c0.401 0 0.803 0.129 0.803 0.667 0 0.265-0.272 0.531-0.803 0.531zM15.197 13.599h-1.061l0.531-1.463zM17.735 15.599h1.463v-5.197h-1.463zM23.068 13.197l-2.136-2.796h-1.333v5.197h1.469v-2.796l2.265 2.932h1.197v-5.333h-1.463zM27.197 12.401c-0.667-0.136-0.932-0.265-0.932-0.537 0-0.129 0.136-0.265 0.537-0.265 0.531 0 1.061 0.265 1.463 0.537l0.803-1.068c-0.667-0.537-1.333-0.667-2.136-0.667-1.197 0-2 0.796-2 1.735 0 1.061 0.803 1.333 2 1.599 0.667 0.129 0.932 0.265 0.932 0.531s-0.265 0.401-0.667 0.401c-0.667 0-1.197-0.265-1.728-0.667l-0.803 0.932c0.667 0.537 1.599 0.803 2.401 0.803 1.333 0 2.129-0.667 2.129-1.735 0-0.932-0.796-1.333-2-1.599z"/>
  </svg>

);
}
