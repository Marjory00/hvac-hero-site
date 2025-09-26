
// src/components/Sections/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import heroStyles from './HeroSection.module.css'; // Will be created next

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
      
      {/* Visual Placeholder for Image */}
      <div className={heroStyles.visualPlaceholder}>
        [Placeholder for Hero HVAC Van or Technician Image]
      </div>
    </section>
  );
};

export default HeroSection;