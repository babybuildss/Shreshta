'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Shreshta Royal Residences',
    location: 'Mumbai, Maharashtra',
    status: 'Ongoing',
    description:
      'An iconic tower rising above the Mumbai skyline, offering 3 & 4 BHK luxury residences with panoramic sea views, private elevators, and world-class amenities.',
    image: '/images/featured-1.jpg',
    reverse: false,
    slug: 'royal-residences',
  },
  {
    title: 'The Sapphire Towers',
    location: 'Bangalore, Karnataka',
    status: 'Ready to Move',
    description:
      'Twin glass towers set amidst lush greenery in Bangalore&apos;s most coveted neighborhood, featuring smart homes, rooftop gardens, and a grand clubhouse.',
    image: '/images/featured-2.jpg',
    reverse: true,
    slug: 'sapphire-towers',
  },
  {
    title: 'Shreshta Riviera Villas',
    location: 'Goa, India',
    status: 'Ongoing',
    description:
      'Beachfront villas that redefine coastal luxury. Private pools, Mediterranean-inspired architecture, and the serene beauty of Goa at your doorstep.',
    image: '/images/featured-3.jpg',
    reverse: false,
    slug: 'riviera-villas',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#111111] py-20 lg:py-32" id="projects">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
              Portfolio
            </span>
            <div className="gold-line" />
          </div>
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Featured Projects
          </h2>
          <p className="text-white/50 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Discover our signature developments that redefine luxury living
          </p>
        </ScrollReveal>

        {/* Projects */}
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            direction={project.reverse ? 'right' : 'left'}
            delay={0.1}
            className="mb-16 lg:mb-28 last:mb-0"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                project.reverse ? 'lg:direction-rtl' : ''
              }`}
              style={{
                direction: project.reverse ? 'rtl' : 'ltr',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]" style={{ direction: 'ltr' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
                {/* Status badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span
                    className="inline-flex items-center px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-semibold rounded-full"
                    style={{
                      background: project.status === 'Ready to Move' ? '#C8A96B' : 'rgba(200,169,107,0.15)',
                      color: project.status === 'Ready to Move' ? '#111111' : '#C8A96B',
                      border: project.status === 'Ready to Move' ? 'none' : '1px solid #C8A96B',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div style={{ direction: 'ltr' }}>
                <p
                  className="text-[#C8A96B] text-sm tracking-[0.15em] uppercase font-medium mb-3"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.location}
                </p>
                <h3
                  className="text-white font-bold mb-5 leading-tight"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/50 leading-relaxed mb-8 max-w-lg"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' }}
                >
                  {project.description}
                </p>
                <a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[#C8A96B] font-medium text-sm tracking-[0.1em] uppercase hover:gap-4 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Project
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
