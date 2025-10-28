// item.slot.tsx
import React from "react";
import { cn } from "@/utils/cn";

export type Props = {
  label?: string;
  icon?: React.ReactNode;
  href?: string;
  as?: React.ElementType;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  className?: string;

  badge?: string
};

export const Slot = ({
  label,
  icon,
  href,
  as,
  onClick,
  disabled,
  active,
  className,
}: Props) => {
  const Comp: React.ElementType = as || (href ? "a" : "button");

  return (
    <li>
      <Comp
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "transition-all duration-200 select-none",
          "flex items-center gap-3 py-2 rounded-lg ",
          "text-sm font-medium transition-all duration-200 select-none",
          "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-1",
          active
            ? "bg-accent/10 text-accent shadow-inner"
            : "text-body-fg/80 hover:text-body-fg hover:bg-muted/30",
          disabled && "opacity-50 pointer-events-none",
          className
        )}
      // className={cn(
      //   "inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
      //   active ? "bg-accent text-accent-fg" : "hover:bg-muted hover:text-foreground/80",
      //   disabled && "opacity-50 pointer-events-none",
      //   className
      // )}
      >
        {icon && <span className="size-4">{icon}</span>}
        {label}
      </Comp>
    </li>
  );
};
