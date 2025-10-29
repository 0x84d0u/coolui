import { cn } from "@utils/cn"
import { Text } from "@components/typography"

export type Props = {
    title?: string
    subtitle?: string

    className?: string
}

export const Slot = ({
    title,
    subtitle,
    className,
}: Props) => {
    if (!title && !subtitle) return null
    return <div className={cn("", className)}>
        {title && <Text.H4>{title}</Text.H4>}
        {subtitle && <Text.Body>{subtitle}</Text.Body>}
    </div>
}