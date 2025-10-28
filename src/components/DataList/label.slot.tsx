import React from "react"
import { cn } from "@utils/cn"

export type Props = {
    className?: string
    children?: React.ReactNode
}

export const Slot = ({ className, ...props }: Props) => {
    return <dt className={cn("font-medium text-muted-foreground sm:text-right sm:pr-2", className)} {...props} />
}