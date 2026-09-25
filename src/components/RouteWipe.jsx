import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteWipe({ children }) {
  const location = useLocation();
  const [isWiping, setIsWiping] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsWiping(true);
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        const endTimer = setTimeout(() => {
          setIsWiping(false);
        }, 150);
        return () => clearTimeout(endTimer);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative min-h-screen">
      {/* Route Transition Navy Block Overlay */}
      <div
        className={`fixed inset-0 z-[9990] bg-navy-950 flex flex-col items-center justify-center pointer-events-none transition-all duration-150 ease-in-out ${
          isWiping ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <img
            src="/assets/logo-cream.png"
            alt="Lumé Media"
            className="h-10 md:h-12 w-auto animate-pulse"
          />
          <div className="font-mono text-xs uppercase tracking-widest text-signal flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal animate-ping" />
            CUT TO: {location.pathname.toUpperCase() || '/'}
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
