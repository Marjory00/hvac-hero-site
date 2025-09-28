
// src/components/Features/FeatureHighlights.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import styles from './FeatureHighlights.module.css';

// Feature data
const FEATURES = [
    {
        icon: '⏱️',
        title: '24/7 Emergency Service',
        description: 'HVAC failures don’t follow a schedule. Our certified techs are on-call day and night for rapid, dependable service across the DMV.',
        color: 'var(--color-danger)',
    },
    {
        icon: '✅',
        title: 'Certified & Insured',
        description: 'Trust your home comfort to the experts. We are fully licensed, insured, and certified for all major HVAC brands and systems.',
        color: 'var(--color-success)',
    },
    {
        icon: '💵',
        title: 'Upfront, Fair Pricing',
        description: 'No surprises or hidden fees. We provide clear, honest estimates before any work begins, so you always know the cost.',
        color: 'var(--color-primary)',
    },
    {
        icon: '🥇',
        title: 'Local Hero Guarantee',
        description: 'We stand by our work. All repairs and installations are backed by our comprehensive service guarantee for your peace of mind.',
        color: 'var(--color-secondary-dark)',
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
                    Reliable service starts with integrity, speed, and expertise.
                </p>

                <div className={styles.featuresGrid}>
                    {FEATURES.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div 
                                className={styles.iconCircle} 
                                style={{backgroundColor: feature.color}}
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