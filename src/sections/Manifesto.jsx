import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Quote } from 'lucide-react';

export default function Manifesto() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 text-cream-50 relative border-b border-navy-600/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-[0.14em] uppercase rounded border border-amber/30 text-amber bg-amber/5">
            OUR BRAND MANIFESTO
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream-50">
            WE MAKE BRANDS <span className="underline-draw text-amber active">MOVE.</span>
          </h2>
        </div>

        {/* Mission Quote Banner */}
        <div className="relative bg-navy-800 border-l-4 border-amber border-y border-r border-navy-600 p-8 sm:p-12 rounded-r-xl shadow-2xl mb-12">
          <Quote className="absolute top-6 right-6 w-12 h-12 text-navy-600/40 pointer-events-none" />
          <blockquote className="relative z-10 text-xl sm:text-2xl md:text-3xl font-display font-medium text-cream-50 leading-relaxed italic mb-4">
            "To illuminate emerging brands by shaping stories that travel beyond screens, build trust, and leave a lasting imprint in an ever-evolving marketplace."
          </blockquote>
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-amber">
            — Lumé Media Mission
          </div>
        </div>

        {/* Who We Are Paragraph */}
        <div className="bg-navy-950 border border-navy-600 p-8 rounded-xl shadow-lg">
          <h3 className="text-xs font-bold tracking-[0.14em] uppercase text-amber mb-4">
            Who We Are
          </h3>
          <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed font-sans font-normal">
            Lumé Media is a creative media and marketing house built for startups and early-stage businesses. We believe great branding shouldn't be reserved for companies with big budgets — so we deliver premium-quality content, strategy, and creative direction at prices that make sense for growing brands. Based in Lahore and working with clients locally and internationally, we help founders turn their ideas into a confident, consistent brand presence — without the cost or complexity of a traditional agency.
          </p>
        </div>
      </div>
    </section>
  );
}
