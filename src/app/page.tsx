// src/app/page.tsx
import HeroSection from '@/components/Sections/HeroSection';
import FeatureHighlights from '@/components/Sections/FeatureHighlights';
// REMOVED: import RateCalculator from '@/components/Sections/RateCalculator'; 
import Testimonials from '@/components/Sections/Testimonials'; 
import ServiceArea from '@/components/Sections/ServiceArea'; 
import FAQSection from '@/components/Sections/FAQSection';
import CTAFooterBar from '@/components/Sections/CTAFooterBar';

export default function Home() {
  return (
    <main className="home-page-layout"> {/* Changed <div> to <main> for better semantics */}
      <HeroSection />
      <FeatureHighlights />
      <ServiceArea /> 
      {/* REMOVED: <RateCalculator /> */}
      <Testimonials /> 
      <FAQSection />
      {/* Portfolio Preview and Blog Preview sections would go here if created */}
      <CTAFooterBar /> 
    </main>
  );
}