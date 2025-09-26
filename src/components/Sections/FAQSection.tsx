
// src/components/Sections/FAQSection.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import { faqs, FAQItem } from '@/lib/data/faq';
import Card from '@/components/UI/Card/Card';

const FAQSection: React.FC = () => {
  return (
    <section style={{ padding: 'var(--space-xl)', backgroundColor: 'white' }}>
      <div className="container" style={{ maxWidth: '900px', margin: 'auto' }}>
        <Heading level={2} style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          Frequently Asked Questions
        </Heading>

        <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
          {faqs.map((item: FAQItem, index) => (
            <Card key={index} style={{ textAlign: 'left', borderLeft: '5px solid var(--color-sky-blue)' }}>
              <Heading level={4} style={{ marginBottom: 'var(--space-sm)' }}>
                {item.question}
              </Heading>
              <p style={{ color: '#555' }}>
                {item.answer}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;