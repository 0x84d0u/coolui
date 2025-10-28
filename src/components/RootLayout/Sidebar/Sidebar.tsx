import React from 'react'

import { OnClick } from '@utils/helpers'

import { SidebarMenu, SidebarMenuProps } from '@components/Navigation/SidebarMenu'

import * as Root from './root.slot'
import * as Overlay from './overlay.slot'

export type SidebarProps = {
    className?: {
        root?: string
        overlay?: string,
        menu?: SidebarMenuProps['className']
    }

    isOpen?: boolean
    close?: OnClick | undefined

    menuItems?: SidebarMenuProps['items']
    menuWithSearch?: SidebarMenuProps['withSearch']

    menu?: React.ReactNode
}

export const Sidebar = ({
    className,

    isOpen,
    close,

    menuItems = [],
    menuWithSearch,

    menu
}: SidebarProps) => {
    const rootProps: Root.Props = { isOpen, className: className?.root }
    const overlayProps: Overlay.Props = { isOpen, close, className: className?.overlay }
    const menuProps: SidebarMenuProps = { items: menuItems, withSearch: menuWithSearch, className: className?.menu }
    return <>
        <Root.Slot {...rootProps}>
            <div className="p-6 border-b border-border">
                Fixed area here
            </div>
            <div className='p-6'>
                {menu ? menu : menuItems.length > 0 ? <SidebarMenu {...menuProps} /> : null}
            </div>
        </Root.Slot>
        <Overlay.Slot {...overlayProps} />
    </>
}