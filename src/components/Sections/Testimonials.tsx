// src/components/Sections/Testimonials.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import { reviews, Review } from '@/lib/data/reviews'; 
import Card from '@/components/UI/Card/Card';

// Helper to render stars (using simple string for now)
const renderStars = (rating: number) => '⭐'.repeat(rating);

const Testimonials: React.FC = () => {
  return (
    <section style={{ padding: 'var(--space-xl)', backgroundColor: 'var(--color-background-secondary)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Heading level={2} style={{ textAlign: 'center' }}>
          What Our Clients Say
        </Heading>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-lg)',
          marginTop: 'var(--space-xl)' 
        }}>
          {reviews.map((review: Review, index) => (
            <Card key={index}>
              <p style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>
                {renderStars(review.rating)}
              </p>
              <p style={{ fontStyle: 'italic', marginBottom: 'var(--space-md)' }}>
                {/* ✅ FIX: Use &ldquo; and &rdquo; (left and right double quotes) to escape the characters */}
                &ldquo;{review.comment}&rdquo; 
              </p>
              <p style={{ fontWeight: 'bold', borderTop: '1px solid #eee', paddingTop: 'var(--space-sm)' }}>
                — {review.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;