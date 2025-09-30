
// src/lib/data/teamData.ts

export interface TeamMember {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'John "The Chief" Smith',
        title: 'Founder & Master HVAC Technician',
        bio: 'With over 25 years in the trade, John founded HVAC Hero on the principles of integrity and rapid response. He is NATE-certified in all specialties and still runs emergency calls to keep his skills sharp.',
        imageUrl: '/images/team/john-smith.jpg', // Placeholder image path
    },
    {
        name: 'Maria Rodriguez',
        title: 'Operations Manager',
        bio: 'Maria keeps the entire operation running smoothly, ensuring technicians are dispatched efficiently and every client receives clear communication. Her passion is optimizing service routes to ensure 24/7 availability.',
        imageUrl: '/images/team/maria-rodriguez.jpg', // Placeholder image path
    },
    {
        name: 'David Lee',
        title: 'Lead Installation Specialist',
        bio: 'David specializes in high-efficiency heat pump and furnace installations. He’s trained by all major manufacturers and is dedicated to helping homeowners maximize their energy savings.',
        imageUrl: '/images/team/david-lee.jpg', // Placeholder image path
    },
];

// COMMENT: Placeholder for Company History/Milestones data if needed later