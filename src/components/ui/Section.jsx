export function Container({ className = "", children, ...props }) {
  return (
    <div className={`container-x ${className}`} {...props}>
      {children}
    </div>
  );
}

const tones = {
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
  red: "bg-red text-paper",
  redDeep: "bg-redDeep text-paper",
};

export function Section({
  tone = "paper",
  texture = false,
  className = "",
  children,
  as: Comp = "section",
  ...props
}) {
  return (
    <Comp
      className={`relative isolate w-full overflow-hidden ${tones[tone]} ${
        texture ? (tone === "paper" ? "cell-grid-dark" : "cell-grid") : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.2em] opacity-70 inline-flex items-center gap-2 ${className}`}
    >
      <span className="w-4 h-px bg-current opacity-60" aria-hidden="true" />
      {children}
    </span>
  );
}
