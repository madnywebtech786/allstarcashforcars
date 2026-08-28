import { ArrowRight } from "lucide-react";

const VARIANT_CLASSES = {
  primary:
    "bg-accent text-navy-950 hover:bg-accent-hover",
  ghost:
    "border border-line-onDark-strong text-paper hover:border-paper/60 hover:bg-white/5",
  ghostLight:
    "border border-navy-900/15 text-navy-950 hover:border-navy-900/40 hover:bg-navy-950/[0.03]",
};

export function Button({
  children,
  variant = "primary",
  icon = true,
  className = "",
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag
      className={`group relative inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight
          className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
          strokeWidth={2.25}
        />
      )}
    </Tag>
  );
}
