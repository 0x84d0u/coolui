import { ReactNode } from "react";
import { cn } from "@core-server";

export const SiteFooter = ({
  children,
  className,
}: { children?: ReactNode; className?: string }) => (
  <footer
    className={cn(
      "border-t border-border bg-footer/70 backdrop-blur-sm",
      "py-4 px-6 text-sm text-footer-foreground",
      "laptop:px-8 transition-colors duration-300",
      className
    )}
  >
    {children ?? (
      <p>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    )}
  </footer>
);
