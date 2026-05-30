'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const keyValues = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '18', label: 'Cities Across India' },
  { value: '2.5M+', label: 'Sq.ft. Developed' },
  { value: '15,000+', label: 'Happy Families' },
];

export default function DeveloperIntro() {
  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-32" id="about">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <ScrollReveal direction="left" duration={1.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/exterior-2.jpg"
                alt="Shreshta luxury development"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              {/* Gold accent frame */}
              <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-[#C8A96B]" />
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-[#C8A96B]" />
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                  Est. 2005 — Three Decades of Excellence
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <h2
                className="text-[#1A1A1A] font-bold leading-tight mb-8"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Crafting Legacies,
                <br />
                <span className="text-[#C8A96B]">Not Just Buildings</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p
                className="text-[#1A1A1A]/70 leading-[1.8] mb-10 max-w-[520px]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
              >
                For nearly two decades, Shreshta has been at the forefront of luxury real estate
                development. Every project we undertake is a testament to our unwavering commitment
                to architectural excellence, sustainable design, and creating spaces that transcend
                ordinary living. Our vision is rooted in the belief that true luxury lies in the
                details — from the foundation we lay to the communities we build.
              </p>
            </ScrollReveal>

            {/* Key values grid */}
            <ScrollReveal direction="right" delay={0.5}>
              <div className="grid grid-cols-2 gap-6 border-t border-[#E8E8E8] pt-8">
                {keyValues.map((item) => (
                  <div key={item.label}>
                    <p
                      className="text-[#C8A96B] font-bold mb-1 counter-value"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      }}
                    >
                      {item.value}
                    </p>
                    <p
                      className="text-[#1A1A1A]/50 text-sm tracking-wider uppercase"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
