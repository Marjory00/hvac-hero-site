// src/components/UI/Typography/Heading.tsx
import React, { JSX } from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Enforces semantic HTML
  children: React.ReactNode;
  // You can add more props like className, style, etc., for scalability
}

const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) => {
  // Dynamically create the h1, h2, etc., tag
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag {...props}>{children}</Tag>
  );
};

// ✅ CRITICAL FIX: Ensure the default export exists
export default Heading;