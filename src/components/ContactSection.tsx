'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/shreshtadevelopers',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/shreshtadevelopers',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/shreshtadev',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/shreshta-developers',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@shreshtadevelopers',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-transparent border-b border-[#E8E8E8] text-[#1A1A1A] outline-none transition-colors duration-300 focus:border-[#C8A96B] placeholder:text-[#1A1A1A]/30';

  const labelClasses =
    'block text-xs tracking-[0.15em] uppercase font-medium text-[#1A1A1A]/50 mb-2';

  return (
    <section className="bg-[#111111] py-20 lg:py-32" id="contact">
      <div className="max-w-[1400px] mx-auto">
        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left panel — 40% */}
          <div className="lg:col-span-2 bg-[#1A1A1A] p-6 sm:p-8 lg:p-16 flex flex-col justify-center">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                  Get in Touch
                </span>
              </div>

              <h2
                className="text-white font-bold leading-tight mb-6"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Let&apos;s Build Something
                <br />
                <span className="text-[#C8A96B]">Extraordinary</span>
              </h2>

              <p
                className="text-white/50 leading-relaxed mb-10 max-w-sm"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}
              >
                Schedule a private consultation with our team to explore our exclusive
                developments. Visit our headquarters or reach us through any channel.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-10">
                <a
                  href="https://maps.google.com/?q=Shreshta+Developers+Mumbai+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#C8A96B]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#C8A96B]/60 transition-colors duration-300">
                    <MapPin className="text-[#C8A96B]" size={16} />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Shreshta Tower, Nariman Point, Mumbai 400021
                  </span>
                </a>
                <a
                  href="tel:+912240005000"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#C8A96B]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#C8A96B]/60 transition-colors duration-300">
                    <Phone className="text-[#C8A96B]" size={16} />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    +91 22 4000 5000
                  </span>
                </a>
                <a
                  href="mailto:info@shreshta.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#C8A96B]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#C8A96B]/60 transition-colors duration-300">
                    <Mail className="text-[#C8A96B]" size={16} />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    info@shreshta.com
                  </span>
                </a>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#C8A96B] hover:text-[#C8A96B] hover:bg-[#C8A96B]/5 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right panel — 60% */}
          <div className="lg:col-span-3 bg-[#FAF9F6] p-6 sm:p-8 lg:p-16">
            <ScrollReveal direction="right">
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="text-[#C8A96B]" size={24} />
                    </div>
                    <h3
                      className="text-[#1A1A1A] font-semibold text-xl mb-2"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      Thank You
                    </h3>
                    <p className="text-[#1A1A1A]/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      We&apos;ll be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
                  <h3
                    className="text-[#1A1A1A] font-semibold text-2xl mb-8"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Schedule a Consultation
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className={labelClasses}>
                        Interested In
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className={`${inputClasses} cursor-pointer appearance-none`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C8A96B' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
                      >
                        <option value="">Select a project</option>
                        <option value="royal-residences">Shreshta Royal Residences</option>
                        <option value="sapphire-towers">The Sapphire Towers</option>
                        <option value="riviera-villas">Shreshta Riviera Villas</option>
                        <option value="other">Other Projects</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-[#C8A96B] text-[#111111] font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#D4B97A] transition-all duration-300 hover-gold-glow flex items-center justify-center gap-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Send size={16} />
                    Schedule Consultation
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-0 border-t border-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.85)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shreshta Developers Location - Mumbai, India"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
