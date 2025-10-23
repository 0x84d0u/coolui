import React from "react";
import { cn, Icon, IconName } from "@core-server";

export type SiteNavItemProps<T extends React.ElementType = "button"> = {
  as?: T;
  active?: boolean;
  depth?: number;
  icon?: IconName;
  label: string;
  hasChildren?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  href?: string
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;


export const SiteNavItem = <T extends React.ElementType = "button">({
  as,
  active,
  depth = 0,
  icon,
  label,
  hasChildren,
  isOpen,
  onToggle,
  className,
  ...props
}: SiteNavItemProps<T>) => {
  const Comp = as || "button";

  const indent = 0.75 + depth * 1.25;

  return (
    <Comp
      {...props}
      onClick={onToggle}
      className={cn(
        "flex items-center gap-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 select-none",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-1",
        active
          ? "bg-primary/10 text-primary shadow-inner"
          : "text-foreground/80 hover:text-foreground hover:bg-muted/30",
        className
      )}
      style={{ paddingLeft: `${indent}rem`, paddingRight: "0.75rem" }}
    >
      {icon && <Icon name={icon} className="shrink-0 opacity-70 w-5 h-5" />}
      <span className="grow truncate">{label}</span>
      {hasChildren && onToggle && (
        <span
          className={cn(
            "ml-auto shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          ▾
        </span>
      )}
    </Comp>
  );
};