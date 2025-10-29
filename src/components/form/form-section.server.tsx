import React from "react"

import * as Root from '@slots/form-section/root.slot'
import * as Header from '@slots/form-section/header.slot'
import * as Body from '@slots/form-section/body.slot'
import * as Footer from '@slots/form-section/footer.slot'

type FormGroupProps = {
    className?: {
        root?: Root.Props['className']
        header?: Header.Props['className']
        body?: Body.Props['className']
        footer?: Footer.Props['className']
    }

    title?: Header.Props['title']
    subtitle?: Header.Props['subtitle']

    children?: React.ReactNode
}

export const FormSection = ({
    className,

    title,
    subtitle,

    children
}: FormGroupProps) => {

    const rootProps: Root.Props = { className: className?.root }
    const headerProps: Header.Props = { title, subtitle, className: className?.header }
    const bodyProps: Body.Props = { children, className: className?.body }
    const footerProps: Footer.Props = { className: className?.footer }

    return <Root.Slot {...rootProps}>
        <Header.Slot  {...headerProps} />
        <Body.Slot {...bodyProps} />
        <Footer.Slot {...footerProps} />
    </Root.Slot>
}