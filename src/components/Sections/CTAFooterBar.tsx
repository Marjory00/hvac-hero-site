
// src/components/Sections/CTAFooterBar.tsx
import React from 'react';
import Button from '@/components/UI/Button/Button';
import Link from 'next/link';

const CTAFooterBar: React.FC = () => {
  return (
    <div style={{ 
      padding: 'var(--space-lg) var(--space-xl)', 
      backgroundColor: 'var(--color-sky-blue)', /* High visibility */
      color: 'var(--color-navy)',
      textAlign: 'center',
      borderTop: '5px solid var(--color-navy)'
    }}>
      <h3 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-sm)' }}>
        Need Emergency Service? We&apos;re Available 24/7!
      </h3>
      <p style={{ marginBottom: 'var(--space-lg)' }}>
        Call us now or request an estimate for planned maintenance.
      </p>
      <Link href="/contact" style={{ textDecoration: 'none' }}>
        <Button variant="primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
          Request Your Free Quote
        </Button>
      </Link>
    </div>
  );
};

export default CTAFooterBar;