import React from 'react';
import SectionHeading from '../components/SectionHeading';

export default function Workflow() {
  const steps = [
    {
      num: "01",
      title: "Onboarding",
      description: "We start with a conversation about your brand, goals, and expectations."
    },
    {
      num: "02",
      title: "Agreement",
      description: "A personalized plan and agreement are put together around your needs."
    },
    {
      num: "03",
      title: "Planning & Creation",
      description: "Our team plans, designs, films, and edits your content."
    },
    {
      num: "04",
      title: "Delivery & Review",
      description: "Every asset is reviewed for quality and brand alignment before it goes live."
    },
    {
      num: "05",
      title: "Ongoing Partnership",
      description: "We stay engaged as a long-term creative partner, not a one-off vendor."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-navy-950 text-cream-50 border-b border-navy-600/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE PROCESS"
          headline="How We Work."
          subhead="A streamlined 5-step collaborative workflow from initial concept to long-term impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-navy-800 border border-navy-600 rounded-xl p-6 flex flex-col justify-between hover:border-amber/60 transition-all duration-300 shadow-lg group"
            >
              <div>
                <div className="font-mono text-3xl font-bold text-amber mb-4 group-hover:scale-105 transition-transform">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-bold text-cream-50 mb-3 group-hover:text-amber transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-cream-200/80 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-navy-950 border border-amber/40 text-amber text-xs font-mono flex items-center justify-center">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
