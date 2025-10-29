import { Text } from "@components/typography"
import { cn } from "@utils/cn"

export type Props = {
    className?: {
        root?: string
        title?: string
        subtitle?: string
    }
    title?: string
    subtitle?: string
}

export const Slot = ({ className, title, subtitle, ...props }: Props) => {
    if(!title && !subtitle) return null;
    const rootProps: Text.Props = { className: cn(className?.root), }
    const titleProps: Text.Props = { children: title, className: cn(className?.title), }
    const subtitleProps: Text.Props = { children: subtitle, className: cn(className?.subtitle), }
    return <div {...rootProps}>
        <Text.H2 {...titleProps}/>
        <Text.Body {...subtitleProps}/>
    </div>
}