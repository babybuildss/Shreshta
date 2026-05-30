'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function LifestyleSection() {
  return (
    <section className="relative bg-[#111111] py-16 sm:py-20 lg:py-0 min-h-[70vh] sm:min-h-0" id="lifestyle">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left image */}
        <div className="relative h-[35vh] min-h-[240px] sm:h-[45vh] lg:h-auto lg:min-h-screen">
          <ScrollReveal direction="left" duration={1.2}>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/lifestyle-1.jpg"
                alt="Luxury lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right image */}
        <div className="relative h-[35vh] min-h-[240px] sm:h-[45vh] lg:min-h-screen">
          <ScrollReveal direction="right" duration={1.2}>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/lifestyle-2.jpg"
                alt="Premium living spaces"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6">
        <ScrollReveal direction="up" delay={0.3} className="text-center w-full max-w-lg sm:max-w-2xl">
          <div className="bg-black/60 backdrop-blur-sm px-5 sm:px-10 md:px-16 py-6 sm:py-12 md:py-16 mx-auto">
            <h2
              className="text-white font-bold leading-tight mb-4 sm:mb-6"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 'clamp(1.5rem, 4vw, 3.25rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Live the Life
              <br />
              <span className="text-[#C8A96B]">You Deserve</span>
            </h2>
            <p
              className="text-white/70 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Experience a lifestyle that transcends the ordinary. From serene landscapes
              to vibrant community spaces, every Shreshta development is designed to nurture
              the art of fine living.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-[#C8A96B] font-medium text-xs sm:text-sm tracking-[0.1em] uppercase hover:gap-4 transition-all duration-300"
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
