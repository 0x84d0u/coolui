import React from "react";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority"

export const variants = cva("", {
    variants: {
        theme: {
            body: "bg-body text-body-fg",
            surface: "bg-surface text-surface-fg",
            accent: "bg-accent text-accent-fg",
        },
        spacing: {
            compact: "py-6 laptop:py-12 space-y-6",
            comfortable: "py-12 laptop:py-20 space-y-8",
            large: "py-20 laptop:py-32 space-y-12",
            huge: "py-32 laptop:py-48 space-y-16",
        },
        height: {
            full: "h-full",
        },
        border: {
            top: "border-t border-border",
            bottom: "border-b border-border",
            both: "border-y border-border",
        }
    }
})

export type OwnProps = VariantProps<typeof variants>;

export type Props = React.ComponentProps<'section'> & OwnProps

export const Slot = ({
    height,
    spacing,
    theme,
    border,

    className,
    ...props
}: Props) => <section
        className={cn(
            variants({ height, spacing, theme, border }),
            className
        )}
        {...props}
    />