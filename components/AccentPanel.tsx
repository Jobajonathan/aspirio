type AccentPanelProps = {
  icon: "house" | "cross";
  caption: string;
};

export default function AccentPanel({ icon, caption }: AccentPanelProps) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(184,145,47,0.35), transparent 60%), radial-gradient(circle at 80% 90%, rgba(232,205,130,0.18), transparent 55%)",
        }}
      />
      <svg
        viewBox="0 0 200 200"
        className="relative h-24 w-24 text-gold-light/70 sm:h-32 sm:w-32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {icon === "house" ? (
          <path d="M30 100 L100 40 L170 100 M50 85 V165 H150 V85 M85 165 V115 H115 V165" />
        ) : (
          <path d="M100 40 V160 M40 100 H160 M60 60 H140 V140 H60 Z" />
        )}
      </svg>
      <p className="absolute bottom-5 left-0 right-0 text-center text-xs uppercase tracking-[0.25em] text-gold-light/60">
        {caption}
      </p>
    </div>
  );
}
