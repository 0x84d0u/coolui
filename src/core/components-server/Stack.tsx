import React, { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Box, type BoxProps } from './Box'
import { cn } from '../utils'

const stackVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        row: 'flex-row',
        col: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'col-reverse': 'flex-col-reverse',
      },
      gap: {
        sm: 'gap-sm',
        md: 'gap-md',
        lg: 'gap-lg',
      },
      flex: {
        1: 'flex-1',
        2: 'flex-2',
        3: 'flex-3',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
      },
    },
    defaultVariants: {
      direction: 'col',
    },
  }
)

// // 4. Create the new prop types
// export type StackProps<E extends React.ElementType> = BoxProps<E> &
//   VariantProps<typeof stackVariants>

// // 5. Build the component
// export const Stack = React.forwardRef<
//   HTMLElement,
//   StackProps<any>
// >(({ className, direction, gap, justify, align, flex, ...props }, ref) => {
//   return (
//     <Box
//       // 6. Use `cn` to merge cva variants with custom classes
//       className={cn(
//         stackVariants({ direction, gap, justify, align, flex, className })
//       )}
//       ref={ref}
//       {...props}
//     />
//   )
// })

// Stack.displayName = 'Stack'

type Props = ComponentProps<'div'> & VariantProps<typeof stackVariants>;

export const Stack = ({
  direction, gap, justify, align, flex,
  className,
  ...props
}: Props) => <div
    className={stackVariants({ direction, gap, justify, align, flex, className })}
    {...props}
  />