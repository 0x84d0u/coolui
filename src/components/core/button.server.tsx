import * as Root from '@slots/button/root.slot';

import { Text } from '@components/typography';
import { Icon, IconProps } from '@components/core/icon.sever';


export type ButtonProps = Root.Props & {
    children?: string

    iconName?: IconProps['name'] 
    iconCn?: IconProps['className']
    iconSize?: IconProps['size']
}

export const Button = ({
    colors,
    className,
    children,

    iconName,
    iconCn,
    iconSize,

    ...rest
}: ButtonProps) => {
    const rootProps: Root.Props = { colors, className , ...rest}
    const iconProps: Partial<IconProps> = { name: iconName , size: iconSize, className: iconCn }
    const textProps: Text.Props = { children }
    return <Root.Slot {...rootProps}>
        {iconName && <Icon {...iconProps as IconProps} />}
        <Text.Button {...textProps} />
    </Root.Slot>
}