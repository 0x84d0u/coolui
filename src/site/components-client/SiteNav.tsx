import React from "react";
import { cn, IconName } from "@core";
import { SiteNavItem } from "@site";

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

export const SiteNav = ({ groups, className, renderItem }: SiteNavProps) => {
  return (
    <nav className={cn("flex flex-col gap-5", className)}>
      {groups.map((group, i) => (
        <div key={group.label || i} className="flex flex-col gap-2">
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

// === Recursive Node ===

const NavItemNode = ({
  item,
  depth,
  renderItem,
}: {
  item: NavItem;
  depth: number;
  renderItem?: (props: RenderItemProps) => React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(item.active || false);
  const hasChildren = !!item.items?.length;
  const onToggle = hasChildren ? () => setOpen((prev) => !prev) : undefined;

  return (
    <div className="flex flex-col">
      {renderItem ? (
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
          isOpen={open}
          onToggle={onToggle}
        />
      )}

      {hasChildren && (
        <div
          className={cn(
            "flex flex-col gap-1 mt-1 transition-all duration-300 overflow-hidden",
            open ? "max-h-screen" : "max-h-0"
          )}
        >
          {item.items!.map((child) => (
            <NavItemNode
              key={child.label}
              item={child}
              depth={depth + 1}
              renderItem={renderItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};
