import React from "react"
import { cn } from "@utils/cn"

export type Props = {
  children?: React.ReactNode
  className?: string
}

export const Slot = ({ children, className }: Props) => (
  <footer className={cn("flex justify-end gap-2 mt-4", className)}>
    {children}
  </footer>
)
