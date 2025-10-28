"use client"

import { ThemeProvider, type ThemeProviderProps } from "next-themes"

export const ThemeModeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    {...props}
  >
    {children}
  </ThemeProvider>
}
