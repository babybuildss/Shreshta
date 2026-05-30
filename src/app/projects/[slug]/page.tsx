'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import {
  MapPin,
  Clock,
  ArrowLeft,
  Download,
  CheckCircle,
  Building2,
  TreePine,
  Waves,
  Dumbbell,
  Shield,
  Phone,
  Mail,
  Send,
} from 'lucide-react';

const projectData: Record<string, {
  title: string;
  location: string;
  status: string;
  priceRange: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  amenities: string[];
  locationAdvantages: string[];
  configTypes: string[];
}> = {
  'royal-residences': {
    title: 'Élysée Royal Residences',
    location: 'Mumbai, Maharashtra',
    status: 'Ongoing',
    priceRange: '₹3.5 Cr - ₹12 Cr',
    tagline: 'Where the Skyline Meets the Sea',
    description:
      'Rising majestically above the Mumbai skyline, Élysée Royal Residences offers an unparalleled living experience. Each residence is meticulously crafted with imported marble flooring, smart home automation, and private elevators. Floor-to-ceiling windows frame breathtaking panoramic views of the Arabian Sea, creating a living canvas that changes with every sunset. The project features exclusive 3 & 4 BHK configurations with world-class amenities, including an infinity pool, grand clubhouse, and landscaped gardens.',
    heroImage: '/images/featured-1.jpg',
    galleryImages: ['/images/luxury-interior-1.jpg', '/images/luxury-interior-2.jpg', '/images/luxury-interior-3.jpg'],
    amenities: ['Infinity Pool', 'Grand Clubhouse', 'Private Gym', 'Landscaped Gardens', 'Children\'s Play Area', 'Concierge Service', 'Smart Home Automation', 'Private Elevators'],
    locationAdvantages: ['500m from the waterfront promenade', '2km from business district', 'Adjacent to premium shopping', '15 min from international airport', 'Metro station within walking distance', 'Premium schools & hospitals nearby'],
    configTypes: ['3 BHK — 2,200 sq.ft.', '3.5 BHK — 2,800 sq.ft.', '4 BHK — 3,500 sq.ft.', 'Penthouse — 5,000 sq.ft.'],
  },
  'sapphire-towers': {
    title: 'The Sapphire Towers',
    location: 'Bangalore, Karnataka',
    status: 'Ready to Move',
    priceRange: '₹2.8 Cr - ₹8.5 Cr',
    tagline: 'Twin Towers of Tranquility',
    description:
      'Set amidst the lush greenery of Bangalore\'s most coveted neighborhood, The Sapphire Towers are twin glass towers that redefine urban luxury living. Each home is a masterpiece of modern design, featuring open-concept layouts, rooftop gardens, and seamless indoor-outdoor living spaces. The grand 50,000 sq.ft. clubhouse serves as the social heart of the community, offering premium lounges, a state-of-the-art fitness center, and entertainment zones.',
    heroImage: '/images/featured-2.jpg',
    galleryImages: ['/images/amenity-pool.jpg', '/images/amenity-clubhouse.jpg', '/images/amenity-gym.jpg'],
    amenities: ['Rooftop Infinity Pool', '50,000 sq.ft. Clubhouse', 'Fitness Center', 'Tennis Courts', 'Jogging Trails', 'Co-working Space', 'Rooftop Restaurant', 'EV Charging Stations'],
    locationAdvantages: ['Located in prime Bangalore South', 'Adjacent to 200-acre green belt', '5 min from tech corridor', 'Premium retail & dining precinct', 'Top international schools nearby', 'Excellent metro connectivity'],
    configTypes: ['2 BHK — 1,600 sq.ft.', '3 BHK — 2,400 sq.ft.', '3.5 BHK — 3,000 sq.ft.', '4 BHK Duplex — 4,200 sq.ft.'],
  },
  'riviera-villas': {
    title: 'Élysée Riviera Villas',
    location: 'Goa, India',
    status: 'Ongoing',
    priceRange: '₹5 Cr - ₹15 Cr',
    tagline: 'Mediterranean Luxury on Indian Shores',
    description:
      'Nestled along the pristine coastline of Goa, Élysée Riviera Villas bring Mediterranean-inspired architecture to India\'s most beloved beach destination. Each villa features a private pool, lush tropical gardens, and breathtaking ocean views. The Mediterranean design language blends seamlessly with Goan charm — terracotta roofs, whitewashed walls, and open courtyards create an atmosphere of relaxed elegance. With only 45 exclusive villas, privacy and exclusivity are guaranteed.',
    heroImage: '/images/featured-3.jpg',
    galleryImages: ['/images/lifestyle-1.jpg', '/images/lifestyle-2.jpg', '/images/amenity-garden.jpg'],
    amenities: ['Private Pool per Villa', 'Beach Club Access', 'Spa & Wellness Center', 'Water Sports Hub', 'Organic Farm', 'Concierge Service', 'Gated Community', '24/7 Security'],
    locationAdvantages: ['Direct beach access', '5 min from popular beaches', '20 min from Goa airport', 'Close to vibrant nightlife', 'Adjacent to golf course', 'Near heritage Portuguese quarter'],
    configTypes: ['3 BHK Villa — 3,000 sq.ft.', '4 BHK Villa — 4,500 sq.ft.', '5 BHK Villa with Pool — 6,000 sq.ft.', 'Beachfront Penthouse — 7,500 sq.ft.'],
  },
};

