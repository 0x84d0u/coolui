"use client"

import { IconButton } from "@components/Button/IconButton";
import { useRootLayout } from "@hooks/useRootLayout";

export function RootSidebarToggle() {
  const { sidebar } = useRootLayout();
  return <IconButton
      iconName='menu'
      onClick={() => sidebar.toggle()}
      aria-label="Toggle sidebar"
      className="laptop:hidden px-2" // Make it squarer
    />
}
