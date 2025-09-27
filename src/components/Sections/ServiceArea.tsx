// src/components/Sections/ServiceArea.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';
import styles from './ServiceArea.module.css';

// Mock data for the service area
const primaryServiceCities = ['City A', 'City B', 'City C', 'City D', 'City E'];
const primaryServiceCounties = ['County X', 'County Y'];

const ServiceArea: React.FC = () => {
  return (
    <section className={`${styles.serviceAreaSection} section-padding`}>
      <div className="container">
        
        <div className={styles.contentGrid}>
          
          <div className={styles.textContent}>
            <Heading level={2} className={styles.sectionTitle}>
              Proudly Serving Your Local Community
            </Heading>
            <p className={styles.introText}>
              HVAC Hero provides certified, rapid-response heating and cooling services across the entire tri-county region. When you need dependable service, we&apos;re just minutes away.
            </p>

            <Heading level={3} className={styles.listTitle}>
              Primary Service Cities Include:
            </Heading>
            <ul className={styles.cityList}>
              {primaryServiceCities.map((city) => (
                <li key={city} className={styles.cityItem}>{city}</li>
              ))}
            </ul>

            <p className={styles.countyText}>
              We also service **{primaryServiceCounties.join(' and ')}**. If your area isn&apos;t listed, contact us directly!
            </p>

            <Link href="/contact">
              {/* Note: The className prop on Button here is usually passed to the internal element. 
                 It's correctly structured and safe inside the Link component. */}
              <Button variant="primary" className={styles.checkAreaButton}>
                Check Availability in My Area
              </Button>
            </Link>
          </div>
          
          <div className={styles.mapContainer}>
            {/* 💡 Map Placeholder: 
              In a real project, this would be an embedded Google Map 
              or a static image of the service region with clear boundaries. 
            */}
            <div className={styles.mapPlaceholder}>
              [Interactive Map of Service Region Placeholder]
            </div>
            <p className={styles.mapCaption}>
              See our dedicated service region. Fast response guaranteed within the blue zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;