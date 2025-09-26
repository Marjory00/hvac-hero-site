// src/app/about/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Heading from '@/components/UI/Typography/Heading';
import Card from '@/components/UI/Card/Card';

// --- Static Metadata for SEO ---
export const metadata: Metadata = {
  title: 'About HVAC Hero | Our Mission, Values, and Certified Team',
  description: 'Learn about HVAC Hero\'s commitment to integrity, expertise, and rapid responsiveness. We are your fully licensed and insured climate control specialists.',
};

export default function AboutPage() {
  return (
    <div className="section-padding-vertical container">
      <Heading level={1} className="text-center">
        Our Mission: To Be Your HVAC Hero
      </Heading>

      <p className="text-center" style={{ maxWidth: '700px', margin: '1rem auto var(--space-2xl)' }}>
        Founded on the principle of **reliable, transparent service**, HVAC Hero has grown into a trusted regional leader. We guarantee your comfort with heroic speed and expertise.
      </p>

      {/* 1. Core Values Section */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <Heading level={2} className="text-center">
          The Core Values That Guide Us
        </Heading>
        
        <div className="card-grid">
          <Card>
            <Heading level={3}>🛡️ Integrity</Heading>
            <p>Upfront pricing and honest diagnostics. No hidden fees, ever. We earn your trust on every service call.</p>
          </Card>
          
          <Card>
            <Heading level={3}>⚡ Expertise</Heading>
            <p>Every technician is **NATE-certified** and constantly trained on the latest smart home and energy-efficient systems.</p>
          </Card>
          
          <Card>
            <Heading level={3}>🚀 Responsiveness</Heading>
            <p>We offer 24/7 emergency service with guaranteed rapid arrival times to restore your comfort fast.</p>
          </Card>
          
          <Card>
            <Heading level={3}>🌱 Sustainability</Heading>
            <p>We prioritize and recommend environmentally responsible and energy-efficient heating and cooling solutions.</p>
          </Card>
        </div>
      </section>

      {/* 2. Meet the Team Section (Placeholder) */}
      <section className="bg-secondary section-padding-vertical" style={{ borderRadius: 'var(--radius-md)' }}>
        <Heading level={2} className="text-center">
          Meet the Certified Team
        </Heading>
        <p className="text-center" style={{ maxWidth: '600px', margin: '1rem auto var(--space-xl)' }}>
          Our heroes are fully licensed, insured, and committed to providing the highest quality workmanship in the industry.
        </p>

        {/* Placeholder for Team Photos */}
        <div style={{ 
          height: '250px', 
          backgroundColor: '#f0f0f0', 
          border: '2px dashed var(--color-light-gray)',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          [Placeholder: Future Team Photo Gallery / Slider]
        </div>
      </section>
    </div>
  );
}