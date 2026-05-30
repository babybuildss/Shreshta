'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function LifestyleSection() {
  return (
    <section className="relative bg-[#111111] py-20 lg:py-0" id="lifestyle">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] lg:min-h-screen">
        {/* Left image */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          <ScrollReveal direction="left" duration={1.2}>
            <div className="relative w-full h-full min-h-[50vh] lg:min-h-full overflow-hidden">
              <Image
                src="/images/lifestyle-1.jpg"
                alt="Luxury lifestyle"
                fill
                className="object-cover"
                sizes="50vw"
                quality={90}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right image */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          <ScrollReveal direction="right" duration={1.2}>
            <div className="relative w-full h-full min-h-[50vh] lg:min-h-full overflow-hidden">
              <Image
                src="/images/lifestyle-2.jpg"
                alt="Premium living spaces"
                fill
                className="object-cover"
                sizes="50vw"
                quality={90}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <ScrollReveal direction="up" delay={0.3} className="text-center px-6">
          <div className="bg-black/50 backdrop-blur-sm px-10 md:px-16 py-12 md:py-16 max-w-2xl">
            <h2
              className="text-white font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Live the Life
              <br />
              <span className="text-[#C8A96B]">You Deserve</span>
            </h2>
            <p
              className="text-white/70 leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
            >
              Experience a lifestyle that transcends the ordinary. From serene landscapes
              to vibrant community spaces, every Shreshta development is designed to nurture
              the art of fine living.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-[#C8A96B] font-medium text-sm tracking-[0.1em] uppercase hover:gap-4 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore Lifestyle →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
