// src/components/UI/Button/Button.tsx
import React, { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

// --- NEW: Define Size Types ---
type ButtonSize = 'small' | 'medium' | 'large';

// --- 1. Define Base Props ---
interface ButtonOwnProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'white' | 'inverted' | 'text' | 'outline';
  size?: ButtonSize; 
  className?: string;
  // FIX: Added the missing 'fullWidth' prop
  fullWidth?: boolean; 
}

// --- 2. Define Polymorphic Types ---
type PolymorphicComponentProps<T extends ElementType, P> = 
  P & { as?: T } & ComponentPropsWithoutRef<T>;

type ButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T, ButtonOwnProps>;

type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T>
) => React.ReactElement | null;


// --- 3. Refactor the Component Logic ---
const Button: ButtonComponent = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className, 
  fullWidth = false, // FIX: Destructure and provide a default for fullWidth
  as: Tag = 'button',
  ...rest 
}) => {
  
  // Construct class names:
  const sizeClass = size ? styles[size] : '';
  
  // FIX: Conditionally include the 'fullWidth' class if the prop is true
  const fullWidthClass = fullWidth ? styles.fullWidth : ''; 
  
  const allClassNames = `${styles.button} ${styles[variant]} ${sizeClass} ${fullWidthClass} ${className || ''}`;
  
  return (
    <Tag 
      className={allClassNames}
      // Ensure the tag has a type if it is a <button> element
      {...(Tag === 'button' ? { type: 'button' } : {})}
      {...rest} 
    >
      {children}
    </Tag>
  );
};

export default Button;