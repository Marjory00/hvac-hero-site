// src/components/UI/Button/Button.tsx
import styles from './Button.module.css';
import React from 'react'; // Ensure React is imported

// 1. Define the component's unique props
type ButtonOwnProps = {
  variant: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  // Note: type is optional as it defaults to 'submit' in a form context
};

// 2. Combine unique props with all standard HTML <button> attributes
// We are extending React.ComponentProps<'button'> to inherit 'onClick', 'style', 'className', 'type', etc.
type ButtonProps = ButtonOwnProps & React.ComponentProps<'button'>;

// 3. Update the Component Signature to accept all props
const Button: React.FC<ButtonProps> = ({ variant, children, ...rest }) => {
  // The 'rest' object now contains all other props, including 'style', 'onClick', etc.
  
  return (
    // Spread the 'rest' props onto the native <button> element
    <button 
      className={`${styles.button} ${styles[variant]}`}
      {...rest} // ✅ FIX: Passes 'style' and other props (onClick, disabled)
    >
      {children}
    </button>
  );
};
export default Button;