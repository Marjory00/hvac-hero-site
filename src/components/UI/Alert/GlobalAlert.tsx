
// src/components/UI/Alert/GlobalAlert.tsx
'use client';

import React from 'react';
import { useUIStore } from '@/lib/store/uiStore';
import styles from './GlobalAlert.module.css'; // Will create this CSS file next

const GlobalAlert: React.FC = () => {
  // Access state and actions from the Zustand store
  const { isAlertVisible, alertMessage, alertType, hideAlert } = useUIStore();

  if (!isAlertVisible) {
    return null; // Don't render anything if the alert is hidden
  }

  // Determine CSS class based on alert type (success, error, info)
  const alertClass = styles[alertType] || styles.info;

  return (
    <div className={`${styles.alertContainer} ${alertClass}`} onClick={hideAlert}>
      <div className={styles.alertContent}>
        {/* You can add icons here based on alertType */}
        <span style={{ marginRight: '10px', fontWeight: 'bold' }}>
          {alertType === 'success' ? '✅' : alertType === 'error' ? '❌' : 'ℹ️'}
        </span>
        {alertMessage}
      </div>
      {/* Optional: Add a close button if you want */}
    </div>
  );
};

export default GlobalAlert;