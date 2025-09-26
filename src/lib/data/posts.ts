
// src/lib/data/posts.ts
import { Post } from '@/lib/types/blog';

export const posts: Post[] = [
  {
    slug: 'hvac-maintenance-checklist',
    title: 'Your Seasonal HVAC Maintenance Checklist',
    date: '2025-09-20',
    author: 'HVAC Hero Team',
    summary: 'Follow these essential steps to keep your system running efficiently all year long, saving you money and preventing breakdowns.',
    content: 'Maintaining your HVAC system is crucial for longevity and efficiency. Key steps include cleaning or replacing filters, checking refrigerant levels, and ensuring the thermostat is calibrated correctly. Always check the outdoor unit for debris...',
  },
  {
    slug: 'r22-phaseout-what-to-know',
    title: 'The R-22 Refrigerant Phase-Out: What Homeowners Must Know',
    date: '2025-08-15',
    author: 'Sarah M.',
    summary: 'Learn why R-22 is being replaced and what this means for older air conditioning units and future repair costs.',
    content: 'R-22 (HCFC-22) is an ozone-depleting substance that has been phased out of production. If your unit still uses R-22, future repairs involving refrigerant leaks will become significantly more expensive as the supply dwindles...',
  },
  // Add more posts as needed for content marketing
];