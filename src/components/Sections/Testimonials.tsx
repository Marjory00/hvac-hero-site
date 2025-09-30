// src/components/Sections/Testimonials.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import styles from './Testimonials.module.css';

interface TestimonialData {
    id: number;
    quote: string;
    author: string;
    source: string;
}

const testimonialsData: TestimonialData[] = [
    {
        id: 1,
        quote: "Fixed my furnace within two hours on a Sunday! The technician was professional, courteous, and transparent about the cost. Five stars.",
        author: "Sarah J.",
        source: "Google Reviews",
    },
    {
        id: 2,
        quote: "We chose HVAC Hero for our new AC installation. The crew was efficient, cleaned up everything, and the system runs quieter than I could have imagined.",
        author: "Mark T.",
        source: "Yelp",
    },
    {
        id: 3,
        quote: "The annual maintenance plan is a lifesaver. They caught a small leak before it became a huge repair bill. Highly recommend their proactive service!",
        author: "David R.",
        source: "Verified Customer",
    },
];

const TestimonialCard: React.FC<TestimonialData> = ({ quote, author, source }) => (
    <div className={styles.card}>
        <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
        <p className={styles.quote}>&quot;{quote}&quot;</p>
        <p className={styles.author}>— {author}</p>
        <p className={styles.source}>Source: {source}</p>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className={`${styles.testimonials} section-padding bg-off-white`}>
            <div className="container">
                <Heading level={2} className={styles.sectionHeading}>
                    Trusted By Your Neighbors
                </Heading>
                <p className={styles.sectionSubheading}>
                    Read what our **1,500+ satisfied customers** in the Montgomery County area have to say about our expert HVAC service.
                </p>

                <div className={styles.cardGrid}>
                    {testimonialsData.map(t => (
                        <TestimonialCard key={t.id} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;