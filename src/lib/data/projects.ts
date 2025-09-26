// src/lib/data/projects.ts

// ✅ FIX: Use the full absolute path alias
import { Project } from '@/lib/types/project'; 

export const projects: Project[] = [
  {
    slug: 'commercial-ahu-upgrade',
    title: 'Commercial AHU Upgrade',
    heroImage: '/images/projects/ahu-upgrade.jpg', // Placeholder for file resolution
    description: 'A major overhaul of an Air Handling Unit (AHU) for a 50,000 sq ft office building, focusing on energy efficiency and zone control via a custom Building Management System (BMS) interface.',
    technologies: ['BMS Integration', 'Next.js', 'Custom CSS', 'TypeScript'],
  },
  {
    slug: 'residential-smart-thermostat-install',
    title: 'Smart Thermostat Network',
    heroImage: '/images/projects/thermostat-network.jpg', 
    description: 'Developed a system for installing and configuring networked smart thermostats across 20 residential units, providing remote diagnostics and maintenance scheduling.',
    technologies: ['IoT Integration', 'React', 'Zustand', 'API Development'],
  },
];
// ... more projects