"use client";

import { createContext, useContext } from "react"

export interface LayoutContextType {
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
export const LayoutContext = createContext<LayoutContextType | null>(null)

export const useLayout = () => {
    const context =  useContext(LayoutContext);
    if (!context) {
        throw new Error("useRootLayout must be wrapped")
    }
    return context
}
