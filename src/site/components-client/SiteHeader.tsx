"use client";

import { ModeToggler } from "@core-client";
import { cn, Container, Stack } from "@core-server";
import { SiteSidebarToggler, useSiteLayout } from "@site-client";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
  logo?: ReactNode
  wordmark?: string

  enableSidebarToggle?: boolean
  enableModeToggle?: boolean
}

export const SiteHeader = ({
  children,
  logo,
  wordmark = "CoolUI",
  enableSidebarToggle,
  enableModeToggle,
}: Props) => {

  const { header } = useSiteLayout();

  return <header
    className={cn(
      "sticky top-0 z-30 transition-colors duration-300",
      "supports-[backdrop-filter]:backdrop-blur bg-background/80 border-b",
      header.scrolled ? "border-border/80 bg-background/90" : "border-transparent"
    )}
  >
    <Container className="flex items-center justify-between h-16 gap-2 px-md">
      <Stack>
        {enableSidebarToggle && <SiteSidebarToggler />}
      </Stack>
      <Stack>
        {logo}
        {wordmark && <span className="font-bold text-lg">{wordmark}</span>}
      </Stack>
      <Stack direction='row' flex={1} justify='center'>
        {children}
      </Stack>
      <Stack>
        {enableModeToggle && <ModeToggler />}
      </Stack>
    </Container>
  </header>
};