"use client";

import React from "react";
import { cn, Icon, IconName } from "@core-server"; // Assuming this is your cn utility
import { cva, type VariantProps } from "class-variance-authority";
// import { usePathname } from "next/navigation"; // optional

// --- Types ---

interface NavItem {
  href: string;
  label: string;
  icon?: IconName;
}

// Props passed to the renderItem function
export interface RenderItemProps {
  item: NavItem;
  active: boolean;
  className: string;
  onClick?: () => void;
  LinkComponent: React.ElementType;
}

export interface SiteNavigationProps
  extends VariantProps<typeof navItemVariants> {
  items?: NavItem[];
  activePath?: string; // for external control
  LinkComponent?: React.ElementType; // injection point
  onNavigate?: () => void;

  /**
   * Optional render prop to customize the rendering of each navigation item.
   * If provided, this function will be called for each item.
   */
  renderItem?: (props: RenderItemProps) => React.ReactNode;
  className?: string
}

// --- Data & Variants ---

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/projects", label: "Projects", icon: "folder" },
  { href: "/blog", label: "Blog", icon: "book" },
  { href: "/about", label: "About", icon: "user" },
];

const navItemVariants = cva(
  "flex items-center gap-2 rounded-md transition-colors text-sm font-medium",
  {
    variants: {
      orientation: {
        horizontal:
          "px-3 py-2 hover:bg-muted/50 data-[active=true]:bg-muted data-[active=true]:text-primary",
        vertical:
          "px-3 py-2 hover:bg-muted/50 data-[active=true]:bg-muted data-[active=true]:text-primary w-full",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

// --- Component ---

export const SiteNavigation = ({
  items = navItems,
  orientation = "vertical",
  activePath,
  LinkComponent = "a",
  onNavigate,
  renderItem, // <-- The new prop
  className,
}: SiteNavigationProps) => {
  const pathname =
    activePath || (typeof window !== "undefined" ? window.location.pathname : "");

  return (
    <nav
      className={cn(
        orientation === "horizontal" ? "flex items-center gap-1" : "flex flex-col gap-1",
        className
      )}
    >
      {items.map((item) => {
        const { href, label, icon } = item;
        const active = pathname === href;
        const className = cn(navItemVariants({ orientation }));
        const Component = LinkComponent;

        // We wrap in a Fragment to ensure the .map has a key.
        // The renderItem function doesn't need to worry about it.
        return (
          <React.Fragment key={href}>
            {renderItem ? (
              // --- Custom Render Path ---
              // Call the provided renderItem function with all the context
              renderItem({
                item,
                active,
                className,
                onClick: onNavigate,
                LinkComponent: Component,
              })
            ) : (
              // --- Default Render Path ---
              // The original implementation
              <Component
                href={href}
                // data-active={active}
                onClick={onNavigate}
                className={className}
              >
                {icon && <Icon name={icon} size={16} />}
                <span>{label}</span>
              </Component>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};