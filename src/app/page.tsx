// src/app/page.tsx
import HeroSection from '@/components/Sections/HeroSection';
import FeatureHighlights from '@/components/Sections/FeatureHighlights';
import RateCalculator from '@/components/Sections/RateCalculator';
import Testimonials from '@/components/Sections/Testimonials';
import ServiceArea from '@/components/Sections/ServiceArea'; 
import FAQSection from '@/components/Sections/FAQSection';
import CTAFooterBar from '@/components/Sections/CTAFooterBar';

export default function Home() {
  return (
    <div className="home-page-layout">
      <HeroSection />
      <FeatureHighlights />
      <ServiceArea /> 
      <RateCalculator />
      <Testimonials /> 
      <FAQSection />
      {/* Portfolio Preview and Blog Preview sections would go here if created */}
      <CTAFooterBar /> 
    </div>
  );
}