import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WhyLume from '../sections/WhyLume';
import { Quote, HeartHandshake, Target, Globe2 } from 'lucide-react';

export default function Story() {
  return (
    <div className="pt-32 pb-24 bg-navy-950 text-cream-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="OUR STORY & MISSION"
          headline="Shaping Stories That Travel Beyond Screens."
          subhead="Lumé Media was founded to give ambitious startups and growing brands agency-grade creative direction without excessive agency overhead."
        />

        {/* Mission Quote */}
        <div className="bg-navy-800 border-l-4 border-amber border-y border-r border-navy-600 p-8 sm:p-12 rounded-r-2xl shadow-2xl space-y-4">
          <Quote className="w-10 h-10 text-amber" />
          <blockquote className="font-display text-2xl sm:text-3xl font-medium text-cream-50 italic leading-relaxed">
            "To illuminate emerging brands by shaping stories that travel beyond screens, build trust, and leave a lasting imprint in an ever-evolving marketplace."
          </blockquote>
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-amber pt-2">
            — Lumé Media Mission
          </div>
        </div>

        {/* Who We Are */}
        <div className="bg-navy-800 border border-navy-600 p-8 sm:p-10 rounded-2xl space-y-4 shadow-xl">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-amber">
            Who We Are
          </div>
          <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed font-sans font-normal">
            Lumé Media is a creative media and marketing house built for startups and early-stage businesses. We believe great branding shouldn't be reserved for companies with big budgets — so we deliver premium-quality content, strategy, and creative direction at prices that make sense for growing brands. Based in Lahore and working with clients locally and internationally, we help founders turn their ideas into a confident, consistent brand presence — without the cost or complexity of a traditional agency.
          </p>
        </div>

        {/* Our Impact So Far */}
        <div className="bg-navy-800 border border-navy-600 p-8 sm:p-10 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber">
            <HeartHandshake className="w-4 h-4" />
            <span>Our Impact So Far</span>
          </div>
          <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed font-sans font-normal">
            We've had the opportunity to work with brands like Padel Play and Turja Travels, helping them build their content, visuals, and online presence. Lumé Media is also proud to partner with <strong className="text-cream-50 font-semibold">Al Khidmat Foundation</strong>, supporting community youth engagement initiatives — reflecting our commitment to giving back as we grow. We're actively building our portfolio of startup partnerships, with a goal of becoming a trusted, long-term creative partner across the startup ecosystem — and, over time, expanding our reach into new international markets.
          </p>
        </div>

        {/* Who We Serve */}
        <div className="bg-navy-800 border border-navy-600 p-8 sm:p-10 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber">
            <Target className="w-4 h-4" />
            <span>Who We Serve</span>
          </div>
          <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed font-sans font-normal">
            We work with startups and early-stage businesses that understand the value of strong branding but need a partner who can deliver high-impact creative work within a realistic budget. If you're building something new and want your brand to look and feel as ambitious as your vision, Lumé Media is built for you.
          </p>
        </div>

        {/* Growth Market Note */}
        <div className="bg-navy-950 border-2 border-amber/40 p-6 sm:p-8 rounded-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber">
            <Globe2 className="w-4 h-4" />
            <span>Geographic Presence & Expansion</span>
          </div>
          <div className="text-sm sm:text-base text-cream-50 font-medium">
            Primary Base: <strong>Lahore, Pakistan</strong> &nbsp;•&nbsp; Growth Market: <strong>Gulf & Dubai Region</strong>
          </div>
        </div>
      </div>

      {/* Why Lumé Section Recap */}
      <div className="mt-20">
        <WhyLume />
      </div>
    </div>
  );
}
