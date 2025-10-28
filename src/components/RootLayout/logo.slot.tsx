import { ComponentProps } from "react"


export type OwnProps = {
    imageUrl?: string
    wordmark?: string
}
export type Props =  ComponentProps<'div'> & OwnProps

export const Slot = ({ 
    imageUrl,
    wordmark,
    ...props
}: Props) => {
    return <div {...props}>
        {wordmark}
    </div>
}