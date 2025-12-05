import React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-[#F5F7FA] rounded-2xl shadow-sm border border-gray-200 p-6 md:p-7",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={cn("mb-3 flex flex-col gap-1", className)} {...props} />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-lg md:text-xl font-semibold text-cinzaProfissional", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm md:text-base text-gray-600 leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={cn("mt-3 text-sm md:text-base text-gray-700", className)} {...props} />;
}