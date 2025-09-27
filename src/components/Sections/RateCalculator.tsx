// src/components/Sections/RateCalculator.tsx
'use client';

import React, { useState, useMemo } from 'react';
import Button from '@/components/UI/Button/Button';
import Heading from '@/components/UI/Typography/Heading';
import styles from './RateCalculator.module.css';

// Define the type for the component's state
interface CalculationState {
  squareFootage: number;
  equipmentTier: 'standard' | 'premium' | 'high-efficiency';
  installationType: 'new' | 'replacement';
  notes: string;
}

// Define mock base costs for different scenarios
const BASE_COSTS = {
  standard: { new: 6500, replacement: 4000 },
  premium: { new: 9000, replacement: 6500 },
  'high-efficiency': { new: 12000, replacement: 8500 },
};

const COST_PER_SQ_FT = 2.5; // Example variable cost factor

const RateCalculator: React.FC = () => {
  const [state, setState] = useState<CalculationState>({
    squareFootage: 1800,
    equipmentTier: 'standard',
    installationType: 'replacement',
    notes: '',
  });
  const [estimate, setEstimate] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setState(prevState => ({
      ...prevState,
      // Convert value to number if the input type is number
      [name]: type === 'number' ? parseFloat(value) || 0 : value,
    }));
  };

  const calculateEstimate = () => {
    const { squareFootage, equipmentTier, installationType } = state;

    // 1. Calculate Base Cost based on Tiers and Type
    const baseCost = BASE_COSTS[equipmentTier][installationType];

    // 2. Calculate Variable Cost based on Square Footage
    const variableCost = squareFootage * COST_PER_SQ_FT;

    // 3. Apply a small complexity factor for new installations
    const complexityFactor = installationType === 'new' ? 1.1 : 1.0;

    const totalEstimate = Math.round((baseCost + variableCost) * complexityFactor);
    
    setEstimate(totalEstimate);
  };
  
  // Memoize the formatted output for display
  const formattedEstimate = useMemo(() => {
    if (estimate === null) return 'N/A';
    // Format to currency (e.g., $10,500)
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(estimate);
  }, [estimate]);
  
  // Handle form submission (e.g., send data to an API or console.log)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateEstimate();
    
    // 💡 Placeholder for API submission logic (e.g., saving the note and estimate)
    console.log('Estimate calculated:', estimate);
    console.log('Notes submitted:', state.notes);
    
    // 💡 Placeholder for showing a global alert via Zustand
    // useUiStore.getState().showAlert('Estimate generated! Check your notes below.', 'success');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.calculatorForm}>
      <div className={styles.inputGrid}>
        
        {/* Input 1: Square Footage */}
        <div className={styles.inputGroup}>
          <label htmlFor="squareFootage" className={styles.label}>Total Square Footage</label>
          <input
            id="squareFootage"
            type="number"
            name="squareFootage"
            value={state.squareFootage}
            onChange={handleChange}
            min="500"
            required
            className={styles.input}
          />
        </div>

        {/* Input 2: Installation Type */}
        <div className={styles.inputGroup}>
          <label htmlFor="installationType" className={styles.label}>Project Type</label>
          <select
            id="installationType"
            name="installationType"
            value={state.installationType}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="replacement">System Replacement (Existing infrastructure)</option>
            <option value="new">New Installation (New construction)</option>
          </select>
        </div>

        {/* Input 3: Equipment Tier */}
        <div className={styles.inputGroup}>
          <label htmlFor="equipmentTier" className={styles.label}>Equipment Tier</label>
          <select
            id="equipmentTier"
            name="equipmentTier"
            value={state.equipmentTier}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="standard">Standard (14 SEER)</option>
            <option value="premium">Premium (16 SEER, Better Warranty)</option>
            <option value="high-efficiency">High-Efficiency (18+ SEER, Smart Controls)</option>
          </select>
        </div>
        
        {/* Placeholder for a fourth input if needed (e.g., location, complexity) */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Custom Specifications</label>
          <input disabled type="text" placeholder="Future input field..." className={styles.input} />
        </div>
      </div>

      {/* Input 4: Notes/Comments (full width) */}
      <div className={styles.notesGroup}>
        <label htmlFor="notes" className={styles.label}>Additional Notes or Specific Requirements</label>
        <textarea
          id="notes"
          name="notes"
          value={state.notes}
          onChange={handleChange}
          rows={4}
          placeholder="e.g., I have a basement and want ductless mini-splits in the sunroom."
          className={styles.textarea}
        />
      </div>

      <div className={styles.outputArea}>
        <div className={styles.estimateBox}>
          <Heading level={4} className={styles.estimateLabel}>Estimated Project Cost:</Heading>
          <p className={styles.estimateValue}>{formattedEstimate}</p>
        </div>
        
        <Button type="submit" variant="primary" className={styles.calculateButton}>
          Calculate Estimate
        </Button>
      </div>
      
      {/* Display user notes after submission for review */}
      {state.notes && estimate !== null && (
          <div className={styles.submittedNotes}>
              <Heading level={5}>Your Notes (Included in Submission):</Heading>
              <p>{state.notes}</p>
          </div>
      )}

    </form>
  );
};

export default RateCalculator;