
// src/components/Sections/ServiceArea.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';

const ServiceArea: React.FC = () => {
  // Define key cities/areas you serve
  const serviceLocations = [
    'City A', 'City B', 'Town C', 'Suburb D', 'Metro Area E',
  ];

  return (
    <section style={{ padding: 'var(--space-xl) 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Heading level={2}>Serving Your Neighborhood with Heroic Reliability</Heading>
        <p style={{ maxWidth: '800px', margin: '1rem auto 2rem' }}>
          We proudly serve the entire tri-county area, offering rapid, same-day service across all major metropolitan and suburban regions.
        </p>

        {/* Placeholder for Map Visual */}
        <div style={{ height: '350px', backgroundColor: '#e0f7fa', border: '1px solid #b2ebf2', marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          [Placeholder for Interactive Service Area Map Visual]
        </div>

        <Heading level={3}>Key Service Locations</Heading>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-md)' }}>
          {serviceLocations.map((location) => (
            <span 
              key={location} 
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: 'var(--color-light-gray)', 
                borderRadius: 'var(--radius-sm)',
                fontWeight: '500'
              }}
            >
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;