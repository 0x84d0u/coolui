"use client"

import { IconButton } from "@components/core/icon-button.server";
import { useLayout } from "./context";

export function SidebarToggle() {
  const { sidebar } = useLayout();
  return <IconButton
      iconName='menu'
      onClick={() => sidebar.toggle()}
      aria-label="Toggle sidebar"
      className="laptop:hidden"
    />
}
