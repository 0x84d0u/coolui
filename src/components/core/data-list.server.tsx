import * as Root from '../../slots/data-list/root.slot';
import * as Item from '../../slots/data-list/item.slot';
import { cn } from '@utils/cn';

export type DataListItemProps = Item.Props
export type DataListProps = Pick<Root.Props, 'layout'> & {
    className?: {
        root?: string
        item?: string,
        label?: string,
        value?: string,
    },
    items?: Item.Props[]
}

export const DataList = ({
    className,
    items,
    layout
}: DataListProps) => {
    const rootProps: Root.Props = { layout, className: className?.root }

    if (!items || items.length < 1) {
        return <Root.Slot {...rootProps}> Empty list </Root.Slot>
    }
    return <Root.Slot {...rootProps}>
        {items.map((item, i) => {
            const { className : itemClassName, ...itemProps } = item
            return <Item.Slot
                key={i}
                className={{
                    root: cn(className?.item, itemClassName?.root),
                    label: cn(className?.label, itemClassName?.label),
                    value: cn(className?.value, itemClassName?.value),
                }}
                {...itemProps}
            />
        })}
    </Root.Slot>

}