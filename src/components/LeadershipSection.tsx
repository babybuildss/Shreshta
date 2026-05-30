'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const leaders = [
  {
    name: 'Arjun Mehta',
    title: 'Chairman & Founder',
    description:
      "With over 25 years in real estate, Arjun's vision has been the driving force behind Shreshta's rise to prominence.",
    image: '/images/leader-1.jpg',
  },
  {
    name: 'Meera Desai',
    title: 'Chief Operating Officer',
    description:
      'Meera oversees all operations with a keen eye for quality and a passion for sustainable development.',
    image: '/images/leader-2.jpg',
  },
  {
    name: 'Vikram Patel',
    title: 'Chief Architect',
    description:
      'Vikram brings international architectural expertise, having designed landmark projects across Asia and Europe.',
    image: '/images/leader-3.jpg',
    isAbstract: false,
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-32" id="leadership">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
              The Team
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
            Our Leadership
          </h2>
        </ScrollReveal>

        {/* Leaders grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <ScrollReveal
              key={leader.name}
              direction="up"
              delay={index * 0.15}
            >
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                      leader.isAbstract ? 'object-top' : 'object-top'
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={90}
                  />
                  {/* Gold accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8A96B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <h3
                  className="text-[#1A1A1A] font-semibold text-xl mb-1 group-hover:text-[#C8A96B] transition-colors duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {leader.name}
                </h3>
                <p
                  className="text-[#C8A96B] text-sm tracking-[0.1em] uppercase font-medium mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {leader.title}
                </p>
                <p
                  className="text-[#1A1A1A]/50 leading-relaxed text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {leader.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
