// src/components/Layout/Header.tsx
'use client'; 
import React from 'react';
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';
import headerStyles from './Header.module.css';

const Header: React.FC = () => {
  const navLinks = [
    // FIX: ADDED 'Home' link at the start of the navigation array
    { name: 'Home', href: '/' }, 
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Estimator', href: '/estimator' }, 
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' }, 
  ];

  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.container} container`}>
        
        {/* Logo/Brand (This is already correctly linked to '/') */}
        <Link href="/" className={headerStyles.brand}>
          HVAC Hero
        </Link>

        {/* Navigation Links */}
        <nav className={headerStyles.nav}>
          <ul className={headerStyles.navList}>
            {/* FIX: The map now correctly includes the 'Home' link, 
                    ensuring it appears first in the navbar. */}
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
          <Link href="/contact" className={headerStyles.linkButton}>
            <Button variant="primary">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;