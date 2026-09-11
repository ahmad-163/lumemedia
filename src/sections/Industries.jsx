import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { provenVerticals, targetVerticals } from '../data/industries';
import { Sparkles } from 'lucide-react';

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 text-cream-50 border-b border-navy-600/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INDUSTRIES & NICHES"
          headline="Built for Startups in Visually Competitive Niches."
          subhead="We work with ambitious founders who understand the ROI of premium creative direction but need an agile partner within a realistic budget."
        />

        {/* 5 Proven Verticals (Horizontal Scroll-Snap Rail) */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between text-xs text-amber font-semibold uppercase tracking-[0.14em] mb-4">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Proven Verticals (Real Clients)</span>
            </span>
            <span className="text-cream-200/50 text-[11px] hidden sm:inline">
              Scroll horizontally →
            </span>
          </div>

          {/* Scroll-Snap Rail */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-1 no-scrollbar scroll-smooth">
            {provenVerticals.map((vertical) => (
              <div
                key={vertical.id}
                className="snap-start shrink-0 w-[300px] sm:w-[360px] bg-navy-800 border border-navy-600 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber/50 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber">
                      {vertical.id}
                    </span>
                    <span className="text-[11px] font-semibold text-cream-200/80 px-2.5 py-0.5 rounded bg-navy-950 border border-navy-600">
                      Client: {vertical.client}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-cream-50 mb-3 group-hover:text-amber transition-colors">
                    {vertical.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed italic mb-6">
                    "{vertical.description}"
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-600/60 text-[11px] text-cream-200/60">
                  <strong className="text-amber uppercase tracking-wider block mb-1">Strategy Focus:</strong>
                  <span>{vertical.strategy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Adjacent / Target Verticals (Small-Caps Tag List) */}
        <div className="bg-navy-800/40 border border-navy-600/80 rounded-xl p-6 sm:p-8">
          <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-cream-200/60 mb-4 text-center">
            Target & Expansion Verticals
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {targetVerticals.map((target, idx) => (
              <span
                key={idx}
                className="text-xs uppercase tracking-[0.1em] px-3.5 py-1.5 rounded-full bg-navy-950 border border-navy-600 text-cream-200/70 hover:border-amber hover:text-amber transition-colors"
              >
                {target}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
