import React from 'react';
import { Eye, ShieldCheck, Globe } from 'lucide-react';

export default function StatStrip() {
  const stats = [
    {
      figure: "87.7K",
      label: "Mo. 1 Views",
      sublabel: "Combined (Padel Play + Turja)",
      icon: Eye
    },
    {
      figure: "All-in-One",
      label: "Creative Partner",
      sublabel: "Full-Cycle Direction",
      icon: ShieldCheck
    },
    {
      figure: "Lahore & Intl",
      label: "Global Reach",
      sublabel: "Local Roots, International Ambition",
      icon: Globe
    }
  ];

  return (
    <div className="w-full bg-navy-800 border-y sm:border border-navy-600 sm:rounded-xl p-4 sm:p-6 shadow-2xl shadow-navy-950">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-navy-600">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                index !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-navy-950 border border-navy-600 flex items-center justify-center text-amber shrink-0 shadow-inner">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-amber tracking-tight">
                  {stat.figure}
                </div>
                <div className="text-xs font-semibold text-cream-50 uppercase tracking-[0.14em]">
                  {stat.label}
                </div>
                <div className="text-[11px] text-cream-200/60 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
