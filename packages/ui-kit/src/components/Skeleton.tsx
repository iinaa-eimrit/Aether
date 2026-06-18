import React from 'react';

export interface SkeletonProps {
  className?: string;
  /** Number of skeleton lines to render */
  lines?: number;
  /** Render a circular skeleton (e.g., for avatars) */
  circle?: boolean;
}

export function Skeleton({ className = '', lines = 1, circle = false }: SkeletonProps) {
  if (circle) {
    return (
      <div
        className={`rounded-full bg-white/5 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-white/5 rounded animate-pulse"
          style={{ width: i === lines - 1 && lines > 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  );
}

export interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className = '' }: SkeletonCardProps) {
  return (
    <div className={`glass-panel p-6 rounded-2xl ${className}`} aria-hidden="true">
      <div className="flex justify-between items-start mb-4">
        <div className="h-3 w-24 bg-white/5 rounded animate-pulse" />
        <div className="h-5 w-5 bg-white/5 rounded animate-pulse" />
      </div>
      <div className="h-8 w-20 bg-white/5 rounded animate-pulse" />
    </div>
  );
}
