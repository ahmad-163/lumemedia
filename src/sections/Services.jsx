import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { Layers } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-navy-950 text-cream-50 border-b border-navy-600/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHAT WE DO"
          headline="What We Do. Under One Roof."
          subhead="Rather than piecing together freelancers, you get an all-in-one creative partner handling your entire brand presence."
        />

        {/* Customized Packages Banner */}
        <div className="bg-navy-800 border border-amber/30 rounded-xl p-5 sm:p-6 mb-12 flex items-center gap-4 max-w-4xl mx-auto shadow-lg">
          <div className="w-10 h-10 rounded-full bg-amber/10 border border-amber flex items-center justify-center text-amber shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed italic">
            <strong className="text-amber not-italic font-semibold">Customized Packages:</strong> We provide full-cycle pre-production, production, post-production, and ongoing social management. ...and where it makes sense, we bundle these into a single customized package built around your specific goals.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
