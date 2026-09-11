import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { DollarSign, Layers, UserCheck } from 'lucide-react';

export default function WhyLume() {
  const pillars = [
    {
      title: "Built for Startups, Not Just Big Budgets",
      description: "Traditional agencies price startups out. We built Lumé Media specifically to close that gap — delivering agency-quality creative work at a fraction of the cost, without cutting corners on quality or strategy.",
      icon: DollarSign
    },
    {
      title: "All-in-One, Not Piecemeal",
      description: "Our clients don't have to juggle multiple vendors. From content creation to paid campaigns, everything is handled under one roof, with one point of contact.",
      icon: Layers
    },
    {
      title: "Personalized From Day One",
      description: "Every engagement starts with an onboarding conversation to understand your brand, goals, and expectations — so the strategy we build is tailored to you, not templated.",
      icon: UserCheck
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-950 text-cream-50 border-b border-navy-600/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY LUMÉ"
          headline="Why Founders Choose Us."
          subhead="Positioned between overpriced agencies and fragmented freelancers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-navy-800 border border-navy-600 rounded-xl p-8 flex flex-col justify-between hover:border-amber/60 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-950 border border-navy-600 flex items-center justify-center text-amber mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream-50 mb-4 group-hover:text-amber transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-cream-200/80 leading-relaxed font-sans italic">
                    "{pillar.description}"
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-navy-600/60 text-xs font-semibold tracking-[0.14em] uppercase text-amber">
                  Pillar 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
