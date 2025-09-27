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
 * Component to display the feature specifications table.
 */
const TierSpecifications = () => (
    <div className={styles.tierSpecs}>
        <div className={`${styles.specTable} ${styles.bgSecondary}`}>
            <div className={styles.tableHeader}>Service Tier Comparison</div>
            <div className={styles.tableRow}>
                <div className={styles.tableCellHeader}>Feature</div>
                <div className={styles.tableCellHeader}>Standard</div>
                <div className={styles.tableCellHeader}>Premium</div>
                <div className={styles.tableCellHeader}>High-Efficiency</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>SEER Rating (AC)</div>
                <div className={styles.tableCell}>14 - 15</div>
                <div className={styles.tableCell}>16 - 17</div>
                <div className={styles.tableCell}>18+ (Best Savings)</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Compressor Type</div>
                <div className={styles.tableCell}>Single-Stage</div>
                <div className={styles.tableCell}>Two-Stage</div>
                <div className={styles.tableCell}>Variable Speed</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Warranty (Parts)</div>
                <div className={styles.tableCell}>5 Years</div>
                <div className={styles.tableCell}>10 Years</div>
                <div className={styles.tableCell}>Lifetime Unit Replacement</div>
            </div>
            <div className={styles.tableRow}>
                <div className={styles.tableCell}>Smart Thermostat</div>
                <div className={styles.tableCell}>Optional Upgrade</div>
                <div className={styles.tableCell}>Included</div>
                <div className={styles.tableCell}>Premium Wi-Fi Model Included</div>
            </div>
        </div>
    </div>
);


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
                Plan your project with precision. Use our detailed tool to estimate costs and compare service tiers based on your specific requirements.
            </p>
        </section>

        {/* The primary calculator component */}
        <section className={`${styles.calculatorSection} section-padding bg-secondary`}>
            <Heading level={2} className={`${styles.sectionTitle} text-center`}>
                Calculate Your Detailed Cost
            </Heading>
            <RateCalculator />
        </section>

        {/* NEW Section 1: Detailed Tier Comparison */}
        <section className={`${styles.specifications} section-padding`}>
            <Heading level={2} className={styles.sectionTitle}>
                Service Tiers and Equipment Details
            </Heading>
            <p className={styles.sectionSubtitle}>
                Understand the difference between our **Standard**, **Premium**, and **High-Efficiency** options. Your choice affects energy savings, comfort, and warranty coverage.
            </p>
            <TierSpecifications />
        </section>

        {/* NEW Section 2: Solution Specifications */}
        <section className={`${styles.solutions} section-padding bg-secondary`}>
            <Heading level={2} className={styles.sectionTitle}>
                Choosing the Right Solution
            </Heading>
            <div className={styles.solutionGrid}>
                <div className={styles.solutionCard}>
                    <Heading level={3}>Furnace & Boiler Solutions</Heading>
                    <p>Ideal for northern climates. We assess your home&apos;s heat loss to ensure proper BTU matching for maximum efficiency. Choose from single-stage to modulating systems.</p>
                </div>
                <div className={styles.solutionCard}>
                    <Heading level={3}>AC & Heat Pump Systems</Heading>
                    <p>Heat Pumps offer both heating and cooling in one unit, saving you space and money. We focus on SEER ratings and quiet operation for summer comfort.</p>
                </div>
            </div>
        </section>
        
      </div>
    </main>
  );
};

export default EstimatorPage;