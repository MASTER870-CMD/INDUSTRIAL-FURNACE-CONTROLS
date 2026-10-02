import React from 'react';
import { Camera } from 'lucide-react';
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

export function PlaceholderImage({ className, text = "Official IFC product image", icon = true }: PlaceholderImageProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center bg-[#E6EAEC] text-[#66727A] border border-[#d2d7da] w-full h-full min-h-[200px]", className)}>
      {icon && <Camera className="w-8 h-8 mb-2 opacity-50" />}
      <span className="text-sm font-medium tracking-wide uppercase opacity-70">{text}</span>
    </div>
  );
}
