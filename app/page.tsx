'use client';

import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import PersonalProjects from './components/PersonalProjects';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      <HeroSection />
      <WorkExperience />
      <PersonalProjects />
      <ContactSection />
    </main>
  );
}
