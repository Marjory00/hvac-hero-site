// src/app/services/repair/page.tsx

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import FeatureHighlights from '@/components/Sections/FeatureHighlights'; // Re-use trust elements
import styles from './RepairPage.module.css'; // Assume new styling file

export default function RepairPage() {
    return (
        <main>
            {/* --- Emergency Hero Section --- */}
            <section className={`${styles.heroSection} bg-danger-dark text-white text-center`}>
                <div className="container">
                    <Heading level={1} className={styles.pageTitle}>
                        24/7 Rapid Response HVAC Repair
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        When your comfort can&apos;t wait. **We&apos;re here day and night** to fix your furnace, AC, or heat pump with speed and precision.
                    </p>
                    <div className={styles.heroCta}>
                        <Link href="tel:5551234567">
                            {/* FIX: Changed variant="" to variant="accent" for high-impact CTA */}
                            <Button variant="accent" size="large">
                                CALL EMERGENCY LINE NOW (555) 123-4567
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Service Guarantee & Types --- */}
            <section className={`${styles.detailSection} section-padding bg-white`}>
                <div className="container">
                    <Heading level={2} className={styles.sectionHeading}>
                        Why Choose HVAC Hero for Your Emergency?
                    </Heading>
                    
                    <div className={styles.gridDetails}>
                        <div className={styles.textBlock}>
                            <p>
                                A sudden HVAC failure is stressful, but getting it fixed shouldn&apos;t be. HVAC Hero provides **certified, rapid-response repairs** across the entire DMV region. Our technicians are ready to deploy immediately to diagnose the issue, provide an **upfront, guaranteed repair price**, and restore your system&apos;s function efficiently.
                            </p>
                            
                            <Heading level={3} className={styles.subHeading}>
                                We Repair All Major System Types:
                            </Heading>
                            <ul>
                                <li>**Air Conditioning:** All central, mini-split, and ductless systems.</li>
                                <li>**Heating:** Gas furnaces, electric furnaces, boilers, and heat pumps.</li>
                                <li>**Heat Pumps:** Diagnostics and repairs for all-season cooling and heating cycles.</li>
                                <li>**Thermostats & Zone Control:** Repairing communication issues and system logic failures.</li>
                            </ul>
                        </div>

                        <div className={styles.featureBox}>
                            <Heading level={3} className={styles.featureTitle}>
                                Our Repair Promise
                            </Heading>
                            <p>✅ **NATE-Certified:** Experts in all brands and models.</p>
                            <p>✅ **Fully Stocked Vans:** Most common repairs completed on the spot.</p>
                            <p>✅ **Local Hero Warranty:** Guaranteed work for lasting peace of mind.</p>
                            <p>✅ **No Overtime Fees:** We charge by the job, not the hour—even at 2 A.M.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- The trust features section can be re-used here --- */}
            <FeatureHighlights />

            {/* --- Final CTA Bar --- */}
            <section className={`${styles.finalCta} bg-primary text-center`}>
                <div className="container">
                    <p>Don&apos;t shiver or sweat. Get the comfort you deserve, right now.</p>
                    <Link href="tel:5551234567">
                        <Button variant="white" size="large">
                            CALL FOR IMMEDIATE SERVICE
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}