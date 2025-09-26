// src/components/Sections/HeroSection.tsx
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import heroStyles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={heroStyles.hero}>
      <div className={`${heroStyles.heroContent} container`}>
        {/* Main headline - CRITICAL for SEO */}
        <Heading level={1} className={heroStyles.headline}>
          Rapid, Reliable HVAC Repair & Installation
        </Heading>
        
        {/* Sub-headline / Value Proposition */}
        <p className={heroStyles.subheadline}>
          Your **HVAC Hero** is on the way! We offer 24/7 emergency service and transparent upfront pricing across the tri-county area.
        </p>

        {/* Primary Call to Action */}
        <div className={heroStyles.ctaGroup}>
          <Link href="/contact" passHref legacyBehavior>
            <Button variant="primary" as="a">
              Get A Free Quote Now!
            </Button>
          </Link>
          
          {/* Secondary CTA */}
          <a href="tel:555HVAC-HERO" className={heroStyles.phoneLink}>
            Or Call Us 24/7: (555) HVAC-HERO
          </a>
        </div>
      </div>
      
      {/* ✅ Image Integration:
        Using Next.js Image component for optimization.
        'fill' property makes it fill the parent, 'objectFit' ensures it covers the area.
        'priority' loads it eagerly as it's above the fold.
      */}
      <div className={heroStyles.heroImageContainer}>
        <Image
          src="/images/hvac-hero-van.png" // Adjust path if your image name/type is different
          alt="HVAC Hero technician standing next to a branded service van outside a modern home"
          fill // Make image fill the parent container
          priority // Prioritize loading for LCP
          sizes="(max-width: 992px) 100vw, 50vw" // Responsive image sizes for different viewports
          quality={80} // Reduce quality slightly for faster load
          style={{ objectFit: 'cover' }} // Ensures image covers the area without distorting aspect ratio
        />
      </div>
    </section>
  );
};

export default HeroSection;