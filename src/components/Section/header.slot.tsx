import React  from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import * as Text from './heading.slot'

export const variants = cva("flex", {
    variants: {
        intent: {
            display: "text-center items-center mb-12 laptop:mb-20",
            page: "mb-12 laptop:mb-16",
            section: "mb-8 laptop:mb-12",
            block: "mb-4",
        },
        align: {
            start: "items-start text-left",
            center: "items-center text-center",
            end: "items-end text-right",
        },
    },
})


export type OwnProps = VariantProps<typeof variants> & {
    title?: string
    subtitle?: string
    extra?: React.ReactNode
}

export type Props = OwnProps & {
    children?: React.ReactNode,
    className?: string
}

export const Slot = ({
    intent,
    align,

    title,

    subtitle,
    extra,
    className,
}: Props) => {
    const rootClassName = cn(
        (!title && !subtitle && !extra) && 'hidden',
        "flex flex-col gap-2",
        variants({ intent , align}),
        className
    )
    const titleProps: Text.Props = { intent: `${intent}-title` as Text.Props['intent'], children: title, className: cn(!title && 'hidden') }
    const subtitleProps: Text.Props = { intent: `${intent}-subtitle` as Text.Props['intent'], children: subtitle, className: cn(!title && 'hidden') }


    return <div className={rootClassName}>
        <div className={cn((!title && !subtitle) && 'hidden')}>
            <Text.Slot {...titleProps} />
            <Text.Slot {...subtitleProps} />
        </div>
        <div className="flex-1"></div>
        <div className={cn(!extra && "hidden")}>{extra}</div>
    </div>
}