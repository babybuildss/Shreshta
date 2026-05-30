'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const footerLinks = {
  projects: [
    { label: 'Shreshta Royal Residences', href: '/projects/royal-residences' },
    { label: 'The Sapphire Towers', href: '/projects/sapphire-towers' },
    { label: 'Shreshta Riviera Villas', href: '/projects/riviera-villas' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Awards', href: '#awards' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white relative">
      {/* Gold top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <span
              className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-[#C8A96B] block mb-4 sm:mb-6"
              style={{ fontFamily: "'Manrope', serif" }}
            >
              SHRESHTA
            </span>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Crafting timeless destinations designed for future generations.
              Where architecture meets art, and luxury meets life.
            </p>
          </div>

          {/* Projects Links */}
          <div>
            <h4
              className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#C8A96B] mb-4 sm:mb-6 font-semibold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Projects
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#C8A96B] mb-4 sm:mb-6 font-semibold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4
              className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#C8A96B] mb-4 sm:mb-6 font-semibold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social icons */}
            <div className="flex gap-3 sm:gap-4">
              {['FB', 'TW', 'IG', 'LI'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 text-[10px] sm:text-xs hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/30 text-[10px] sm:text-xs tracking-wider">
            © {new Date().getFullYear()} Shreshta Developers. All rights reserved.
          </p>
          <p className="text-white/40 text-[10px] sm:text-xs tracking-wider flex items-center gap-1.5">
            Made with <span className="text-red-400">💝</span> by{' '}
            <a
              href="https://chaicodestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A96B] hover:text-[#D4B97A] transition-colors duration-300 font-medium"
            >
              ChaiCodeStudio
            </a>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#C8A96B] text-[#111111] flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-[#D4B97A] ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
