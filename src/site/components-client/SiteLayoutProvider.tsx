"use client";

import React, { useEffect, useState } from "react";
import { SiteLayoutContext, SiteLayoutContextType } from "../contexts/SiteLayoutContext";

export const SiteLayoutProvider = (props: { children?: React.ReactNode }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const value: SiteLayoutContextType = {
        sidebar: {
            open: () => setOpen(true),
            close: () => setOpen(false),
            toggle: () => setOpen(prev => !prev),
            isOpen,
            isClose: !isOpen
        },
        header: {
            scrolled,
        }
    }

    return <SiteLayoutContext.Provider value={value}>
        {props.children}
    </SiteLayoutContext.Provider>
}
