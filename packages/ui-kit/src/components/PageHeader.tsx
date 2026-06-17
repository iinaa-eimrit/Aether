import React from 'react';

export interface PageHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  /** 'default' uses left-aligned layout; 'editorial' uses centered layout */
  variant?: 'default' | 'editorial';
  /** Optional right-side content (filters, date, etc.) */
  actions?: React.ReactNode;
}

export function PageHeader({ icon, title, subtitle, variant = 'default', actions }: PageHeaderProps) {
  if (variant === 'editorial') {
    return (
      <header className="flex flex-col items-center text-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{title}</h1>
          {subtitle && (
            <p className="text-muted text-sm tracking-widest font-mono uppercase">{subtitle}</p>
          )}
        </div>
        {actions && <div>{actions}</div>}
      </header>
    );
  }

  return (
    <header className="mb-2 flex items-end justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          {icon}
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted text-sm mt-1 uppercase tracking-widest font-bold">{subtitle}</p>
        )}
      </div>
      {actions && <div>{actions}</div>}
    </header>
  );
}
