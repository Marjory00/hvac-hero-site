// src/components/Layout/Header.tsx
'use client'; // Needs to be a client component if using local state/interaction, but often fine as a server component for static links
import React from 'react';
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';
import headerStyles from './Header.module.css'; // Will be created in next step

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    // 📢 NEW: The missing 'About' link
    { name: 'About', href: '/about' }, 
  ];

  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.container} container`}>
        
        {/* Logo/Brand */}
        <Link href="/" className={headerStyles.brand}>
          HVAC Hero
        </Link>

        {/* Navigation Links */}
        <nav className={headerStyles.nav}>
          <ul className={headerStyles.navList}>
            {navLinks.map((link) => (
              <li key={link.name} className={headerStyles.navItem}>
                <Link href={link.href} className={headerStyles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary CTA Button */}
        <div className={headerStyles.cta}>
          <Link href="/contact" passHref legacyBehavior>
            <Button variant="primary" as="a">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;