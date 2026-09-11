import React, { useState } from 'react';
import { ArrowRight, RotateCw, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ service }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      data-cursor="Read"
      className="perspective-1000 h-[380px] w-full cursor-pointer group"
      onClick={toggleFlip}
    >
      <div
        className={`relative w-full h-full transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full bg-navy-800 border border-navy-600 rounded-xl p-6 sm:p-8 flex flex-col justify-between backface-hidden group-hover:border-amber/60 transition-colors shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-3xl font-bold text-amber">
                {service.id}
              </span>
              <button
                type="button"
                onClick={toggleFlip}
                className="p-1.5 rounded-full bg-navy-950/60 border border-navy-600 text-cream-200/70 hover:text-amber hover:border-amber transition-colors flex items-center gap-1.5 text-xs px-3"
                aria-label="Flip card for details"
              >
                <span>Details</span>
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-cream-50 mb-3 group-hover:text-amber transition-colors">
              {service.title}
            </h3>
            
            <p className="text-sm text-cream-200/80 leading-relaxed italic font-serif">
              "{service.tagline}"
            </p>
          </div>

          <div className="border-t border-navy-600/60 pt-4 flex items-center justify-between text-xs text-cream-200/60">
            <span className="tracking-[0.14em] uppercase text-[11px]">Tap / Hover to flip</span>
            <div className="w-7 h-7 rounded-full bg-navy-950 flex items-center justify-center text-amber group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full bg-navy-950 border border-amber/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between backface-hidden rotate-y-180 shadow-2xl shadow-amber/10">
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-navy-600 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber">{service.id}.</span>
                <span className="text-xs font-bold uppercase tracking-wider text-cream-50">{service.title}</span>
              </div>
              <button
                type="button"
                onClick={toggleFlip}
                className="p-1 rounded-full bg-navy-800 text-amber hover:bg-amber hover:text-navy-950 transition-colors"
                aria-label="Flip back"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-cream-200/90 leading-relaxed">
              {service.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-navy-600 pt-3 text-right">
            <span className="text-[11px] font-semibold text-amber uppercase tracking-[0.14em]">
              Tap anywhere to return
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
