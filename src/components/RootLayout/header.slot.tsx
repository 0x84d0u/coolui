import { Container } from "@components/Container/Container"; // TOFIX
import { cn } from "@utils/cn";
import { ReactNode } from "react";
import * as Logo from "./logo.slot"
import { Stack } from "@components/Layout/Stack";
import { SidebarToggle } from "@components/RootLayout/SidebarToggle";
import { ThemeModeToggle } from "package/index.client";

// TODO: Implement Grid

export type OwnProps = {
    isScrolled?: boolean
}

export type Props = OwnProps & {
    logo?: Logo.Props
    className?: string
    children?: ReactNode
}

export const Slot = ({
    isScrolled,
    logo,
    className,
    children,
}: Props) => {


    const { className: logoCn, ...logoProps } = logo as Logo.Props;

    return <header
        className={cn(
            "sticky top-0 z-30 border-b",
            "bg-body/80 text-body-fg",
            "supports-backdrop-filter:backdrop-blur-md",
            "transition-colors duration-300",
            isScrolled ? "border-border/80" : "border-transparent",
            className
        )}
    >
        <Container>
            <div className="grid grid-cols-3 items-center h-16">
                <Stack direction='row'>
                    <SidebarToggle />
                    <ThemeModeToggle />
                </Stack>
                <Logo.Slot className={cn("justify-self-center", logoCn)}  {...logoProps} />
                <Stack direction='row' className="justify-end">
                    {children}
                </Stack>
            </div>
        </Container>
    </header>
};