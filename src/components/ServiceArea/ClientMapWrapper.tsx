// src/components/ServiceArea/ClientMapWrapper.tsx
'use client'; // CRITICAL: This line makes this file a Client Component

import dynamic from 'next/dynamic';
import React from 'react';

// 1. Dynamically import the ServiceMap component
const ServiceMap = dynamic(() => import('./ServiceMap'), {
    // 2. The ssr: false flag is now ONLY used inside this Client Component (it's safe here)
    ssr: false, 
    // We assume the styles.mapLoading CSS class is accessible via global styling
    loading: () => <p style={{
        textAlign: 'center', 
        padding: '3rem 0', 
        fontSize: '1.25rem',
        color: 'var(--color-accent)'
    }}>Loading Service Map...</p>
});

const ClientMapWrapper: React.FC = () => {
    // The Server Component will render this, and the map will hydrate on the client.
    return <ServiceMap />;
};

export default ClientMapWrapper;