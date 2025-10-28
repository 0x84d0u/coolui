"use client";

import React from "react";

import * as Root from './root.slot';
import * as Search from './search.slot';
import * as List from './list.slot';
import * as Divider from './divider.slot';
import * as Group from './group-client.slot';
import * as Button from './button.slot';

export type SidebarNavButton = { type?: 'item' } & Button.Props
export type SidebarNavDivider = { type: 'divider' }
export type SidebarNavGroup = { type: 'group', children?: SidebarNavItem[] } & Pick<Group.Props, 'label' | 'defaultOpen'>
export type SidebarNavCustom = { type: 'custom', children?: React.ReactNode }

export type SidebarNavItem = SidebarNavButton | SidebarNavDivider | SidebarNavGroup | SidebarNavCustom

export type SidebarMenuProps = {
    className?: {
        root?: string,
        search?: string
        list?: string
    }
    withSearch?: boolean
    items: SidebarNavItem[]
}


export const SidebarMenu = ({
    className,
    withSearch,
    items,
}: SidebarMenuProps) => {

    const rootProps: Root.Props = { orientation: 'vertical', className: className?.root }
    const searchProps: Search.Props = { className: className?.search }
    const listProps: List.Props = { orientation: 'vertical', className: className?.list, children: items.map(renderItem) }

    return <Root.Slot {...rootProps}>
        {withSearch && <Search.Slot {...searchProps} />}
        <List.Slot {...listProps} />
    </Root.Slot>
}


const renderItem = (item: SidebarNavItem, key: number) => {
    switch (item.type) {
        case "divider":
            return <Divider.Slot
                key={key}
            />;
        case "group":
            return <Group.Slot
                key={key}
                label={item.label || ""}
                defaultOpen={item.defaultOpen}
                children={item.children?.map(renderItem)}
            />
        case "custom":
            return <li
                key={key}
                children={item.children}
            />
        default:
            return <Button.Slot
                key={key}
                as={item.as}
                label={item.label}
                active={item.active}
                badge={item.badge}
                className={item.className}
                disabled={item.disabled}
                href={item.href}
                icon={item.icon}
                onClick={item.onClick}
            />
    }
};