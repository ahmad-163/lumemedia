import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { growthData } from '../data/growth';
import { Info, TrendingUp } from 'lucide-react';

export default function PerformanceAnalytics() {
  const [activeTab, setActiveTab] = useState('combined');

  const currentData = growthData[activeTab];

  return (
    <section className="py-20 md:py-28 bg-navy-950 text-cream-50 border-b border-navy-600/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PERFORMANCE ANALYTICS"
          headline="Transparent Numbers. Actual Month 1 Growth."
          subhead="Explore our 1-month actual performance metrics and 3-month retainer trajectory for Padel Play and Turja."
        />

        {/* Tabbed Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-navy-800 border border-navy-600 rounded-lg">
            <button
              onClick={() => setActiveTab('combined')}
              className={`px-5 py-2.5 rounded-md text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                activeTab === 'combined'
                  ? 'bg-amber text-navy-950 shadow-md font-bold'
                  : 'text-cream-200/70 hover:text-cream-50'
              }`}
            >
              Combined
            </button>
            <button
              onClick={() => setActiveTab('padel')}
              className={`px-5 py-2.5 rounded-md text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                activeTab === 'padel'
                  ? 'bg-amber text-navy-950 shadow-md font-bold'
                  : 'text-cream-200/70 hover:text-cream-50'
              }`}
            >
              Padel Play
            </button>
            <button
              onClick={() => setActiveTab('turja')}
              className={`px-5 py-2.5 rounded-md text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                activeTab === 'turja'
                  ? 'bg-amber text-navy-950 shadow-md font-bold'
                  : 'text-cream-200/70 hover:text-cream-50'
              }`}
            >
              Turja
            </button>
          </div>
        </div>

        {/* Base Month Notice */}
        <div className="flex items-center justify-center gap-2 text-xs text-cream-200/70 mb-8">
          <Info className="w-4 h-4 text-amber" />
          <span>Base Month Range: <strong>{currentData.baseMonth}</strong></span>
        </div>

        {/* Metrics Table & Visual Chart */}
        <div className="bg-navy-800 border border-navy-600 rounded-xl overflow-hidden shadow-2xl mb-6">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-navy-950 border-b border-navy-600 p-4 sm:p-6 text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-cream-200">
            <div>Metric</div>
            <div className="text-center text-amber">Month 1 (Actual)</div>
            <div className="text-center">Month 2 (Projected)</div>
            <div className="text-center">Month 3 (Projected)</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-navy-600/60">
            {currentData.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 p-4 sm:p-6 items-center hover:bg-navy-950/40 transition-colors"
              >
                <div className="font-semibold text-xs sm:text-base text-cream-50 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber hidden sm:block" />
                  <span>{metric.name}</span>
                </div>
                <div className="text-center font-mono text-base sm:text-2xl font-bold text-amber">
                  {metric.m1}
                </div>
                <div className="text-center font-mono text-sm sm:text-lg text-cream-200/80">
                  {metric.m2}
                </div>
                <div className="text-center font-mono text-sm sm:text-lg text-cream-200/60">
                  {metric.m3}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Progress Line Representation (Solid vs Dashed) */}
        <div className="bg-navy-800/60 border border-navy-600 p-6 rounded-xl mb-6">
          <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-cream-200/70 mb-4">
            <span className="flex items-center gap-2">
              <span className="w-4 h-1 bg-amber rounded inline-block"></span>
              Month 1 Actual (Solid Line)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-1 border-t-2 border-dashed border-amber rounded inline-block"></span>
              Months 2 & 3 Projected (Dashed Line)
            </span>
          </div>

          <div className="h-24 w-full flex items-end justify-between px-6 pt-4 pb-2 border-b border-navy-600/60">
            {/* Visual graph nodes */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-amber border-2 border-navy-950 shadow-md"></div>
              <span className="text-[11px] font-mono font-bold text-amber">M1 (Actual)</span>
            </div>
            
            <div className="flex-1 h-0.5 bg-amber mx-2"></div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-amber/80 border-2 border-navy-950"></div>
              <span className="text-[11px] font-mono text-cream-200/80">M2 (Projected)</span>
            </div>

            <div className="flex-1 h-0.5 border-t-2 border-dashed border-amber/70 mx-2"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-amber/50 border-2 border-navy-950"></div>
              <span className="text-[11px] font-mono text-cream-200/60">M3 (Projected)</span>
            </div>
          </div>
        </div>

        {/* Transparency note */}
        <p className="text-xs text-cream-200/60 text-center italic max-w-3xl mx-auto">
          Months 2 and 3 are projections based on Month 1 performance holding steady — not guaranteed results. Actual growth is typically compounding as content, audience, and optimization improve month over month.
        </p>
      </div>
    </section>
  );
}
