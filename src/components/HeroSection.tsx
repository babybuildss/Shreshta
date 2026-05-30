'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

// 6 premium AI-generated exterior images — ultra high quality, DLF/Lodha/Emaar level
const heroSlides = [
  { src: '/images/hero-exterior-1.jpg', alt: 'Mediterranean luxury mansion with grand entrance and stone facade' },
  { src: '/images/hero-exterior-2.jpg', alt: 'World-class luxury estate with limestone marble and reflecting pool' },
  { src: '/images/hero-exterior-3.jpg', alt: 'Ultra-modern glass and steel villa with infinity pool' },
  { src: '/images/hero-exterior-4.jpg', alt: 'Luxury high-rise residential tower with glass curtain wall' },
  { src: '/images/hero-exterior-5.jpg', alt: 'Grand colonial luxury mansion with fountain driveway' },
  { src: '/images/hero-exterior-6.jpg', alt: 'Ultra-luxury waterfront villa with infinity pool and ocean view' },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    mousePos.current = { x, y };
    const imgs = containerRef.current?.querySelectorAll('.hero-parallax-img');
    imgs?.forEach((img) => {
      gsap.to(img, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        duration: 1.2,
        ease: 'power2.out',
      });
    });
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Entrance animation
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tl = gsap.timeline({ delay: 0.3 });

    if (prefersReduced) {
      if (titleRef.current) titleRef.current.style.opacity = '1';
      if (subtitleRef.current) subtitleRef.current.style.opacity = '1';
      if (ctaRef.current) ctaRef.current.style.opacity = '1';
      return;
    }

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );
  }, []);

  // Auto-sliding — 5 second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#111111]"
      id="hero"
    >
      {/* Auto-slideshow — 6 premium AI-generated exterior images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out hero-parallax-img ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover scale-110"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />
        </div>
      ))}

      {/* Dark overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      {/* Side vignettes for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        {/* Small label above title */}
        <div
          ref={subtitleRef}
          className="mb-4 sm:mb-6"
        >
          <span
            className="inline-block px-4 py-1.5 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium border border-[#C8A96B]/30 text-[#C8A96B]/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Shreshta Developers &mdash; Est. 2005
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-white font-extrabold leading-[0.95] tracking-tighter max-w-5xl"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 'clamp(2rem, 8vw, 7rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Luxury Beyond
          <br />
          <span className="text-gradient-gold">Construction</span>
        </h1>

        <p
          className="mt-4 sm:mt-6 md:mt-8 text-white/70 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", opacity: 0 }}
          ref={(el) => {
            if (el) {
              el.style.opacity = '0';
              // Use GSAP to animate
              const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              if (prefersReduced) {
                el.style.opacity = '1';
              } else {
                gsap.fromTo(el,
                  { opacity: 0, y: 40 },
                  { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
                );
              }
            }
          }}
        >
          Building timeless destinations designed for future generations.
        </p>

        <a
          ref={ctaRef}
          href="#projects"
          className="mt-8 sm:mt-10 inline-flex items-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#C8A96B] text-[#111111] font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-[#D4B97A] transition-all duration-300 hover-gold-glow"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore Projects
        </a>
      </div>

      {/* Slide progress dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-500 ${
              index === activeSlide
                ? 'w-8 h-2 rounded-full bg-[#C8A96B]'
                : 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/50'
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-[5.5rem] right-6 sm:right-10 z-10 flex items-center gap-1">
        <span className="text-[#C8A96B] text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
          {String(activeSlide + 1).padStart(2, '0')}
        </span>
        <span className="text-white/30 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          / {String(heroSlides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <div className="animate-bounce">
          <ChevronDown className="text-[#C8A96B]" size={20} />
        </div>
      </div>
    </section>
  );
}
