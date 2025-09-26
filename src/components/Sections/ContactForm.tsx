// src/components/Sections/ContactForm.tsx
'use client';
import React, { useState } from 'react'; 
import Button from '@/components/UI/Button/Button';
import { useUIStore } from '@/lib/store/uiStore';
import formStyles from '@/components/UI/Form/Form.module.css';

const ContactForm: React.FC = () => {
  const showAlert = useUIStore((state) => state.showAlert);
  
  // CRITICAL: Initialize the formState variable using useState
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  }); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Submitting form data:', formState);

    showAlert('Thank you for your inquiry! We will respond within 24 hours.', 'success');

    // Reset the form (uses formState definition)
    setFormState({ name: '', email: '', message: '' }); 
  };

  return ( // ✅ START OF JSX RETURN BLOCK
    <form onSubmit={handleSubmit} className={formStyles.form} /* Basic form container class */>
      
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formState.name}
        onChange={handleChange}
        required
        className={formStyles.formControl}
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formState.email}
        onChange={handleChange}
        required
        className={formStyles.formControl}
      />
      
      <textarea
        name="message"
        placeholder="Your Service Request or Question"
        value={formState.message}
        onChange={handleChange}
        required
        rows={5}
        className={`${formStyles.formControl} ${formStyles.textarea}`}
      />

      <Button variant="primary" type="submit">
        Send Request
      </Button>
    </form>
  ); // ✅ END OF JSX RETURN BLOCK
}

export default ContactForm;