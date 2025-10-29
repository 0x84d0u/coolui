import * as Root from '@slots/form/root.slot'

import * as Header from '@slots/form/header.slot'
import * as Body from '@slots/form/body.slot'
import * as Footer from '@slots/form/footer.slot'

import * as Content from '@slots/form/content.slot'
import * as Meta from '@slots/form/meta.slot'

export type FormProps = React.ComponentProps<'form'> & {
    className?: {
        root?: Root.Props['className']

        header?: Header.Props['className']
        body?: Body.Props['className']
        footer?: Footer.Props['className']

        content?: Content.Props['className']
        meta?: Meta.Props['className']
    }


    title?: Header.Props['title']
    subtitle?: Header.Props['subtitle']

    layout?: Body.Props['layout']

    infoMessage?: Meta.Props['infoMessage']
    successMessage?: Meta.Props['successMessage']
    errorMessage?: Meta.Props['errorMessage']
    additionalMeta?: Meta.Props['children']
    
    children?: Content.Props['children']

    footer?: Footer.Props['children']

}

export const Form = ({
    className,

    title,
    subtitle,

    layout,

    infoMessage,
    successMessage,
    errorMessage,
    additionalMeta,

    children,

    footer
}: FormProps) => {
    const rootProps: Root.Props = { className: className?.root }

    const headerProps: Header.Props = { title, subtitle, className: className?.header }
    const bodyProps: Body.Props = { layout, className: className?.body }
    const footerProps: Footer.Props = { children: footer, className: className?.footer }


    const contentProps: Content.Props = { children, className: className?.content }
    const metaProps: Meta.Props = { infoMessage, successMessage, errorMessage, children: additionalMeta, className: className?.meta }

    return <Root.Slot {...rootProps}>
        <Header.Slot {...headerProps} />
        <Body.Slot {...bodyProps}>
            <Meta.Slot {...metaProps}/>
            <Content.Slot {...contentProps} />
        </Body.Slot>
        <Footer.Slot {...footerProps} />
    </Root.Slot>
}