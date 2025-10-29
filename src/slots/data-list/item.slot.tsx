import React from 'react';
import * as Label from './label.slot';
import * as Value from './value.slot';
import { cn } from "@utils/cn"

export type Props = {
    label?: React.ReactNode
    value?: React.ReactNode
    className?: {
        root?: string
        label?: string
        value?: string
    }
}

export const Slot = ({
    label,
    value,
    className,
    ...props
}: Props) => {
    const rootProps = { className: cn("contents sm:table-row", className?.root)  }
    const labelProps: Label.Props = { children: label, className: className?.label  }
    const valueProps: Value.Props = { children: value, className: className?.value}
    return <div {...rootProps}>
        <Label.Slot {...labelProps}/>
        <Value.Slot {...valueProps}/>
    </div>
}