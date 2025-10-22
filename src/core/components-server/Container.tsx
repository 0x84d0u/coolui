import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Box, type BoxProps } from './Box'
import { cn } from '../utils'

const containerVariants = cva(
  'w-full mx-auto px-md',
  {
    variants: {
      size: {
        sm: '', // 40rem
        md: '', // 64rem
        lg: '', // 80rem
        full: '', // No max-width
      },
    },
    // 3. Set a default variant
    defaultVariants: {
      size: 'lg', // Defaults to the widest "desktop" size
    },
  }
)

export type ContainerProps<E extends React.ElementType> = BoxProps<E> &
  VariantProps<typeof containerVariants>

export const Container = React.forwardRef<
  HTMLElement,
  ContainerProps<any>
>(({ className, size, ...props }, ref) => {
  const variantProps : VariantProps<typeof containerVariants> = { size };

  return (
    <Box
      // 6. Use `cn` to merge cva variants with custom classes
      className={cn(containerVariants({ ...variantProps, className }))}
      ref={ref}
      {...props}
    />
  )
})

Container.displayName = 'Container'