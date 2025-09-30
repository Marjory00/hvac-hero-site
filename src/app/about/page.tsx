// src/app/about/page.tsx
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/UI/Typography/Heading';
import Button from '@/components/UI/Button/Button';
import FeatureHighlights from '@/components/Features/FeatureHighlights'; // Reused trust component
import { TEAM_MEMBERS, TeamMember } from '@/lib/data/teamData'; // Import data
import styles from './AboutPage.module.css'; // Import dedicated CSS module

// --- Static Metadata for SEO ---
export const metadata: Metadata = {
    title: 'About HVAC Hero | Our Mission, Values, and Certified Team',
    description: 'Learn about HVAC Hero\'s commitment to integrity, expertise, and rapid responsiveness. We are your fully licensed and insured climate control specialists.',
};

// --- SECTION COMPONENTS (Integrated for a cleaner main render) ---

// Component 1: Hero/Introduction
const AboutHero: React.FC = () => (
    <section className={styles.heroSection}>
        <div className="container">
            <Heading level={1} className={styles.heroTitle}>
                Our Mission: To Be Your HVAC Hero
            </Heading>
            <p className={styles.heroSubtitle}>
                Founded on the principle of **reliable, transparent service**, HVAC Hero has grown into a trusted regional leader. We guarantee your comfort with heroic speed and expertise.
            </p>
        </div>
    </section>
);

// Component 2: Mission and Values (Using your provided values content)
const MissionValues: React.FC = () => (
    <section className={styles.missionSection}>
        <div className="container">
            <Heading level={2} className={styles.sectionTitle}>
                The Core Values That Guide Us
            </Heading>
            
            <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                    <Heading level={3} className={styles.valueTitle}>🛡️ Integrity</Heading>
                    <p>Upfront pricing and honest diagnostics. No hidden fees, ever. We earn your trust on every service call.</p>
                </div>
                
                <div className={styles.valueCard}>
                    <Heading level={3} className={styles.valueTitle}>⚡ Expertise</Heading>
                    <p>Every technician is **NATE-certified** and constantly trained on the latest smart home and energy-efficient systems.</p>
                </div>
                
                <div className={styles.valueCard}>
                    <Heading level={3} className={styles.valueTitle}>🚀 Responsiveness</Heading>
                    <p>We offer 24/7 emergency service with guaranteed rapid arrival times to restore your comfort fast.</p>
                </div>
                
                <div className={styles.valueCard}>
                    <Heading level={3} className={styles.valueTitle}>🌱 Sustainability</Heading>
                    <p>We prioritize and recommend environmentally responsible and energy-efficient heating and cooling solutions.</p>
                </div>
            </div>
        </div>
    </section>
);

// Component 3: Meet the Team (Using imported data)
const MeetTheTeam: React.FC<{ members: TeamMember[] }> = ({ members }) => (
    <section className={styles.teamSection}>
        <div className="container">
            <Heading level={2} className={styles.sectionTitle}>
                Meet the Certified Team
            </Heading>
            <p className={styles.teamSubtitle}>
                Our heroes are fully licensed, insured, and committed to providing the highest quality workmanship in the industry.
            </p>
            <div className={styles.teamGrid}>
                {members.map((member) => (
                    <div key={member.name} className={styles.memberCard}>
                        <div className={styles.memberImageWrapper}>
                            <Image
                                src={member.imageUrl}
                                alt={`Portrait of ${member.name}`}
                                width={250}
                                height={250}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <Heading level={3} className={styles.memberName}>{member.name}</Heading>
                        <p className={styles.memberTitle}>{member.title}</p>
                        <p className={styles.memberBio}>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Component 4: Licensing and CTA
const LicensingAndCta: React.FC = () => (
    <section className={styles.licensingSection}>
        <div className="container text-center">
            <Heading level={2} className={styles.licensingTitle}>
                Licensed, Certified, and Guaranteed
            </Heading>
            <p className={styles.licensingText}>
                We maintain all necessary state and local licensing (MD HVAC Lic. #77777). Every repair and installation is backed by our full Local Hero Warranty, giving you complete peace of mind.
            </p>
            <Button as={Link} href="/contact" variant="accent" size="large">
                Request Service Today
            </Button>
        </div>
    </section>
);

// --- MAIN ABOUT PAGE RENDER ---
export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            
            <MissionValues />
            
            <MeetTheTeam members={TEAM_MEMBERS} />
            
            {/* Reusing the FeatureHighlights section for general trust signals */}
            <FeatureHighlights /> 
            
            <LicensingAndCta />
        </main>
    );
}