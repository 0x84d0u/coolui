import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Box, type BoxProps } from './Box'
import { cn } from '../utils'

// 1. Define the variants for Section
const sectionVariants = cva(
  // Base classes: none needed, as Box handles it
  '',
  {
    variants: {
      /**
       * The vertical padding of the section.
       * Maps to your theme's spacing tokens.
       */
      size: {
        sm: 'py-sm',
        md: 'py-md',
        lg: 'py-lg',
      },
    },
    // 3. Set a default variant
    defaultVariants: {
      size: 'lg', // Sections are usually large
    },
  }
)

// 4. Create the new prop types
export type SectionProps<E extends React.ElementType> = BoxProps<E> &
  VariantProps<typeof sectionVariants>

// 5. Build the component
export const Section = React.forwardRef<
  HTMLElement, // Use HTMLElement as the default ref type
  SectionProps<any>
>(({ className, size, as = 'section', ...props }, ref) => {
  return (
    <Box
      // 6. Set the default tag to <section>
      as={as}
      // 7. Use `cn` to merge cva variants with custom classes
      className={cn(sectionVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  )
})

Section.displayName = 'Section'