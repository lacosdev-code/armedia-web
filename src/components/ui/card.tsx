import React from "react";
import { cn } from "@/src/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

export function Card({ children, className, featured }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-8 shadow-sm flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 hover:shadow-md",
        featured
          ? "border-2 border-red-600 shadow-md relative lg:-top-3"
          : "border border-slate-200",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mt-6 border-t border-slate-100 pt-6", className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mt-8", className)}>{children}</div>;
}