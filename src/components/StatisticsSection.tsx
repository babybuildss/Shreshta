'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 18, suffix: '', label: 'Years of Excellence' },
  { value: 15000, suffix: '+', label: 'Happy Families' },
  { value: 25, suffix: 'M+', label: 'Sq.ft. Developed' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.textContent = target.toLocaleString() + suffix;
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: 'power2.out',
          onUpdate: () => {
            if (target >= 1000) {
              const val = obj.val / 1000;
              if (suffix === 'M+') {
                el.textContent = val.toFixed(1) + suffix;
              } else {
                el.textContent = Math.floor(obj.val).toLocaleString() + suffix;
              }
            } else {
              el.textContent = Math.floor(obj.val).toLocaleString() + suffix;
            }
          },
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [target, suffix]);

  return <span ref={counterRef}>0</span>;
}

export default function StatisticsSection() {
  return (
    <section className="relative bg-[#111111] py-20 lg:py-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#C8A96B]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-20">
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Building India&apos;s <span className="text-[#C8A96B]">Future</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Numbers that reflect our commitment to excellence
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              direction="up"
              delay={index * 0.15}
              className="text-center"
            >
              <div className="mb-4">
                <span
                  className="text-[#C8A96B] font-bold counter-value"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    letterSpacing: '-0.03em',
                  }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p
                className="text-white/50 text-sm tracking-[0.1em] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/30 to-transparent" />
    </section>
  );
}
