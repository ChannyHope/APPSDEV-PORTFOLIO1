import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg px-5 py-2.5 transition-all duration-300 shadow-sm active:scale-95 text-sm sm:text-base";
  
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600 hover:shadow-pink-500/25 hover:shadow-lg",
    outline: "border border-pink-500 text-pink-500 hover:bg-pink-50 hover:border-pink-600",
    ghost: "text-slate-600 hover:text-pink-500 hover:bg-pink-50/50"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};