// src/app/services/[slug]/page.tsx (Server Component)
import React from 'react';
// FIX: Using relative path AND explicitly adding the .ts extension.
import { getServiceBySlug, getServices, Service } from '@/lib/data/servicesData';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './ServiceDetail.module.css';

// 1. Static Paths Generation (for build time optimization)
export async function generateStaticParams() {
  const services = await getServices(); // Ensure this is awaited if it's an async function
  return services.map(service => ({
    slug: service.slug,
  }));
}

// 2. Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug); // Await the service retrieval
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
export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug); // Await the service retrieval

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
            <Link href="/estimator">
              <Button variant="primary">Get a Cost Estimate</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" className={styles.secondaryCtaButton}>
                Schedule Service
              </Button>
            </Link>
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
        <Link href="/services">
          <Button variant="secondary">← Back to All Services</Button>
        </Link>
      </div>
    </main>
  );
}