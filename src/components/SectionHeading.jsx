import React from 'react';

export default function SectionHeading({ eyebrow, headline, subhead, align = "center", light = false }) {
  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center mx-auto";
  
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-[0.14em] uppercase rounded border border-amber/30 text-amber bg-amber/5">
          {eyebrow}
        </div>
      )}
      {headline && (
        <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${light ? 'text-navy-950' : 'text-cream-50'}`}>
          {headline}
        </h2>
      )}
      {subhead && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-navy-800/80' : 'text-cream-200/80'}`}>
          {subhead}
        </p>
      )}
    </div>
  );
}
