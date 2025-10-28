import { Text } from "@components/Typography"
import { cva, VariantProps } from "class-variance-authority"

export const variants = cva("", {
    variants: {
        intent: {
            "display-title": "",
            "display-subtitle": "",
            "page-title": "",
            "page-subtitle": "",
            "section-title": "",
            "section-subtitle": "",
            "block-title": "",
            "block-subtitle": "",
        },
    },
})

export type OwnProps = VariantProps<typeof variants>
export type Props = Text.Props & OwnProps

export const Slot = ({
    intent,
    ...props
}: Props) => {
    switch (intent) {
        case "display-title": return <Text.Display {...props} />;
        case "display-subtitle": return <Text.Body{...props} />;
        case "page-title": return <Text.H1 {...props} />;
        case "page-subtitle": return <Text.Body{...props} />;
        case "section-title": return <Text.H2 {...props} />;
        case "section-subtitle": return <Text.Body{...props} />;
        case "block-title": return <Text.H3 {...props} />;
        case "block-subtitle": return <Text.Body{...props} />;
        default: return null;
    }
}