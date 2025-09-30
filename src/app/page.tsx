// src/app/page.tsx
import React from 'react';

// Import all Home page sections (assuming they are all in components/Sections/)
import HomeHero from '@/components/Sections/HomeHero';
import ServicesOverview from '@/components/Sections/ServicesOverview';
import Testimonials from '@/components/Sections/Testimonials';
import EstimatorBanner from '@/components/Sections/EstimatorBanner';
import LocalContact from '@/components/Sections/LocalContact';

// Define metadata here if needed

const HomePage: React.FC = () => {
    return (
        <main>
            {/* 1. Hero Section */}
            <HomeHero /> 

            {/* 2. Services Overview */}
            <ServicesOverview />

            {/* 3. Social Proof */}
            <Testimonials />

            {/* 4. Estimator Promotion Banner */}
            <EstimatorBanner /> 

            {/* 5. Local SEO & Contact */}
            <LocalContact />
            
            {/* Removed: BlogHighlights component and its import */}
        </main>
    );
};

export default HomePage;