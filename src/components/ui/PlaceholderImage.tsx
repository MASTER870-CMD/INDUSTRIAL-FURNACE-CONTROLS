import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface PlaceholderImageProps {
  className?: string;
  text?: string;
  src?: string;
  alt?: string;
}

export function PlaceholderImage({ className, text = "Official IFC product image", src, alt }: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={cn("relative w-full h-full overflow-hidden bg-[#F7F8FA] flex items-center justify-center", className)}>
        <Image 
          src={src} 
          alt={alt || text} 
          fill 
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center bg-[#F7F8FA] text-[#5B6268] border border-[#E3E6E8] w-full h-full min-h-[200px]", className)}>
      <span className="text-xs font-semibold tracking-wide uppercase opacity-70 text-center px-4">{text}</span>
    </div>
  );
}
