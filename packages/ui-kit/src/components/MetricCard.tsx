import React from 'react';

export interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: React.ReactNode;
}

export function MetricCard({ title, value, trend, icon }: MetricCardProps) {
  return (
    <div className="glass-panel p-5 lg:p-6 rounded-2xl neon-border group">
      <div className="flex justify-between items-start mb-3 lg:mb-4">
        <h3 className="text-xs lg:text-sm font-semibold tracking-widest text-muted uppercase">{title}</h3>
        {icon && <div className="text-cyan-glow/70 group-hover:text-cyan-glow transition-card" aria-hidden="true">{icon}</div>}
      </div>
      
      <div className="flex items-baseline gap-3 lg:gap-4">
        <span className="text-2xl lg:text-3xl tech-number text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{value}</span>
        
        {trend && (
          <span className={`text-sm font-medium ${trend.isPositive ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-neonRed-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
        )}
      </div>
    </div>
  );
}
