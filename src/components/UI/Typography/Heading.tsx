// src/components/UI/Typography/Heading.tsx
import React, { HTMLAttributes, ReactNode, ElementType } from 'react'; // <-- Ensure ElementType is imported

interface HeadingOwnProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; 
  children: ReactNode;
}

type HeadingProps = HeadingOwnProps & HTMLAttributes<HTMLHeadingElement>; 

const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) => {
  
  // FIX 1: Define Tag using the ElementType utility type.
  // This explicitly tells TypeScript that the variable will be used as a JSX component type.
  const Tag: ElementType = `h${level}`; // The string is assigned, but the variable is typed as ElementType

  return (
    // FIX 2: Type assertion is often cleaner here, confirming it's a valid HTML tag.
    // However, since we used ElementType above, the Tag can be used directly:
    <Tag {...props}> 
      {children}
    </Tag>
  );
};

export default Heading;