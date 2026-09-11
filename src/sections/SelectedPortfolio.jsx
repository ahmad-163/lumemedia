import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { clients } from '../data/clients';
import { ArrowRight } from 'lucide-react';

export default function SelectedPortfolio() {
  // First 3 clients featured on home
  const featuredClients = clients.slice(0, 3);

  return (
    <section id="work" className="py-20 md:py-28 bg-navy-950 text-cream-50 border-b border-navy-600/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SELECTED PORTFOLIO"
          headline="Proven Work. Measurable Presence."
          subhead="Explore how we help startup founders and emerging businesses dominate their visual categories."
        />

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredClients.map((client) => (
            <ProjectCard key={client.id} client={client} />
          ))}
        </div>

        {/* Ghost link to /work */}
        <div className="text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-cream-200/30 hover:border-amber text-cream-50 hover:text-amber font-semibold text-xs tracking-[0.14em] uppercase rounded transition-all duration-300 group"
          >
            <span>View All 5 Projects</span>
            <ArrowRight className="w-4 h-4 text-amber group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
