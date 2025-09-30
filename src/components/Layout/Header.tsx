// src/components/Layout/Header.tsx
'use client'; 
import React from 'react';
import Link from 'next/link';
import headerStyles from './Header.module.css';
import Button from '@/components/UI/Button/Button'; 

// Define the main navigation links, including the explicit 'Contact' link
const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Estimator', href: '/estimator' }, 
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' }, 
    { name: 'Contact', href: '/contact' }, // The crucial Contact link
];

const Header: React.FC = () => {
    // NOTE: Mobile menu state/logic placeholder would go here if needed
    
    return (
        <header className={headerStyles.header}>
            
            {/* 1. Top Bar: Emergency Contact/Info */}
            <div className={headerStyles.topBar}>
                <div className="container">
                    <div className={headerStyles.topContent}>
                        <p className={headerStyles.topInfo}>
                            24/7 Emergency: <a href="tel:+13015551234" className={headerStyles.topLink}>(301) 555-1234</a>
                        </p>
                        <p className={headerStyles.topInfo}>
                            Licensed & Insured in MD
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Main Navigation Bar */}
            <div className={headerStyles.mainNav}>
                <div className={`${headerStyles.navContent} container`}>
                    
                    {/* Logo/Brand Link */}
                    <Link href="/" className={headerStyles.logo}>
                        HVAC Hero
                    </Link>

                    {/* Desktop Navigation (CONSOLIDATED) */}
                    <nav className={headerStyles.desktopNav}>
                        <ul className={headerStyles.navList}>
                            {NAV_LINKS.map((link) => (
                                <li key={link.name} className={headerStyles.navItem}>
                                    <Link href={link.href} className={headerStyles.navLink}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Primary CTA Button - Links to the Contact Page */}
                    <div className={headerStyles.ctaWrapper}>
                        <Button 
                            as={Link} 
                            href="/contact" 
                            variant="accent" 
                            size="small" 
                            className={headerStyles.quoteButton}
                        >
                            Get a Free Quote
                        </Button>
                    </div>
                    
                    {/* Placeholder for Mobile Menu Toggle */}
                    {/* <button className={headerStyles.menuToggle}>☰</button> */}
                </div>
            </div>
        </header>
    );
};

export default Header;