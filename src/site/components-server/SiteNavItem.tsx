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

  const indent = 0.75 + depth * 1;

  return (
    <Comp
      onClick={onToggle}
      className={cn(
        "flex items-center gap-2 py-2 rounded-md text-sm transition-colors select-none",
        active
          ? "bg-muted text-primary"
          : "hover:bg-muted/50 text-foreground/80",
        className
      )}
      // Use style for dynamic padding to handle any depth
      style={{ paddingLeft: `${indent}rem`, paddingRight: "0.75rem" }}
      {...props}
    >
      {icon && <Icon name={icon} className="shrink-0 opacity-60"/>}
      <span className="grow truncate">{label}</span>
      {hasChildren && onToggle && (
        <span className="ml-auto flex-hrink-0 text-xs opacity-60">
          {isOpen ? "▴" : "▾"}
        </span>
      )}
    </Comp>
  );
};