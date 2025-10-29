import React from "react"
import { cn } from "@utils/cn"

export type Props = {
    className?: string
    children?: React.ReactNode
}

export const Slot = ({
    className,
    ...props
}: Props) => <div
        className={cn(
            "flex flex-col gap-[inherit]", 
            className
        )}
        {...props}
    /> 