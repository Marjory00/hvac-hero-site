
// src/components/Sections/EstimatorBanner.tsx
import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import styles from './EstimatorBanner.module.css';

const EstimatorBanner: React.FC = () => {
    return (
        <section className={styles.banner}>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <Heading level={2} className={styles.headline}>
                        Unsure About Cost? Get a Price Estimate Now!
                    </Heading>
                    <p className={styles.subheadline}>
                        Use our free, instant calculator to get a preliminary cost range for installation, repair, or maintenance services.
                    </p>
                </div>
                
                <Link href="/estimator">
                    <Button variant="inverted" size="large" className={styles.ctaButton}>
                        Calculate Your Estimate →
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default EstimatorBanner;