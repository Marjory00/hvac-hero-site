
// src/components/Sections/RateCalculator.tsx
'use client'; // Required for Next.js 13+ components using client-side hooks
import React, { useState, useMemo } from 'react';
import { serviceOptions, calculateTotal } from '@/lib/data/services';
import styles from './RateCalculator.module.css'; // New CSS Module

const RateCalculator: React.FC = () => {
  // Array of service IDs the user has selected
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Calculate total using useMemo to optimize only when selections change
  const totalRate = useMemo(() => calculateTotal(selectedServices), [selectedServices]);

  const handleToggleService = (id: string, isChecked: boolean) => {
    setSelectedServices(prev =>
      isChecked ? [...prev, id] : prev.filter(serviceId => serviceId !== id)
    );
  };

  return (
    <div className={styles.calculatorContainer}>
      <h2>Service Rate Calculator</h2>
      <form>
        {serviceOptions.map(service => (
          <div key={service.id} className={styles.serviceItem}>
            <label>
              <input
                type="checkbox"
                onChange={e => handleToggleService(service.id, e.target.checked)}
                checked={selectedServices.includes(service.id)}
              />
              {service.name} (${service.baseRate})
            </label>
          </div>
        ))}
      </form>

      <div className={styles.result}>
        <h3>Estimated Total:</h3>
        <p className={styles.totalPrice}>${totalRate.toFixed(2)}</p>
        {/* Integrate your UI Button for a final CTA */}
        {/* For brevity, omitting the explicit import for Button component here. */}
        <button className={styles.ctaButton}>Request Estimate</button> 
      </div>
    </div>
  );
};

export default RateCalculator;