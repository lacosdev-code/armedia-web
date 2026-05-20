import React from "react";
import { cn } from "@/src/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string | React.ReactNode;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span className="text-xs font-bold uppercase tracking-widest text-red-600">
          {label}
        </span>
      )}
      {typeof title === "string" ? (
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
      ) : (
        <div className="mt-2">{title}</div>
      )}
      {description && (
        <p className="mt-4 max-w-xl text-sm text-slate-500 mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}