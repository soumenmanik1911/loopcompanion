"use client";

import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Function to handle page load completion
    const handleLoad = () => {
      // First set fadeOut to true to trigger the animation
      setFadeOut(true);
      
      // Then after animation completes, set loading to false to remove from DOM
      setTimeout(() => {
        setLoading(false);
      }, 500); // Match this to the fadeOut animation duration
    };

    // If document is already loaded
    if (document.readyState === 'complete') {
      // Add a small delay to ensure the component is mounted
      setTimeout(handleLoad, 500);
    } else {
      // Set up event listener for when the page loads
      window.addEventListener('load', handleLoad);
      
      // Fallback timer in case load event doesn't fire
      const timer = setTimeout(() => {
        handleLoad();
      }, 2000);
      
      // Clean up
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  // If not loading, don't render anything
  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className="text-center">
        {/* Logo or brand element with theme colors */}
        <div className="relative mx-auto mb-6">
          <div 
            className="w-20 h-20 border-4 rounded-full mx-auto"
            style={{ 
              borderColor: '#fccc41', 
              borderTopColor: 'transparent',
              animation: 'spin 1s linear infinite' 
            }}
          ></div>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ animation: 'pulse 2s infinite ease-in-out' }}
          >
            <span className="text-2xl font-bold" style={{ color: '#2c2c2c' }}>C</span>
          </div>
        </div>
        <p className="text-lg font-medium" style={{ color: '#2c2c2c' }}>Loading your experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;