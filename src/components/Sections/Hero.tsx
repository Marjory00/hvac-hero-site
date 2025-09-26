// src/components/Sections/Hero.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import styles from './Hero.module.css'; // New CSS Module

const Hero: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.content}>
        <Heading level={1}>
          HVAC Hero: Reliable Climate Control Solutions
        </Heading>
        <p className={styles.subheadline}>
          Your trusted partner for swift, expert heating, cooling, and ventilation services. We fix it right, the first time.
        </p>

        <div className={styles.ctaGroup}>
          {/* Primary Call to Action */}
          <Button variant="primary">Schedule Service Today</Button>
          {/* Secondary Call to Action */}
          <Button variant="secondary">View Our Portfolio</Button> 
        </div>
      </div>
    </section>
  );
};

export default Hero;