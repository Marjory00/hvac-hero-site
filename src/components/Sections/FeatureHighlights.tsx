
// src/components/Sections/FeatureHighlights.tsx
import React from 'react';
import Card from '@/components/UI/Card/Card';
import Heading from '@/components/UI/Typography/Heading';

const features = [
  { 
    icon: '⏱️', 
    title: '24/7 Emergency Service', 
    description: 'We are available around the clock for urgent repairs to restore your comfort fast.' 
  },
  { 
    icon: '✅', 
    title: 'NATE-Certified Technicians', 
    description: 'Our team is highly trained and certified, guaranteeing expert, reliable workmanship.' 
  },
  { 
    icon: '💰', 
    title: 'Upfront Pricing', 
    description: 'Always know the cost before we start. We believe in total transparency—no surprises.' 
  },
];

const FeatureHighlights: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-light-gray)' }}>
      <div className="container">
        <Heading level={2} className="text-center">
          Why Choose HVAC Hero?
        </Heading>
        <p className="text-center" style={{ marginBottom: 'var(--space-xl)', color: 'var(--color-text-secondary)' }}>
          Reliability and expertise, guaranteed.
        </p>

        {/* This uses the globally defined card-grid class for responsive layout */}
        <div className="card-grid">
          {features.map((feature) => (
            <Card key={feature.title} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>{feature.icon}</div>
              <Heading level={3}>{feature.title}</Heading>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;