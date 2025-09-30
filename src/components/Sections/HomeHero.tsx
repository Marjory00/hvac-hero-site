// src/components/Sections/HomeHero.tsx
import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import styles from './HomeHero.module.css';

// Helper Component for Trust Indicators
const TrustIcon = ({ children }: { children: React.ReactNode }) => (
    <span className={styles.trustItem}>
        {children}
    </span>
);

const HomeHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                
                {/* Main Headline & Value Proposition */}
                <div className={styles.content}>
                    <Heading level={1} className={styles.headline}>
                        Reliable HVAC Service & Installation for <span className={styles.location}>Montgomery County</span>
                    </Heading>

                    <p className={styles.subheadline}>
                        Your local experts for rapid repair, efficient installations, and worry-free maintenance plans. **Fixed right, guaranteed.**
                    </p>

                    {/* CTAs */}
                    <div className={styles.ctaGroup}>
                        {/* Primary CTA: Schedule Service (for high urgency) */}
                        <Link href="/contact">
                            <Button variant="primary" size="large" className={styles.ctaButton}>
                                Schedule Service Now
                            </Button>
                        </Link>
                        
                        {/* Secondary CTA: Estimate (for planning/cost-conscious users) */}
                        <Link href="/estimator">
                            <Button variant="secondary" size="large" className={styles.ctaButton}>
                                Get a Quick Estimate
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Bar/Indicators */}
                    <div className={styles.trustBar}>
                        <TrustIcon>⭐ 5-Star Rated Service</TrustIcon>
                        <TrustIcon>🔧 NATE Certified Technicians</TrustIcon>
                        <TrustIcon>📞 24/7 Emergency Repair</TrustIcon>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;