"use client"

import { NextThemeProvider, ThemeProviderProps } from "./context"


export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    {...props}
  >
    {children}
  </NextThemeProvider>
}
