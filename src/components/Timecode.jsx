import React, { useState, useEffect } from 'react';

export default function Timecode() {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrames(prev => (prev + 1) % 864000); // cycle through time
    }, 40); // ~25 fps

    return () => clearInterval(interval);
  }, []);

  const totalSeconds = Math.floor(frames / 25);
  const ff = String(frames % 25).padStart(2, '0');
  const ss = String(totalSeconds % 60).padStart(2, '0');
  const mm = String(Math.floor(totalSeconds / 60) % 60).padStart(2, '0');
  const hh = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');

  return (
    <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-2.5 bg-white/95 backdrop-blur-sm border border-[#191970]/20 px-3 py-1.5 font-mono text-[11px] tracking-widest text-[#101828] shadow-md select-none pointer-events-none rounded">
      <span className="w-2 h-2 rounded-full bg-[#191970] animate-ping" />
      <span className="text-[#191970] font-bold">TC</span>
      <span className="text-[#101828] font-bold tracking-widest">{hh}:{mm}:{ss}:{ff}</span>
      <span className="text-[#191970]/30">|</span>
      <span className="text-[#101828]/50 text-[9px]">25 FPS</span>
    </div>
  );
}

