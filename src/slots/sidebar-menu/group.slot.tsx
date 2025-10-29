"use client";

import React from "react";

export type Props = {
  label: string;
  children: React.ReactNode;
};

export const Slot = ({ label, children }: Props) => {

  return (
    <li>
      <button
        className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium"
      >
        {label}
      </button>
      <ul className="pl-3 border-l border-border space-y-1">{children}</ul>
    </li>
  );
};
