"use client";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import EditorChrome from "./EditorChrome";
import PlacementToggle from "./PlacementToggle";
import {
  BODY_LINES,
  CLOSING_LINE,
  type Hint,
  type Line,
  type Mode,
  OPENING_LINE,
  TOKEN_COLORS,
  type Token,
} from "./inlineHintsData";

const ALL_LINES: Line[] = [OPENING_LINE, ...BODY_LINES, CLOSING_LINE];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const PILL_SPRING = { type: "spring", stiffness: 260, damping: 28, mass: 0.7 } as const;

export default function InlineHintsDemo() {
  const [mode, setMode] = useState<Mode>("inline");
  const containerRef = useRef<HTMLDivElement>(null);

  function setModeAnimated(next: Mode) {
    if (next === mode) return;
    const commit = () => flushSync(() => setMode(next));
    type DocWithVT = Document & { startViewTransition?: (cb: () => void) => unknown };
    const doc = document as DocWithVT;
    if (!doc.startViewTransition || prefersReducedMotion()) {
      commit();
      return;
    }
    doc.startViewTransition(commit);
  }

  const setModeAnimatedRef = useRef(setModeAnimated);
  setModeAnimatedRef.current = setModeAnimated;

  // Auto demo on first scroll-in, then keep alternating between modes forever
  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return;

    const timers: number[] = [];
    let started = false;
    let next: Mode = "endOfLine";

    const scheduleNext = (delay: number) => {
      timers.push(
        window.setTimeout(() => {
          setModeAnimatedRef.current(next);
          next = next === "inline" ? "endOfLine" : "inline";
          scheduleNext(2100);
        }, delay),
      );
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        scheduleNext(1900);
      },
      { threshold: 0.55 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="flex w-full flex-col items-center gap-4">
      <PlacementToggle mode={mode} onChange={setModeAnimated} />

      <LayoutGroup>
        <EditorChrome>
          <div
            aria-label={
              mode === "inline"
                ? "Example CSS with PxPeek inline pixel hints"
                : "Example CSS with PxPeek end-of-line pixel hints"
            }
            className="pxp-code font-mono text-[0.78rem] leading-[1.9] sm:text-[0.9rem]"
          >
            {ALL_LINES.map((line, lineIdx) => (
              <motion.div
                key={line.id}
                className="pxp-line"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: lineIdx * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ paddingLeft: `${line.indent * 1}rem` }}
              >
                <LineContent line={line} mode={mode} />
              </motion.div>
            ))}

          </div>
        </EditorChrome>
      </LayoutGroup>

      <span className="sr-only" aria-live="polite">
        {mode === "inline"
          ? "Pixel hints now shown inline beside each value."
          : "Pixel hints now aggregated at end of line."}
      </span>
    </div>
  );
}

function LineContent({ line, mode }: { line: Line; mode: Mode }) {
  const isBody = line.hints.length > 0;

  return (
    <>
      {line.tokens.map((token, i) => (
        <Fragment key={`${line.id}-${i}`}>
          <TokenSpan token={token} />
          {mode === "inline" && token.kind === "num" && (
            <>
              {" "}
              <Pill hint={line.hints[token.hintIndex]} mode="inline" />
            </>
          )}
        </Fragment>
      ))}

      <AnimatePresence>
        {isBody && mode === "endOfLine" && (
          <motion.span
            key="aggregate"
            className="pxp-aggregate"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="pxp-aggregate-delim">/*</span>
            {line.hints.map((hint, i) => (
              <Fragment key={hint.id}>
                <span className="pxp-aggregate-sep">{i === 0 ? "\u00A0" : ",\u00A0"}</span>
                <Pill hint={hint} mode="endOfLine" />
              </Fragment>
            ))}
            <span className="pxp-aggregate-sep">{"\u00A0"}</span>
            <span className="pxp-aggregate-delim">*/</span>
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
}

function TokenSpan({ token }: { token: Token }) {
  return (
    <span style={{ color: TOKEN_COLORS[token.kind] }}>{token.text}</span>
  );
}

function Pill({ hint, mode }: { hint: Hint; mode: Mode }) {
  return (
    <motion.span
      layoutId={`pill-${hint.id}`}
      className="pxp-pill"
      data-mode={mode}
      transition={PILL_SPRING}
      whileHover={{ scale: 1.06, filter: "brightness(1.2)" }}
    >
      {hint.label}
    </motion.span>
  );
}
