
// src/app/services/installation/page.tsx

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import FeatureHighlights from '@/components/Sections/FeatureHighlights'; // Reuse trust elements
import styles from './InstallationPage.module.css'; // New dedicated styling file

export const metadata = {
    title: 'Expert HVAC Installation & System Replacement | HVAC Hero',
    description: 'Professional installation of high-efficiency AC, furnace, and heat pump systems. Get a free, honest quote and maximize your home comfort and energy savings.',
};

export default function InstallationPage() {
    return (
        <main>
            {/* --- Installation Hero Section --- */}
            <section className={`${styles.heroSection} bg-primary text-white text-center`}>
                <div className="container">
                    <Heading level={1} className={styles.pageTitle}>
                        New HVAC System Installation & Replacement
                    </Heading>
                    <p className={styles.heroSubtitle}>
                        Upgrade to a high-efficiency AC or furnace. We provide **expert sizing, clean installation**, and systems built to save you money for years to come.
                    </p>
                    <div className={styles.heroCta}>
                        <Link href="/contact/quote">
                            {/* Using the Primary variant for the main CTA */}
                            <Button variant="primary" size="large">
                                Get a Free Replacement Estimate Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Core Value Proposition --- */}
            <section className={`${styles.detailSection} section-padding bg-white`}>
                <div className="container">
                    <Heading level={2} className={styles.sectionHeading}>
                        The Foundation of Home Comfort is a Quality Install
                    </Heading>
                    
                    <div className={styles.gridDetails}>
                        <div className={styles.textBlock}>
                            <p>
                                Installing a new heating or cooling system is a significant investment. Unlike quick fixes, a poor installation can lead to high energy bills, frequent breakdowns, and early system failure. HVAC Hero ensures your new unit performs flawlessly from day one with **precision installation** that maximizes system efficiency.
                            </p>
                            
                            <Heading level={3} className={styles.subHeading}>
                                Our Installation Expertise Covers:
                            </Heading>
                            <ul>
                                <li>**Precise Load Calculation (Sizing):** Ensuring your unit is perfectly matched to your home&apos;s unique size and insulation factors.</li>
                                <li>**High-Efficiency AC Units:** SEER, SEER2, and variable-speed systems for superior cooling.</li>
                                <li>**Furnaces & Boilers:** Installing reliable, high-AFUE heating solutions (Gas & Electric).</li>
                                <li>**Heat Pumps & Mini-Splits:** Efficient all-in-one heating and cooling solutions, perfect for zone control.</li>
                            </ul>
                        </div>

                        <div className={styles.keyBenefits}>
                            <Heading level={3} className={styles.featureTitle}>
                                Why Professional Installation Matters:
                            </Heading>
                            <p>💰 **Lower Energy Bills:** Properly sized and sealed systems use less energy.</p>
                            <p>🛠️ **Warranty Protection:** We ensure all manufacturer requirements are met to validate your long-term warranty.</p>
                            <p>Silence:** Modern installation techniques reduce noise and improve system sound quality.</p>
                            <p>📈 **Increased Home Value:** A new, certified system is a major selling point for your home.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- Trust & Certification Re-use --- */}
            <FeatureHighlights />

            {/* --- Final CTA Bar with financing reference --- */}
            <section className={`${styles.finalCta} bg-secondary-light text-center`}>
                <div className="container">
                    <p>Ready to experience the best in home comfort and efficiency?</p>
                    <p className={styles.financing}>Ask about our flexible financing options for new installations.</p>
                    <Link href="/contact/quote">
                        <Button variant="secondary" size="large">
                            Request Your Free Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}