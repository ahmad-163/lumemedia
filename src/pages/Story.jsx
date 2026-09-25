import React from 'react';
import { Link } from 'react-router-dom';
import SlateLabel from '../components/SlateLabel';

export default function Story() {
  return (
    <main className="min-h-screen bg-[#F1F4F8] text-[#101828] pt-20 pb-24">
      {/* Header */}
      <section className="px-4 md:px-12 py-12 border-b border-[#191970]/15 max-w-5xl mx-auto">
        <SlateLabel scene="STORY" roll="DOC" take="01" label="THE LUMÉ MANIFESTO" />
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#101828] mt-6">
          ABOUT <span className="text-[#191970]">LUMÉ MEDIA</span>
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest text-[#101828]/60 mt-3">
          LAHORE, PAKISTAN (HQ) // GULF &amp; DUBAI (EXPANSION MARKET)
        </p>
      </section>

      {/* 1. Mission Quote */}
      <section className="px-4 md:px-12 py-12 max-w-5xl mx-auto border-b border-[#191970]/15">
        <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-4">
          OUR MISSION
        </div>
        <blockquote className="font-display text-2xl sm:text-4xl text-[#101828] uppercase tracking-tight leading-tight border-l-4 border-[#191970] pl-6 py-2">
          "To illuminate emerging brands by shaping stories that travel beyond screens, build trust, and leave a lasting imprint in an ever-evolving marketplace."
        </blockquote>
      </section>

      {/* 2. Who We Are */}
      <section className="px-4 md:px-12 py-12 max-w-5xl mx-auto border-b border-[#191970]/15">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
            WHO WE ARE
          </div>
          <div className="md:col-span-8 font-sans text-base md:text-lg text-[#101828]/90 leading-relaxed space-y-4">
            <p>
              Lumé Media transforms ideas into presence — delivering premium, purpose-driven content that empowers startups with clarity, confidence, and creative direction, without the barrier of excessive costs.
            </p>
            <p className="text-[#101828]/70 text-sm">
              We were founded to eliminate the friction between high-level creative vision and realistic startup budgets. Operating as an agile production studio, we combine strategy, cinematic video editing, custom brand identity design, and social media execution into a single unified workspace.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why Lumé Media (Stacked Mono List) */}
      <section className="px-4 md:px-12 py-12 max-w-5xl mx-auto border-b border-[#191970]/15">
        <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-8">
          WHY LUMÉ MEDIA // THREE CORE PILLARS
        </div>

        <div className="space-y-6">
          {/* Point 1 */}
          <div className="p-6 bg-white border border-[#191970]/20 rounded-lg shadow-sm space-y-2">
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              01 // BUILT FOR STARTUPS
            </div>
            <h3 className="font-display text-xl uppercase tracking-tight text-[#101828]">
              High-End Execution Without Enterprise Overhead
            </h3>
            <p className="font-sans text-sm text-[#101828]/80 leading-relaxed">
              Startups don't need inflated agency retainer fees; they need fast, impactful assets that generate immediate brand authority. We deliver top-tier editorial aesthetics tailored specifically for growing businesses.
            </p>
          </div>

          {/* Point 2 */}
          <div className="p-6 bg-white border border-[#191970]/20 rounded-lg shadow-sm space-y-2">
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              02 // ALL-IN-ONE CREATIVE PARTNER
            </div>
            <h3 className="font-display text-xl uppercase tracking-tight text-[#101828]">
              Strategy, Design, Edit, and Distribution in One Hub
            </h3>
            <p className="font-sans text-sm text-[#101828]/80 leading-relaxed">
              No more juggling separate copywriters, freelance editors, and graphic designers. Lumé Media manages the complete production pipeline under one roof, guaranteeing visual coherence across every touchpoint.
            </p>
          </div>

          {/* Point 3 */}
          <div className="p-6 bg-white border border-[#191970]/20 rounded-lg shadow-sm space-y-2">
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              03 // PERSONALIZED &amp; AGILE
            </div>
            <h3 className="font-display text-xl uppercase tracking-tight text-[#101828]">
              Direct Founder Access &amp; Rapid Turnaround Cycles
            </h3>
            <p className="font-sans text-sm text-[#101828]/80 leading-relaxed">
              You work directly with the creative leaders executing your campaign. No account manager layers, no miscommunicated briefs — just direct communication and rapid execution.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Impact & Community Partner */}
      <section className="px-4 md:px-12 py-12 max-w-5xl mx-auto border-b border-[#191970]/15">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
            IMPACT &amp; SOCIAL RESPONSIBILITY
          </div>
          <div className="md:col-span-8 space-y-4">
            <div className="p-6 bg-[#0D1B3E] text-white rounded-lg border border-[#191970]">
              <h3 className="font-display text-xl uppercase tracking-tight text-white mb-2">
                COMMUNITY IMPACT PARTNER
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                Beyond commercial work, Lumé Media actively partners with non-profit advocacy groups including <strong className="text-emerald-400">Al Khidmat Foundation</strong> and <strong className="text-emerald-400">Empower Through Literacy</strong> to craft documentary short-form stories that amplify social causes and community awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Who We Serve */}
      <section className="px-4 md:px-12 py-12 max-w-5xl mx-auto border-b border-[#191970]/15">
        <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-6">
          WHO WE SERVE
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-[#101828]">
          <div className="p-4 bg-white border border-[#191970]/20 rounded">
            <span className="text-[#191970] font-bold block mb-1">01 /</span>
            <span>Early-Stage Startups</span>
          </div>
          <div className="p-4 bg-white border border-[#191970]/20 rounded">
            <span className="text-[#191970] font-bold block mb-1">02 /</span>
            <span>Sports &amp; Fitness Facilities</span>
          </div>
          <div className="p-4 bg-white border border-[#191970]/20 rounded">
            <span className="text-[#191970] font-bold block mb-1">03 /</span>
            <span>Travel &amp; Luxury Consultancies</span>
          </div>
          <div className="p-4 bg-white border border-[#191970]/20 rounded">
            <span className="text-[#191970] font-bold block mb-1">04 /</span>
            <span>F&amp;B &amp; Tech Retailers</span>
          </div>
        </div>
      </section>

      {/* 6. Founder Editorial Profile Section */}
      <section id="founder" className="px-4 md:px-12 py-16 max-w-5xl mx-auto">
        <div className="bg-[#0D1B3E] text-white p-8 md:p-12 rounded-2xl border border-[#191970] relative space-y-8 shadow-2xl">
          <div className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest">
            FOUNDER PROFILE // LEADERSHIP
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="relative border-2 border-white/20 rounded-lg overflow-hidden bg-black shadow-xl">
                <img
                  src="/assets/founder-anas.jpg"
                  alt="Muhammad Anas — Founder & Creative Director"
                  className="w-full h-80 object-cover filter contrast-110 hover:contrast-125 transition-all duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-md text-white p-3 font-mono text-[11px] uppercase tracking-widest flex justify-between">
                  <span>M. ANAS</span>
                  <span className="text-emerald-400 font-bold">FOUNDER</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white">
                MUHAMMAD ANAS
              </h2>
              <p className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest">
                FOUNDER &amp; CREATIVE DIRECTOR
              </p>

              <p className="font-sans text-sm md:text-base text-white/85 leading-relaxed">
                "We founded Lumé Media to give emerging brands access to high-impact production values without bloated enterprise costs. Our philosophy is simple: cut the noise, shoot with intention, and build brand identity that commands attention."
              </p>

              <div className="pt-4 border-t border-white/10 font-mono text-xs text-white/60">
                LAHORE, PAKISTAN // DIRECT CONTACT VIA WHATSAPP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-12 py-12 max-w-5xl mx-auto text-center">
        <Link
          to="/start"
          className="inline-block bg-[#191970] text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#0D1B3E] transition-all rounded shadow-md"
        >
          START A PROJECT WITH US →
        </Link>
      </section>
    </main>
  );
}

