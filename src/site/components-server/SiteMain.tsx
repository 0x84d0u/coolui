import { ReactNode } from "react";
import { cn } from '@core-server';

type Props = {
  children?: ReactNode
  className?: string
}

export const SiteMain = ({ className, ...props }: Props) => <main
  className={cn(
    "flex-1 overflow-y-auto px-4 py-6",
    "bg-background",
    "laptop:px-8 laptop:py-10",
    className
  )}
  {...props}
/>
