
// src/lib/data/faq.ts (New File)

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: 'How often should I service my HVAC system?',
    answer: 'We recommend professional maintenance checks twice a year: once in the spring for your cooling system and once in the fall for your heating system.',
  },
  {
    question: 'Do you offer emergency 24/7 repair services?',
    answer: 'Yes, HVAC Hero provides 24/7 emergency repair. We understand breakdowns don\'t follow business hours. Call our dedicated emergency line anytime.',
  },
  {
    question: 'Are your technicians licensed and insured?',
    answer: 'Absolutely. All our technicians are fully licensed, certified, and insured, guaranteeing professional service that meets all local and national standards.',
  },
];