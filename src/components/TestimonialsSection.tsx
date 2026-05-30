'use client';

import ScrollReveal from './ScrollReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The attention to detail in our Shreshta home is unlike anything we\'ve experienced. From the imported marble flooring to the smart home integration, every aspect reflects true luxury.',
    name: 'Rajesh & Priya Sharma',
    location: 'Shreshta Royal Residences',
  },
  {
    quote:
      'Shreshta didn\'t just build us a house — they crafted a lifestyle. The amenities, the community, the location — everything exceeds expectations.',
    name: 'Vikram Mehta',
    location: 'The Sapphire Towers',
  },
  {
    quote:
      'We\'ve owned several properties, but our Shreshta villa in Goa is something truly special. It\'s where architecture meets paradise.',
    name: 'Anita & Deepak Kapoor',
    location: 'Shreshta Riviera Villas',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#111111] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
              Testimonials
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
            What Our Residents Say
          </h2>
        </ScrollReveal>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              direction="up"
              delay={index * 0.15}
            >
              <div className="group p-8 lg:p-10 border border-white/10 hover:border-[#C8A96B]/20 transition-all duration-500 h-full flex flex-col">
                {/* Gold quote icon */}
                <Quote className="text-[#C8A96B]/40 mb-6 group-hover:text-[#C8A96B]/70 transition-colors duration-500" size={36} />

                <blockquote
                  className="text-white/80 leading-relaxed mb-8 flex-grow"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-white/10 pt-6">
                  <p
                    className="text-[#C8A96B] font-semibold"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-white/40 text-sm mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonial.location}
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
