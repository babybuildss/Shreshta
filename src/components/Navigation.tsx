'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectionTheme, setSectionTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section theme the nav is over for proper contrast
  useEffect(() => {
    const sections = [
      { id: 'hero', theme: 'dark' as const },
      { id: 'projects', theme: 'dark' as const },
      { id: 'philosophy', theme: 'light' as const },
      { id: 'lifestyle', theme: 'dark' as const },
      { id: 'about', theme: 'light' as const },
      { id: 'contact', theme: 'dark' as const },
      { id: 'leadership', theme: 'light' as const },
    ];

    const handleScrollTheme = () => {
      const navBottom = window.scrollY + 80;
      let currentTheme: 'dark' | 'light' = 'dark';

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= navBottom) {
          currentTheme = sections[i].theme;
          break;
        }
      }
      setSectionTheme(currentTheme);
    };

    window.addEventListener('scroll', handleScrollTheme, { passive: true });
    handleScrollTheme();
    return () => window.removeEventListener('scroll', handleScrollTheme);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // When scrolled, always use dark nav. When not scrolled, use section-aware theme.
  const isDark = scrolled || sectionTheme === 'dark';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#111111]/95 shadow-lg shadow-black/10'
            : isDark
            ? 'bg-[#111111]/40'
            : 'bg-white/95 shadow-md shadow-black/5'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="relative z-10">
              <span
                className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.15em]"
                style={{
                  fontFamily: "'Manrope', serif",
                  color: '#C8A96B',
                }}
              >
                SHRESHTA
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-300"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(26,26,26,0.85)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C8A96B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.85)' : 'rgba(26,26,26,0.85)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center px-5 xl:px-6 py-2.5 text-sm tracking-[0.1em] uppercase font-medium border transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#C8A96B',
                  borderColor: '#C8A96B',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C8A96B';
                  e.currentTarget.style.color = '#111111';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#C8A96B';
                }}
              >
                Schedule Visit
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              style={{ color: isDark ? '#ffffff' : '#1A1A1A' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#111111] flex flex-col items-center justify-center px-6 safe-top safe-bottom"
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl sm:text-3xl font-bold tracking-[0.1em] uppercase text-white hover:text-[#C8A96B] transition-colors duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center px-8 py-3 text-sm tracking-[0.1em] uppercase font-medium border border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#111111] transition-all duration-300"
              >
                Schedule Visit
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
