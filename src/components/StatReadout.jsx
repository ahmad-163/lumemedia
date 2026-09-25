import React from 'react';

export default function StatReadout({ value, label, detail, accent = false, className = "" }) {
  return (
    <div className={`p-4 md:p-6 bg-white border border-[#191970]/20 rounded-lg shadow-xs ${accent ? 'border-l-4 border-l-[#191970]' : ''} ${className}`}>
      <div className="font-mono text-2xl md:text-4xl font-bold tracking-tight text-[#101828] tabular-nums mb-1">
        {value}
      </div>
      <div className="font-mono text-xs uppercase tracking-widest text-[#191970] font-bold mb-1">
        {label}
      </div>
      {detail && (
        <div className="font-sans text-xs text-[#101828]/70 leading-relaxed">
          {detail}
        </div>
      )}
    </div>
  );
}

