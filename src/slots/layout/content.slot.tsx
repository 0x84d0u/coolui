import React from "react";
import { cn } from "@utils/cn";

export type Props = {
  children?: React.ReactNode
  className?: string
}

export const Slot = ({ className, ...props }: Props) => <div
  className={cn(
    "min-h-screen",
    "flex-1 flex flex-col",
    "transition-colors duration-300",
    // "bg-surface text-foreground",
    className
  )}
  {...props}
/>