// src/components/Cards/ServiceCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';

// FIX 1: Using the plural file name for the import path
import { Service } from '@/lib/data/servicesData'; 
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    // FIX 2: Using the 'Service' interface
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    
    // Using 'summary' from the new data structure for the card's main description
    const description = service.summary; 
    
    // Using 'details' from the new data structure for the feature list
    const features = service.details;

    return (
        <article className={styles.card}>
            {/* Image Link (We must assume 'imageUrl' is still present in the Service interface) */}
            <Link href={`/services/${service.slug}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={service.imageUrl}
                        alt={service.title}
                        width={400}
                        height={250}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            </Link>

            <div className={styles.content}>
                {/* Title Link */}
                <Heading level={3} className={styles.title}>
                    <Link href={`/services/${service.slug}`} className={styles.titleLink}>
                        {/* Use part of the title for card display */}
                        {service.title.split('|')[0].trim()}
                    </Link>
                </Heading>

                <p className={styles.description}>
                    {/* Using the new 'summary' field */}
                    {description}
                </p>

                <ul className={styles.featuresList}>
                    {/* Using the new 'details' array for the features list, showing the first 3 items */}
                    {features.slice(0, 3).map((detail, index) => (
                        <li key={index}>✓ {detail}</li>
                    ))}
                </ul>

                {/* Call to Action Buttons */}
                <div className={styles.ctaRow}>
                    <Button 
                        as={Link} 
                        href={`/services/${service.slug}`} 
                        variant="primary" 
                        size="small"
                    >
                        Learn More
                    </Button>
                    <Button 
                        as={Link} 
                        href="/contact" 
                        variant="ghost" 
                        size="small"
                    >
                        Get Quote
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default ServiceCard;