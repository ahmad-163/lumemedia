import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import StatStrip from '../components/StatStrip';

const WHATSAPP_LINK = "https://wa.me/923707165674?text=Hi%20Lum%C3%A9%20Media%2C%20I%27d%20like%20to%20start%20a%20project.";

const MARQUEE_ITEMS = [
  "BRANDING & LOGO DESIGN",
  "SOCIAL MEDIA MANAGEMENT",
  "CONTENT STRATEGY & CREATION",
  "GRAPHIC DESIGN & BRAND VISUALS",
  "VIDEO EDITING & MOTION GRAPHICS",
  "SEO",
  "PAID ADVERTISING CAMPAIGNS"
];

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-navy-950 text-cream-50 overflow-hidden border-b border-navy-600/60">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8 mb-16">
          {/* Eyebrow */}
          <div className="inline-block px-4 py-1.5 rounded border border-amber/40 bg-amber/10 text-amber text-xs font-bold tracking-[0.14em] uppercase">
            CREATIVE MEDIA & MARKETING HOUSE
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-50 leading-[1.08] max-w-4xl mx-auto">
            Creative Media & Marketing for <span className="text-amber italic font-serif">Growing Brands.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-cream-200/80 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
            Lumé Media transforms ideas into presence — delivering premium, purpose-driven content that empowers startups with clarity, confidence, and creative direction, without the barrier of excessive costs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber hover:bg-amber-dim text-navy-950 font-bold text-sm tracking-[0.14em] uppercase rounded shadow-xl hover:shadow-amber/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="#work"
              onClick={scrollToWork}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-cream-200/40 hover:border-amber text-cream-50 hover:text-amber font-semibold text-sm tracking-[0.14em] uppercase rounded transition-colors duration-300"
            >
              <span>See Our Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stat Strip */}
        <div className="max-w-5xl mx-auto mb-16">
          <StatStrip />
        </div>
      </div>

      {/* Marquee Strip (Two Opposing Scrolling Rows) */}
      <div className="w-full overflow-hidden space-y-3 pt-6 border-t border-navy-600/40">
        {/* Row 1: Left scrolling */}
        <div className="flex whitespace-nowrap overflow-hidden select-none">
          <div className="animate-marquee-left flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-[0.14em] text-cream-200/40">
            {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-amber transition-colors">{item}</span>
                <span className="text-amber">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Row 2: Right scrolling */}
        <div className="flex whitespace-nowrap overflow-hidden select-none">
          <div className="animate-marquee-right flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-[0.14em] text-amber/60">
            {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-cream-50 transition-colors">{item}</span>
                <span className="text-cream-200/40">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
