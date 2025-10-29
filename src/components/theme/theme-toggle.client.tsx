"use client"

import { IconButton } from "@components/core/icon-button.server";
import { useMounted } from "@utils/useMounted";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted()

  if (!mounted) return <div className="h-9 w-9" />

  return (
    <IconButton
    iconName={theme === 'light' ? 'moon' : 'sun' }
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="px-2" // Make it squarer
    />
  )
}
