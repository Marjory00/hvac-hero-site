
// src/components/Forms/ContactForm.tsx
"use client";

import React, { useState } from 'react';
import Button from '@/components/UI/Button/Button';
import styles from './ContactForm.module.css';

// Define the state for form inputs
interface FormState {
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    message: string;
}

const initialFormState: FormState = {
    name: '',
    email: '',
    phone: '',
    serviceType: 'repair',
    message: '',
};

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // In a real application, you would send this data to an API route (e.g., /api/contact)
        console.log('Form Submitted:', formState);

        try {
            // Placeholder for API call
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            
            setStatus('success');
            setFormState(initialFormState); // Clear form on success
        } catch (error) {
            setStatus('error');
            console.error('Form submission failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {/* Form Title */}
            <h3 className={styles.formTitle}>Request a Service or Free Quote</h3>
            <p className={styles.formSubtitle}>Fill out the details and one of our experts will contact you within the hour.</p>

            {/* Input Fields */}
            <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>

            <div className={styles.inputGrid}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
            </div>

            {/* Service Type Dropdown */}
            <div className={styles.inputGroup}>
                <label htmlFor="serviceType" className={styles.label}>I need help with...</label>
                <select
                    id="serviceType"
                    name="serviceType"
                    value={formState.serviceType}
                    onChange={handleChange}
                    className={styles.select}
                >
                    <option value="repair">Emergency Repair</option>
                    <option value="quote">New System Quote/Installation</option>
                    <option value="maintenance">Preventative Maintenance</option>
                    <option value="other">General Inquiry</option>
                </select>
            </div>

            {/* Message Textarea */}
            <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Describe your issue/project</label>
                <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={4}
                />
            </div>

            {/* Submission Button and Status */}
            <Button 
                type="submit" 
                variant="primary" 
                size="large" 
                fullWidth 
                disabled={status === 'loading'}
                className={styles.submitButton}
            >
                {status === 'loading' ? 'Sending...' : 'Book Service / Get Quote'}
            </Button>

            {status === 'success' && (
                <p className={styles.successMessage}>✅ Thank you! We will call you within minutes to confirm your request.</p>
            )}
            {status === 'error' && (
                <p className={styles.errorMessage}>❌ Submission failed. Please call us directly at (301) 555-1234.</p>
            )}
        </form>
    );
};

export default ContactForm;