
// src/components/Sections/ServicesOverview.tsx
import React from 'react';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import styles from './ServicesOverview.module.css';

// Placeholder data for core services
const CORE_SERVICES = [
    { 
        title: '24/7 HVAC Repair', 
        icon: '🔧', 
        summary: 'Rapid response for all heating and cooling emergencies. We fix it right, guaranteed.', 
        link: '/services/repair'
    },
    { 
        title: 'New System Installation', 
        icon: '✨', 
        summary: 'Expert installation of high-efficiency AC, furnace, and heat pump systems.', 
        link: '/services/installation'
    },
    { 
        title: 'Preventative Maintenance', 
        icon: '⚙️', 
        summary: 'Seasonal tune-ups to extend equipment life and ensure peak performance.', 
        link: '/services/maintenance'
    },
];

const ServicesOverview: React.FC = () => {
    return (
        <section className={`${styles.servicesSection} section-padding`}>
            <div className="container text-center">
                <Heading level={2} className={styles.sectionTitle}>
                    Your Local Experts in Heating & Cooling
                </Heading>
                <p className={styles.sectionSubtitle}>
                    HVAC Hero offers a complete range of services to keep your home comfortable year-round.
                </p>

                <div className={styles.grid}>
                    {CORE_SERVICES.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <Heading level={3} className={styles.cardTitle}>{service.title}</Heading>
                            <p className={styles.summary}>{service.summary}</p>
                            <Link href={service.link}>
                                <Button variant="secondary" className={styles.cardButton}>
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.finalCta}>
                    <p>Ready for reliable service?</p>
                    <Link href="/contact">
                        <Button variant="primary">Schedule a Visit Today</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;