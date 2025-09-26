// src/app/contact/page.tsx

import React from 'react';
import { Metadata } from 'next'; // 1. Import Metadata first
import Heading from '@/components/UI/Typography/Heading';
import ContactForm from '@/components/Sections/ContactForm';

// 2. Define the static metadata after all imports
export const metadata: Metadata = {
  title: 'Contact HVAC Hero | Get a Free Quote & 24/7 Service',
  description: 'Request a free, no-obligation service quote or call our 24/7 emergency line. We serve the entire tri-county area with rapid, reliable HVAC service.',
};

export default function ContactPage() {
  // Mock Contact Details
  const contactInfo = [
    { label: 'Phone', value: '(555) HVAC-HERO', icon: '📞' },
    { label: 'Email', value: 'service@hvachero.com', icon: '✉️' },
    { label: 'Address', value: '123 Climate Control Way, City A', icon: '📍' },
  ];

  const businessHours = [
    { day: 'Mon - Fri', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Emergency', hours: '24/7 Service Available' },
  ];

  return (
    <div className="section-padding container">
      <Heading level={1} className="text-center">
        Contact HVAC Hero
      </Heading>
      <p className="text-center" style={{ marginBottom: 'var(--space-xl)' }}>
        Ready for heroic service? Reach out for a free quote or immediate assistance.
      </p>

      {/* Grid Layout for Form and Info */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
        {/* Left Column: Form */}
        <div>
          <Heading level={2}>Request a Service Quote</Heading>
          <ContactForm />
        </div>

        {/* Right Column: Information */}
        <div>
          <Heading level={2}>Get in Touch</Heading>
          
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            {contactInfo.map((item) => (
              <p key={item.label}>
                <span style={{ marginRight: 'var(--space-sm)' }}>{item.icon}</span>
                <strong>{item.label}:</strong> {item.value}
              </p>
            ))}
          </div>

          <Heading level={3}>Business Hours</Heading>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {businessHours.map((item) => (
              <li key={item.day} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.day}</span>
                <strong>{item.hours}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}