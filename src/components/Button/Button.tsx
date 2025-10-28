import * as Node from './node.slot';

import { Text } from '@components/Typography';
import { Icon, IconProps } from '@components/Icon/Icon';


export type ButtonProps = {
    className?: string
    colors: Node.OwnProps['colors']
    children?: string

    iconName: IconProps['name']
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

}: ButtonProps) => {
    const rootProps: Node.Props = { colors, className }
    const iconProps: IconProps = { name: iconName, size: iconSize, className: iconCn }
    const textProps: Text.Props = { children }
    return <Node.Slot {...rootProps}>
        <Icon {...iconProps} />
        <Text.Button {...textProps} />
    </Node.Slot>
}