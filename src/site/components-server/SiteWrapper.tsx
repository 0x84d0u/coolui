import { ReactNode } from "react";
import { cn } from "@core-server";

type Props = {
  children?: ReactNode
  className?: string
}

export const SiteWrapper = ({ className, ...props }: Props) => <div
  className={cn(
    "flex-1 flex flex-col min-h-screen ",
    "bg-background",
    className
  )}
  {...props}
/>