"use client"
import { ReactNode } from "react";
import { useSiteLayout } from "../hooks/useSiteLayout";
import { cn } from "@core";

export const SiteSidebar = ({ children }: { children?: ReactNode }) => {
    const { sidebar } = useSiteLayout();
    return (
        <>
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64",
                    "bg-sidebar text-sidebar-foreground border-r border-border transition-transform duration-300",
                    "flex flex-col ",
                    "laptop:static laptop:translate-x-0 laptop:shrink-0",
                    sidebar.isOpen ? "translate-x-0" : "-translate-x-full",
                    
                )}
            >
                <div className="sticky top-0 p-md">{children}</div>
            </aside>

            {/* Overlay (mobile only) */}
            <div
                className={cn(
                    "fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity laptop:hidden ",
                    sidebar.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={sidebar.close}
            />
        </>
    );
}