const amenityIcons: Record<string, React.ElementType> = {
  'Infinity Pool': Waves,
  'Rooftop Infinity Pool': Waves,
  'Private Pool per Villa': Waves,
  'Grand Clubhouse': Building2,
  '50,000 sq.ft. Clubhouse': Building2,
  'Beach Club Access': Building2,
  'Private Gym': Dumbbell,
  'Fitness Center': Dumbbell,
  'Landscaped Gardens': TreePine,
  '24/7 Security': Shield,
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug];
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Project Not Found
        </h1>
        <p className="text-white/50 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#C8A96B] font-medium hover:gap-4 transition-all duration-300"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const inputClasses =
    'w-full px-4 py-3.5 bg-transparent border-b border-[#E8E8E8] text-[#1A1A1A] outline-none transition-colors duration-300 focus:border-[#C8A96B] placeholder:text-[#1A1A1A]/30';
  const labelClasses = 'block text-xs tracking-[0.15em] uppercase font-medium text-[#1A1A1A]/50 mb-2';

  return (
    <main className="bg-[#FAF9F6]">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-nav shadow-lg shadow-black/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <span
                className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-[#C8A96B]"
                style={{ fontFamily: "'Manrope', serif" }}
              >
                ÉLYSÉE
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 text-sm tracking-[0.1em] uppercase hover:text-[#C8A96B] transition-colors duration-300"
            >
              <ArrowLeft size={16} /> Back
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[60vh] lg:h-[80vh] mt-20">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal direction="up">
              <span
                className="inline-block px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-semibold rounded-full mb-4"
                style={{
                  background: project.status === 'Ready to Move' ? '#C8A96B' : 'rgba(200,169,107,0.15)',
                  color: project.status === 'Ready to Move' ? '#111111' : '#C8A96B',
                  border: project.status === 'Ready to Move' ? 'none' : '1px solid #C8A96B',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {project.status}
              </span>
              <h1
                className="text-white font-bold leading-tight mb-2"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                {project.title}
              </h1>
              <p className="text-[#C8A96B] text-lg lg:text-xl mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                {project.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#C8A96B]" />
                  {project.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-[#C8A96B]" />
                  {project.status}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Description */}
            <ScrollReveal direction="up" className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                  Overview
                </span>
              </div>
              <p
                className="text-[#1A1A1A]/70 leading-[1.8] text-[1.05rem] mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {project.description}
              </p>

              {/* Configuration types */}
              <h3
                className="text-[#1A1A1A] font-semibold text-xl mb-6"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Available Configurations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.configTypes.map((config) => (
                  <div
                    key={config}
                    className="flex items-center gap-3 p-4 border border-[#E8E8E8] hover:border-[#C8A96B]/30 transition-colors duration-300"
                  >
                    <CheckCircle className="text-[#C8A96B] flex-shrink-0" size={18} />
                    <span className="text-[#1A1A1A]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {config}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Price & Quick Info */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-[#111111] p-8 lg:p-10 text-white">
                <h3
                  className="text-white font-semibold text-xl mb-8"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Quick Facts
                </h3>
                <div className="space-y-6">
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-white/40 text-xs tracking-[0.15em] uppercase mb-2">Price Range</p>
                    <p className="text-[#C8A96B] text-2xl font-bold" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {project.priceRange}
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-white/40 text-xs tracking-[0.15em] uppercase mb-2">Location</p>
                    <p className="text-white text-sm flex items-center gap-2">
                      <MapPin size={14} className="text-[#C8A96B]" /> {project.location}
                    </p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-white/40 text-xs tracking-[0.15em] uppercase mb-2">Status</p>
                    <p className="text-white text-sm flex items-center gap-2">
                      <Clock size={14} className="text-[#C8A96B]" /> {project.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {project.amenities.slice(0, 6).map((amenity) => (
                        <span
                          key={amenity}
                          className="px-3 py-1 text-xs border border-[#C8A96B]/20 text-[#C8A96B]/80 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="#inquiry"
                  className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 bg-[#C8A96B] text-[#111111] font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#D4B97A] transition-all duration-300"
                >
                  <Download size={16} className="mr-2" /> Download Brochure
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#FAF9F6] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-4 mb-10">
              <div className="gold-line" />
              <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                Gallery
              </span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {project.galleryImages.map((img, index) => (
              <ScrollReveal key={img} direction="up" delay={index * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-[#111111] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal direction="up" className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-line" />
              <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                Amenities
              </span>
              <div className="gold-line" />
            </div>
            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              }}
            >
              World-Class Amenities
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {project.amenities.map((amenity, index) => {
              const IconComp = amenityIcons[amenity] || Building2;
              return (
                <ScrollReveal key={amenity} direction="up" delay={index * 0.08}>
                  <div className="p-6 border border-white/10 hover:border-[#C8A96B]/20 transition-colors duration-300 text-center group">
                    <IconComp className="text-[#C8A96B] mx-auto mb-3" size={24} />
                    <p
                      className="text-white/80 text-sm font-medium group-hover:text-[#C8A96B] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {amenity}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="bg-[#FAF9F6] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-4 mb-10">
              <div className="gold-line" />
              <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                Location
              </span>
            </div>
            <h2
              className="text-[#1A1A1A] font-bold mb-10"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              }}
            >
              Prime Location Advantages
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.locationAdvantages.map((advantage, index) => (
              <ScrollReveal key={advantage} direction="up" delay={index * 0.1}>
                <div className="flex items-start gap-4 p-5 border border-[#E8E8E8] hover:border-[#C8A96B]/30 transition-colors duration-300">
                  <MapPin className="text-[#C8A96B] flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-[#1A1A1A]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {advantage}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-[#111111] py-16 lg:py-24" id="inquiry">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="gold-line" />
                  <span className="text-[#C8A96B] text-xs tracking-[0.2em] uppercase font-semibold">
                    Get Started
                  </span>
                </div>
                <h2
                  className="text-white font-bold leading-tight mb-6"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  }}
                >
                  Interested in {project.title}?
                </h2>
                <p className="text-white/50 leading-relaxed mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Fill out the form and our team will get back to you within 24 hours with detailed
                  information about available units, pricing, and scheduling a site visit.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Phone size={16} className="text-[#C8A96B]" />
                    +91 22 4000 5000
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Mail size={16} className="text-[#C8A96B]" />
                    info@elysee.com
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C8A96B]/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="text-[#C8A96B]" size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      Thank You
                    </h3>
                    <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      We&apos;ll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="detail-name" className={labelClasses}>Name</label>
                      <input id="detail-name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className={inputClasses} required />
                    </div>
                    <div>
                      <label htmlFor="detail-email" className={labelClasses}>Email</label>
                      <input id="detail-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className={inputClasses} required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="detail-phone" className={labelClasses}>Phone</label>
                    <input id="detail-phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="detail-message" className={labelClasses}>Message</label>
                    <textarea id="detail-message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="I'm interested in..." className={`${inputClasses} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-[#C8A96B] text-[#111111] font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#D4B97A] transition-all duration-300 hover-gold-glow flex items-center justify-center gap-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <Send size={16} /> Send Inquiry
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/">
            <span className="text-xl font-bold tracking-[0.15em] text-[#C8A96B]" style={{ fontFamily: "'Manrope', serif" }}>
              ÉLYSÉE
            </span>
          </Link>
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Élysée Developers. All rights reserved.
          </p>
          <Link href="/" className="text-[#C8A96B] text-sm hover:text-[#D4B97A] transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
