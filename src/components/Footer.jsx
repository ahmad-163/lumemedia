import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MessageCircle, Mail, Instagram } from 'lucide-react';
const logoCream = '/assets/logo-cream.png';

const WHATSAPP_LINK = "https://wa.me/923707165674?text=Hi%20Lum%C3%A9%20Media%2C%20I%27d%20like%20to%20start%20a%20project.";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream-50 border-t border-navy-600/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-amber">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-200/80">
              <li>
                <a href="#work" className="hover:text-amber transition-colors">Selected Work</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber transition-colors">Services</a>
              </li>
              <li>
                <Link to="/about/story" className="hover:text-amber transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/about/founders" className="hover:text-amber transition-colors">Founders & Philosophy</Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-amber">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/70">
              <li><a href="#services" className="hover:text-amber transition-colors">01. Branding & Logo Design</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">02. Social Media Management</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">03. Content Strategy & Creation</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">04. Graphic Design & Brand Visuals</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">05. Video Editing & Motion Graphics</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">06. SEO (Search Optimization)</a></li>
              <li><a href="#services" className="hover:text-amber transition-colors">07. Paid Advertising Campaigns</a></li>
            </ul>
          </div>

          {/* Col 3: Impact & Reach */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-amber">
              Impact & Reach
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-200/80 leading-relaxed">
              <li>
                <strong className="text-cream-50 font-medium">Community Partner:</strong> Al Khidmat Foundation
              </li>
              <li>
                <strong className="text-cream-50 font-medium">Based:</strong> Lahore, Pakistan
              </li>
              <li>
                <strong className="text-cream-50 font-medium">Growth Market:</strong> Gulf & Dubai Region
              </li>
              <li>
                <strong className="text-cream-50 font-medium">Positioning:</strong> Startups & Early-Stage Brands
              </li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.14em] uppercase text-amber">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-cream-50 hover:text-amber transition-colors p-2.5 rounded bg-navy-800 border border-navy-600"
              >
                <MessageCircle className="w-4 h-4 text-amber" />
                <div>
                  <div className="font-semibold">WhatsApp (Primary)</div>
                  <div className="text-[11px] text-cream-200/60">+92 370 7165674</div>
                </div>
              </a>

              <a
                href="mailto:itslumemedia@gmail.com"
                className="flex items-center gap-3 text-xs text-cream-50 hover:text-amber transition-colors p-2.5 rounded bg-navy-800 border border-navy-600"
              >
                <Mail className="w-4 h-4 text-amber" />
                <span className="font-medium">itslumemedia@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-navy-800 text-cream-200 hover:text-amber hover:border-amber border border-navy-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logoCream} alt="Lumé Media" className="h-7 w-auto" />
            <span className="text-xs tracking-[0.2em] text-cream-200/60 uppercase font-sans">
              Design. Edit. Market.
            </span>
          </div>

          <div className="text-xs text-cream-200/60 text-center">
            © {currentYear} Lumé Media. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-cream-200 hover:text-amber group transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-amber/60 group-hover:border-amber flex items-center justify-center text-amber group-hover:bg-amber/10 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
