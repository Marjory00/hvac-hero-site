// src/components/UI/Button/Button.tsx
import React, { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

// --- NEW: Define Size Types ---
type ButtonSize = 'small' | 'medium' | 'large';

// --- 1. Define Base Props ---
interface ButtonOwnProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'white'; // Made variant optional
  size?: ButtonSize; 
  className?: string;
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
  // FIX: Set a default value for variant during destructuring.
  variant = 'primary', 
  size = 'medium', 
  className, 
  as: Tag = 'button',
  ...rest 
}) => {
  // FIX: Since variant has a default, it will never be an empty string here.
  const sizeClass = size ? styles[size] : '';
  const allClassNames = `${styles.button} ${styles[variant]} ${sizeClass} ${className || ''}`;
  
  return (
    <Tag 
      className={allClassNames}
      {...rest} 
    >
      {children}
    </Tag>
  );
};

export default Button;