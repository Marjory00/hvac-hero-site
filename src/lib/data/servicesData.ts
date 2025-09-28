// src/lib/data/servicesData.ts

// 1. Data Structure Interface
export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: string;
  summary: string;
  details: string[]; 
  solutions: { name: string; description: string }[]; 
}

// 2. Mock Data Array
export const mockServices: Service[] = [
  {
    id: 1,
    title: 'AC Repair & Tune-Ups',
    slug: 'ac-repair',
    icon: '❄️',
    summary: 'Expert air conditioning repair for all major brands, ensuring your system runs efficiently all summer long.',
    details: [
      '24/7 emergency service available',
      'Diagnosing and fixing coolant leaks',
      'Thermostat repair and replacement',
      'Comprehensive coil cleaning',
    ],
    solutions: [
      { name: 'Emergency Fixes', description: 'Fast, reliable repairs for total system breakdowns.' },
      { name: 'Seasonal Tune-Up', description: 'Preventative maintenance to boost efficiency and prevent future issues.' },
    ],
  },
  {
    id: 2,
    title: 'Heating System Installation',
    slug: 'furnace-installation',
    icon: '🔥',
    summary: 'Professional installation of new furnaces, heat pumps, and boilers with competitive warranties.',
    details: [
      'Free in-home estimate and consultation',
      'High-efficiency system recommendations',
      'Removal and disposal of old unit',
      'System balancing and testing',
    ],
    solutions: [
      { name: 'Furnace Replacement', description: 'Upgrading old gas or electric furnaces to modern, efficient units.' },
      { name: 'Heat Pump Systems', description: 'Installing all-in-one heating and cooling heat pump solutions.' },
    ],
  },
  // Add more services as needed...
];

// 3. Data Fetching Functions
// FIX: Functions are async to correctly handle the 'await' call in page components.
export async function getServices(): Promise<Service[]> {
  // Simulate network latency (e.g., fetching from a database)
  await new Promise(resolve => setTimeout(resolve, 50)); 
  return mockServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  // Simulate network latency (e.g., fetching from a database)
  await new Promise(resolve => setTimeout(resolve, 50)); 
  return mockServices.find(service => service.slug === slug);
}