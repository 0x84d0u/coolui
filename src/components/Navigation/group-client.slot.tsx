"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";

export type Props = {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export const Slot = ({ label, children, defaultOpen = true }: Props) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <li>
      <button
        className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown
          className={cn("size-4 transition-transform", open ? "rotate-180" : "rotate-0")}
        />
      </button>
      {open && <ul className="pl-3 border-l border-border space-y-1">{children}</ul>}
    </li>
  );
};
