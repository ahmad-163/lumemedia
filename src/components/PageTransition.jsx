import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const logoCream = '/assets/logo-cream.png';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [animating, setAnimating] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative min-h-screen">
      {/* Wipe overlay */}
      {animating && (
        <div className="fixed inset-0 z-[100] bg-navy-950 flex items-center justify-center animate-in fade-in fade-out duration-300">
          <div className="flex flex-col items-center gap-3 animate-pulse">
            <img src={logoCream} alt="Lumé Media" className="h-12 w-auto" />
            <div className="w-16 h-0.5 bg-amber rounded-full"></div>
          </div>
        </div>
      )}

      {/* Render children */}
      <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </div>
  );
}
