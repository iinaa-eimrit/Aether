import React from 'react';
import { Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

export interface InsightCardProps {
  type: 'opportunity' | 'risk' | 'neutral';
  title: string;
  content: string;
  metric?: string;
  confidence?: number;
}

export function InsightCard({ type, title, content, metric, confidence }: InsightCardProps) {
  const styles = {
    opportunity: 'border-cyan-glow/30 bg-cyan-900/10 border-l-cyan-glow text-cyan-50',
    risk: 'border-neonRed-glow/30 bg-neonRed-900/10 border-l-neonRed-glow text-red-50',
    neutral: 'border-white/10 bg-white/5 border-l-white/30 text-white/90',
  };

  const icons = {
    opportunity: <Sparkles size={16} className="text-cyan-glow" />,
    risk: <AlertTriangle size={16} className="text-neonRed-glow" />,
    neutral: <ShieldCheck size={16} className="text-white/50" />
  };

  return (
    <div className={`p-5 rounded-lg border border-l-4 ${styles[type]} flex flex-col gap-3 group transition-colors hover:bg-black/40`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icons[type]}
          <span className="text-xs font-bold uppercase tracking-widest text-white/70">{title}</span>
        </div>
        {metric && <span className="text-sm font-mono font-bold">{metric}</span>}
      </div>
      
      <p className="text-sm leading-relaxed">{content}</p>
      
      {confidence && (
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] text-white/40 uppercase tracking-widest">Model Confidence</span>
          <div className="w-24 h-1 bg-black/50 rounded-full overflow-hidden">
            <div 
              className={`h-full ${type === 'opportunity' ? 'bg-cyan-glow' : type === 'risk' ? 'bg-neonRed-glow' : 'bg-white/50'}`} 
              style={{ width: `${confidence}%` }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
