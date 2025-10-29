import React from "react"
import { cn } from "@utils/cn"
import { cva, VariantProps } from "class-variance-authority"

const variants = cva("", {
    variants: {
        layout: {
            grid: "grid tablet:grid-cols-[max-content_1fr] gap-x-6 gap-y-4",
            inline: "flex flex-col gap-3",
        }
    }
})

export type Props = VariantProps<typeof variants> & {
    className?: string
    children?: React.ReactNode
}

export const Slot = ({
    layout = 'grid',
    className,
    children,
}: Props) => {
    return <div className={cn(variants({ layout }), className)}>
        {children}
    </div>
}