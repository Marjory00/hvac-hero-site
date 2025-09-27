// src/app/estimator/page.tsx
import React from 'react';
import RateCalculator from '@/components/Sections/RateCalculator';
import Heading from '@/components/UI/Typography/Heading';
import styles from './EstimatorPage.module.css';

/**
 * Metadata for the Estimator page (Good for SEO)
 */
export const metadata = {
  title: 'Project Cost Estimator | HVAC Hero',
  description: 'Use our detailed tool to estimate HVAC installation and repair costs based on specifications, equipment types, and square footage.',
};

/**
 * Page component for the detailed HVAC Estimator and Calculator.
 */
const EstimatorPage: React.FC = () => {
  return (
    <main>
      <div className="container">
        <section className={styles.hero}>
            <Heading level={1} className={styles.pageTitle}>
                HVAC Project Estimator & Specifications
            </Heading>
            <p className={styles.introText}>
                Plan your project with precision. This tool allows you to input detailed specifications and choose equipment tiers to generate an accurate cost estimate.
            </p>
        </section>

        {/* The primary calculator component moved from the homepage */}
        <section className={styles.calculatorSection}>
            <Heading level={2} className={styles.sectionTitle}>
                Detailed Cost Calculation
            </Heading>
            <RateCalculator />
        </section>

        {/* You can expand this page with additional detailed specifications here */}
        <section className={styles.specifications}>
            <Heading level={2} className={styles.sectionTitle}>
                Service Tiers & Equipment Details
            </Heading>
            <p>
                [Placeholder for detailed tables comparing Standard, Premium, and High-Efficiency equipment packages, SEER ratings, and warranty information.]
            </p>
        </section>
      </div>
    </main>
  );
};

export default EstimatorPage;