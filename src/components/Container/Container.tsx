import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@utils/cn"

const variants = cva("", {
    variants: {
        size: {
            phone: "max-w-screen-phone",
            tablet: "max-w-screen-tablet",
            laptop: "max-w-screen-laptop",
            desktop: "max-w-screen-desktop",
            fluid: "",
        },
    },
})

export type ComponentOwnProps = VariantProps<typeof variants>
export type ContainerProps = ComponentOwnProps & {
    children?: React.ReactNode
    className?: string
}
export const Container = ({
    size,
    className,
    children
}: ContainerProps) => <div className={cn(
    "mx-auto w-full",
    "px-4 tablet:px-6 laptop:px-8",
    variants({ size }),
    className
)}>
    {children}
</div>