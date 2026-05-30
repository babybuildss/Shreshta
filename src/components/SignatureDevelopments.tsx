'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const developments = [
  {
    title: 'Shreshta Horizon',
    location: 'Pune, Maharashtra',
    image: '/images/exterior-1.jpg',
    slug: 'horizon',
  },
  {
    title: 'The Grand Meridian',
    location: 'Hyderabad, Telangana',
    image: '/images/exterior-2.jpg',
    slug: 'grand-meridian',
  },
  {
    title: 'Shreshta Waterfront',
    location: 'Kochi, Kerala',
    image: '/images/exterior-3.jpg',
    slug: 'waterfront',
  },
  {
    title: 'The Ivory Heights',
    location: 'Delhi NCR',
    image: '/images/exterior-4.jpg',
    slug: 'ivory-heights',
  },
  {
    title: 'Shreshta Palm Villas',
    location: 'Chennai, Tamil Nadu',
    image: '/images/hero-bg.jpg',
    slug: 'palm-villas',
  },
];

export default function SignatureDevelopments() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const isPaused = useRef(false);

  // Auto-sliding with GSAP — infinite smooth loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate items for infinite loop
    const totalWidth = track.scrollWidth / 2;
    const duration = 30; // seconds for full loop

    animationRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: duration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          return parseFloat(String(x)) % totalWidth;
        }),
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  // Pause on hover
  const handleMouseEnter = () => {
    if (animationRef.current) animationRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (animationRef.current) animationRef.current.resume();
  };

  // Touch: pause on touch, resume after
  const handleTouchStart = () => {
    if (animationRef.current) animationRef.current.pause();
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      if (animationRef.current) animationRef.current.resume();
    }, 2000);
  };

  return (
    <section className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12 lg:mb-16">
        <ScrollReveal direction="up" className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
              Explore
            </span>
          </div>
          <h2
            className="text-[#1A1A1A] font-bold leading-tight"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Signature Developments
          </h2>
        </ScrollReveal>
      </div>

      {/* Auto-sliding container */}
      <div
        ref={scrollRef}
        className="overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 w-max"
        >
          {/* Original items */}
          {developments.map((dev) => (
            <div
              key={dev.title}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={dev.image}
                  alt={dev.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="38vw"
                  quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <p
                    className="text-[#C8A96B] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium mb-1 sm:mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {dev.location}
                  </p>
                  <h3
                    className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 group-hover:text-[#C8A96B] transition-colors duration-300"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {dev.title}
                  </h3>
                  <a
                    href={`/projects/${dev.slug}`}
                    className="inline-flex items-center gap-2 text-white/70 text-xs sm:text-sm tracking-wider uppercase hover:text-[#C8A96B] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicated items for seamless infinite loop */}
          {developments.map((dev) => (
            <div
              key={`dup-${dev.title}`}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={dev.image}
                  alt={dev.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="38vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <p
                    className="text-[#C8A96B] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium mb-1 sm:mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {dev.location}
                  </p>
                  <h3
                    className="text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 group-hover:text-[#C8A96B] transition-colors duration-300"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {dev.title}
                  </h3>
                  <a
                    href={`/projects/${dev.slug}`}
                    className="inline-flex items-center gap-2 text-white/70 text-xs sm:text-sm tracking-wider uppercase hover:text-[#C8A96B] transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
