export default function ToolSymbol({
  name,
  glyph,
}: {
  name: string;
  glyph: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  if (name === "JavaScript")
    return (
      <svg {...common}>
        <path d="M13 2.5 5.5 13h5l-1 8.5L18.5 10h-5z" />
        <path d="M18 3v2M21 6h-2" />
      </svg>
    );
  if (name === "TypeScript")
    return (
      <svg {...common}>
        <path d="M12 2.5 20 6v5.6c0 4.5-3.3 7.7-8 9.9-4.7-2.2-8-5.4-8-9.9V6z" />
        <path d="m8.5 11.5 2.4 2.4 4.8-4.8" />
      </svg>
    );
  if (name === "Next.js")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9.25" />
        <path d="M7 15.5 12 7l5 8.5M9 12h6" />
        <path d="m16 17 2.3 2.3" />
      </svg>
    );
  return <>{glyph}</>;
}
