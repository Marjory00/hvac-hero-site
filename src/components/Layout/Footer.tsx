// src/components/Layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
// COMMENT: Importing the dedicated CSS module for clean styling
import styles from './Footer.module.css';

// COMMENT: Define the necessary data structures
const primaryNav = [
    { name: 'Services', href: '/services' },
    // COMMENT: Added Blog and About links for a typical site structure
    { name: 'About Us', href: '/about' }, 
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Portfolio', href: '/projects' },
];

const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        // COMMENT: Apply the main footer style from the CSS module
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topRow}>
                    
                    {/* Section 1: Branding and Contact Info */}
                    <div className={styles.brandBlock}>
                        {/* COMMENT: Logo/Brand Name */}
                        <Link href="/" className={styles.logo}>
                            HVAC Hero
                        </Link>
                        
                        <p className={styles.contactItem}>
                            <strong>Address:</strong> 123 Hero Ave, Anytown, USA
                        </p>
                        <p className={styles.contactItem}>
                            <strong>Phone:</strong> 
                            <a href="tel:+15551234567" className={styles.phoneLink}> (555) 123-4567</a>
                        </p>
                        
                        {/* COMMENT: Added a small CTA/Social element for completeness */}
                        <div className={styles.socialIcons}>
                            {/* Placeholder for social links */}
                            <Link href="#" aria-label="Facebook">FB</Link>
                            <Link href="#" aria-label="LinkedIn">IN</Link>
                        </div>
                    </div>

                    {/* Section 2: Quick Links */}
                    <div className={styles.navBlock}>
                        <h4 className={styles.navTitle}>Quick Links</h4>
                        <ul className={styles.navList}>
                            {primaryNav.map((item) => (
                                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Section 3: Legal and Licensing */}
                    <div className={styles.navBlock}>
                        <h4 className={styles.navTitle}>Legal & Info</h4>
                        <ul className={styles.navList}>
                            {legalLinks.map((item) => (
                                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
                            ))}
                        </ul>
                        <p className={styles.licenseInfo}>
                            Licensed & Insured
                            <br />
                            Lic. #77777 (MD)
                        </p>
                    </div>

                    {/* Section 4: Local SEO/Service Area (New block for clear separation) */}
                    <div className={styles.serviceAreaBlock}>
                        <h4 className={styles.navTitle}>Service Area</h4>
                        <p className={styles.areaText}>
                            Proudly serving Rockville, Bethesda, Gaithersburg, and all of Montgomery County, MD.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Get a Free Estimate
                        </Link>
                    </div>

                </div>

                <div className={styles.bottomRow}>
                    {/* COMMENT: Final Copyright Row */}
                    <p className={styles.copyright}>
                        © {currentYear} HVAC Hero. All rights reserved. 
                    </p>
                    {/* Placeholder for other bottom-level info */}
                    <p className={styles.designedBy}>
                        Website designed by [Your Agency]
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;