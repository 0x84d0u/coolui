import { cn } from "@utils/cn";
import React from "react";


export type InputProps = React.ComponentProps<'input'>
export const Input = ({ className, ...props }: InputProps) => <input
    className={cn(
        "w-full bg-transparent outline-none text-sm",
        "placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
    )}
    {...props}
/>

export type TextareaProps = React.ComponentProps<'textarea'>
export const Textarea = ({ className, ...props }: TextareaProps) => <textarea
    className={cn(
      "w-full flex-1 bg-transparent outline-none text-sm",
      "placeholder:text-muted-foreground",
      "disabled:cursor-not-allowed",
        className
    )}
    {...props}
/>


export type SelectProps = React.ComponentProps<'select'>
export const Select = ({ className, ...props }: SelectProps) => <select
    className={cn(
        // We use appearance-none to hide the default browser arrow,
        // because we'll be adding our own icon in the composed component.
        "w-full flex-1 appearance-none bg-transparent outline-none text-sm",
        "placeholder:text-muted-foreground",
        "disabled:cursor-not-allowed",
        className
    )}
    {...props}
/>