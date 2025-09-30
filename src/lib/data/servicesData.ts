// src/lib/data/serviceData.ts

// 1. Data Structure Interface (Consolidated from your new Service and old ServicePost)
export interface Service {
    id: number;
    title: string; // Used for H1 title (SEO focus)
    slug: string;
    icon: string;
    summary: string; // New short description field
    details: string[]; // Key selling points for the card
    solutions: { name: string; description: string }[];
    
    // Fields required by the Service Detail Page component:
    imageUrl: string; 
    ctaText: string;
    contentHtml: string; // The long-form content (replaces details/solutions on the detail page)
    metadata: {
        title: string; // SEO Title Tag
        description: string; // SEO Meta Description
    };
}

// 2. Mock Data Array (Updated to fit the new combined interface)
export const mockServices: Service[] = [
    {
        id: 1,
        title: 'AC Repair & Tune-Ups | Fast Service Guaranteed',
        slug: 'ac-repair',
        icon: '❄️',
        summary: 'Expert air conditioning repair for all major brands, ensuring your system runs efficiently all summer long.',
        imageUrl: '/images/services/ac-repair-hero.jpg', 
        ctaText: 'Schedule AC Repair Now',
        contentHtml: `
            <h2>Don't Sweat the Summer Heat: Our AC Repair Process</h2>
            <p>When your air conditioner fails, you need a solution now. HVAC Hero offers rapid diagnostic and repair services across Montgomery County. Our process ensures a quick return to comfort.</p>
            <ol>
                <li>**Rapid Diagnosis:** We pinpoint the exact issue, whether it's a refrigerant leak or compressor failure.</li>
                <li>**Upfront Pricing:** You approve the repair cost before any work begins—no hidden fees, ever.</li>
            </ol>
            <h3>Common AC Issues We Fix</h3>
            <ul>
                <li>Warm air blowing (Coolant Leaks)</li>
                <li>System making strange noises or odors</li>
                <li>Thermostat malfunction</li>
            </ul>
        `,
        metadata: {
            title: '24/7 AC Repair Gaithersburg | Air Conditioner Service & Fix',
            description: 'Need fast AC repair in Gaithersburg, Rockville, or Bethesda? Our NATE-certified technicians provide emergency service 24/7. Guaranteed satisfaction.',
        },
        details: [
            '24/7 emergency service available',
            'Diagnosing and fixing coolant leaks',
            'Thermostat repair and replacement',
            'Comprehensive coil cleaning',
        ],
        solutions: [
            { name: 'Emergency Fixes', description: 'Fast, reliable repairs for total system breakdowns.' },
            { name: 'Seasonal Tune-Up', description: 'Preventative maintenance to boost efficiency and prevent future issues.' }
        ],
    },
    {
        id: 2,
        title: 'High-Efficiency Furnace Installation & Replacement',
        slug: 'furnace-installation',
        icon: '🔥',
        summary: 'Professional installation of new furnaces, heat pumps, and boilers with competitive warranties.',
        imageUrl: '/images/services/furnace-install-hero.jpg', 
        ctaText: 'Get a Free Installation Estimate',
        contentHtml: `
            <h2>Maximize Comfort and Minimize Bills with a New Furnace</h2>
            <p>A new furnace is a significant investment. We guide you through selecting the perfect high-efficiency system for your home size and budget. Proper installation is critical to system longevity and performance.</p>
            <h3>Why Upgrade Your Heating System?</h3>
            <p>If your furnace is over 15 years old, requires frequent repairs, or struggles to heat evenly, an upgrade is often more cost-effective. Modern furnaces are significantly more energy-efficient.</p>
        `,
        metadata: {
            title: 'New Furnace Installation Rockville | Heating System Replacement Estimate',
            description: 'Looking for reliable furnace installation in Rockville or Silver Spring? Get a free estimate on high-efficiency gas and electric furnaces from HVAC Hero.',
        },
        details: [
            'Free in-home estimate and consultation',
            'High-efficiency system recommendations',
            'Removal and disposal of old unit',
            'System balancing and testing',
        ],
        solutions: [
            { name: 'Furnace Replacement', description: 'Upgrading old gas or electric furnaces to modern, efficient units.' },
            { name: 'Heat Pump Systems', description: 'Installing all-in-one heating and cooling heat pump solutions.' }
        ],
    },
    // More services would go here
];

// 3. Data Fetching Functions (Using established names for component compatibility)

/**
 * Fetches all services for the listing page.
 */
export async function getAllServices(): Promise<Service[]> {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 50)); 
    return mockServices;
}

/**
 * Fetches a single service by its URL slug.
 */
export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 50)); 
    return mockServices.find(s => s.slug === slug);
}

/**
 * Helper function to generate metadata for SEO.
 */
export function generateMetadataForService(service: Service) {
    return {
        title: service.metadata.title,
        description: service.metadata.description,
    };
}