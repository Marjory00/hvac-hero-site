// src/components/Features/FeatureHighlights.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import styles from './FeatureHighlights.module.css';

// Using simple icons (or Font Awesome/lucide-react icons in a real app)
interface Feature {
    icon: string; // Placeholder for a real icon component
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: '⏱️', // Clock
        title: '24/7 Emergency Service',
        description: 'We are available around the clock for urgent repairs. Fast response guaranteed, day or night.',
    },
    {
        icon: '⭐', // Star/Badge
        title: 'Certified & Licensed Experts',
        description: 'All our technicians are NATE-certified, insured, and background-checked for your peace of mind.',
    },
    {
        icon: '🛡️', // Shield
        title: '100% Satisfaction Guarantee',
        description: 'We stand by our work with industry-leading warranties and a commitment to quality service.',
    },
    {
        icon: '🏠', // House
        title: 'Local to Montgomery County',
        description: 'As a local, family-owned business, we understand the specific needs of Maryland homes.',
    },
];

const FeatureHighlights: React.FC = () => {
    // COMMENT: This component uses a dark background to make the features stand out.
    return (
        <section className={`${styles.highlightsSection} section-padding`}>
            <div className="container">
                <Heading level={2} className={styles.sectionHeading}>
                    Why Choose HVAC Hero?
                </Heading>
                
                <div className={styles.grid}>
                    {/* COMMENT: Map over the features array to create a grid of trust signals */}
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <Heading level={3} className={styles.featureTitle}>
                                {feature.title}
                            </Heading>
                            <p className={styles.featureDescription}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlights;