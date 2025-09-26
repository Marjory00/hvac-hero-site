
// src/components/Layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

// Define the functional component
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div style={{ padding: 'var(--space-xl)', backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          
          {/* Section 1: Branding and Copyright */}
          <div>
            <h3 style={{ color: 'var(--color-sky-blue)' }}>HVAC Hero Site</h3>
            <p style={{ fontSize: '0.875rem', marginTop: 'var(--space-sm)' }}>
              © {currentYear} HVAC Hero. All rights reserved.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-xs)' }}><Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
              <li style={{ marginBottom: 'var(--space-xs)' }}><Link href="/projects" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</Link></li>
              <li style={{ marginBottom: 'var(--space-xs)' }}><Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Section 3: Contact Info (Placeholder) */}
          <div>
            <h4>Contact</h4>
            <p>123 Hero Ave, Anytown, USA</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// CORRECT: Export the component as the default module export
export default Footer;