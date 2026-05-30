'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { Gem, Leaf, Crown } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Design Excellence',
    description:
      'Every project begins with a vision of perfection. Our in-house architects collaborate with world-renowned designers to create spaces that are both visually stunning and functionally brilliant.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Innovation',
    description:
      'We believe luxury and sustainability go hand in hand. From green building certifications to energy-efficient designs, every Shreshta project is built for the future.',
  },
  {
    icon: Crown,
    title: 'Premium Materials',
    description:
      'Only the finest materials find their way into our developments. Italian marble, German fixtures, and sustainable hardwoods — every detail speaks of uncompromising quality.',
  },
];

export default function ArchitecturePhilosophy() {
  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-32" id="philosophy">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Image — 60% width (3 cols) */}
          <ScrollReveal direction="left" duration={1.2} className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/luxury-interior-1.jpg"
                alt="Luxury interior architecture"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={90}
              />
              {/* Gold accent corner */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8A96B] to-transparent" />
            </div>
          </ScrollReveal>

          {/* Right: Text — 40% width (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                  Our Philosophy
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <h2
                className="text-[#1A1A1A] font-bold leading-tight mb-8"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Where Architecture
                <br />
                <span className="text-[#C8A96B]">Meets Art</span>
              </h2>
            </ScrollReveal>

            {/* Feature blocks */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} direction="right" delay={0.4 + index * 0.15}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#C8A96B]/30 flex items-center justify-center">
                      <feature.icon className="text-[#C8A96B]" size={20} />
                    </div>
                    <div>
                      <h4
                        className="text-[#1A1A1A] font-semibold text-lg mb-2"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {feature.title}
                      </h4>
                      <p
                        className="text-[#1A1A1A]/60 leading-relaxed text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
