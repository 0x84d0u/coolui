import React from 'react';
import * as Root from '@/slots/section/root.slot';
import * as Header from '@/slots/section/header.slot';
import * as Content from '@/slots/section/content.slot';
import * as Footer from '@/slots/section/footer.slot';
import { Container, type ContainerProps } from '@components/layout-ui/container.server';


export type SectionProps = {
    className?: {
        root?: string
        container?: string
        header?: string
        content?: string
        footer?: string
    }

    spacing?: Root.OwnProps['spacing']

    theme?: Root.OwnProps['theme']
    height?: Root.OwnProps['height']
    border?: Root.OwnProps['border']

    container?: ContainerProps['size']

    intent?: Header.OwnProps['intent']
    title?: Header.OwnProps['title']
    subtitle?: Header.OwnProps['subtitle']
    extra?: Header.OwnProps['extra']
    alignHeader?: Header.OwnProps['align']

    layout?: Content.OwnProps['layout']
    children?: React.ReactNode

    footer?: React.ReactNode
    alignFooter?: Footer.OwnProps['align']
}


export const Section = ({
    className = undefined,

    theme = undefined,
    spacing = 'comfortable',
    height = undefined,
    border = undefined,

    container = 'laptop',

    intent = 'section',
    title = undefined,
    subtitle = undefined,
    extra = undefined,
    alignHeader = undefined,

    layout = 'stacked',
    children = undefined,

    footer = undefined,
    alignFooter = undefined,

}: SectionProps) => {

    const rootProps: Root.Props = { spacing, height, theme, border, className: className?.root };
    const containerProps: ContainerProps = { size: container, className: className?.container };
    const headerProps: Header.Props = { title, subtitle, intent, extra, align: alignHeader, className: className?.header };
    const contentProps: Content.Props = { layout, spacing, children, className: className?.content };
    const footerProps: Footer.Props = { spacing, align: alignFooter, children: footer, className: className?.footer };

    return <Root.Slot {...rootProps}>
        <Container {...containerProps}>
            <Header.Slot  {...headerProps} />
            <Content.Slot {...contentProps} />
            <Footer.Slot {...footerProps} />
        </Container>
    </Root.Slot>
}