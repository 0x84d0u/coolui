import React, { ReactNode } from "react";
import { cn, Container } from "@core-server";

interface Props {
  children?: ReactNode
  className?: string
  containerClassName?: string
}

export const SiteFooter = ({ children, className, containerClassName }: Props) => (
  <footer
    className={cn(
      "border-t border-border py-4 px-6 text-sm text-muted-foreground",
      "bg-background/60 backdrop-blur-sm",
      "laptop:px-8",
      className
    )}
  >

        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>

    {/* <Container size="lg" className={cn("flex justify-between items-center", containerClassName)}>
      {children}
    </Container> */}
  </footer>
);
