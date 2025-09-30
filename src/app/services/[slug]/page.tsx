// src/app/services/[slug]/page.tsx (Server Component)
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';

// FIX: Removed the unused 'Service' type import
import { getServiceBySlug, getAllServices } from '@/lib/data/servicesData'; 

import styles from './ServiceDetail.module.css';

// The ServicePageProps interface only uses the built-in 'params' type
interface ServicePageProps {
    params: { slug: string };
}

// 1. Static Paths Generation (for build time optimization)
export async function generateStaticParams() {
    const services = await getAllServices(); 
    return services.map(service => ({
        slug: service.slug,
    }));
}

// 2. Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const service = await getServiceBySlug(params.slug); 
    if (!service) {
        return { title: 'Service Not Found | HVAC Hero' };
    }
    return {
        title: `${service.title} | HVAC Hero Experts`,
        description: service.summary,
        keywords: [service.title, 'HVAC', service.slug, 'repair', 'maintenance'],
    };
}

// 3. Main Page Component
export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const service = await getServiceBySlug(params.slug);

    if (!service) {
        notFound(); 
    }

    const { title, icon, summary, details, solutions } = service;

    return (
        <main className={styles.main}>
            <header className={styles.hero}>
                <div className="container">
                    <p className={styles.icon}>{icon}</p>
                    <Heading level={1} className={styles.title}>{title}</Heading>
                    <p className={styles.summary}>{summary}</p>
                    
                    <div className={styles.cta}>
                        <Button as={Link} href="/estimator" variant="primary">
                            Get a Cost Estimate
                        </Button>
                        <Button as={Link} href="/contact" variant="secondary" className={styles.secondaryCtaButton}>
                            Schedule Service
                        </Button>
                    </div>
                </div>
            </header>

            {/* Section 1: Detailed Benefits */}
            <section className={`${styles.detailSection} section-padding`}>
                <div className="container">
                    <Heading level={2} className={styles.sectionTitle}>Key Service Details</Heading>
                    <div className={styles.detailGrid}>
                        {details.map((detail, index) => (
                            <div key={index} className={styles.detailItem}>
                                <span className={styles.checkIcon}>✅</span>
                                <p>{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Specific Solutions */}
            <section className={`${styles.solutionsSection} section-padding bg-secondary`}>
                <div className="container">
                    <Heading level={2} className={styles.sectionTitle}>Specific Solutions We Offer</Heading>
                    <div className={`card-grid ${styles.solutionGrid}`}>
                        {solutions.map((solution, index) => (
                            <div key={index} className={styles.solutionCard}>
                                <Heading level={3} className={styles.solutionTitle}>{solution.name}</Heading>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA to return to main list */}
            <div className={`${styles.backCta} container text-center`}>
                <Button as={Link} href="/services" variant="secondary">
                    ← Back to All Services
                </Button>
            </div>
        </main>
    );
}