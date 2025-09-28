// src/components/ServiceArea/ServiceAreaSection.tsx
import React from 'react';
import Heading from '@/components/UI/Typography/Heading';
import styles from './ServiceAreaSection.module.css'; // Assume you'll create CSS modules for layout

const ServiceAreaSection: React.FC = () => {
  return (
    <section className={`${styles.serviceArea} section-padding`}>
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
              <tr>
                <td data-label="County/Region">Washington D.C. 🏛️</td>
                <td data-label="Key Cities">**Georgetown**, **Capitol Hill**, Northwest D.C., Navy Yard, Foggy Bottom, and all other quadrants of the District.</td>
              </tr>
              <tr>
                <td data-label="County/Region">Montgomery County, MD 🏡</td>
                <td data-label="Key Cities">**Rockville**, **Bethesda**, **Gaithersburg**, Silver Spring, Germantown, Potomac, Olney, and surrounding areas.</td>
              </tr>
              <tr>
                <td data-label="County/Region">Prince George&apos;s County, MD 🌳</td>
                <td data-label="Key Cities">**Bowie**, **Upper Marlboro**, Laurel, College Park, Greenbelt, Landover, and surrounding communities.</td>
              </tr>
              <tr>
                <td data-label="County/Region">Northern Virginia (NOVA) 🛣️</td>
                <td data-label="Key Cities">**Arlington**, **Alexandria**, Fairfax, Tysons, Reston, McLean, and parts of Loudoun County.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.footerCta}>
          <Heading level={4}>Why Choose a Local Hero?</Heading>
          <p>
            Choosing a local provider means faster response times for emergency repairs and technicians who are familiar with the specific HVAC needs of historic D.C. homes, sprawling Montgomery County residences, and modern NOVA developments.
          </p>
          <p>
            **Don&apos;t see your specific town listed?** If you are located in the greater D.C., Maryland, or Northern Virginia metropolitan area, **call us today!** We frequently extend our service radius to ensure your home comfort needs are met.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;