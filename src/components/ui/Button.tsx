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
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm";
  
  const variants = {
    primary: "bg-[#F59625] text-white hover:bg-[#E0851B] focus:ring-[#F59625]",
    secondary: "bg-[#0000FF] text-white hover:bg-[#0000CC] focus:ring-[#0000FF]",
    outline: "border-2 border-[#0000FF] text-[#0000FF] hover:bg-[#0000FF] hover:text-white focus:ring-[#0000FF]",
    ghost: "bg-transparent text-[#0000FF] hover:bg-[#F7F8FA] focus:ring-[#0000FF]",
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
