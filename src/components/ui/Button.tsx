import React from 'react';
import Link from 'next/link';
import { cn } from '../ui/PlaceholderImage';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  href, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm";
  
  const variants = {
    primary: "bg-[#C96F2C] text-white hover:bg-[#b05f22] focus:ring-[#C96F2C]",
    secondary: "bg-[#252D32] text-white hover:bg-[#15191C] focus:ring-[#252D32]",
    outline: "border-2 border-[#252D32] text-[#252D32] hover:bg-[#252D32] hover:text-white focus:ring-[#252D32]",
    ghost: "bg-transparent text-[#252D32] hover:bg-[#E6EAEC] focus:ring-[#E6EAEC]",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
