// src/components/UI/Button/Button.tsx
import React, { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

// --- NEW: Define Size Types ---
type ButtonSize = 'small' | 'medium' | 'large';

// --- 1. Define Base Props ---
interface ButtonOwnProps {
  children: ReactNode;
  // FIX: Added 'inverted' (for dark backgrounds) and 'text' (for link-style buttons)
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'white' | 'inverted' | 'text' | 'outline';
  size?: ButtonSize; 
  className?: string;
}

// --- 2. Define Polymorphic Types ---
// This uses the "as" prop to render the component as a button, link, or div, etc.
type PolymorphicComponentProps<T extends ElementType, P> = 
  P & { as?: T } & ComponentPropsWithoutRef<T>;

type ButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T, ButtonOwnProps>;

type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T>
) => React.ReactElement | null;


// --- 3. Refactor the Component Logic ---
const Button: ButtonComponent = ({ 
  children, 
  // Set default values. These must be keys in the variant type above.
  variant = 'primary', 
  size = 'medium', 
  className, 
  as: Tag = 'button',
  ...rest 
}) => {
  
  // Construct class names using optional chaining or ternary for safety,
  // though using keys directly from a union type like this is generally safe.
  const sizeClass = size ? styles[size] : '';
  const allClassNames = `${styles.button} ${styles[variant]} ${sizeClass} ${className || ''}`;
  
  return (
    <Tag 
      className={allClassNames}
      // Ensure the tag has a type if it is a <button> element, but not if it's a <a> or <div>
      {...(Tag === 'button' ? { type: 'button' } : {})}
      {...rest} 
    >
      {children}
    </Tag>
  );
};

export default Button;