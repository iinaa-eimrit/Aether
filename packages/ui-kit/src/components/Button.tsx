import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-cyan-500/20 text-cyan-glow border border-cyan-glow/50 hover:bg-cyan-500/30 hover:border-cyan-glow hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30",
    danger: "bg-neonRed-500/20 text-neonRed-glow border border-neonRed-glow/50 hover:bg-neonRed-500/30 hover:border-neonRed-glow hover:shadow-[0_0_20px_rgba(255,0,60,0.4)]",
    ghost: "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg font-semibold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Shimmer effect on hover */}
      {variant !== 'ghost' && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      )}
    </button>
  );
}
