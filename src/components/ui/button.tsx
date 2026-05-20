import React from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-red-600 text-white shadow-sm hover:bg-slate-900",
    secondary:
      "bg-slate-900 text-white hover:bg-red-600",
    outline:
      "border border-slate-200 text-slate-700 hover:bg-slate-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-sm",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}