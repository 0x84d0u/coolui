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
        <label
            className={cn(
      "flex cursor-pointer items-center gap-2",
                className
            )}
            {...props}
        />
    )
}
