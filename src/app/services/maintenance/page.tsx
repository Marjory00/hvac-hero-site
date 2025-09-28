
// src/app/services/maintenance/page.tsx

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import FeatureHighlights from '@/components/Sections/FeatureHighlights'; 
import styles from './MaintenancePage.module.css'; // New dedicated styling file

export default function MaintenancePage() {
    return (
        <main>
            {/* --- Maintenance Hero Section --- */}
            <section className={`${styles.heroSection} bg-secondary text-primary-dark text-center`}>
                <div className="container">
                    <Heading level={1} className={styles.pageTitle}>
                        Seasonal HVAC Preventative Maintenance
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Protect your investment. Our comprehensive tune-ups ensure your system runs at **peak efficiency**, saving you money and preventing unexpected breakdowns.
                    </p>
                    <div className={styles.heroCta}>
                        <Link href="/contact/schedule">
                            <Button variant="primary" size="large">
                                Schedule Your Tune-Up Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Maintenance Benefits & Checklist --- */}
            <section className={`${styles.detailSection} section-padding bg-white`}>
                <div className="container">
                    <Heading level={2} className={styles.sectionHeading}>
                        Tune-Ups That Pay for Themselves
                    </Heading>
                    
                    <div className={styles.gridDetails}>
                        <div className={styles.textBlock}>
                            <p>
                                Just like a car, your HVAC system requires regular care. Without it, efficiency plummets, components wear out faster, and warranties can be voided. Our preventative maintenance service includes a **thorough, multi-point inspection** designed to catch small issues before they become expensive emergencies.
                            </p>
                            
                            <Heading level={3} className={styles.subHeading}>
                                Key Benefits of Regular Service:
                            </Heading>
                            <ul>
                                <li>**Extended Equipment Life:** Well-cared-for systems last years longer.</li>
                                <li>**Lower Energy Bills:** Restored efficiency means less wasted power.</li>
                                <li>**Fewer Costly Repairs:** We fix minor problems before they cause major failures.</li>
                                <li>**Maintained Warranty:** Required by most manufacturers to keep your coverage valid.</li>
                                <li>**Improved Air Quality:** Cleaning coils and checking filters contributes to a healthier home.</li>
                            </ul>
                        </div>

                        <div className={styles.maintenancePlan}>
                            <Heading level={3} className={styles.featureTitle}>
                                Enroll in Our Hero Maintenance Plan!
                            </Heading>
                            <p>For one low annual fee, you receive:</p>
                            <ul>
                                <li>Two annual visits (AC and Furnace).</li>
                                <li>**Priority service** scheduling.</li>
                                <li>**Discounted pricing** on all repairs.</li>
                                <li>Guaranteed compliance with manufacturer warranty requirements.</li>
                            </ul>
                            <Link href="/maintenance-plan">
                                <Button variant="accent">
                                    Learn About the Plan
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- Trust & Certification Re-use --- */}
            <FeatureHighlights />

            {/* --- Final CTA Bar with emphasis on planning --- */}
            <section className={`${styles.finalCta} bg-primary text-center`}>
                <div className="container">
                    <p>Don&apos;t wait for a problem. Take control of your comfort and budget today.</p>
                    <Link href="/contact/schedule">
                        <Button variant="white" size="large">
                            Book Your Next Tune-Up Online
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}