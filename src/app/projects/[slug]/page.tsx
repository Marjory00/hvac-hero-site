// src/app/services/page.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import ServiceCard from '@/components/Sections/ServiceCard';
import { serviceOptions } from '@/lib/data/services';

export default function ServicesPage() {
  return (
    <div style={{ padding: 'var(--space-xl)', maxWidth: '1200px', margin: 'auto' }}>
      <Heading level={1} style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
        Our Complete Range of HVAC Services
      </Heading>
      <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
        From routine maintenance to emergency repairs and new installations, we are your certified HVAC Heroes.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-lg)' }}>
        {serviceOptions.map((service) => (
          // Assuming ServiceCard exists and uses the ServiceOption type
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}