// components/ClientIcon.tsx
"use client";
import React from "react";

type Props = {
  icon: string; // e.g. "lucide:menu"
  width?: number | string;
  height?: number | string;
  className?: string;
  strokeWidth?: number | string;
  ariaLabel?: string;
};

export default function ClientIcon({
  icon,
  width = 24,
  height = 24,
  className,
  strokeWidth,
  ariaLabel,
}: Props) {
  // Render nothing during SSR and until client hydration completes.
  // Because this file is a client component ("use client"), it will only run in the browser.
  // The important bit: do NOT render icon markup on the server — avoids hydration mismatch.
  return (
    <span
      role="img"
      aria-label={ariaLabel ?? icon}
      className={className}
      data-icon={icon}
      data-width={String(width)}
      data-height={String(height)}
      {...(strokeWidth ? { "data-stroke-width": String(strokeWidth) } : {})}
    />
  );
}
