import { Text } from "@components/typography"
import { cn } from "@utils/cn"
import React from "react"

export type ControlProps = {
    size?: "full" | "1/2" | "1/3" | "2/3"
    label?: string
    children?: React.ReactNode
}

export const Control = ({
    size = 'full',
    label,
    ...props
}: ControlProps) => {
    return <div
        className={cn(
            "flex flex-col gap-1",
            size === 'full' && "col-span-6",
            size === '1/2' && "col-span-3",
            size === '1/3' && "col-span-2",
            size === '2/3' && "col-span-4",
        )}>
        {label && <Text.Label>{label}</Text.Label>}
        <div className="flex gap-3">{props.children}</div>
    </div>
}