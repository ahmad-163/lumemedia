import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F1F4F8] text-[#101828] flex flex-col items-center justify-center p-6 text-center pt-24">
      <div className="max-w-xl w-full bg-white border-2 border-[#191970] rounded-2xl p-8 md:p-12 space-y-6 shadow-2xl relative">
        <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#191970] animate-ping" />
          <span>ERROR 404 // MISSING REEL</span>
        </div>

        <div className="font-mono text-xs text-[#101828]/50 uppercase tracking-widest">
          ROLL — 404 // TAKE — N/A // FRAME DROPPED
        </div>

        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-[#101828]">
          SCENE NOT <br />
          <span className="text-[#191970]">FOUND</span>
        </h1>

        <p className="font-sans text-sm text-[#101828]/80 max-w-md mx-auto leading-relaxed">
          The requested reel or slate page path does not exist on this tape deck. It may have been spliced out or renamed in post-production.
        </p>

        <div className="pt-6 border-t border-[#191970]/15">
          <Link
            to="/"
            className="inline-block bg-[#191970] text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#0D1B3E] transition-all rounded shadow-md"
          >
            BACK TO SLATE (HOME) →
          </Link>
        </div>
      </div>
    </main>
  );
}

