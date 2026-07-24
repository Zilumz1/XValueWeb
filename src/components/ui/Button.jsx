import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

const variants = {
  red: "bg-red text-paper hover:bg-red-bright hover:text-paper shadow-[0_12px_35px_rgba(228,3,46,0.28)] border border-red/20",
  ink: "bg-ink text-paper hover:bg-red hover:text-paper shadow-[0_12px_35px_rgba(10,10,10,0.20)]",
  paper: "bg-paper text-ink hover:bg-red hover:text-paper shadow-[0_10px_28px_rgba(10,10,10,0.10)]",
  outline: "bg-transparent text-current border border-current/70 hover:bg-current hover:text-ink shadow-[0_8px_22px_rgba(10,10,10,0.06)]",
  ghost: "bg-transparent text-current hover:opacity-60 shadow-none",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-5 text-base",
};

const Button = forwardRef(
  (
    {
      as: Comp = "button",
      variant = "red",
      size = "md",
      arrow = true,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Comp
        ref={ref}
        className={`group inline-flex items-center gap-2 font-mono uppercase tracking-wide font-medium rounded-full
          transition-all duration-300 ease-out-expo hover:-translate-y-0.5
          ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        <span>{children}</span>
        {arrow && (
          <ArrowUpRight
            size={16}
            strokeWidth={2.5}
            className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export default Button;
