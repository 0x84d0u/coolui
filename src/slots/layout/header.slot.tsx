import { ReactNode } from "react";
import { cn } from "@utils/cn";


import { Stack } from "@components/layout-ui/stack.server";
import { Container } from "@components/layout-ui/container.server";
import { Logo, LogoProps } from "@components/layout/logo.server";

import { SidebarToggle } from "@components/layout/siebar-toggle.client";
import { ThemeToggle } from "package/index.client";

export type Props = {
    className?: {
        root?: string,
        container?: string,
        sidebarToggle?: string
        themeToggle?: string
        logo?: string
    }
    isScrolled?: boolean
    logo?: LogoProps
    children?: ReactNode
}

export const Slot = ({
    className,
    isScrolled,
    logo,
    children,
}: Props) => {


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
        <Container className={cn("grid grid-cols-3 items-center h-16", className?.container)}>
            <Stack direction='row'>
                <SidebarToggle />
                <ThemeToggle />
            </Stack>
            <div className="justify-self-center">
                <Logo {...logo} />
            </div>
            <Stack direction='row' className="justify-end">
                {children}
            </Stack>
        </Container>
    </header>
};