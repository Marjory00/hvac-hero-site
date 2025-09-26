// src/components/UI/Button/Button.tsx
import React, { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

// --- 1. Define Base Props ---
// These are the props specific to the Button component's logic (variant).
interface ButtonOwnProps {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'ghost';
  className?: string;
  // Note: type is inherited from ComponentPropsWithoutRef<'button'>
}

// --- 2. Define Polymorphic Types (The Fix) ---

// A utility type that combines the base props (P) with standard HTML props 
// based on the dynamic element type (T), and includes the optional 'as' prop.
type PolymorphicComponentProps<T extends ElementType, P> = 
  P & { as?: T } & ComponentPropsWithoutRef<T>;

// Define the main prop type, defaulting to 'button' element type.
// This allows ButtonProps<'a'> to inherit anchor props (like href).
type ButtonProps<T extends ElementType = 'button'> = PolymorphicComponentProps<T, ButtonOwnProps>;


// Define the functional component type for full TypeScript accuracy.
type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T>
) => React.ReactElement | null;


// --- 3. Refactor the Component Logic ---
const Button: ButtonComponent = ({ 
  children, 
  variant, 
  className, 
  as: Tag = 'button', // Destructure 'as' and rename it to 'Tag', defaulting to 'button'
  ...rest 
}) => {
  const allClassNames = `${styles.button} ${styles[variant]} ${className || ''}`;
  
  // The Tag variable will be the element type ('button' or 'a')
  return (
    <Tag 
      className={allClassNames}
      {...rest} // Spreads all HTML props (href, onClick, disabled, etc.)
    >
      {children}
    </Tag>
  );
};

export default Button;