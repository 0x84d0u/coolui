import { Container } from "@components/Container/Container"; // TOFIX
import { cn } from "@utils/cn";
import { ReactNode } from "react";

export type OwnProps = {
}

export type Props = OwnProps & {
    className?: string
    children?: ReactNode
}

export const Slot = ({
    className,
    children,
}: Props) => {
    return <footer
        className={cn(
            "border-t border-border bg-footer/70 backdrop-blur-sm",
            "py-4 px-6 text-sm text-surface-fg",
            "laptop:px-8 transition-colors duration-300",
            className
        )}
    >
        <Container className="flex items-center justify-between h-16 gap-2">
            {children}
        </Container>
    </footer>
};