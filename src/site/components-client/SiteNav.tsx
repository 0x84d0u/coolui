import React from "react";
import { cn, IconName } from "@core-server";
import { SiteNavItem } from "../components-server/SiteNavItem";

// === Types ===

export interface NavItem {
  label: string;
  href?: string;
  icon?: IconName; 
  active?: boolean;
  items?: NavItem[];
}

export interface NavGroup {
  label?: string;
  items: NavItem[];
}

export interface RenderItemProps {
  item: NavItem;
  depth: number;
  isOpen: boolean;
  onToggle?: () => void;
}

export interface SiteNavProps {
  groups: NavGroup[];
  className?: string;
  renderItem?: (props: RenderItemProps) => React.ReactNode;
}

// === Component ===

export const SiteNav = ({
  groups,
  className,
  renderItem,
}: SiteNavProps) => {
  return (
    <nav className={cn("flex flex-col gap-4", className)}>
      {groups.map((group, i) => (
        <div key={group.label || i} className="flex flex-col gap-1">
          {group.label && (
            <div className="text-xs font-semibold text-muted-foreground px-3 uppercase tracking-wide">
              {group.label}
            </div>
          )}
          <div className="flex flex-col gap-1">
            {group.items.map((item) => (
              <NavItemNode
                key={item.label}
                item={item}
                depth={0}
                renderItem={renderItem}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

// === Recursive node ===

const NavItemNode = ({
  item,
  depth,
  renderItem,
}: {
  item: NavItem;
  depth: number;
  renderItem?: (props: RenderItemProps) => React.ReactNode;
}) => {
  // Default to open if the item is active
  const [open, setOpen] = React.useState(item.active || false);
  const hasChildren = !!item.items?.length;

  const onToggle = hasChildren ? () => setOpen((prev) => !prev) : undefined;

  return (
    <div className="flex flex-col">
      {renderItem ? (
        // Pass isOpen state to custom renderer
        renderItem({ item, depth, isOpen: open, onToggle })
      ) : (
        <SiteNavItem
          as={item.href ? "a" : "button"}
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={item.active}
          hasChildren={hasChildren}
          depth={depth}
          isOpen={open} // Pass isOpen state
          onToggle={onToggle}
        />
      )}

      {hasChildren && open && (
        // Removed `ml-4` - indentation is now handled by NavItemButton
        <div className="mt-1 flex flex-col gap-1">
          {item.items!.map((child) => (
            <NavItemNode
              key={child.label}
              item={child}
              depth={depth + 1} // Increment depth for children
              renderItem={renderItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};