import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Box, type BoxProps } from './Box'
import { cn } from '../utils'

// 1. Define the variants for Grid
const gridVariants = cva(
  // Base classes: applied to all variants
  'grid',
  {
    variants: {
      /**
       * The gap between grid items. Uses theme spacing.
       */
      gap: {
        sm: 'gap-sm',
        md: 'gap-md',
        lg: 'gap-lg',
        // Add any other theme spacing tokens you have
      },
    },
    // 3. Set a default variant
    defaultVariants: {
      // No default gap
    },
  }
)

// 4. Create the new prop types
export type GridProps<E extends React.ElementType> = BoxProps<E> &
  VariantProps<typeof gridVariants>

// 5. Build the component
export const Grid = React.forwardRef<
  HTMLElement,
  GridProps<any>
>(({ className, gap, ...props }, ref) => {
  return (
    <Box
      // 6. Use `cn` to merge cva variants with custom classes
      className={cn(gridVariants({ gap, className }))}
      ref={ref}
      {...props}
    />
  )
})

Grid.displayName = 'Grid'