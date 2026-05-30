'use client';

import ScrollReveal from './ScrollReveal';
import { Award } from 'lucide-react';

const awards = [
  {
    title: 'Best Luxury Residential Project 2024',
    organization: 'Real Estate Awards India',
    year: '2024',
  },
  {
    title: 'Excellence in Architecture',
    organization: 'Design Awards Asia 2023',
    year: '2023',
  },
  {
    title: 'Sustainable Developer of the Year',
    organization: 'Green Building Council 2023',
    year: '2023',
  },
  {
    title: 'Most Trusted Real Estate Brand',
    organization: 'Consumer Choice Awards 2024',
    year: '2024',
  },
  {
    title: 'Innovation in Urban Development',
    organization: 'Property Awards International 2024',
    year: '2024',
  },
  {
    title: 'Best Integrated Township 2023',
    organization: 'National Real Estate Awards',
    year: '2023',
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-32" id="awards">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
              Recognition
            </span>
            <div className="gold-line" />
          </div>
          <h2
            className="text-[#1A1A1A] font-bold mb-4"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(1.75rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Awards & Recognition
          </h2>
        </ScrollReveal>

        {/* Awards grid — 3 columns on lg, 2 on md, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {awards.map((award, index) => (
            <ScrollReveal
              key={award.title}
              direction="up"
              delay={index * 0.08}
            >
              <div className="group p-6 sm:p-8 border border-[#E8E8E8] hover:border-[#C8A96B]/30 transition-all duration-500 hover-gold-glow relative overflow-hidden h-full">
                {/* Gold accent top */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C8A96B]/20 flex items-center justify-center group-hover:border-[#C8A96B]/50 transition-colors duration-500">
                    <Award className="text-[#C8A96B]" size={18} />
                  </div>
                  <span
                    className="inline-flex items-center px-3 py-1 text-[10px] sm:text-xs tracking-[0.15em] uppercase font-semibold rounded-full border border-[#C8A96B]/20 text-[#C8A96B]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {award.year}
                  </span>
                </div>

                <h3
                  className="text-[#1A1A1A] font-semibold text-base sm:text-lg mb-2 leading-snug group-hover:text-[#C8A96B] transition-colors duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {award.title}
                </h3>
                <p
                  className="text-[#1A1A1A]/50 text-xs sm:text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {award.organization}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
