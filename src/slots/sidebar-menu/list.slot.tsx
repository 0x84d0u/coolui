// list.slot.tsx
import React from "react";
import { cn } from "@/utils/cn";

export type Props = {
  orientation?: "vertical" | "horizontal";
  children: React.ReactNode;
  className?: string;
};

export const Slot = ({ children, orientation = "vertical", className }: Props) => (
  <ul className={cn(orientation === "vertical" ? "flex flex-col space-y-1" : "flex flex-row space-x-2", className)}>
    {children}
  </ul>
);
