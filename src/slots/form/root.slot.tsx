import { cn } from "@utils/cn"

export type Props = React.ComponentProps<'form'> & {

}

export const Slot = ({ className, ...props }: Props) => <form
    className={cn(
        "flex flex-col gap-6 rounded-xl bg-body p-6 shadow-sm",
        className
    )}
    {...props}
/>