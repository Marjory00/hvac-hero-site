// src/components/ServiceArea/ServiceAreaSection.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import styles from './ServiceAreaSection.module.css'; 
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';

// Data for the service table
const SERVICE_AREAS = [
  { 
    region: 'Washington D.C. 🏛️', 
    cities: 'Georgetown, Capitol Hill, Foggy Bottom, Navy Yard, Dupont Circle, Columbia Heights, and all quadrants of the District.' 
  },
  { 
    region: 'Montgomery County, MD 🏡', 
    cities: 'Rockville, Bethesda, Gaithersburg, Silver Spring, Germantown, Potomac, Olney, Wheaton, Chevy Chase, and Kensington.' 
  },
  { 
    region: "Prince George's County, MD 🌳", 
    cities: 'Bowie, Upper Marlboro, Laurel, College Park, Greenbelt, Hyattsville, Landover, Mitchellville, and Clinton.' 
  },
  { 
    region: 'Northern Virginia (NOVA) 🛣️', 
    cities: 'Arlington, Alexandria, Fairfax, Tysons, Reston, McLean, Centreville, Falls Church, and parts of Loudoun County.' 
  },
];

const ServiceAreaSection: React.FC = () => {
  return (
    <section className={`${styles.serviceArea} section-padding bg-light`}>
      <div className="container text-center">
        <Heading level={2} className={styles.mainTitle}>
          Proudly Serving Your Local Community 🛠️
        </Heading>
        
        <p className={styles.introText}>
          HVAC Hero provides certified, rapid-response heating and cooling services across the entire **DMV region** (District of Columbia, Maryland, and Virginia). When you need dependable service, we&apos;re just minutes away.
        </p>

        <Heading level={3} className={styles.subTitle}>
          Primary Service Areas Include:
        </Heading>
        
        <p className={styles.subIntroText}>
          Our certified technicians serve the core metropolitan regions, ensuring fast response times and expert service in your neighborhood.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.serviceTable}>
            <thead>
              <tr>
                <th>County/Region</th>
                <th>Key Cities & Localities</th>
              </tr>
            </thead>
            <tbody>
              {SERVICE_AREAS.map((area, index) => (
                <tr key={index}>
                  <td data-label="County/Region">{area.region}</td>
                  <td data-label="Key Cities">{area.cities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.footerCta}>
          <Heading level={4} className={styles.ctaHeading}>Why Choose a Local Hero?</Heading>
          <p>
            Choosing a local provider means faster response times for emergency repairs and technicians who are familiar with 
            the specific HVAC needs of historic D.C. homes, sprawling Montgomery County residences, and modern NOVA developments.
          </p>
          
          <p className={styles.finalCtaText}>
            **Don&apos;t see your specific town listed?** If you are located in the greater D.C., Maryland, or Northern Virginia 
            metropolitan area, **call us today!** We frequently extend our service radius to ensure your home comfort needs are met.
          </p>

          <Link href="/contact" className={styles.contactButton}>
            <Button variant="primary">Schedule Service or Get a Quote</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;