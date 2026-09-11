import React, { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop with fine cursor pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered elements for cursor attributes
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden lg:block ${
        isHovered ? 'scale-100' : 'scale-75'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovered ? 1.4 : 1})`,
      }}
    >
      <div
        className={`rounded-full border border-amber flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? 'w-16 h-16 bg-navy-950/80 backdrop-blur-sm text-amber font-semibold text-[11px] uppercase tracking-wider shadow-lg shadow-amber/20'
            : 'w-8 h-8 bg-amber/10'
        }`}
      >
        {isHovered && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
