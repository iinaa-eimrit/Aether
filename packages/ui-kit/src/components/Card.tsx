import React from 'react';

export interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`glass-panel rounded-xl overflow-hidden ${className}`}>
      <div className="px-5 py-4 border-b border-white/10">
        <h3 className="text-lg font-semibold text-white m-0">{title}</h3>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
