'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const developments = [
  {
    title: 'Élysée Horizon',
    location: 'Pune, Maharashtra',
    image: '/images/featured-1.jpg',
    slug: 'horizon',
  },
  {
    title: 'The Grand Meridian',
    location: 'Hyderabad, Telangana',
    image: '/images/luxury-interior-1.jpg',
    slug: 'grand-meridian',
  },
  {
    title: 'Élysée Waterfront',
    location: 'Kochi, Kerala',
    image: '/images/hero-bg.jpg',
    slug: 'waterfront',
  },
  {
    title: 'The Ivory Heights',
    location: 'Delhi NCR',
    image: '/images/luxury-interior-2.jpg',
    slug: 'ivory-heights',
  },
  {
    title: 'Élysée Palm Villas',
    location: 'Chennai, Tamil Nadu',
    image: '/images/lifestyle-1.jpg',
    slug: 'palm-villas',
  },
];

export default function SignatureDevelopments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      const progress = scrollLeft / maxScroll;
      const index = Math.round(progress * (developments.length - 1));
      setActiveIndex(index);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12 lg:mb-16">
        <ScrollReveal direction="up" className="flex items-start justify-between flex-col lg:flex-row lg:items-end gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                Explore
              </span>
            </div>
            <h2
              className="text-[#1A1A1A] font-bold leading-tight"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Signature Developments
            </h2>
          </div>
          {/* Navigation dots */}
          <div className="flex gap-2">
            {developments.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-[#C8A96B] w-8' : 'bg-[#E8E8E8]'
                }`}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = scrollRef.current.scrollWidth / developments.length;
                    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
                  }
                }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-6 lg:pl-[calc((100vw-1400px)/2+40px)] gap-6 pr-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {developments.map((dev, index) => (
          <div
            key={dev.title}
            className="flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-[calc(40vw)] snap-start group"
          >
            <div className="relative overflow-hidden aspect-[4/3] cursor-pointer">
              <Image
                src={dev.image}
                alt={dev.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="40vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p
                  className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-medium mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {dev.location}
                </p>
                <h3
                  className="text-white font-bold text-xl lg:text-2xl mb-3 group-hover:text-[#C8A96B] transition-colors duration-300"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {dev.title}
                </h3>
                <a
                  href={`/projects/${dev.slug}`}
                  className="inline-flex items-center gap-2 text-white/70 text-sm tracking-wider uppercase hover:text-[#C8A96B] transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Details →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
