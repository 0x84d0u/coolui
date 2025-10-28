"use client"

import { IconButton } from "@components/Button/IconButton";
import { useRootLayout } from "@hooks/useRootLayout";

export function SidebarToggle() {
  const { sidebar } = useRootLayout();
  return <IconButton
      iconName='menu'
      onClick={() => sidebar.toggle()}
      aria-label="Toggle sidebar"
      className="laptop:hidden"
    />
}
