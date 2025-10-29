import React from "react";
import { cn } from "@/utils/cn";

export type Props = {
  placeholder?: string;
  sticky?: boolean;
  className?: string;
};

export const Slot = ({ placeholder = "Search...", sticky, className }: Props) => (
  <div className={cn(sticky && "sticky top-0 bg-inherit p-2", className)}>
    <input
      type="search"
      placeholder={placeholder}
      className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);
