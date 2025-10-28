import { ComponentProps } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { createColorVariants } from "@utils/variants"
import { cn } from "@utils/cn"

export const variants = cva("", {
    variants: {
        colors: createColorVariants({ bg: true, bgHover: true, text: true })
    }
})

export type OwnProps = VariantProps<typeof variants>

export type Props = ComponentProps<'button'> & OwnProps

export const Slot = ({ colors, className, ...props }: Props) => {
    return <button
        className={cn(
            "transition-all",
            "rounded-md",
            "inline-flex items-center justify-center",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ",
            "disabled:opacity-50 disabled:pointer-events-none",
            variants({ colors }),
            className
        )}
        {...props}
    />
}
