import type { ReactNode } from "react";

type Props = {
  filename?: string;
  children: ReactNode;
};

export default function EditorChrome({
  filename = "wrapper.module.css",
  children,
}: Props) {
  return (
    <div className="pxp-editor-card w-full max-w-[640px]">
      <div className="pxp-editor-tab">
        <CssFileIcon />
        <span className="pxp-editor-tab-name">{filename}</span>
        <span className="pxp-editor-tab-close" aria-hidden>
          ×
        </span>
      </div>
      <div className="pxp-editor-body">{children}</div>
    </div>
  );
}

function CssFileIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id="pxp-css-grad" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4ec9b0" />
          <stop offset="0.5" stopColor="#7aa2ff" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        rx="2.5"
        fill="url(#pxp-css-grad)"
        opacity="0.18"
        stroke="url(#pxp-css-grad)"
        strokeWidth="1"
      />
      <path
        d="M5.2 10.8c0 .55.45 1 1 1h1.4c.55 0 1-.45 1-1s-.45-1-1-1h-1.4M10.8 5.2c0-.55-.45-1-1-1H8.4c-.55 0-1 .45-1 1s.45 1 1 1h1.4"
        stroke="url(#pxp-css-grad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
