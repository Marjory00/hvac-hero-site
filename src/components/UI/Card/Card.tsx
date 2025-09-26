// src/components/UI/Card/Card.tsx
import React, { HTMLAttributes } from 'react'; // <-- Import HTMLAttributes
import styles from './Card.module.css';

// 1. Define the component's unique props
// Assuming you already have this basic interface
interface CardOwnProps {
  children: React.ReactNode;
  className?: string; // Preserve custom classNames
}

// 2. Combine unique props with all standard HTML <div> attributes.
// FIX: Extend HTMLAttributes<HTMLDivElement> to inherit 'style', 'onClick', etc.
type CardProps = CardOwnProps & HTMLAttributes<HTMLDivElement>;

// 3. Update the Component Signature
const Card: React.FC<CardProps> = ({ children, className, ...rest }) => {
  // The 'rest' object now contains 'style', 'onClick', and other HTML attributes.
  return (
    // 4. Spread the 'rest' props onto the native <div> element
    <div 
      className={`${styles.card} ${className || ''}`}
      {...rest} // ✅ FIX: Passes 'style' and other props through
    >
      {children}
    </div>
  );
};

export default Card;