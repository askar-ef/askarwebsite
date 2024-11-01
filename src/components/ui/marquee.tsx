"use client";

import { cn } from "../../lib/utils";
import React from "react";

export const Marquee = ({
  children,
  pauseOnHover = false,
  className,
}: {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group flex flex-col gap-4 [--gap:1rem] [--duration:40s]",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4 animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
