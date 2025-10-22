"use client"
import { ReactNode } from "react";
import { useSiteLayout } from "../hooks/useSiteLayout";
import { cn } from "@core-server";

export const SiteSidebar = ({ children }: { children?: ReactNode }) => {
    const { sidebar } = useSiteLayout();
    return (
        <>
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 bg-muted border-r border-border flex flex-col transition-transform duration-300",
                    "laptop:static laptop:translate-x-0 laptop:shrink-0",
                    sidebar.isOpen ? "translate-x-0" : "-translate-x-full",
                    
                )}
            >
                <div className="p-lg sticky top-0">
                {children}

                </div>
                {/* <div className="p-lg sticky top-0 border-b border-border bg-muted/70 backdrop-blur">
                    <span className="font-bold text-lg tracking-tight">UI Cool</span>
                </div>
                
                <nav className="overflow-y-auto p-md flex flex-col gap-1">{children}</nav> */}

            </aside>

            {/* Overlay (mobile only) */}
            <div
                className={cn(
                    "fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity laptop:hidden",
                    sidebar.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={sidebar.close}
            />
        </>
    );
}