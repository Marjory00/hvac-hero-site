
// src/components/ServiceArea/ServiceMap.tsx
'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Don't forget to import Leaflet's CSS
import L from 'leaflet';
import styles from './ServiceMap.module.css';

// --- Location Data ---
// Coordinates are set to cover the DMV area and central service cities
const DMV_COORDINATES: [number, number] = [38.9897, -77.0365]; // Center of DC

const SERVICE_MARKERS = [
  // Washington D.C.
  { position: [38.9072, -77.0369], name: 'Washington D.C.', area: 'Core Region' },
  // Montgomery County, MD
  { position: [39.0840, -77.1528], name: 'Rockville, MD', area: 'Montgomery County' },
  { position: [39.0253, -77.1009], name: 'Bethesda, MD', area: 'Montgomery County' },
  // Prince George's County, MD
  { position: [38.8357, -76.8770], name: 'Bowie, MD', area: "Prince George's County" },
  { position: [39.0167, -76.8167], name: 'Laurel, MD', area: "Prince George's County" },
  // Northern Virginia (NOVA)
  { position: [38.8816, -77.1044], name: 'Arlington, VA', area: 'Northern Virginia' },
  { position: [38.8048, -77.0469], name: 'Alexandria, VA', area: 'Northern Virginia' },
];

// FIX for missing marker icons in Webpack/Next.js
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const ServiceMap: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <MapContainer 
        center={DMV_COORDINATES} 
        zoom={9} 
        scrollWheelZoom={false} // Disable zoom with scroll for better UX
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {SERVICE_MARKERS.map((marker, index) => (
          <Marker 
            key={index} 
            position={marker.position as L.LatLngExpression} // Cast to Leaflet type
            icon={defaultIcon} 
          >
            <Popup>
              <div className={styles.popupContent}>
                <p><strong>{marker.name}</strong></p>
                <p>{marker.area} Service Area</p>
                <a href="/contact">Schedule Service</a>
              </div>
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
    </div>
  );
};

export default ServiceMap;