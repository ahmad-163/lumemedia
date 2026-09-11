import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { clients } from '../data/clients';
import { ArrowLeft, ArrowRight, Eye, Users, Heart, Film, CheckCircle2, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/923707165674?text=Hi%20Lum%C3%A9%20Media%2C%20I%27d%20like%20to%20start%20a%20project.";

export default function WorkDetail() {
  const { slug } = useParams();

  const client = clients.find((c) => c.slug === slug);

  if (!client) {
    return <Navigate to="/work" replace />;
  }

  // Find next project
  const currentIndex = clients.findIndex((c) => c.slug === slug);
  const nextIndex = (currentIndex + 1) % clients.length;
  const nextClient = clients[nextIndex];

  return (
    <div className="pt-28 pb-24 bg-navy-950 text-cream-50 min-h-screen">
      {/* Top Breadcrumb Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream-200/70 hover:text-amber transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div
          className="bg-navy-800 border-2 rounded-2xl p-8 sm:p-14 shadow-2xl relative overflow-hidden space-y-6"
          style={{ borderColor: client.accentBorder || '#FF9A2E' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span
              className="text-xs font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded border"
              style={{
                borderColor: client.accentBorder || '#FF9A2E',
                color: client.accentBorder || '#FF9A2E'
              }}
            >
              {client.category}
            </span>
            {client.logo && (
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto object-contain"
              />
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-cream-50">
            {client.name}
          </h1>

          <p className="text-xs font-bold text-amber uppercase tracking-[0.14em]">
            Scope: {client.scope}
          </p>

          <p className="text-lg sm:text-xl text-cream-200/90 leading-relaxed italic font-serif max-w-3xl">
            "{client.description}"
          </p>

          {/* Scope Chips */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            {client.scopeChips?.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-md bg-navy-950 border border-navy-600 text-cream-50"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber" />
                <span>{chip}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Stats Block (If available) */}
      {client.stats && client.stats.views && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-navy-800 border border-navy-600 rounded-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber text-xs font-semibold uppercase">
                <Eye className="w-4 h-4" />
                <span>Month 1 Views</span>
              </div>
              <div className="font-mono text-3xl font-bold text-amber">
                {client.stats.views}
              </div>
              <div className="text-[11px] text-cream-200/60">Total Views</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cream-50 text-xs font-semibold uppercase">
                <Users className="w-4 h-4 text-amber" />
                <span>Reach</span>
              </div>
              <div className="font-mono text-3xl font-bold text-cream-50">
                {client.stats.reach}
              </div>
              <div className="text-[11px] text-cream-200/60">Accounts Reached</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cream-50 text-xs font-semibold uppercase">
                <Heart className="w-4 h-4 text-amber" />
                <span>Engagements</span>
              </div>
              <div className="font-mono text-3xl font-bold text-cream-50">
                {client.stats.engagements}
              </div>
              <div className="text-[11px] text-cream-200/60">Total Interactions</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cream-50 text-xs font-semibold uppercase">
                <Film className="w-4 h-4 text-amber" />
                <span>Output</span>
              </div>
              <div className="font-mono text-3xl font-bold text-cream-50">
                {client.stats.pieces}
              </div>
              <div className="text-[11px] text-cream-200/60">Pieces Published</div>
            </div>
          </div>
        </div>
      )}

      {/* Case Overview & Narrative */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-navy-800 border border-navy-600 rounded-xl p-8 sm:p-12 space-y-4">
          <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-amber">
            Project Overview & Strategy
          </h2>
          <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed">
            {client.clientOverview}
          </p>
        </div>
      </div>

      {/* Graphic Works Gallery */}
      {client.gallery && client.gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-cream-50 mb-8">
            Extracted Brand & Content Visuals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {client.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                className="bg-navy-800 border border-navy-600 rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={imgSrc}
                  alt={`${client.name} visual ${idx + 1}`}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Palette Card if present */}
      {client.paletteCard && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="font-display text-2xl font-bold text-cream-50 mb-4">
            Client Palette Reference Card
          </h2>
          <div className="bg-navy-800 border border-navy-600 rounded-xl p-4 max-w-xl">
            <img
              src={client.paletteCard}
              alt={`${client.name} palette card`}
              className="w-full h-auto rounded object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA & Next Project Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-navy-600/60 flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber text-navy-950 font-bold text-xs tracking-[0.14em] uppercase rounded shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Start a Project Like {client.name}</span>
        </a>

        <Link
          to={`/work/${nextClient.slug}`}
          className="inline-flex items-center gap-3 text-cream-50 hover:text-amber font-semibold text-sm transition-colors group"
        >
          <span>Next Project: <strong>{nextClient.name}</strong></span>
          <ArrowRight className="w-4 h-4 text-amber group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
