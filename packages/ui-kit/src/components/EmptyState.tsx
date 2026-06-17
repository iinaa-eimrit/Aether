import React from 'react';

export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className = '' }: EmptyStateProps) {
  return (
    <div className={`glass-panel p-16 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center ${className}`}>
      <div className="text-white/10 mb-4">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-muted mb-2">{title}</h2>
      {description && (
        <p className="text-white/30 text-sm mt-1 max-w-md font-mono leading-relaxed">{description}</p>
      )}
      {action && (
        <div className="mt-6">{action}</div>
      )}
    </div>
  );
}
