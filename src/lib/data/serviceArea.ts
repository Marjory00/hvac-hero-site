
// src/lib/data/serviceArea.ts

export interface ServiceArea {
    city: string;
    county: string;
    zipCodes: string;
    eta: string; // Estimated Time of Arrival (e.g., '15-30 min')
}

export const SERVICE_AREAS: ServiceArea[] = [
    { city: 'Gaithersburg', county: 'Montgomery', zipCodes: '20877, 20878, 20879', eta: '15-25 min' },
    { city: 'Rockville', county: 'Montgomery', zipCodes: '20850, 20851, 20852', eta: '15-30 min' },
    { city: 'Germantown', county: 'Montgomery', zipCodes: '20874, 20876', eta: '20-35 min' },
    { city: 'Silver Spring', county: 'Montgomery', zipCodes: '20901, 20902, 20903', eta: '30-45 min' },
    { city: 'Bethesda', county: 'Montgomery', zipCodes: '20814, 20817', eta: '30-45 min' },
    { city: 'Potomac', county: 'Montgomery', zipCodes: '20854', eta: '20-40 min' },
];

export const MAP_CENTER = { lat: 39.1245, lng: -77.2023 }; // Center near Gaithersburg/Rockville