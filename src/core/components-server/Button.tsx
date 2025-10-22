"use client";

import { cn } from "@core-server";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

/* === Define base and variants === */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        secondary: "bg-muted text-foreground hover:bg-muted-foreground/10 border border-border",
        outline: "border border-border text-foreground hover:bg-muted/50",
        ghost: "text-foreground hover:bg-muted/50 active:bg-muted/70",
        destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/* === Props === */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
