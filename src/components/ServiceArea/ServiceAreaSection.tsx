// src/components/ServiceArea/ServiceAreaSection.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import { SERVICE_AREAS } from '@/lib/data/serviceArea';
import styles from './ServiceAreaSection.module.css';

const ServiceAreaSection: React.FC = () => {
    return (
        <section className={`${styles.areaSection} section-padding-small`}>
            <div className="container">
                <Heading level={2} className={styles.sectionTitle}>
                    Service Coverage & Guaranteed Response Times
                </Heading>
                <p className={styles.sectionSubtitle}>
                    HVAC Hero is proud to offer rapid service across all of Montgomery County, MD. Find your city below for estimated arrival times.
                </p>

                <div className={styles.tableWrapper}>
                    <table className={styles.areaTable}>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th className={styles.countyColumn}>County</th>
                                <th className={styles.zipColumn}>Key Zip Codes</th>
                                <th>Emergency ETA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SERVICE_AREAS.map((area) => (
                                <tr key={area.city}>
                                    <td data-label="City">{area.city}</td>
                                    <td data-label="County" className={styles.countyColumn}>{area.county}</td>
                                    <td data-label="Zip Codes" className={styles.zipColumn}>{area.zipCodes}</td>
                                    <td data-label="ETA" className={styles.etaColumn}>{area.eta}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ServiceAreaSection;