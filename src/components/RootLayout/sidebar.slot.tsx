
import React from "react";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { createColorVariants } from "@utils/variants";
import { OnClick } from "@utils/helpers";

const variants = cva("", {
    variants: {
        color: createColorVariants({ bg: true, text: true })
    },
    defaultVariants: {
        color: "body"
    }
})


export type OwnProps = VariantProps<typeof variants> & {
    isOpen?: boolean
    onOverlayClick?: OnClick | undefined
}

export type Props = OwnProps & {
    children?: React.ReactNode
    className?: string
}

export const Slot = ({
    isOpen,
    onOverlayClick,

    className,
    children,
    ...props
}: Props) => {
    return <>
        <aside
            className={cn(
                "fixed inset-y-0 left-0 z-40 w-64",
                "bg-surface text-surface-fg border-r border-border transition-transform duration-300",
                "flex flex-col ",
                "laptop:static laptop:translate-x-0 laptop:shrink-0",
                isOpen ? "translate-x-0" : "-translate-x-full",
                className
            )}
        >
            <div className="sticky top-0 p-md">{children}</div>
        </aside>

        <div
            className={cn(
                "fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity laptop:hidden ",
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={onOverlayClick}
        />


    </>


}
