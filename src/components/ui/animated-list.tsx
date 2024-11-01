"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const AnimatedList = React.memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    const childrenArray = React.Children.toArray(children).slice(0, 3);

    return (
      <div className={cn("flex flex-col gap-2 sm:gap-3", className)}>
        {childrenArray.map((item, i) => (
          <div
            key={i}
            className={cn(
              "relative w-full overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4",
              "transition-all duration-300 ease-out",
              "bg-white/30 backdrop-blur-md opacity-30",
              "dark:bg-black/20 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]",
              "[box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
              "transform-gpu will-change-transform",
              "hover:shadow-lg hover:bg-white/40 dark:hover:bg-black/30",
              "hover:opacity-100",
              "cursor-pointer"
            )}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";
