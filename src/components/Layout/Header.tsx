// src/components/Layout/Header.tsx
'use client'; 
import React from 'react';
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';
import headerStyles from './Header.module.css';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
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
          {/* FIX: Removed 'as="a"' from Button. 
            The Next.js Link component now renders the <a> tag, and the Button component 
            can safely render its default tag (likely a <button> or <span>) inside. 
            This resolves the invalid <a> nested in <a> hydration error.
          */}
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