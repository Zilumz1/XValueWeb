export function Field({ label, as: Comp = "input", className = "", ...props }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-widest opacity-60">
        {label}
      </span>
      <Comp
        className={`bg-transparent border border-current/20 focus:border-current px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-30 ${className}`}
        {...props}
      />
    </label>
  );
}

export function Select({ label, options, className = "", ...props }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-widest opacity-60">
        {label}
      </span>
      <select
        className={`bg-transparent border border-current/20 focus:border-current px-4 py-3 text-sm outline-none transition-colors ${className}`}
        {...props}
      >
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
