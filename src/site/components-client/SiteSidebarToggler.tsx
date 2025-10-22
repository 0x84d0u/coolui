"use client"

import { IconButton } from '@/core/components-client/IconButton';
import { useSiteLayout } from '../hooks/useSiteLayout';

export function SiteSidebarToggler() {
  const { sidebar } = useSiteLayout();
  return <IconButton
      iconName='menu'
      onClick={() => sidebar.toggle()}
      aria-label="Toggle sidebar"
      className="laptop:hidden px-2" // Make it squarer
    />
}
