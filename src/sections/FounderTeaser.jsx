import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, HeartHandshake, ArrowRight } from 'lucide-react';
const founderImage = '/assets/founder-anas.jpg';

export default function FounderTeaser() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 text-cream-50 border-b border-navy-600/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-800 border border-navy-600 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Founder Photo Column */}
          <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[380px] bg-navy-950 overflow-hidden group">
            <img
              src={founderImage}
              alt="Muhammad Anas - Founder, Lumé Media"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Amber Duotone Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-950/40 lg:to-navy-950" />
            <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-sm border border-navy-600 p-3 rounded-lg lg:hidden">
              <div className="font-display font-bold text-cream-50 text-base">Muhammad Anas</div>
              <div className="text-xs text-amber font-semibold">Founder, Lumé Media</div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase rounded border border-amber/30 text-amber bg-amber/5">
              THE FOUNDER'S NOTE
            </div>

            {/* Pull Quote */}
            <div className="relative">
              <Quote className="w-8 h-8 text-amber/40 mb-2" />
              <blockquote className="font-display text-xl sm:text-2xl font-semibold text-cream-50 leading-relaxed italic">
                "If you're building something new and want your brand to look as ambitious as your vision, Lumé Media is built for you."
              </blockquote>
            </div>

            <div className="hidden lg:block border-l-2 border-amber pl-4">
              <h3 className="font-display text-2xl font-bold text-cream-50">Muhammad Anas</h3>
              <p className="text-xs text-amber font-semibold uppercase tracking-[0.14em]">Founder & Creative Lead, Lumé Media</p>
            </div>

            {/* Impact Line */}
            <div className="bg-navy-950 border border-navy-600 p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-cream-200/90 leading-relaxed">
              <HeartHandshake className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <p>
                <strong className="text-amber font-semibold">Community Impact:</strong> Lumé Media is proud to partner with <strong className="text-cream-50 font-semibold">Al Khidmat Foundation</strong>, supporting community youth engagement initiatives — reflecting our commitment to giving back as we grow.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/about/founders"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber hover:bg-amber-dim text-navy-950 font-bold text-xs tracking-[0.14em] uppercase rounded transition-colors shadow-md"
              >
                <span>Read Founder Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about/story"
                className="inline-flex items-center gap-2 px-6 py-3 border border-cream-200/30 hover:border-amber text-cream-50 hover:text-amber font-semibold text-xs tracking-[0.14em] uppercase rounded transition-colors"
              >
                <span>Our Full Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
