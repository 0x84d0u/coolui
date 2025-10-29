import React from "react"
import { cn } from "@utils/cn"

export type Props = {
    className?: string
    children?: React.ReactNode
}

export const Slot = ({
    className,
    children,
    ...props
}: Props) => {
    return (
        <div
            className={cn(
                "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-sm shadow-sm transition",
                "bg-background text-foreground",
                "border-input",
                "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30",
                "[&:has([disabled])]:cursor-not-allowed [&:has([disabled])]:opacity-50",
                "[&:has([data-invalid=true])]:border-destructive [&:has([data-invalid=true])]:focus-within:ring-destructive/40",
                className
            )}
            {...props}
        />
    )
}
