
// src/components/UI/Card/Card.tsx
import React from 'react';
import styles from './Card.module.css'; // Assume you'll use a module for styling

interface CardProps {
  children: React.ReactNode;
  // Make the styles optional for flexibility
  className?: string; 
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    // Combine the base style with any custom styles passed in
    <div className={`${styles.card} ${className || ''}`}>
      {children}
    </div>
  );
};

// ✅ CRITICAL FIX: Export the component as the default module export
export default Card;