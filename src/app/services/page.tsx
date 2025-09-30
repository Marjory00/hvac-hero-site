// src/app/services/page.tsx (Server Component)

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';

import ServiceCard from '@/components/Cards/ServiceCard'; 
// FIX: Removed the unused 'Service' type import
import { getAllServices } from '@/lib/data/servicesData'; 

// FIX: We rely on this import to resolve the Module Not Found error
import styles from './ServicesPage.module.css'; 

import ClientMapWrapper from '@/components/ServiceArea/ClientMapWrapper'; 
import ServiceAreaSection from '@/components/ServiceArea/ServiceAreaSection'; 


export const metadata: Metadata = {
    title: 'Our Full HVAC Services | Installation, Repair & Maintenance',
    description: 'HVAC Hero offers comprehensive services including installation, 24/7 repairs, and preventative maintenance plans for all heating and cooling systems in the DMV region.',
};


export default async function ServicesPage() {
    const services = await getAllServices(); 

    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.heroSection}> 
                <div className="container text-center">
                    <Heading level={1} className={styles.pageTitle}>
                        Certified HVAC Services for Every Need
                    </Heading>
                    <p className={styles.introText}>
                        From emergency fixes to full system replacements, HVAC Hero provides reliable, transparent, and high-quality solutions for your home comfort.
                    </p>
                </div>
            </section>


            {/* 1. Services Grid (Using the imported ServiceCard) */}
            <section className={`${styles.listingSection} container`}>
                <div className={styles.serviceGrid}>
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
            <section className={styles.ctaBar}>
                <div className="container text-center">
                    <Heading level={2}>Ready to Upgrade or Need Immediate Help?</Heading>
                    <p>Use our estimator for a quick cost calculation or call us now for 24/7 emergency service.</p>
                    <div className={styles.ctaButtons}>
                        {/* Use Link with Button as prop */}
                        <Button as={Link} href="/estimator" variant="primary">
                            Use Cost Estimator
                        </Button>
                        <Button as={Link} href="/contact" variant="secondary" className={styles.outlineCtaButton}>
                            Call for Emergency Service
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}