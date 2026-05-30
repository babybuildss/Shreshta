'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left panel — 40% */}
          <div className="lg:col-span-2 bg-[#1A1A1A] p-10 lg:p-16 flex flex-col justify-center">
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
                developments.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C8A96B]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#C8A96B]" size={16} />
                  </div>
                  <span className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Mumbai, India
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C8A96B]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C8A96B]" size={16} />
                  </div>
                  <span className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    +91 22 4000 5000
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#C8A96B]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#C8A96B]" size={16} />
                  </div>
                  <span className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    info@elysee.com
                  </span>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-3 py-2 border border-white/10 text-white/40 text-xs hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300 tracking-wider uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {social.slice(0, 2)}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right panel — 60% */}
          <div className="lg:col-span-3 bg-[#FAF9F6] p-10 lg:p-16">
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h3
                    className="text-[#1A1A1A] font-semibold text-2xl mb-8"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Schedule a Consultation
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <option value="royal-residences">Élysée Royal Residences</option>
                        <option value="sapphire-towers">The Sapphire Towers</option>
                        <option value="riviera-villas">Élysée Riviera Villas</option>
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
      </div>
    </section>
  );
}
