import { cn } from "@utils/cn";
import { OnClick } from "@utils/helpers";

export type Props = {
    isOpen?: boolean
    close?:  OnClick | undefined
    className?: string
}
export const Slot = ({ 
    isOpen,
    close,
    className,
}: Props) => <div
    className={cn(
        "fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity laptop:hidden ",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        className
    )}
    onClick={close}
/>