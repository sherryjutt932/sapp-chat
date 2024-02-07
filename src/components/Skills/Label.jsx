import React from "react";
import { cn } from "../../lib/utils";

export default function Label({ style, children, theme, className }) {
  return (
    <div
      style={style}
      className={cn(
        className,
        theme === "dark"
          ? "border-light bg-dark text-light"
          : "border-dark bg-[#D9D9D9] text-dark",
        "font-libre px-10 py-2 rounded-full border-2 w-fit capitalize text-xl absolute"
      )}
    >
      {children}
    </div>
  );
}
