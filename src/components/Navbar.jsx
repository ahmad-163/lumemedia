import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
const logoCream = '/assets/logo-cream.png';

const WHATSAPP_LINK = "https://wa.me/923707165674?text=Hi%20Lum%C3%A9%20Media%2C%20I%27d%20like%20to%20start%20a%20project.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
    
    // Handle hash scroll if navigated with hash
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleNavAnchor = (e, anchorId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${anchorId}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-600 py-3 shadow-lg'
            : 'bg-navy-950/80 backdrop-blur-sm border-b border-navy-600/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <img
              src={logoCream}
              alt="Lumé Media Logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-[0.14em] uppercase">
            <a
              href="#work"
              onClick={(e) => handleNavAnchor(e, 'work')}
              className="text-cream-200 hover:text-amber transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-amber after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Work
            </a>

            <a
              href="#services"
              onClick={(e) => handleNavAnchor(e, 'services')}
              className="text-cream-200 hover:text-amber transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-amber after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Services
            </a>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1.5 text-cream-200 hover:text-amber transition-colors py-1 focus:outline-none"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180 text-amber' : ''}`} />
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-navy-800 border border-navy-600 rounded-md shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    to="/about/story"
                    className="block px-4 py-2.5 text-xs text-cream-200 hover:bg-navy-600/50 hover:text-amber transition-colors"
                  >
                    Our Story →
                  </Link>
                  <Link
                    to="/about/founders"
                    className="block px-4 py-2.5 text-xs text-cream-200 hover:bg-navy-600/50 hover:text-amber transition-colors"
                  >
                    Founders →
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber hover:bg-amber-dim text-navy-950 font-semibold text-xs tracking-[0.14em] uppercase rounded transition-all duration-300 shadow-md hover:shadow-amber/20 transform hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-amber text-navy-950 font-bold text-xs tracking-wider uppercase rounded"
            >
              Start
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cream-50 hover:text-amber focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-navy-950 pt-24 px-6 pb-12 flex flex-col justify-between md:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-6">
            <a
              href="#work"
              onClick={(e) => handleNavAnchor(e, 'work')}
              className="font-display text-3xl font-bold text-cream-50 hover:text-amber transition-colors border-b border-navy-800 pb-3"
            >
              Work
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavAnchor(e, 'services')}
              className="font-display text-3xl font-bold text-cream-50 hover:text-amber transition-colors border-b border-navy-800 pb-3"
            >
              Services
            </a>
            <div className="space-y-4 border-b border-navy-800 pb-4">
              <span className="text-xs font-semibold tracking-[0.14em] text-amber uppercase">About Lumé</span>
              <Link
                to="/about/story"
                className="block font-display text-2xl font-bold text-cream-200 hover:text-amber pl-3"
              >
                Our Story →
              </Link>
              <Link
                to="/about/founders"
                className="block font-display text-2xl font-bold text-cream-200 hover:text-amber pl-3"
              >
                Founders & Philosophy →
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 bg-amber text-navy-950 font-bold text-sm tracking-[0.14em] uppercase rounded shadow-lg"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <p className="text-center text-xs text-cream-200/60">
              Same-day reply during working hours
            </p>
          </div>
        </div>
      )}
    </>
  );
}
