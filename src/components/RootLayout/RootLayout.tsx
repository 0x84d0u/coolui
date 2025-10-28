"use client";

import * as Root from "./root.slot"
import * as Sidebar from "./sidebar.slot"
import * as Content from "./content.slot"
import * as Header from "./header.slot"
import * as Main from "./main.slot"
import * as Footer from "./footer.slot"
import * as Logo from "./logo.slot"

import { useRootLayout } from "@hooks/useRootLayout";

export type RootLayoutProps = {
    rootCn?: string
    sidebarCn?: string
    contentCn?: string
    headerCn?: string
    mainCn?: string
    footerCn?: string

    asBody?: Root.OwnProps['asBody']



    sidebar?: React.ReactNode
    header?: React.ReactNode
    logo?: Logo.Props
    children?: React.ReactNode
    footer?: React.ReactNode

}

export const RootLayout = ({
    rootCn,
    sidebarCn,
    contentCn,
    headerCn,
    mainCn,
    footerCn,

    asBody,


    sidebar,
    header,
    logo,
    children,
    footer
}: RootLayoutProps) => {

    const ctx = useRootLayout();

    const isSidebarOpen = ctx.sidebar.isOpen;
    const isHeaderScrolled = ctx.header.scrolled;
    const closeSidebar = ctx.sidebar.close;


    const rootProps: Root.Props = { asBody, className: rootCn }
    const sidebarProps: Sidebar.Props = { isOpen: isSidebarOpen, onOverlayClick: closeSidebar, children: sidebar, className: sidebarCn }
    const contentProps: Content.Props = { className: contentCn }
    const headerProps: Header.Props = { isScrolled: isHeaderScrolled, className: headerCn, logo, children: header }
    const mainProps: Main.Props = { children: children, className: mainCn }
    const footerProps: Footer.Props = { children: footer, className: footerCn }

    return <Root.Slot {...rootProps}>
        <Sidebar.Slot {...sidebarProps} />
        <Content.Slot {...contentProps}>
            <Header.Slot {...headerProps} />
            <Main.Slot {...mainProps} />
            <Footer.Slot {...footerProps} />
        </Content.Slot>
    </Root.Slot>
}