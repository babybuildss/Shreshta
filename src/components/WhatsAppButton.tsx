'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-hide tooltip after 5 seconds
  useEffect(() => {
    if (isVisible) {
      const showTimer = setTimeout(() => setIsTooltipVisible(true), 100);
      const hideTimer = setTimeout(() => setIsTooltipVisible(false), 5000);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible]);

  const phoneNumber = '912240005000'; // SHRESHTA contact number
  const message = encodeURIComponent('Hello! I am interested in SHRESHTA properties. Please share more details.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 left-4 sm:bottom-8 sm:left-8 z-40 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-full left-0 mb-3 ml-1 px-4 py-2.5 bg-white text-[#111111] rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 text-sm font-medium ${
          isTooltipVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span className="text-[#25D366] font-semibold">Chat with us!</span>
        <div className="absolute top-full left-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white" />
      </div>

      {/* WhatsApp Button */}
      <div className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300 group">
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 text-white"
          fill="currentColor"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.2l6.048-1.948A15.924 15.924 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.598c-.392 1.104-1.946 2.022-3.19 2.29-.852.18-1.964.324-5.716-1.23-4.794-1.988-7.88-6.866-8.12-7.182-.228-.316-1.908-2.542-1.908-4.848s1.208-3.448 1.636-3.924c.428-.476.936-.596 1.248-.596.312 0 .624.004.896.016.288.016.676-.108 1.058.808.392.94 1.336 3.244 1.456 3.476.12.228.2.496.04.796-.16.3-.24.488-.48.748-.24.26-.504.58-.72.78-.24.238-.488.496-.21.972.28.476 1.24 2.044 2.66 3.31 1.828 1.608 3.368 2.106 3.844 2.336.476.228.752.192 1.028-.12.288-.312 1.224-1.428 1.552-1.92.328-.492.656-.408 1.104-.244.448.164 2.848 1.344 3.34 1.588.492.244.82.364.944.564.12.2.12 1.156-.272 2.26z" />
        </svg>
      </div>
    </a>
  );
}
