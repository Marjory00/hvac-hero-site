// src/components/Sections/LocalContact.tsx
import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import styles from './LocalContact.module.css';

const LocalContact: React.FC = () => {
    return (
        <section className={`${styles.localContact} section-padding`}>
            <div className="container">
                <div className={styles.grid}>
                    
                    {/* Local SEO Content Block */}
                    <div className={styles.contentBlock}>
                        <Heading level={2} className={styles.headline}>
                            Proudly Serving Montgomery County, MD
                        </Heading>
                        <p className={styles.description}>
                            HVAC Hero is your trusted, local, and licensed HVAC contractor serving all major cities and towns, including **Rockville, Bethesda, Gaithersburg, and Silver Spring**. We live and work where you do, guaranteeing timely, professional service year-round.
                        </p>
                        <ul className={styles.serviceList}>
                            <li>✅ Local Experts, Licensed and Insured</li>
                            <li>✅ Fast Response Times in Your Area</li>
                            <li>✅ Dedicated to Customer Satisfaction</li>
                        </ul>
                    </div>

                    {/* Contact & CTA Block */}
                    <div className={styles.ctaBlock}>
                        <Heading level={3} className={styles.ctaHeadline}>
                            Need Service Now? Call Us 24/7!
                        </Heading>
                        <a 
                            href="tel:+13015551234" 
                            className={styles.phoneNumber}
                            // Minor fix/addition for best practice, though mostly relevant for external http(s) links
                            rel="noopener noreferrer" 
                        >
                            (301) 555-1234
                        </a>
                        <p className={styles.scheduleText}>
                            Or, schedule your appointment online in minutes:
                        </p>
                        <Link href="/contact">
                            <Button variant="accent" size="large" className={styles.scheduleButton}>
                                Book Online
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LocalContact;