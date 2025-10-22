"use client";

import { createContext } from "react"

export interface SiteLayoutContextType {
    sidebar: {
        open: () => void,
        close: () => void,
        toggle: () => void,
        isOpen: boolean,
        isClose: boolean,
    },
    header: {
        scrolled : boolean,
    }
}
export const SiteLayoutContext = createContext<SiteLayoutContextType | null>(null)