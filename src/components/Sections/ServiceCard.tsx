// src/components/Sections/ServiceCard.tsx
import React from 'react';
import { ServiceOption } from '@/lib/types/service'; 
import Card from '@/components/UI/Card/Card'; 

const ServiceCard: React.FC<{ service: ServiceOption }> = ({ service }) => {
  // Component logic here...
  return (
    <Card>
      {/* Example content */}
      <h3>{service.name}</h3>
      <p>Rate: ${service.baseRate}</p>
    </Card>
  );
};

//  CRITICAL FIX: Ensure the default export exists
export default ServiceCard;