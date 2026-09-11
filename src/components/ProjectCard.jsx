import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart3 } from 'lucide-react';

export default function ProjectCard({ client, onOpenModal }) {
  const isLink = client.hasFullCaseStudy;

  const cardContent = (
    <div
      data-cursor="View"
      className="group relative h-full bg-navy-800 border border-navy-600 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-amber/60 hover:shadow-xl hover:shadow-amber/5 transform hover:-translate-y-1"
    >
      {/* Top Accent Stroke */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: client.accentBorder || '#FF9A2E' }}
      />

      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Header Row: Category Badge & Logo */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded border"
              style={{
                borderColor: client.accentBorder || '#FF9A2E',
                color: client.accentBorder || '#FF9A2E',
                backgroundColor: 'rgba(255,255,255,0.03)'
              }}
            >
              {client.category}
            </span>
            {client.logo && (
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-7 w-auto object-contain max-w-[100px] filter brightness-110"
              />
            )}
          </div>

          {/* Title & Scope */}
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream-50 mb-2 group-hover:text-amber transition-colors flex items-center justify-between">
            <span>{client.name}</span>
            <div className="w-8 h-8 rounded-full bg-navy-950 flex items-center justify-center text-amber opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </h3>

          <p className="text-xs font-semibold text-amber uppercase tracking-wider mb-4">
            {client.scope}
          </p>

          <p className="text-sm text-cream-200/80 leading-relaxed italic mb-6">
            "{client.description}"
          </p>
        </div>

        {/* Stats Grid or Scope Chips */}
        <div>
          {client.stats && client.stats.views ? (
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-navy-600/60 bg-navy-950/40 p-3 rounded-lg">
              <div>
                <div className="text-xl font-bold text-amber font-mono tracking-tight">
                  {client.stats.views}
                </div>
                <div className="text-[11px] text-cream-200/60 font-medium">Mo. 1 Views</div>
              </div>
              <div>
                <div className="text-xl font-bold text-cream-50 font-mono tracking-tight">
                  {client.stats.reach}
                </div>
                <div className="text-[11px] text-cream-200/60 font-medium">Accounts Reached</div>
              </div>
              <div>
                <div className="text-sm font-bold text-cream-50 font-mono">
                  {client.stats.engagements}
                </div>
                <div className="text-[10px] text-cream-200/50">Engagements</div>
              </div>
              <div>
                <div className="text-sm font-bold text-cream-50 font-mono">
                  {client.stats.pieces}
                </div>
                <div className="text-[10px] text-cream-200/50">Pieces Published</div>
              </div>
            </div>
          ) : (
            <div className="pt-4 border-t border-navy-600/60 flex flex-wrap gap-2">
              {client.scopeChips?.slice(0, 4).map((chip, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded bg-navy-950 border border-navy-600 text-cream-200/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Link Prompt */}
      <div className="px-6 py-3 bg-navy-950/80 border-t border-navy-600/60 flex items-center justify-between text-xs text-cream-200/60 font-medium">
        <span className="flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-amber" />
          <span>{isLink ? "Explore Full Case Study" : "View Overview"}</span>
        </span>
        <span className="text-amber group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );

  if (isLink) {
    return <Link to={`/work/${client.slug}`} className="block h-full">{cardContent}</Link>;
  }

  return (
    <div onClick={() => onOpenModal && onOpenModal(client)} className="cursor-pointer h-full">
      {cardContent}
    </div>
  );
}
