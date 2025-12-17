import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'light' | 'dark';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'dark', children, className, ...props }) => {
  const baseClasses = "px-8 py-3 uppercase tracking-widest text-sm font-sans transition-all duration-300 ease-out border rounded-full relative overflow-hidden group";
  
  const variantClasses = variant === 'dark' 
    ? "border-stone-800 text-stone-800 hover:text-stone-100" 
    : "border-stone-100 text-stone-100 hover:text-stone-900";

  const fillClasses = variant === 'dark'
    ? "bg-stone-800"
    : "bg-stone-100";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className || ''}`} {...props}>
      <span className={`absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${fillClasses}`}></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};