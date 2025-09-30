
// src/components/UI/ScrollToTopButton.tsx
"use client"; // COMMENT: Must be a Client Component for scroll tracking and click handler

import React, { useState, useEffect, useCallback } from 'react';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton: React.FC = () => {
    // COMMENT: State to control the visibility of the button
    const [isVisible, setIsVisible] = useState(false);

    // COMMENT: Defines the scroll position threshold (e.g., show after scrolling 300px down)
    const SCROLL_THRESHOLD = 300; 

    // COMMENT: Function to scroll the window smoothly to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth scrolling animation
        });
    };

    // COMMENT: Debounced function to check scroll position and update visibility state
    const handleScroll = useCallback(() => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            // Show the button
            setIsVisible(true);
        } else {
            // Hide the button
            setIsVisible(false);
        }
    }, []);

    // COMMENT: Set up and tear down the scroll event listener
    useEffect(() => {
        // Add listener when component mounts
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); // Dependency array includes handleScroll

    return (
        <button
            // COMMENT: Button is visible only if isVisible is true
            className={`${styles.button} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to Top"
        >
            {/* COMMENT: Using a simple up arrow symbol */}
            &#x25B2; 
        </button>
    );
};

export default ScrollToTopButton;