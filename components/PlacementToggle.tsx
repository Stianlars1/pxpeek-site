import { motion } from "motion/react";
import { useRef } from "react";
import type { Mode } from "./inlineHintsData";

type Props = {
  mode: Mode;
  onChange: (next: Mode) => void;
};

const OPTIONS: { value: Mode; label: string }[] = [
  { value: "inline", label: "Inline" },
  { value: "endOfLine", label: "End of line" },
];

export default function PlacementToggle({ mode, onChange }: Props) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKey(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const target = e.key === "ArrowRight" ? (index + 1) % 2 : (index - 1 + 2) % 2;
    onChange(OPTIONS[target].value);
    refs.current[target]?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-label="Hint placement"
      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-medium text-paper/70 backdrop-blur-sm"
    >
      {OPTIONS.map((opt, i) => {
        const active = mode === opt.value;
        return (
          <button
            key={opt.value}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(opt.value)}
            onKeyDown={(e) => handleKey(e, i)}
            className={`relative z-0 rounded-full px-3 py-1.5 outline-none transition-colors focus-visible:text-paper ${
              active ? "text-ink" : "hover:text-paper"
            }`}
          >
            {active && (
              <motion.span
                layoutId="placement-toggle-pill"
                className="absolute inset-0 -z-10 rounded-full bg-paper shadow-[0_4px_14px_-2px_rgba(245,245,245,0.25)]"
                transition={{ type: "spring", stiffness: 420, damping: 36 }}
              />
            )}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
