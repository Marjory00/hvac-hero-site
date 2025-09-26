// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Sections/Hero';
import RateCalculator from '@/components/Sections/RateCalculator';
import Testimonials from '@/components/Sections/Testimonials'; // <-- NEW
import CTAFooterBar from '@/components/Sections/CTAFooterBar'; // <-- NEW
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';

// ... (features data)

export default function Home() {
  return (
    <div className="home-page-layout">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. FEATURE HIGHLIGHTS */}
      {/* ... (Existing Feature Highlights Section) ... */}

      {/* 3. SERVICE RATE CALCULATOR (Client Component) */}
      <RateCalculator />

      {/* 4. TESTIMONIALS (Trust Building) */}
      <Testimonials /> 
      
      {/* 5. PORTFOLIO PREVIEW (Driving Interest) */}
      <section style={{ padding: 'var(--space-xl)', textAlign: 'center', backgroundColor: 'var(--color-light-gray)' }}>
        <Heading level={2}>Our Commitment to Quality</Heading>
        <p>See the detailed case studies behind our successful projects.</p>
        <Link href="/projects" style={{ textDecoration: 'none', marginTop: 'var(--space-md)', display: 'inline-block' }}>
          <Button variant="secondary">Browse Our Portfolio</Button>
        </Link>
      </section>
      
      {/* 6. GLOBAL CTA BAR (Final Conversion Push) */}
      <CTAFooterBar /> 
    </div>
  );
}