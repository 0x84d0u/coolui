// root.slot.tsx
import React from "react";
import { cn } from "@/utils/cn";

export type Props = {
    // intent?: "main-nav" | "page-nav";
    orientation?: "vertical" | "horizontal";
    // hasSearch?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export const Slot = ({
    // intent = "main-nav",
    orientation = "vertical",
    // hasSearch = false,
    className,
    children,
}: Props) => {
    const rootClass = cn(
        "relative flex",
        orientation === "vertical" ? "flex-col h-full" : "flex-row items-center",
        className
    );
    return (
        <nav className={rootClass} role="navigation">
            {/* {hasSearch && children && React.Children.toArray(children).find(c => (c as any).type?.name === "Search")} */}
            {children}
        </nav>
    );
};
