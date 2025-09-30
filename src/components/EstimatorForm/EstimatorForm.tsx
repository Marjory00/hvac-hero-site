// src/components/EstimatorForm/EstimatorForm.tsx

"use client"; // <--- ADD THIS LINE AT THE VERY TOP

import React, { useState } from 'react';
import Button from '@/components/UI/Button/Button';
import styles from './EstimatorForm.module.css'; // You'll need to create this CSS file

// Define the types for the form state
type ServiceType = 'installation' | 'repair' | 'maintenance' | '';

interface EstimatorFormData {
    serviceType: ServiceType;
    systemType: string;
    size: string; // Used for installation (sqft)
    issueDescription: string; // Used for repair
    maintenancePlan: string; // Used for maintenance
}

const EstimatorForm: React.FC = () => {
    const [formData, setFormData] = useState<EstimatorFormData>({
        serviceType: '',
        systemType: '',
        size: '',
        issueDescription: '',
        maintenancePlan: '',
    });
    const [estimate, setEstimate] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value as ServiceType;
        setFormData({ 
            serviceType: type,
            systemType: '',
            size: '',
            issueDescription: '',
            maintenancePlan: '',
        });
        setEstimate(null);
    };

    const calculateEstimate = (data: EstimatorFormData): number => {
        // --- PRELIMINARY ESTIMATE LOGIC (Simplified) ---
        let basePrice = 0;
        
        switch (data.serviceType) {
            case 'installation':
                // Base install price + factor for size/efficiency
                basePrice = 4500; 
                if (data.size === '2000+') basePrice += 1500;
                if (data.systemType === 'heatpump') basePrice += 500;
                return basePrice;

            case 'repair':
                // Base diagnostic fee + estimated minimum repair cost
                return 250 + 150; 
                
            case 'maintenance':
                // Set prices for maintenance plans
                if (data.maintenancePlan === 'annual') return 299;
                if (data.maintenancePlan === 'tuneup') return 129;
                return 0;

            default:
                return 0;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const calculatedEstimate = calculateEstimate(formData);
        setEstimate(calculatedEstimate);
        // In a real application, you would send this data to a server here.
    };

    const renderServiceFields = () => {
        switch (formData.serviceType) {
            case 'installation':
                return (
                    <>
                        <label htmlFor="systemType">System Type</label>
                        <select id="systemType" name="systemType" value={formData.systemType} onChange={handleChange} required>
                            <option value="">Select System</option>
                            <option value="ac-furnace">AC & Furnace</option>
                            <option value="heatpump">Heat Pump</option>
                            <option value="minisplit">Mini-Split System</option>
                        </select>
                        
                        <label htmlFor="size">Home Size (Sq. Ft.)</label>
                        <select id="size" name="size" value={formData.size} onChange={handleChange} required>
                            <option value="">Select Size</option>
                            <option value="1500-">Under 1,500</option>
                            <option value="1500-2000">1,500 - 2,000</option>
                            <option value="2000+">Over 2,000</option>
                        </select>
                    </>
                );
            case 'repair':
                return (
                    <>
                        <label htmlFor="systemType">System Type Needing Repair</label>
                        <select id="systemType" name="systemType" value={formData.systemType} onChange={handleChange} required>
                            <option value="">Select System</option>
                            <option value="ac">Air Conditioner</option>
                            <option value="furnace">Furnace/Boiler</option>
                            <option value="heatpump">Heat Pump</option>
                            <option value="other">Other/Unsure</option>
                        </select>
                        
                        <label htmlFor="issueDescription">Briefly Describe the Issue</label>
                        <textarea id="issueDescription" name="issueDescription" rows={3} value={formData.issueDescription} onChange={handleChange} placeholder="e.g., 'AC blowing warm air' or 'Furnace won't turn on'" required></textarea>
                    </>
                );
            case 'maintenance':
                return (
                    <>
                        <label htmlFor="maintenancePlan">Select Maintenance Service</label>
                        <select id="maintenancePlan" name="maintenancePlan" value={formData.maintenancePlan} onChange={handleChange} required>
                            <option value="">Select Plan</option>
                            <option value="tuneup">Single Seasonal Tune-Up ($129+)</option>
                            <option value="annual">Annual Maintenance Plan (Two Visits) ($299)</option>
                        </select>
                    </>
                );
            default:
                return <p className={styles.selectPrompt}>Please select a service type above to continue.</p>;
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            
            {/* --- Service Type Selection --- */}
            <div className={styles.formGroup}>
                <label htmlFor="serviceType">What service do you need an estimate for?</label>
                <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleServiceChange} required>
                    <option value="">-- Choose Service Type --</option>
                    <option value="installation">New System Installation/Replacement</option>
                    <option value="repair">System Repair</option>
                    <option value="maintenance">Seasonal Maintenance</option>
                </select>
            </div>

            {/* --- Dynamic Fields --- */}
            <div className={styles.dynamicFields}>
                {renderServiceFields()}
            </div>
            
            {/* --- Estimate Display --- */}
            {estimate !== null && formData.serviceType !== '' && (
                <div className={styles.estimateResult}>
                    <p className={styles.estimateLabel}>Preliminary Estimate:</p>
                    <p className={styles.estimateValue}>
                        {formData.serviceType === 'maintenance' ? `$${estimate.toFixed(2)}` : `\$${estimate.toFixed(2)} - \$${(estimate * 1.5).toFixed(2)}`}*
                    </p>
                    <p className={styles.disclaimer}>*See disclaimer on the right for final pricing process.</p>
                </div>
            )}

            {/* --- Submission Button --- */}
            <div className={styles.submitGroup}>
                <Button 
                    type="submit" 
                    variant="primary" 
                    size="large"
                    disabled={formData.serviceType === ''}
                >
                    {estimate === null ? "Calculate Estimate" : "Submit & Request Appointment"}
                </Button>
            </div>
        </form>
    );
};

export default EstimatorForm;