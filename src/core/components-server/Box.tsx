import React from 'react'
import { cn } from '../utils'

type BoxOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E
  className?: string
  children?: React.ReactNode
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof BoxOwnProps<E>>

const defaultElement = 'div'

export const Box = React.forwardRef<HTMLElement, BoxProps<any>>(
  ({ as: Component = defaultElement, className, ...props }, ref) => {
    return (
      <Component
        className={cn(className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Box.displayName = 'Box'