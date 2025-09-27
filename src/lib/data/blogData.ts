
// src/lib/data/blogData.ts
import { Metadata } from 'next';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD format
  author: string;
  category: 'Maintenance' | 'Installation' | 'Energy Savings' | 'Tips';
  imageUrl: string;
  content: string; // Full MD/HTML content
}

// Mock data to simulate fetching posts from a database or headless CMS
const mockPosts: BlogPost[] = [
  {
    slug: 'seasonal-ac-maintenance-guide',
    title: 'Your Seasonal AC Maintenance Checklist for Peak Efficiency',
    excerpt: 'Simple steps you can take every spring to ensure your air conditioner runs smoothly and avoids costly summer breakdowns.',
    date: '2024-03-15',
    author: 'Marjory D. Marquez',
    category: 'Maintenance',
    imageUrl: '/images/blog/ac-maintenance.jpg',
    content: `
      <h2>The Importance of Annual Tune-Ups</h2>
      <p>Skipping your annual AC tune-up is one of the quickest ways to reduce your system's lifespan and drastically increase your energy bills. A professional check ensures all electrical connections are secure and refrigerant levels are correct.</p>
      <h3>DIY Steps You Can Take</h3>
      <ul>
        <li>Clean or replace air filters monthly.</li>
        <li>Clear debris (leaves, grass clippings) from the outdoor condenser unit.</li>
        <li>Ensure adequate clearance (at least two feet) around the unit.</li>
      </ul>
      <p>For complex tasks, like checking the compressor or measuring refrigerant, always call a licensed technician.</p>
    `,
  },
  {
    slug: 'choosing-the-right-furnace',
    title: 'Gas vs. Electric: Choosing the Right Furnace for Your Home',
    excerpt: 'A detailed look at the pros and cons of gas, electric, and oil furnaces to help you make an informed decision for your next installation.',
    date: '2024-01-20',
    author: 'Marjory D. Marquez',
    category: 'Installation',
    imageUrl: '/images/blog/furnace-selection.jpg',
    content: `
      <h2>Gas Furnaces: The Gold Standard</h2>
      <p>In regions with cold winters, natural gas furnaces are the most common choice due to their high heat output and relatively low operating cost. Modern units boast AFUE ratings up to 98%.</p>
      <h3>Electric Considerations</h3>
      <p>Electric furnaces are cheaper to install but generally more expensive to run in non-moderate climates. They are often preferred where gas infrastructure is unavailable or as a backup to heat pump systems.</p>
    `,
  },
  {
    slug: 'heat-pump-savings',
    title: 'Maximize Energy Savings with a High-Efficiency Heat Pump',
    excerpt: 'Heat pumps are dual-function systems that offer cooling and heating. Learn how modern SEER and HSPF ratings translate into real dollars saved on your utility bills.',
    date: '2024-04-01',
    author: 'Marjory D. Marquez',
    category: 'Energy Savings',
    imageUrl: '/images/blog/heat-pump.jpg',
    content: `
      <h2>Understanding SEER and HSPF</h2>
      <p>SEER (Seasonal Energy Efficiency Ratio) measures cooling efficiency, while HSPF (Heating Seasonal Performance Factor) measures heating efficiency. Higher numbers mean better performance and greater savings. We recommend 16 SEER or higher for maximum ROI.</p>
    `,
  },
];

export async function getPosts(): Promise<BlogPost[]> {
  // Simulates an asynchronous database/API fetch delay
  await new Promise(resolve => setTimeout(resolve, 50)); 
  return mockPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockPosts.find(post => post.slug === slug);
}

// Helper for generating dynamic metadata in Next.js
export function generateMetadataForPost(post: BlogPost): Metadata {
    return {
        title: post.title,
        description: post.excerpt,
        keywords: [post.category, 'HVAC', 'heating', 'cooling', post.slug]
    };
}