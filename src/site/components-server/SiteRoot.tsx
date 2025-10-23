import { ReactNode } from "react";
import { cn } from "@core-server";

type Props = {
  children?: ReactNode
  className?: string
}

export const SiteRoot = ({ className, ...props }: Props) => <div
  className={cn(
    "relative flex min-h-screen",
    "bg-background text-foreground antialiased",
    className
  )}
  {...props}
/>
