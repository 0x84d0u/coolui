"use client";

import { useContext } from "react";
import { RootLayoutContext } from "../utils/contexts";

export const useRootLayout = () => {
    const context =  useContext(RootLayoutContext);
    if (!context) {
        throw new Error("useRootLayout must be wrapped")
    }

    return context
}
