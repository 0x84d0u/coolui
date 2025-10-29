import { cn } from "@utils/cn"

import * as Root from '@slots/logo/root.slot'
import { Image, ImageProps } from "@components/core/image.client"
import { Text } from "@components/typography"


export type LogoProps = {
    className?: {
        root?: string
        image?: string
        wordmark?: string
    }
    orientation?: Root.Props['orientation']
    wordmark?: string
    imageUrl?: string
    as?: ImageProps['as']
}

export const Logo = ({
    className,
    orientation = "horizontal",

    wordmark,
    imageUrl,
    as,
}: LogoProps) => {

    const rootProps: Root.Props = { orientation, className: className?.root }
    const wordmarkProps: Text.Props = { children: wordmark, className: className?.wordmark }
    const imageProps: ImageProps = { as, src: imageUrl || "", alt: wordmark || "Logo", className: cn("h-8 w-8 object-contain", className?.image) }

    return (
        <Root.SLot {...rootProps}>
            {imageUrl && <Image {...imageProps} />}
            {wordmark && <Text.Logo {...wordmarkProps} />}
        </Root.SLot>
    )
}
