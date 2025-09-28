// src/components/Sections/FeatureHighlights.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import styles from './FeatureHighlights.module.css';

// Feature data with six points for a perfect 3x2 grid layout
const FEATURES = [
    {
        icon: '⏱️',
        title: '24/7 Rapid Response',
        description: 'HVAC emergencies don’t wait for business hours. We’re available around the clock for urgent repairs to restore your comfort fast.',
        color: 'var(--color-danger)',
    },
    {
        icon: '✅',
        title: 'NATE-Certified Experts',
        description: 'Our technicians are highly trained and NATE-certified, guaranteeing expert, reliable workmanship on every job.',
        color: 'var(--color-success)',
    },
    {
        icon: '💰',
        title: 'Guaranteed Upfront Pricing',
        description: 'Always know the cost before we start. We believe in total transparency—you approve the price, we fix the problem.',
        color: 'var(--color-accent)',
    },
    {
        icon: '🛡️',
        title: 'Local Hero Warranty',
        description: 'All services are backed by a comprehensive warranty on parts and labor. We stand behind our repairs and installations.',
        color: 'var(--color-primary-dark)',
    },
    {
        icon: '⭐',
        title: 'Trusted Local Service',
        description: 'Proudly serving the DMV region for over 15 years. We know the unique climate and housing needs of our community.',
        color: 'var(--color-secondary)',
    },
    {
        icon: '♻️', // NEW ICON for efficiency
        title: 'Energy Efficiency Focus', // NEW TITLE
        description: 'We specialize in modern, high-efficiency equipment and optimizing existing systems to reduce your energy waste and utility bills.', // NEW DESCRIPTION
        color: 'var(--color-info, #17a2b8)', // A new color variable for contrast
    },
];

const FeatureHighlights: React.FC = () => {
    return (
        <section className={`${styles.highlightsSection} section-padding`}>
            <div className="container text-center">
                <Heading level={2} className={styles.sectionTitle}>
                    Why Choose HVAC Hero?
                </Heading>
                <p className={styles.sectionSubtitle}>
                    Reliability and expertise, guaranteed. Your comfort is our mission.
                </p>

                <div className={styles.featuresGrid}>
                    {FEATURES.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div 
                                className={styles.iconCircle} 
                                style={{ backgroundColor: feature.color, color: 'white' }}
                            >
                                {feature.icon}
                            </div>
                            <Heading level={3} className={styles.cardTitle}>{feature.title}</Heading>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlights;