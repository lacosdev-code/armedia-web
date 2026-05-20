import React from "react";
import { cn } from "@/src/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-700",
    outline:
      "rounded bg-slate-100 px-2.5 py-1 text-xs font-black text-slate-700 transition-colors group-hover:bg-red-50 group-hover:text-red-600",
    accent:
      "rounded-full bg-red-600 px-4 py-1 text-[10px] font-black text-white uppercase tracking-widest",
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}