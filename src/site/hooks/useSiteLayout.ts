"use client";

import { useContext } from "react";
import { SiteLayoutContext } from "../contexts/SiteLayoutContext";

export const useSiteLayout = () => {
    const context =  useContext(SiteLayoutContext);
    if (!context) {
        throw new Error(" useSiteLayout must be wrapped")
    }

    return context
}
