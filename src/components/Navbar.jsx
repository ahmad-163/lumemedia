import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', path: '/work', number: '01' },
    { label: 'SERVICES', path: '/services', number: '02' },
    { label: 'ABOUT', path: '/about', number: '03' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#F1F4F8]/90 backdrop-blur-md border-b border-[#191970]/15 px-4 md:px-8 py-3.5 flex items-center justify-between transition-all">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <img
          src="/lumemedialogo.png"
          alt="Lumé Media"
          className="h-8 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 flex items-center gap-1.5 font-medium ${
                isActive ? 'text-[#191970] font-bold border-b-2 border-[#191970]' : 'text-[#101828]/80 hover:text-[#191970]'
              }`}
            >
              <span className="text-[#191970]/50 text-[10px]">{link.number}</span>
              {link.label}
            </Link>
          );
        })}

        {/* Start a Project CTA Button */}
        <Link
          to="/start"
          className="bg-[#191970] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-[#0D1B3E] transition-all shadow-md active:translate-x-0.5 active:translate-y-0.5 rounded-sm"
        >
          START A PROJECT →
        </Link>
      </div>

      {/* Mobile Hamburger / Close Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-[#191970]/20 text-[#101828] font-mono text-xs tracking-widest focus:outline-none bg-white rounded-sm"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? (
          <span className="text-[#191970] font-bold text-base">✕</span>
        ) : (
          <div className="flex flex-col gap-1 w-5">
            <span className="h-0.5 bg-[#101828] w-full" />
            <span className="h-0.5 bg-[#191970] w-full" />
            <span className="h-0.5 bg-[#101828] w-full" />
          </div>
        )}
      </button>

      {/* Full-Screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-[99] bg-[#F1F4F8] flex flex-col justify-between p-6 md:hidden overflow-y-auto border-t border-[#191970]/20">
          <div className="space-y-6">
            <div className="font-mono text-xs text-[#191970] tracking-widest uppercase pb-3 border-b border-[#191970]/20 flex justify-between items-center font-bold">
              <span>LUMÉ MEDIA DIRECTORY</span>
              <span className="animate-pulse">● ONLINE</span>
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group border-b border-[#191970]/10 pb-4 flex justify-between items-end hover:text-[#191970] transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#191970] font-bold">{link.number}</span>
                    <span className="font-display text-2xl tracking-tighter uppercase text-[#101828] group-hover:text-[#191970]">
                      {link.label}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#101828]/40">{link.path}</span>
                </Link>
              ))}

              <Link
                to="/start"
                className="group border-b border-[#191970]/10 pb-4 flex justify-between items-end"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#191970] font-bold">04</span>
                  <span className="font-display text-2xl tracking-tighter uppercase text-[#191970]">
                    START A PROJECT
                  </span>
                </div>
                <span className="font-mono text-xs text-[#191970]">/start →</span>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-[#191970]/20 space-y-3 font-mono text-xs text-[#101828]/70">
            <div className="flex justify-between">
              <span>PRODUCED BY:</span>
              <span className="text-[#101828] font-semibold">LUMÉ MEDIA STUDIO</span>
            </div>
            <div className="flex justify-between">
              <span>LOCATIONS:</span>
              <span className="text-[#101828] font-semibold">LAHORE / DUBAI & GULF</span>
            </div>
            <div className="flex justify-between">
              <span>CONTACT:</span>
              <a
                href="https://wa.me/923707165674"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#191970] underline font-bold"
              >
                WHATSAPP →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

