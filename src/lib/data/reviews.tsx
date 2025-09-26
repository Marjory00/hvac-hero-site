
// src/lib/data/reviews.ts (New File)

export type Review = {
  name: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
};

export const reviews: Review[] = [
  {
    name: 'Michael T.',
    rating: 5,
    comment: 'HVAC Hero was incredibly quick to diagnose our AC issue. Fair pricing and professional service. Highly recommend!',
    date: '2025-08-10',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    comment: 'The furnace installation was smooth and efficient. The team walked me through the new smart thermostat settings. Excellent work!',
    date: '2025-07-25',
  },
  {
    name: 'David R.',
    rating: 4,
    comment: 'Quick response time for the emergency service. The technician was knowledgeable and fixed the blower motor immediately. Very satisfied.',
    date: '2025-09-01',
  },
];