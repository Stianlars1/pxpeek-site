export type Mode = "inline" | "endOfLine";

export type Hint = {
  id: string;
  label: string;
};

export type Token =
  | { kind: "sel" | "prop" | "fn" | "punct"; text: string }
  | { kind: "num"; text: string; hintIndex: number }
  | { kind: "num-plain"; text: string };

export type Line = {
  id: string;
  indent: number;
  tokens: Token[];
  hints: Hint[];
};

export const OPENING_LINE: Line = {
  id: "open",
  indent: 0,
  tokens: [
    { kind: "sel", text: ".page" },
    { kind: "punct", text: " {" },
  ],
  hints: [],
};

export const CLOSING_LINE: Line = {
  id: "close",
  indent: 0,
  tokens: [{ kind: "punct", text: "}" }],
  hints: [],
};

export const BODY_LINES: Line[] = [
  {
    id: "width",
    indent: 1,
    hints: [
      { id: "width-0", label: "672px" },
      { id: "width-1", label: "672px" },
      { id: "width-2", label: "680px" },
    ],
    tokens: [
      { kind: "prop", text: "width" },
      { kind: "punct", text: ": " },
      { kind: "fn", text: "min" },
      { kind: "punct", text: "(" },
      { kind: "num", text: "42rem", hintIndex: 0 },
      { kind: "punct", text: ", " },
      { kind: "num", text: "42em", hintIndex: 1 },
      { kind: "punct", text: ", " },
      { kind: "num", text: "85ch", hintIndex: 2 },
      { kind: "punct", text: ");" },
    ],
  },
  {
    id: "padding",
    indent: 1,
    hints: [
      { id: "padding-0", label: "20px" },
      { id: "padding-1", label: "24px" },
      { id: "padding-2", label: "32px" },
    ],
    tokens: [
      { kind: "prop", text: "padding" },
      { kind: "punct", text: ": " },
      { kind: "num-plain", text: "0" },
      { kind: "punct", text: " " },
      { kind: "num", text: "1.25rem", hintIndex: 0 },
      { kind: "punct", text: " " },
      { kind: "num", text: "1.5rem", hintIndex: 1 },
      { kind: "punct", text: " " },
      { kind: "num", text: "2rem", hintIndex: 2 },
      { kind: "punct", text: ";" },
    ],
  },
  {
    id: "height",
    indent: 1,
    hints: [{ id: "height-0", label: "800px" }],
    tokens: [
      { kind: "prop", text: "height" },
      { kind: "punct", text: ": " },
      { kind: "num", text: "50rem", hintIndex: 0 },
      { kind: "punct", text: ";" },
    ],
  },
  {
    id: "gap",
    indent: 1,
    hints: [{ id: "gap-0", label: "12px" }],
    tokens: [
      { kind: "prop", text: "gap" },
      { kind: "punct", text: ": " },
      { kind: "num", text: "0.75rem", hintIndex: 0 },
      { kind: "punct", text: ";" },
    ],
  },
  {
    id: "maxwidth",
    indent: 1,
    hints: [{ id: "maxwidth-0", label: "672px" }],
    tokens: [
      { kind: "prop", text: "max-width" },
      { kind: "punct", text: ": " },
      { kind: "fn", text: "max" },
      { kind: "punct", text: "(" },
      { kind: "num", text: "42rem", hintIndex: 0 },
      { kind: "punct", text: ", " },
      { kind: "num-plain", text: "50%" },
      { kind: "punct", text: ");" },
    ],
  },
];

export const TOKEN_COLORS: Record<Token["kind"], string> = {
  sel: "#d4d4d4",
  prop: "#9cdcfe",
  fn: "#ce9178",
  num: "#b5cea8",
  "num-plain": "#b5cea8",
  punct: "#d4d4d4",
};
