import React from "react"
import { cn } from "@utils/cn"

export type Props = {
    successMessage?: string
    infoMessage?: string,
    errorMessage?: string,
    children?: React.ReactNode
    className?: {
        root?: string
        success?: string
        info?: string
        error?: string
    }
}

export const Slot = ({ 
    successMessage,
    infoMessage,
    errorMessage,
    className,
    children,
}: Props) => <div className={cn(className?.root)}>
    {infoMessage && <div className={cn("text-sm text-blue-600 font-medium", className)}>{infoMessage}</div>}
    {successMessage && <div className={cn("text-sm text-green-600 font-medium", className)}>{successMessage}</div>}
    {errorMessage && <div className={cn("text-sm text-red-600 font-medium", className)}>{errorMessage}</div>}
    {children}
</div>
