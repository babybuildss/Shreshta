'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

// ALL uploaded images used in hero slideshow for maximum visual impact
const heroSlides = [
  { src: '/images/hero-1.jpg', alt: 'Luxury modern architecture tower' },
  { src: '/images/hero-2.jpg', alt: 'Premium residential exterior facade' },
  { src: '/images/hero-3.jpg', alt: 'Elegant building facade' },
  { src: '/images/featured-1.jpg', alt: 'Shreshta Royal Residences' },
  { src: '/images/featured-2.jpg', alt: 'The Sapphire Towers' },
  { src: '/images/featured-3.jpg', alt: 'Shreshta Riviera Villas' },
  { src: '/images/hero-bg.jpg', alt: 'Luxury residential skyline' },
  { src: '/images/luxury-interior-1.jpg', alt: 'Premium interior living' },
  { src: '/images/luxury-interior-2.jpg', alt: 'Designer interior space' },
  { src: '/images/luxury-interior-3.jpg', alt: 'Grand interior design' },
  { src: '/images/lifestyle-1.jpg', alt: 'Luxury community living' },
  { src: '/images/lifestyle-2.jpg', alt: 'Premium lifestyle experience' },
  { src: '/images/construction-1.jpg', alt: 'Construction excellence' },
  { src: '/images/ameneties-1.jpg', alt: 'World-class amenities' },
  { src: '/images/amenity-pool.jpg', alt: 'Infinity pool experience' },
  { src: '/images/amenity-clubhouse.jpg', alt: 'Grand clubhouse' },
  { src: '/images/amenity-gym.jpg', alt: 'Premium fitness center' },
  { src: '/images/amenity-garden.jpg', alt: 'Landscaped gardens' },
  { src: '/images/leader-1.jpg', alt: 'Leadership excellence' },
  { src: '/images/leader-2.jpg', alt: 'Executive team' },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    mousePos.current = { x, y };
    const imgs = containerRef.current?.querySelectorAll('.hero-parallax-img');
    imgs?.forEach((img) => {
      gsap.to(img, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        duration: 1,
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
      {/* Slideshow — all 20 images */}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
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
          ref={subtitleRef}
          className="mt-4 sm:mt-6 md:mt-8 text-white/70 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
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

      {/* Slide counter dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        <span className="text-white/40 text-xs mr-2" style={{ fontFamily: "'Inter', sans-serif" }}>
          {String(activeSlide + 1).padStart(2, '0')}
        </span>
        <span className="text-white/20 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
          / {String(heroSlides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="animate-bounce">
          <ChevronDown className="text-[#C8A96B]" size={20} />
        </div>
      </div>
    </section>
  );
}
