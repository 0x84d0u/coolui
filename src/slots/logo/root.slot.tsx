import { cn } from "@utils/cn"
import React from "react"


export type Props = {
    orientation?: "horizontal" | "vertical"
    className?: string
    children?: React.ReactNode
}

export const SLot = ({ orientation, className, ...props }: Props) => <div
    className={cn(
        "inline-flex items-center gap-2",
        orientation === "vertical" && "flex-col items-start",
        className
    )}
    {...props}
/>