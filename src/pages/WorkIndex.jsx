import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { clients } from '../data/clients';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/923707165674?text=Hi%20Lum%C3%A9%20Media%2C%20I%27d%20like%20to%20start%20a%20project.";

export default function WorkIndex() {
  const [selectedClientModal, setSelectedClientModal] = useState(null);

  return (
    <div className="pt-32 pb-24 bg-navy-950 text-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT PORTFOLIO INDEX"
          headline="Selected Work & Client Relationships."
          subhead="From sports facilities to travel consultancies and social impact initiatives — exploring how Lumé Media transforms ideas into market presence."
        />

        {/* All 5 Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client) => (
            <ProjectCard
              key={client.id}
              client={client}
              onOpenModal={(c) => setSelectedClientModal(c)}
            />
          ))}
        </div>
      </div>

      {/* Copy-Only Modal for Non-Detail Clients (Empower Through Literacy / iPhoners) */}
      {selectedClientModal && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-navy-800 border-2 border-amber/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedClientModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-navy-950 text-cream-200 hover:text-amber transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-navy-600 pb-4">
              {selectedClientModal.logo && (
                <img
                  src={selectedClientModal.logo}
                  alt={selectedClientModal.name}
                  className="h-8 w-auto object-contain"
                />
              )}
              <div>
                <h3 className="font-display text-2xl font-bold text-cream-50">
                  {selectedClientModal.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber">
                  {selectedClientModal.category}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-cream-200/90 leading-relaxed">
              <p className="italic font-serif text-base text-cream-50">
                "{selectedClientModal.description}"
              </p>
              <p>{selectedClientModal.clientOverview}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-amber mb-3">
                Scope of Work Delivered
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedClientModal.scopeChips?.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded bg-navy-950 border border-navy-600 text-cream-50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber" />
                    <span>{chip}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-navy-600 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-cream-200/60">
                Dedicated case study page coming soon
              </span>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber text-navy-950 font-bold text-xs tracking-wider uppercase rounded shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire About Similar Work</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
