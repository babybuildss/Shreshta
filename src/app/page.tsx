'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DeveloperIntro from '@/components/DeveloperIntro';
import FeaturedProjects from '@/components/FeaturedProjects';
import SignatureDevelopments from '@/components/SignatureDevelopments';
import ArchitecturePhilosophy from '@/components/ArchitecturePhilosophy';
import LifestyleSection from '@/components/LifestyleSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import ConstructionExcellence from '@/components/ConstructionExcellence';
import StatisticsSection from '@/components/StatisticsSection';
import AwardsSection from '@/components/AwardsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LeadershipSection from '@/components/LeadershipSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <DeveloperIntro />
      <FeaturedProjects />
      <SignatureDevelopments />
      <ArchitecturePhilosophy />
      <LifestyleSection />
      <AmenitiesSection />
      <ConstructionExcellence />
      <StatisticsSection />
      <AwardsSection />
      <TestimonialsSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
