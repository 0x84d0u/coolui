import { cn } from "@utils/cn"
import React from "react"

export type Props = {
    isOpen?: boolean
    className?: string
    children?: React.ReactNode
}
export const Slot = ({
    isOpen,
    className,
    children
}: Props) => <aside
    className={cn(
        "transition-transform duration-300",
        "fixed inset-y-0 left-0 z-40 w-64",
        // "h-svh overflow-auto",
        "bg-surface text-surface-fg border-r border-border",
        "laptop:static laptop:translate-x-0 laptop:shrink-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
    )}
>
        {children}
    </aside>