// src/app/page.tsx (Home Page Server Component)

// Ensure this path is correct and matches the file's physical location
import HeroSection from '@/components/Sections/HeroSection';
import FeatureHighlights from '@/components/Sections/FeatureHighlights'; // <-- CORRECT IMPORT
import ServicesOverview from '@/components/Sections/ServicesOverview'; 
import Testimonials from '@/components/Sections/Testimonials'; 
import FAQSection from '@/components/Sections/FAQSection';
import CTAFooterBar from '@/components/Sections/CTAFooterBar';

export default function Home() {
    return (
        <main className="home-page-layout">
            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Feature Highlights: This is the correct, top-level placement 
            for immediate trust-building on the home page. */}
            <FeatureHighlights /> 
            
            {/* 3. Core Offerings */}
            <ServicesOverview /> 
            
            {/* 4. Trust/Social Proof */}
            <Testimonials /> 
            
            {/* 5. Authority/Information */}
            <FAQSection />

            {/* 6. Final Conversion Point */}
            <CTAFooterBar /> 
        </main>
    );
}