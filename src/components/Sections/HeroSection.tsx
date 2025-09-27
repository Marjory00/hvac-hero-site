// src/components/Sections/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import heroStyles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={heroStyles.hero}>
      
      {/* This uses 'heroTextOverlay' to center the text and apply a readable background 
          layer, sitting on top of the image. The 'container' class handles max-width. */}
      <div className={`${heroStyles.heroTextOverlay} container`}> 
        
        <Heading level={1} className={heroStyles.headline}>
          Rapid, Reliable HVAC Repair & Installation
        </Heading>
        
        <p className={heroStyles.subheadline}>
          Your **HVAC Hero** is on the way! We offer 24/7 emergency service and transparent upfront pricing across the tri-county area.
        </p>

        <div className={heroStyles.ctaGroup}>
          <Link href="/contact">
            <Button variant="primary">
              Get A Free Quote Now!
            </Button>
          </Link>
          
          <a href="tel:555HVAC-HERO" className={heroStyles.phoneLink}>
            Or Call Us 24/7: (555) HVAC-HERO
          </a>
        </div>
      </div>
      
      {/* Image Integration: This wrapper must fill 100% of the section in CSS */}
      <div className={heroStyles.heroImageContainer}>
        <Image
          src="/images/hvac-pipes.jpg" 
          alt="HVAC pipes and equipment inside a building"
          fill // Essential for full-bleed background effect
          priority
          quality={100} 
          sizes="100vw" // Tells Next.js to deliver an image sized for the full viewport width

          style={{ objectFit: 'cover' }} 
        />
      </div>
    </section>
  );
};

export default HeroSection;