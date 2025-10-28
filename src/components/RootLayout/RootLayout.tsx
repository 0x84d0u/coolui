"use client";

import * as Root from "./root.slot"

import * as Content from "./content.slot"
import * as Header from "./header.slot"
import * as Main from "./main.slot"
import * as Footer from "./footer.slot"
import * as Logo from "./logo.slot"

import { useRootLayout } from "@hooks/useRootLayout";
import { Sidebar, SidebarProps } from "@components/RootLayout/Sidebar/Sidebar";

export type RootLayoutProps = {
    className?: {
        root?: string
        sidebar?: SidebarProps['className'],
        content?: string
        header?: string,
        main?: string
        footer?: string
    }

    asBody?: Root.OwnProps['asBody']

    menu?: React.ReactNode
    menuItems?: SidebarProps['menuItems']
    menuWithSearch?: SidebarProps['menuWithSearch']


    header?: React.ReactNode
    logo?: Logo.Props
    children?: React.ReactNode
    footer?: React.ReactNode

}

export const RootLayout = ({
    className,

    asBody,
    
    menu,
    menuItems,
    menuWithSearch,

    header,
    logo,
    children,
    footer
}: RootLayoutProps) => {

    const ctx = useRootLayout();

    const isSidebarOpen = ctx.sidebar.isOpen;
    const isHeaderScrolled = ctx.header.scrolled;
    const closeSidebar = ctx.sidebar.close;

    const rootProps: Root.Props = { asBody, className: className?.root }
    const sidebarProps: SidebarProps = { isOpen: isSidebarOpen, close: closeSidebar,menu, menuItems, menuWithSearch, className: className?.sidebar }
    const contentProps: Content.Props = { className: className?.content }
    const headerProps: Header.Props = { isScrolled: isHeaderScrolled, className: className?.header, logo, children: header }
    const mainProps: Main.Props = { children: children, className: className?.main }
    const footerProps: Footer.Props = { children: footer, className: className?.footer }

    return <Root.Slot {...rootProps}>
        <Sidebar {...sidebarProps} />
        <Content.Slot {...contentProps}>
            <Header.Slot {...headerProps} />
            <Main.Slot {...mainProps} />
            <Footer.Slot {...footerProps} />
        </Content.Slot>
    </Root.Slot>
}