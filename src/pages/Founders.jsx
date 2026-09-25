import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Flag, MessageCircle } from 'lucide-react';
const founderImage = '/assets/founder-anas.jpg';

const WHATSAPP_LINK = "https://wa.me/923707165674?text=Hi%20Lum%C3%A9%20Media%2C%20I%27d%20like%20to%20start%20a%20project.";

export default function Founders() {
  return (
    <div className="pt-28 pb-24 bg-[#F1F4F8] text-[#101828] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="FOUNDER & LEADERSHIP"
          headline="Built for Founders, by a Founder."
          subhead="The vision behind Lumé Media — bringing clarity, ambition, and high-impact creative direction to early-stage businesses."
        />

        {/* Founder Hero Card */}
        <div className="bg-white border-2 border-[#191970] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-5 relative h-96 lg:h-full min-h-[440px] bg-[#0D1B3E] overflow-hidden group">
            <img
              src={founderImage}
              alt="Muhammad Anas - Founder"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#101828]/90 backdrop-blur-sm border border-white/20 rounded-xl text-white">
              <div className="font-display font-bold text-white text-xl">Muhammad Anas</div>
              <div className="text-xs text-emerald-400 font-semibold uppercase tracking-[0.14em]">Founder & Creative Director</div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#191970]">Founder's Philosophy</span>
              <h2 className="font-display text-3xl font-bold text-[#101828]">
                Muhammad Anas
              </h2>
              <p className="text-xs text-[#101828]/60 uppercase tracking-wider font-mono">
                Founder, Lumé Media • Lahore, Pakistan
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#101828]/85 leading-relaxed font-sans">
              <p>
                Lumé Media was born out of a clear realization: traditional marketing and creative agencies frequently price early-stage startups and growing businesses out of the market. Founders were forced to choose between exorbitant agency bills or fragmented, inconsistent work from piecemeal freelancers.
              </p>

              <p>
                Muhammad Anas established Lumé Media specifically to bridge this gap — offering complete visual branding, short-form cinematography, content strategy, and performance marketing under one roof. With a commitment to clear communication, realistic pricing, and agency-grade standards, Anas leads the team in crafting stories that travel beyond screens.
              </p>

              <p>
                Rooted in Lahore with expanding partnerships across the Gulf & Dubai regions, Anas ensures every engagement starts with an onboarding dialogue tailored directly to the founder's long-term vision.
              </p>
            </div>

            {/* Closing Quote */}
            <div className="bg-[#F1F4F8] border-l-4 border-[#191970] p-4 rounded-r-lg">
              <blockquote className="font-display text-base sm:text-lg italic text-[#101828]">
                "If you're building something new and want your brand to look as ambitious as your vision, Lumé Media is built for you."
              </blockquote>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#191970] hover:bg-[#0D1B3E] text-white font-bold text-xs tracking-[0.14em] uppercase rounded shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect With Anas on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Flag Note */}
        <div className="bg-white border border-[#191970]/20 p-6 rounded-xl flex items-start gap-4 text-xs text-[#101828]/80 shadow-xs">
          <Flag className="w-5 h-5 text-[#191970] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-[#191970] font-semibold">Content Spec Note:</strong>
            <p>
              This narrative is constructed strictly from the thesis and quotes supplied in your source documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

