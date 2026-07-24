export default function Logo({ dark = false, className = "" }) {
  return (
    <span
      className={`font-display text-xl md:text-2xl tracking-tight select-none ${className}`}
      style={{ color: dark ? "var(--paper)" : "var(--ink)" }}
    >
      X<span style={{ color: "var(--red)" }}>VALUE</span>
    </span>
  );
}
