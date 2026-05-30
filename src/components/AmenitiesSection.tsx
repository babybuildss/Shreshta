'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const amenities = [
  {
    title: 'Infinity Pool',
    image: '/images/amenity-pool.jpg',
    description: 'Rooftop infinity pools with panoramic skyline views',
    icon: '🏊',
  },
  {
    title: 'Grand Clubhouse',
    image: '/images/amenity-clubhouse.jpg',
    description: '50,000 sq.ft. clubhouse with premium lounges',
    icon: '🏛️',
  },
  {
    title: 'Fitness Center',
    image: '/images/amenity-gym.jpg',
    description: 'State-of-the-art gym with personal trainers',
    icon: '💪',
  },
  {
    title: 'Landscaped Gardens',
    image: '/images/amenity-garden.jpg',
    description: '8 acres of manicured gardens and walking trails',
    icon: '🌿',
  },
  {
    title: 'Sports Complex',
    image: '/images/ameneties-1.jpg',
    description: 'Tennis courts, basketball, and cricket facilities',
    icon: '🎾',
  },
  {
    title: 'Rooftop Lounge',
    image: '/images/luxury-interior-2.jpg',
    description: 'Private rooftop spaces for exclusive gatherings',
    icon: '🍸',
  },
];

export default function AmenitiesSection() {
  return (
    <section className="bg-[#111111] py-16 sm:py-20 lg:py-32" id="amenities">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-10 sm:mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C8A96B] text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
              Living Spaces
            </span>
            <div className="gold-line" />
          </div>
          <h2
            className="text-white font-bold mb-3 sm:mb-4"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(1.75rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Curated Amenities
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            Every detail designed to elevate your everyday experience
          </p>
        </ScrollReveal>

        {/* Amenities grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <ScrollReveal
              key={amenity.title}
              direction="up"
              delay={index * 0.1}
              duration={0.8}
            >
              <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                {/* Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C8A96B]/20 flex items-center justify-center text-base sm:text-lg">
                  {amenity.icon}
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                  <h3
                    className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {amenity.title}
                  </h3>
                  <p
                    className="text-white/60 text-xs sm:text-sm leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 delay-100 touch-reveal"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {amenity.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
