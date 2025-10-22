import { ReactNode } from "react";
import { cn } from "@core-server";

type Props = {
  children?: ReactNode
  className?: string
}

export const SiteRoot = ({ className, ...props }: Props) => <div
  className={cn(
    "relative min-h-screen flex bg-background text-foreground",
    className
  )}
  {...props}
/>
