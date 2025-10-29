import React from "react"
import { cn } from "@utils/cn"
import * as Body from './body.slot'

export type Props = {
  children?: React.ReactNode
  className?: string
}

export const Slot = ({ className, ...props }: Props) => <div
  className={cn(
    "flex flex-col gap-6 flex-1",
    className
  )}
  {...props}
/>
