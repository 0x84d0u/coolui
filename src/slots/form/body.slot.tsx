import React from "react"
import { cn } from "@utils/cn"

export type Props = {
  layout?: "split"
  className?: string
  children?: React.ReactNode
}

export const Slot = ({ className, layout, ...props }: Props) => <div
  className={cn(
    "flex flex-col gap-6",
    layout === 'split' && "tablet:flex-row",
    className
  )}
  {...props}
/>
