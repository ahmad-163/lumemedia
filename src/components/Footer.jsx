import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F1F4F8] pt-12 pb-8 px-4 md:px-12 relative overflow-hidden">
      {/* Footer Main Container Card */}
      <div className="max-w-7xl mx-auto bg-[#0D1B3E] text-white rounded-2xl p-8 md:p-14 shadow-2xl relative overflow-hidden border border-[#191970]/30">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#191970]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Top CTA Banner */}
        <div className="pb-12 mb-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#F1F4F8] tracking-widest uppercase bg-[#191970] px-3 py-1 rounded">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACCEPTING NEW BRANDS FOR THIS QUARTER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              READY TO ELEVATE YOUR BRAND PRESENCE?
            </h2>
            <p className="font-sans text-sm md:text-base text-white/70">
              Let's turn your vision into high-impact media, motion graphics, and content strategy that commands attention.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              className="bg-[#191970] text-white font-mono text-xs md:text-sm font-bold uppercase tracking-wider px-8 py-4 hover:bg-[#2525A8] transition-all rounded shadow-lg"
            >
              START A PROJECT →
            </Link>
            <a
              href="https://wa.me/923707165674"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white font-mono text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-4 hover:bg-white/10 transition-all rounded"
            >
              WHATSAPP US
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 relative z-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo-cream.png"
                alt="Lumé Media"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="font-sans text-sm text-white/75 leading-relaxed max-w-sm">
              Lumé Media delivers premium, purpose-driven video editing, motion design, and digital marketing that empowers startups with clarity, confidence, and creative direction.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] text-white/70">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">LAHORE (HQ)</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded">DUBAI & GULF REACH</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs text-[#F1F4F8] font-bold uppercase tracking-widest text-white/50">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">HOME</Link>
              </li>
              <li>
                <Link to="/work" className="text-white/80 hover:text-white transition-colors">SELECTED WORK</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">CAPABILITIES</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">ABOUT & MANIFESTO</Link>
              </li>
              <li>
                <Link to="/start" className="text-emerald-400 font-bold hover:underline">START A PROJECT →</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-[#F1F4F8] font-bold uppercase tracking-widest text-white/50">
              CORE CAPABILITIES
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/80">
              <li>• Video Editing &amp; Post-Production</li>
              <li>• Motion Graphics &amp; 3D Visuals</li>
              <li>• Brand Identity &amp; Creative Strategy</li>
              <li>• Social Media Growth Retainers</li>
              <li>• Non-Profit Campaign Storytelling</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-[#F1F4F8] font-bold uppercase tracking-widest text-white/50">
              GET IN TOUCH
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-white/50 block text-[10px]">EMAIL US:</span>
                <a href="mailto:itslumemedia@gmail.com" className="text-white hover:text-emerald-300 underline">
                  itslumemedia@gmail.com
                </a>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">WHATSAPP DIRECT:</span>
                <a href="https://wa.me/923707165674" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
                  +92 370 7165674
                </a>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">RESPONSE TIME:</span>
                <span className="text-white/80">Same-day reply during PKT working hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-white/60 relative z-10">
          <div>
            © {currentYear} LUMÉ MEDIA. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span className="tracking-widest uppercase">DESIGN. EDIT. MARKET.</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-[#191970] flex items-center justify-center transition-all font-bold"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

