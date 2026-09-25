import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { clients } from '../data/clients';
import SlateLabel from '../components/SlateLabel';

export default function WorkIndex() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <main className="min-h-screen bg-[#F1F4F8] text-[#101828] pt-20 pb-24">
      {/* Header Section */}
      <section className="px-4 md:px-12 py-12 border-b border-[#191970]/15 max-w-7xl mx-auto">
        <SlateLabel scene="WORK" roll="INDEX" take="05" label="SHOT LOG" />
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#101828] mt-6">
          SELECTED <span className="text-[#191970]">WORK &amp; SHOTS</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-[#101828]/75 max-w-2xl mt-4">
          A production log of brand partnerships across sports facilities, luxury travel consultancies, F&amp;B rebrands, social impact advocacy, and tech retail.
        </p>
      </section>

      {/* Shot Log Call Sheet Index Rows */}
      <section className="w-full">
        {clients.map((client, index) => {
          return (
            <div
              key={client.id}
              className="w-full border-b border-[#191970]/15 transition-colors py-12 px-4 md:px-12 bg-white text-[#101828] hover:bg-[#F1F4F8]/50"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Number & Name */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 opacity-80">
                    <span className="text-[#191970] font-bold">SHOT 0{index + 1}</span>
                    <span>|</span>
                    <span className="font-semibold">{client.category}</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#101828]">
                    {client.name}
                  </h2>

                  <div className="font-mono text-xs uppercase tracking-wider text-[#191970] font-bold pt-1">
                    SCOPE: {client.scope}
                  </div>

                  <p className="font-sans text-sm leading-relaxed max-w-xl text-[#101828]/80 pt-1">
                    {client.description}
                  </p>

                  {/* Scope Chips */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {client.scopeChips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-mono text-[11px] px-2.5 py-1 border border-[#191970]/20 bg-[#F1F4F8] text-[#191970] font-semibold rounded"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-6">
                    {client.hasFullCaseStudy ? (
                      <Link
                        to={`/work/${client.slug}`}
                        className="inline-block font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 bg-[#191970] text-white hover:bg-[#0D1B3E] transition-all rounded shadow-sm"
                      >
                        VIEW CASE STUDY →
                      </Link>
                    ) : (
                      <button
                        onClick={() => setActiveModal(client)}
                        className="inline-block font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 border border-[#191970] text-[#191970] hover:bg-[#191970] hover:text-white transition-all rounded"
                      >
                        VIEW BRIEF →
                      </button>
                    )}
                  </div>
                </div>

                {/* Supporting Image Crop */}
                <div className="lg:col-span-6">
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-[#191970]/20 bg-[#0D1B3E] rounded-xl group shadow-md">
                    <img
                      src={client.gallery[0] || client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#191970] text-white font-mono text-[10px] px-2.5 py-1 uppercase tracking-widest rounded font-bold">
                      FRAME PREVIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Lightweight Modal for non-case-study clients */}
      {activeModal && (
        <div className="fixed inset-0 z-[999] bg-[#101828]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border-2 border-[#191970] max-w-2xl w-full p-6 md:p-8 space-y-6 relative text-[#101828] shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 font-mono text-xs text-[#191970] font-bold border border-[#191970] px-3 py-1 rounded hover:bg-[#191970] hover:text-white"
            >
              CLOSE [ESC]
            </button>

            <div className="font-mono text-xs text-[#191970] uppercase tracking-widest font-bold">
              PRODUCTION BRIEF // {activeModal.category}
            </div>

            <h3 className="font-display text-3xl uppercase tracking-tight text-[#101828]">
              {activeModal.name}
            </h3>

            <div className="font-mono text-xs text-[#101828]/60 uppercase font-semibold">
              SCOPE: {activeModal.scope}
            </div>

            <p className="font-sans text-sm text-[#101828]/80 leading-relaxed">
              {activeModal.clientOverview}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#191970]/15">
              {activeModal.gallery.slice(0, 2).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={activeModal.name}
                  className="w-full h-40 object-cover border border-[#191970]/20 rounded"
                />
              ))}
            </div>

            <div className="pt-4 border-t border-[#191970]/15 flex justify-between items-center font-mono text-xs">
              <span className="text-[#101828]/60">INDEX STATUS: ACTIVE CARD</span>
              <Link
                to="/start"
                onClick={() => setActiveModal(null)}
                className="text-[#191970] hover:underline font-bold"
              >
                REQUEST SIMILAR CAMPAIGN →
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

