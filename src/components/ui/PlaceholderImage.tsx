import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface PlaceholderImageProps {
  className?: string;
  text?: string;
  icon?: boolean;
}

export function PlaceholderImage({ className, text = "Official IFC product image", icon = false }: PlaceholderImageProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center bg-[#F7F8FA] text-[#5B6268] border border-[#E3E6E8] w-full h-full min-h-[200px]", className)}>
      <span className="text-xs font-semibold tracking-wide uppercase opacity-70 text-center px-4">{text}</span>
    </div>
  );
}
