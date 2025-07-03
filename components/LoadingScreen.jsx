"use client";

import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Set up event listener for when the page loads
      window.addEventListener('load', handleLoad);
      
      // Fallback timer in case load event doesn't fire
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      
      // Clean up
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{
        transition: 'opacity 0.5s ease-in-out',
        animation: loading ? 'none' : 'fadeOut 0.5s forwards'
      }}
    >
      <div className="text-center">
        {/* Logo or brand element - replace with your own logo if desired */}
        <div className="relative mx-auto mb-6">
          <div 
            className="w-20 h-20 border-4 border-cta-gold border-t-transparent rounded-full mx-auto"
            style={{ animation: 'spin 1s linear infinite' }}
          ></div>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ animation: 'pulse 2s infinite ease-in-out' }}
          >
            <span className="text-2xl font-bold text-cta">C</span>
          </div>
        </div>
        <p className="text-lg font-medium text-cta">Loading your experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;