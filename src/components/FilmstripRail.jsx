import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { clients } from '../data/clients';

export default function FilmstripRail() {
  const scrollRef = useRef(null);

  const featuredClients = clients.filter(c => c.hasFullCaseStudy);

  return (
    <div className="w-full bg-[#F1F4F8] py-12 border-y border-[#191970]/15 relative overflow-hidden">
      {/* Film Strip Header Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 flex justify-between items-center font-mono text-xs text-[#101828]/70 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#191970] animate-ping" />
          <span className="text-[#191970] font-bold">REEL // SPROCKET RAIL</span>
          <span className="text-[#191970]/30">|</span>
          <span>HORIZONTAL PORTFOLIO CAROUSEL</span>
        </div>
        <Link to="/work" className="text-[#191970] hover:underline flex items-center gap-1 font-bold">
          ALL 5 PROJECTS →
        </Link>
      </div>

      {/* Horizontal Scrollable Cards Rail */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-4 md:px-12 overflow-x-auto no-scrollbar scroll-smooth py-4"
      >
        {featuredClients.map((client, idx) => (
          <Link
            key={client.id}
            to={`/work/${client.slug}`}
            className="group shrink-0 w-[300px] sm:w-[380px] bg-white border border-[#191970]/20 hover:border-[#191970] rounded-xl transition-all shadow-md relative flex flex-col justify-between overflow-hidden"
          >
            {/* Top Frame Slate Label */}
            <div className="p-4 bg-[#F1F4F8] border-b border-[#191970]/15 flex justify-between items-center font-mono text-xs text-[#101828]/70">
              <span className="text-[#191970] font-bold">FRAME 0{idx + 1}</span>
              <span className="uppercase text-[10px] text-[#101828]/60 font-semibold">{client.category}</span>
            </div>

            {/* Client Image Frame */}
            <div className="relative h-56 w-full bg-[#0D1B3E] overflow-hidden">
              <img
                src={client.gallery[0] || client.logo}
                alt={client.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Client Meta Details */}
            <div className="p-6 bg-white flex flex-col justify-between gap-4 border-t border-[#191970]/15">
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[#101828] uppercase tracking-tight group-hover:text-[#191970] transition-colors">
                  {client.name}
                </h3>
                <p className="font-sans text-xs text-[#101828]/75 line-clamp-2 mt-1">
                  {client.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#191970]/10 flex items-center justify-between font-mono text-xs">
                <div className="text-[#101828]">
                  {client.stats.views ? (
                    <span className="text-[#191970] font-bold">{client.stats.views} VIEWS</span>
                  ) : (
                    <span className="text-[#191970] font-bold">{client.stats.status}</span>
                  )}
                </div>
                <span className="text-[#191970] font-bold group-hover:translate-x-1 transition-transform">
                  VIEW CASE →
                </span>
              </div>
            </div>
          </Link>
        ))}

        {/* Closing All Projects Card */}
        <Link
          to="/work"
          className="group shrink-0 w-[240px] sm:w-[280px] bg-[#0D1B3E] rounded-xl border-2 border-[#191970] text-white p-6 flex flex-col justify-center items-center text-center transition-all shadow-xl hover:scale-[1.02]"
        >
          <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase mb-2 font-bold">
            FULL INDEX
          </span>
          <span className="font-display text-2xl uppercase tracking-tight mb-4 text-white">
            ALL 5 PROJECTS
          </span>
          <span className="font-mono text-xs font-bold bg-[#191970] text-white px-5 py-2.5 rounded uppercase tracking-widest shadow">
            VIEW INDEX →
          </span>
        </Link>
      </div>
    </div>
  );
}

