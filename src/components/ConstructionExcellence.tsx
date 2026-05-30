'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const timelineSteps = [
  {
    phase: 'Phase 1',
    title: 'Vision & Planning',
    description:
      'Every project starts with meticulous planning, site analysis, and architectural vision.',
  },
  {
    phase: 'Phase 2',
    title: 'Design & Engineering',
    description:
      'Our engineers and architects collaborate to create structurally sound, aesthetically brilliant designs.',
  },
  {
    phase: 'Phase 3',
    title: 'Construction & Quality',
    description:
      'With rigorous quality checks at every stage, we ensure every detail meets our exacting standards.',
  },
  {
    phase: 'Phase 4',
    title: 'Delivery & Beyond',
    description:
      'We deliver on time, every time. Post-delivery support ensures your investment is protected.',
  },
];

export default function ConstructionExcellence() {
  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
              Our Process
            </span>
            <div className="gold-line" />
          </div>
          <h2
            className="text-[#1A1A1A] font-bold mb-4"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Construction Excellence
          </h2>
          <p className="text-[#1A1A1A]/50 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            From blueprint to reality — our commitment to quality at every stage
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C8A96B] via-[#C8A96B]/30 to-[#C8A96B]" />

            <div className="space-y-12 lg:space-y-16">
              {timelineSteps.map((step, index) => (
                <ScrollReveal
                  key={step.title}
                  direction="left"
                  delay={index * 0.15}
                  className="relative pl-12"
                >
                  {/* Gold dot */}
                  <div
                    className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-[#C8A96B] bg-[#FAF9F6] flex items-center justify-center z-10"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#C8A96B]" />
                  </div>

                  <span
                    className="inline-block text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold mb-2 px-3 py-1 border border-[#C8A96B]/20 rounded-full"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.phase}
                  </span>
                  <h3
                    className="text-[#1A1A1A] font-semibold text-xl mb-3"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#1A1A1A]/60 leading-relaxed max-w-md"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-8">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/construction-1.jpg"
                  alt="Construction excellence"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/luxury-interior-3.jpg"
                  alt="Premium quality materials"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8A96B] to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
