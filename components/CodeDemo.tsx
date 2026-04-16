export default function CodeDemo() {
  return (
    <pre
      aria-label="Example CSS with PxPeek end-of-line hints"
      className="w-full max-w-[600px] overflow-x-auto rounded-xl border border-[var(--color-soft-border)] bg-editor p-5 text-left font-mono text-[0.82rem] leading-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:text-[0.95rem]"
    >
      <code>
        <span className="text-[#d4d4d4]">.card</span>
        <span className="text-[#d4d4d4]">{" {"}</span>
        {"\n  "}
        <span className="text-[#9cdcfe]">width</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#ce9178]">min</span>
        <span className="text-[#d4d4d4]">(</span>
        <span className="text-[#b5cea8]">42rem</span>
        <span className="text-[#d4d4d4]">, 100%); </span>
        <span className="text-cyan italic">{"/* 672px */"}</span>
        {"\n  "}
        <span className="text-[#9cdcfe]">padding</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#b5cea8]">1.25rem</span>
        <span className="text-[#d4d4d4]"> </span>
        <span className="text-[#b5cea8]">2rem</span>
        <span className="text-[#d4d4d4]">; </span>
        <span className="text-cyan italic">{"/* 20px, 32px */"}</span>
        {"\n  "}
        <span className="text-[#9cdcfe]">height</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#b5cea8]">50vh</span>
        <span className="text-[#d4d4d4]">; </span>
        <span className="text-cyan italic">{"/* 450px */"}</span>
        {"\n  "}
        <span className="text-[#9cdcfe]">gap</span>
        <span className="text-[#d4d4d4]">: </span>
        <span className="text-[#b5cea8]">0.75rem</span>
        <span className="text-[#d4d4d4]">; </span>
        <span className="text-cyan italic">{"/* 12px */"}</span>
        {"\n"}
        <span className="text-[#d4d4d4]">{"}"}</span>
      </code>
    </pre>
  );
}
