'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  distance = 60,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (prefersReduced) {
      gsap.set(el, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const effectiveDirection = isMobile && (direction === 'left' || direction === 'right') ? 'up' : direction;
    const effectiveDistance = isMobile ? Math.min(distance, 30) : distance;

    const directionMap = {
      up: { y: effectiveDistance, x: 0 },
      down: { y: -effectiveDistance, x: 0 },
      left: { x: effectiveDistance, y: 0 },
      right: { x: -effectiveDistance, y: 0 },
    };

    const from = directionMap[effectiveDirection];

    gsap.set(el, {
      opacity: 0,
      ...from,
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
        });
      },
      once,
    });

    return () => {
      trigger.kill();
    };
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
