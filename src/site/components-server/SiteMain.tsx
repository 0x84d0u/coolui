import { ReactNode } from "react";
import { cn } from "@core-server";

export const SiteMain = ({
  children,
  className,
}: { children?: ReactNode; className?: string }) => (
  <main
    className={cn(
      "flex-1 overflow-y-auto",
      // "bg-background text-foreground",
      "p-md",
      className
    )}
  >
    {children}
  </main>
);
