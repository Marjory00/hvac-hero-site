// src/app/services/page.tsx (Server Component)

import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import { getServices, Service } from '@/lib/data/servicesData.ts'; 
import styles from './ServicesPage.module.css';

// CRITICAL FIX: Import the Client Component wrapper for the map
import ClientMapWrapper from '@/components/ServiceArea/ClientMapWrapper'; 

// NEW IMPORT: Import the component that displays the detailed service area table
import ServiceAreaSection from '@/components/ServiceArea/ServiceAreaSection'; 


export const metadata = {
    title: 'Our Full HVAC Services | Installation, Repair & Maintenance',
    description: 'HVAC Hero offers comprehensive services including installation, 24/7 repairs, and preventative maintenance plans for all heating and cooling systems in the DMV region.',
};

// --- ServiceCard Component (No change needed here) ---
interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
    <div className={styles.serviceCard}>
        <div className={styles.icon}>{service.icon}</div>
        <Heading level={3} className={styles.cardTitle}>{service.title}</Heading>
        <p className={styles.summary}>{service.summary}</p>
        
        <ul className={styles.detailList}>
            {service.details.slice(0, 3).map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
        </ul>
        
        <Link href={`/services/${service.slug}`}>
            <Button variant="secondary" className={styles.cardButton}>
                View Details & Solutions
            </Button>
        </Link>
    </div>
);
// --------------------------------------------------------


export default async function ServicesPage() {
    const services = await getServices(); 

    return (
        <main className={`${styles.main} section-padding bg-secondary`}>
            <div className="container text-center">
                <Heading level={1} className={styles.pageTitle}>
                    Certified HVAC Services for Every Need
                </Heading>
                <p className={styles.introText}>
                    From emergency fixes to full system replacements, HVAC Hero provides reliable, transparent, and high-quality solutions for your home comfort.
                </p>
            </div>

            {/* 1. Services Grid */}
            <section className="container">
                <div className={`service-grid ${styles.serviceGrid}`}>
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </section>
            
            {/* NEW SECTION: Detailed Service Area Table */}
            <ServiceAreaSection />

            {/* 2. Interactive Service Map Section */}
            <section className={`${styles.mapSection} section-padding-small`}>
                <div className="container text-center">
                    <Heading level={2} className={styles.mapTitle}>
                        Locate Your HVAC Hero on the Map
                    </Heading>
                    <p className={styles.mapSubtitle}>
                        We&apos;re just minutes away! Click the markers to see our core local hubs.
                    </p>
                    {/* Render the map using the dedicated Client Component wrapper */}
                    <ClientMapWrapper /> 
                </div>
            </section>

            {/* 3. Primary CTA Bar */}
            <section className={`${styles.ctaBar} container text-center`}>
                <Heading level={2}>Ready to Upgrade or Need Immediate Help?</Heading>
                <p>Use our estimator for a quick cost calculation or call us now for 24/7 emergency service.</p>
                <div className={styles.ctaButtons}>
                    <Link href="/estimator">
                        <Button variant="primary">Use Cost Estimator</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="secondary" className={styles.outlineCtaButton}>
                            Call for Emergency Service
                        </Button>
                    </Link>
                </div>
            </section>

        </main>
    );
}