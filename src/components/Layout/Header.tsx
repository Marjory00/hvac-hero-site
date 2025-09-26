// src/components/Layout/Header.tsx
import React from 'react';
import Link from 'next/link';

// Define the functional component
const Header: React.FC = () => {
  return (
    <header>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--space-md)' }}>
        {/* Logo/Site Title linking to home */}
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-navy)' }}>
          HVAC Hero
        </Link>
        
        {/* Navigation Links */}
        <div>
          <Link href="/services" style={{ marginLeft: 'var(--space-md)' }}>Services</Link>
          <Link href="/projects" style={{ marginLeft: 'var(--space-md)' }}>Portfolio</Link>
          <Link href="/contact" style={{ marginLeft: 'var(--space-md)' }}>Contact</Link>
          {/* Use your custom Button component here for the CTA */}
          {/* <Button variant="primary">Request Quote</Button> */} 
        </div>
      </nav>
    </header>
  );
};

// CORRECT: Export the component as the default module export
export default Header;