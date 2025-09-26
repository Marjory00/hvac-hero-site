
// src/app/about/page.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';

export default function AboutPage() {
  return (
    <div style={{ padding: 'var(--space-xl)', maxWidth: '800px', margin: 'auto' }}>
      <Heading level={1} style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
        Our Mission: To Be Your HVAC Hero
      </Heading>

      {/* Mission Section */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <Heading level={2}>The HVAC Hero Difference</Heading>
        <p>
          Founded on the principle of **reliable, transparent service**, HVAC Hero has grown from a single technician into a trusted regional leader. We believe that heating and cooling shouldn&apos;t be a source of stress. Our mission is to provide swift, high-quality, and energy-efficient climate control solutions that respect your time and budget.
        </p>
        <p style={{ marginTop: 'var(--space-md)', fontStyle: 'italic' }}>
          We&apos;re not just fixing systems; we&apos;re guaranteeing your comfort.
        </p>
      </section>

      {/* Values Section */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <Heading level={2}>Core Values</Heading>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
          <li>
            <Heading level={3}>Integrity</Heading>
            <p>Upfront pricing and honest diagnostics—no hidden fees, ever.</p>
          </li>
          <li>
            <Heading level={3}>Expertise</Heading>
            <p>Every technician is NATE-certified and constantly trained on the latest smart systems.</p>
          </li>
          <li>
            <Heading level={3}>Responsiveness</Heading>
            <p>24/7 emergency service with guaranteed rapid arrival times.</p>
          </li>
          <li>
            <Heading level={3}>Sustainability</Heading>
            <p>We prioritize and recommend energy-efficient, environmentally responsible solutions.</p>
          </li>
        </ul>
      </section>

      {/* Team Placeholder */}
      <section style={{ textAlign: 'center' }}>
        <Heading level={2}>Meet the Team</Heading>
        <div style={{ height: '150px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          [Placeholder for Team Photos and Bios]
        </div>
      </section>
    </div>
  );
}