import * as Node from '../../slots/button/root.slot';

import { Icon, IconProps } from '@components/core/icon.sever';


export type IconButtonProps = Node.Props & {
    iconName: IconProps['name']
    iconCn?: IconProps['className']
    iconSize?: IconProps['size']
}
export const IconButton = ({
    className,
    colors,

    iconName,
    iconCn,
    iconSize,

    ...rest
}: IconButtonProps) => {
    const rootProps: Node.Props = { colors, className , ...rest}
    const iconProps: IconProps = { name: iconName, size: iconSize, className: iconCn }
    return <Node.Slot {...rootProps}>
        <Icon {...iconProps} />
    </Node.Slot>
}