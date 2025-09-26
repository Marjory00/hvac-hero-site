
// src/app/services/page.tsx
import { serviceOptions } from '@/lib/data/services';
import ServiceCard from '@/components/Sections/ServiceCard';
import Heading from '@/components/UI/Typography/Heading';

export default function ServicesPage() {
  return (
    <div className="container" style={{ padding: 'var(--space-xl)' }}>
      <Heading level={1}>Our HVAC Hero Services 🛠️</Heading>
      <p>
        We provide reliable heating, ventilation, and air conditioning solutions for residential and commercial clients.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-lg)',
        marginTop: 'var(--space-lg)'
      }}>
        {serviceOptions.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}