import React from "react";
import { cn } from "../../lib/utils";

export function Button({ className, variant = "solid", ...props }) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-azulClinico focus:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    solid: "bg-azulClinico text-white hover:bg-[#236bb5]",
    outline: "border border-azulClinico text-blue-400 bg-transparent hover:bg-[#e4effc]",
    ghost: "text-cinzaProfissional bg-transparent hover:bg-gray-100",
  };

  return (
    <a
      className={cn(base, variants[variant], "px-6 h-11 text-sm md:text-base", className)}
      {...props}
    />
  );
}