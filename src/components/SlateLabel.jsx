import React from 'react';

export default function SlateLabel({ scene = "01", roll = "A", take = "01", label, showRec = true, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#101828]/70 border-b border-[#191970]/15 pb-1.5 ${className}`}>
      {showRec && (
        <span className="flex items-center gap-1.5 text-[#191970] font-bold pr-2 border-r border-[#191970]/15">
          <span className="w-2 h-2 rounded-full bg-[#191970] animate-pulse" />
          REC
        </span>
      )}
      <span>SCENE — {scene}</span>
      <span className="text-[#191970]/30">|</span>
      <span>ROLL — {roll}</span>
      {take && (
        <>
          <span className="text-[#191970]/30">|</span>
          <span>TAKE — {take}</span>
        </>
      )}
      {label && (
        <>
          <span className="text-[#191970]/30">|</span>
          <span className="text-[#191970] font-bold">{label}</span>
        </>
      )}
    </div>
  );
}

