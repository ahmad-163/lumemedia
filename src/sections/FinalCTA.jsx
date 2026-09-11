import React from 'react';
import { ArrowUpRight, Mail, MessageCircle, Clock } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/923707165674?text=Hi%20Lum%C3%A9%20Media%2C%20I%27d%20like%20to%20start%20a%20project.";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-navy-950 text-cream-50 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-navy-800 border-2 border-amber/40 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-2xl shadow-navy-950">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber/40 bg-amber/10 text-amber text-xs font-bold tracking-[0.14em] uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>Same-day reply during working hours</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream-50 max-w-3xl mx-auto leading-tight">
            Ready to give your startup a presence that <span className="text-amber italic font-serif">stands out?</span>
          </h2>

          <p className="text-lg sm:text-xl text-cream-200/80 leading-relaxed font-sans max-w-2xl mx-auto">
            Get in touch with Lumé Media to start the conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber hover:bg-amber-dim text-navy-950 font-bold text-sm tracking-[0.14em] uppercase rounded-lg shadow-xl hover:shadow-amber/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-navy-950" />
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="mailto:itslumemedia@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-cream-200/40 hover:border-amber text-cream-50 hover:text-amber font-semibold text-sm tracking-[0.14em] uppercase rounded-lg transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-amber" />
              <span>Contact Directly</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-cream-200/60 flex items-center justify-center gap-4">
            <span>WhatsApp: +92 370 7165674</span>
            <span>•</span>
            <span>Email: itslumemedia@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
