import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { clients } from '../data/clients';
import SlateLabel from '../components/SlateLabel';
import StatReadout from '../components/StatReadout';

export default function WorkDetail() {
  const { slug } = useParams();
  const clientIndex = clients.findIndex((c) => c.slug === slug);
  const client = clients[clientIndex];

  if (!client || !client.hasFullCaseStudy) {
    return <Navigate to="/work" replace />;
  }

  // Next case study calculation
  const nextClients = clients.filter(c => c.hasFullCaseStudy);
  const currentNextIndex = nextClients.findIndex(c => c.slug === slug);
  const nextClient = nextClients[(currentNextIndex + 1) % nextClients.length];

  return (
    <main className="min-h-screen bg-[#F1F4F8] text-[#101828] pt-20 pb-24">
      {/* Production Brief Document Header */}
      <section className="px-4 md:px-12 py-12 border-b border-[#191970]/15 max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <SlateLabel scene="CASE" roll="DOC" take={`0${clientIndex + 1}`} label="PRODUCTION BRIEF" />
          <Link to="/work" className="font-mono text-xs text-[#191970] font-bold hover:underline">
            ← BACK TO WORK INDEX
          </Link>
        </div>

        {/* Client Title */}
        <div
          className="pl-6 border-l-4 my-6"
          style={{ borderColor: client.accentBorder || '#191970' }}
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#101828]">
            {client.name}
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-[#101828]/60 mt-2 font-semibold">
            CATEGORY: {client.category}
          </p>
        </div>

        {/* Metadata Header Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#191970]/15 font-mono text-xs text-[#101828]">
          <div className="bg-white p-4 border border-[#191970]/20 rounded shadow-xs">
            <span className="text-[#191970] font-bold uppercase block mb-1">CLIENT —</span>
            <span>{client.name}</span>
          </div>
          <div className="bg-white p-4 border border-[#191970]/20 rounded shadow-xs">
            <span className="text-[#191970] font-bold uppercase block mb-1">CATEGORY —</span>
            <span>{client.category}</span>
          </div>
          <div className="bg-white p-4 border border-[#191970]/20 rounded shadow-xs">
            <span className="text-[#191970] font-bold uppercase block mb-1">SCOPE —</span>
            <span>{client.scope}</span>
          </div>
        </div>
      </section>

      {/* Brief Overview & Narrative */}
      <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto border-b border-[#191970]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
            PRODUCTION OVERVIEW // BRIEF
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="font-sans text-lg md:text-xl text-[#101828] leading-relaxed font-semibold">
              {client.clientOverview}
            </p>
            <p className="font-sans text-sm text-[#101828]/80 leading-relaxed">
              {client.description}
            </p>

            {/* Scope Chips */}
            <div className="pt-4 flex flex-wrap gap-2">
              {client.scopeChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-3 py-1 bg-white border border-[#191970]/20 text-[#191970] font-semibold rounded"
                >
                  ✓ {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabular Numerals Performance Stat Readout */}
      {client.stats && (client.stats.views || client.stats.status) && (
        <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto border-b border-[#191970]/15">
          <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-6">
            METRICS &amp; IMPACT READOUT
          </div>

          {client.stats.views ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatReadout
                value={client.stats.views}
                label="TOTAL VIEWS"
                detail={client.stats.viewsDetail}
                accent={true}
              />
              <StatReadout
                value={client.stats.reach}
                label="ACCOUNTS REACHED"
                detail={client.stats.reachDetail}
              />
              <StatReadout
                value={client.stats.engagements}
                label="ENGAGEMENTS"
                detail={client.stats.engagementsDetail}
              />
              <StatReadout
                value={client.stats.pieces}
                label="PIECES PUBLISHED"
                detail={client.stats.piecesDetail}
              />
            </div>
          ) : (
            <div className="p-8 bg-white border border-[#191970]/20 rounded-xl max-w-xl shadow-md">
              <div className="font-mono text-xl text-[#191970] font-bold mb-2">
                {client.stats.status}
              </div>
              <div className="font-sans text-sm text-[#101828]/80">
                {client.stats.statusNote}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Graphic Pack Visual Gallery */}
      <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto border-b border-[#191970]/15">
        <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-6">
          GRAPHIC &amp; CONTENT ASSETS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {client.gallery.map((img, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#191970]/20 rounded-xl overflow-hidden relative group shadow-md"
            >
              <img
                src={img}
                alt={`${client.name} asset ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#101828]/90 text-white p-3 font-mono text-[10px] uppercase tracking-widest border-t border-[#191970]/20 flex justify-between">
                <span>FRAME // ASSET_0{idx + 1}.PNG</span>
                <span className="text-emerald-400 font-bold">HD RENDER</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Footer Cycle Nav */}
      <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto flex justify-between items-center font-mono text-xs">
        <Link to="/work" className="text-[#101828]/70 hover:text-[#191970] font-bold">
          ← ALL PROJECTS
        </Link>

        <Link
          to={`/work/${nextClient.slug}`}
          className="bg-[#191970] text-white font-bold px-6 py-3.5 rounded uppercase tracking-widest hover:bg-[#0D1B3E] transition-all shadow-md flex items-center gap-2"
        >
          NEXT CASE: {nextClient.name} →
        </Link>
      </section>
    </main>
  );
}

