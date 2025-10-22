"use client"

import { useMounted } from "@core-client";
import { useTheme } from "next-themes"
import { IconButton } from "../components-server/IconButton";

export function ModeToggler() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted()

  if (!mounted) return <div className="h-9 w-9" />

  return (
    <IconButton
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="px-2" // Make it squarer
      iconName={theme === 'light' ? 'moon' : 'sun' }
    />
  )
}
