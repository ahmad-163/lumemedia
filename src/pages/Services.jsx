import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import SlateLabel from '../components/SlateLabel';

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <main className="min-h-screen bg-[#F1F4F8] text-[#101828] pt-20 pb-24">
      {/* Header */}
      <section className="px-4 md:px-12 py-12 border-b border-[#191970]/15 max-w-7xl mx-auto">
        <SlateLabel scene="SERVICES" roll="INDEX" take="07" label="SPECIFICATION SHEET" />
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#101828] mt-6">
          OUR <span className="text-[#191970]">CAPABILITIES</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-[#101828]/75 max-w-2xl mt-4">
          End-to-end creative production and strategic growth capabilities built for emerging startups, sports facilities, F&amp;B brands, and personal identities.
        </p>
      </section>

      {/* Desktop Tab/Index Spec Pattern (01-07) */}
      <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto border-b border-[#191970]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Index Menu (01-07) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest pb-3 border-b border-[#191970]/20">
              SERVICE INDEX // 01–07
            </div>

            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`w-full text-left p-4 border rounded-md transition-all font-mono text-xs uppercase tracking-wider flex items-center justify-between ${
                    isActive
                      ? 'bg-[#191970] text-white border-[#191970] font-bold shadow-md'
                      : 'bg-white border-[#191970]/15 text-[#101828]/80 hover:bg-[#191970]/5 hover:text-[#191970]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-white' : 'text-[#191970] font-bold'}>
                      [{service.id}]
                    </span>
                    <span className="font-sans font-semibold text-sm tracking-normal">
                      {service.title}
                    </span>
                  </div>
                  <span>{isActive ? '● ACTIVE' : '→'}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Detailed Spec Sheet */}
          <div className="lg:col-span-7 bg-white rounded-xl border-2 border-[#191970] p-6 md:p-10 space-y-8 relative shadow-xl">
            <div className="flex justify-between items-center font-mono text-xs text-[#101828]/60 pb-4 border-b border-[#191970]/15">
              <span className="text-[#191970] font-bold">SPECIFICATION SHEET // {activeService.id}</span>
              <span>CONFIDENTIAL // LUMÉ MEDIA</span>
            </div>

            <div>
              <span className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
                SERVICE NAME:
              </span>
              <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-[#101828] mt-2">
                {activeService.title}
              </h2>
            </div>

            <div className="p-4 bg-[#F1F4F8] border-l-4 border-[#191970] rounded-r">
              <span className="font-mono text-xs text-[#101828]/50 uppercase block mb-1">TAGLINE:</span>
              <p className="font-sans text-base md:text-lg text-[#101828] italic">
                "{activeService.tagline}"
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest block mb-4">
                CAPABILITIES &amp; DELIVERABLES:
              </span>
              <div className="space-y-3">
                {activeService.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg.white border border-[#191970]/15 rounded font-sans text-sm text-[#101828] flex items-start gap-3 shadow-xs"
                  >
                    <span className="font-mono text-xs text-[#191970] font-bold mt-0.5">0{idx + 1}.</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#191970]/15 flex justify-between items-center flex-wrap gap-4">
              <span className="font-mono text-xs text-[#101828]/60">
                READY TO DEPLOY THIS CAPABILITY?
              </span>
              <Link
                to="/start"
                className="bg-[#191970] text-white font-mono text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#0D1B3E] transition-all rounded shadow-md"
              >
                REQUEST SCOPE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Packages Closing Note */}
      <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="bg-[#0D1B3E] text-white p-8 md:p-12 rounded-2xl border border-[#191970] relative space-y-4 shadow-xl">
          <div className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">
            CUSTOMIZED PACKAGES // FULL CYCLE MANAGEMENT
          </div>
          <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight text-white mb-2">
            PRE-PRODUCTION, PRODUCTION, POST-PRODUCTION &amp; RETAINERS
          </h3>
          <p className="font-sans text-base text-white/80 max-w-3xl leading-relaxed">
            All services can be deployed individually or combined into an all-in-one monthly creative retainer. Full-cycle scriptwriting, shooting, kinetic typography, editing, and strategic account growth managed under one unified roof.
          </p>

          <div className="pt-4">
            <Link
              to="/start"
              className="inline-block bg-[#191970] text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#2525A8] transition-colors rounded shadow-md"
            >
              BUILD A CUSTOM RETAINER PACKAGE →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

