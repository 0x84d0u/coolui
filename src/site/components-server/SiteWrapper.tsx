import { ReactNode } from "react";
import { cn } from "@core-server";

type Props = {
  children?: ReactNode
  className?: string
}

export const SiteWrapper = ({ className, ...props }: Props) => <div
  className={cn(
    "min-h-screen",
    "flex-1 flex flex-col",
    "bg-surface text-foreground transition-colors duration-300",
    className
  )}
  {...props}
/>