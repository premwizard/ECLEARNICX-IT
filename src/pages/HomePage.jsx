import React from 'react';
import HeroSpline from '../components/Hero/HeroSpline';
import AboutSection from '../components/About/AboutSection';
import VisionMission from '../components/VisionMission/VisionMission';
import ServiceCards from '../components/Services/ServiceCards';
import ProjectStickyScroll from '../components/Projects/ProjectStickyScroll';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import TestimonialsSlider from '../components/Testimonials/TestimonialsSlider';
import TeamSection from '../components/Team/TeamSection';
import CareersSection from '../components/Careers/CareersSection';
import BottomCTA from '../components/BottomCTA/BottomCTA';

export default function HomePage() {
  return (
    <div className="relative w-full">
      <HeroSpline />
      <AboutSection />
      <VisionMission />
      <ServiceCards />
      <ProjectStickyScroll />
      <WhyChooseUs />
      <TestimonialsSlider />
      <TeamSection />
      <CareersSection />
      <BottomCTA />
    </div>
  );
}
