import React from 'react';
import { User, Activity, ArrowUpRight } from 'lucide-react';

export interface PlayerCardProps {
  name: string;
  position: string;
  age: number;
  value: string;
  fitScore: number;
  imageUrl?: string;
  similarTo?: string;
}

export function PlayerCard({ name, position, age, value, fitScore, imageUrl, similarTo }: PlayerCardProps) {
  return (
    <div className="glass-panel p-5 rounded-xl border border-white/5 hover:border-cyan-glow/30 transition-all duration-300 group relative overflow-hidden flex flex-col gap-4 cursor-pointer hover:shadow-[0_8px_30px_rgba(0,240,255,0.1)]">
      
      {/* Background glow based on fit score */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-glow/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-glow/20 transition-colors" />

      <div className="flex items-start gap-4">
        {/* Portrait placeholder */}
        <div className="w-16 h-16 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 relative">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale opacity-80 mix-blend-screen" />
          ) : (
            <User size={24} className="text-white/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-glow transition-colors">{name}</h3>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">AETHER FIT</span>
              <span className="text-xl font-mono font-bold text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{fitScore}%</span>
            </div>
          </div>
          <p className="text-xs text-white/50 tracking-widest uppercase mt-1">{position} • AGE {age}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2 pt-4 border-t border-white/5">
        <div>
          <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">Est. Value</span>
          <span className="text-sm font-mono text-white/90 font-medium">{value}</span>
        </div>
        {similarTo && (
          <div>
            <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">Vector Match</span>
            <span className="text-sm font-medium text-magenta-400 flex items-center gap-1">
              <Activity size={12} /> {similarTo}
            </span>
          </div>
        )}
      </div>

      {/* Hover action indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={18} className="text-cyan-glow" />
      </div>
    </div>
  );
}
