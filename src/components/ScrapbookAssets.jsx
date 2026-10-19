import React from 'react';

// 3D Pushpin Component
export const Pushpin = ({ color = 'red', className = '', size = 20 }) => {
  const colorMap = {
    red: {
      head: 'radial-gradient(circle at 35% 35%, #ff8787 0%, #e03131 55%, #821111 100%)',
      pin: '#adb5bd',
      shadow: 'rgba(0,0,0,0.4)'
    },
    brass: {
      head: 'radial-gradient(circle at 35% 35%, #ffe066 0%, #f59f00 55%, #7f4f00 100%)',
      pin: '#adb5bd',
      shadow: 'rgba(0,0,0,0.4)'
    },
    black: {
      head: 'radial-gradient(circle at 35% 35%, #868e96 0%, #343a40 60%, #111417 100%)',
      pin: '#868e96',
      shadow: 'rgba(0,0,0,0.5)'
    },
    blue: {
      head: 'radial-gradient(circle at 35% 35%, #74c0fc 0%, #1c7ed6 55%, #0b3e6f 100%)',
      pin: '#adb5bd',
      shadow: 'rgba(0,0,0,0.4)'
    }
  };

  const current = colorMap[color] || colorMap.red;

  return (
    <div 
      className={`inline-block select-none pointer-events-none relative z-20 ${className}`}
      style={{ width: size, height: size }}
    >
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: current.head,
          boxShadow: `0 3px 6px ${current.shadow}, 0 1px 2px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.6)`
        }}
      />
      {/* Little highlight reflection */}
      <div 
        className="absolute w-1/3 h-1/3 rounded-full bg-white opacity-60" 
        style={{ top: '18%', left: '22%' }} 
      />
    </div>
  );
};

// Realistic Washi Tape Strip
export const WashiTape = ({ 
  type = 'yellow', 
  className = '', 
  width = '80px', 
  height = '26px', 
  angle = '-3deg' 
}) => {
  const backgrounds = {
    yellow: 'rgba(254, 240, 138, 0.85)',
    craft: 'rgba(229, 217, 192, 0.9)',
    red: 'rgba(252, 165, 165, 0.85)',
    transparent: 'rgba(255, 255, 255, 0.65)'
  };

  return (
    <div
      className={`select-none pointer-events-none absolute z-10 ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${angle})`,
        backgroundColor: backgrounds[type] || backgrounds.yellow,
        boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(1px)',
        borderLeft: '2px dashed rgba(0,0,0,0.15)',
        borderRight: '2px dashed rgba(0,0,0,0.15)',
        opacity: 0.95
      }}
    />
  );
};

// Hand-Drawn Arrow SVG
export const HandDrawnArrow = ({ className = '', direction = 'right', color = '#f59e0b' }) => {
  return (
    <svg 
      className={`select-none pointer-events-none ${className}`} 
      viewBox="0 0 100 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ stroke: color }}
    >
      <path 
        d="M10 40 C 35 15, 65 10, 85 30" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeDasharray="2 0"
      />
      <path 
        d="M72 18 L 88 32 L 68 40" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

// Hand-Drawn Paper Airplane SVG (from Image 4)
export const PaperAirplaneDoodle = ({ className = '', color = '#d4d4d8' }) => {
  return (
    <div className={`select-none pointer-events-none relative ${className}`}>
      <svg 
        viewBox="0 0 100 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-14"
        style={{ stroke: color }}
      >
        {/* Dotted Trail */}
        <path 
          d="M 5 65 C 20 60, 15 35, 35 45 C 50 55, 40 70, 60 55" 
          strokeWidth="1.5" 
          strokeDasharray="4 4" 
          strokeLinecap="round" 
        />
        {/* Paper Plane */}
        <path 
          d="M 60 55 L 95 10 L 45 40 Z" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="rgba(255,255,255,0.08)"
        />
        <path 
          d="M 95 10 L 65 65 L 60 55" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M 60 55 L 75 42" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
        />
      </svg>
    </div>
  );
};

// Hand-Drawn Crown Doodle (from Image 4)
export const CrownDoodle = ({ className = '', color = '#f59e0b' }) => {
  return (
    <svg 
      className={`select-none pointer-events-none ${className}`} 
      viewBox="0 0 80 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ stroke: color }}
    >
      <path 
        d="M 10 38 L 20 15 L 40 28 L 60 15 L 70 38 Z" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="rgba(245, 158, 11, 0.15)"
      />
      <circle cx="20" cy="12" r="3" fill={color} />
      <circle cx="40" cy="25" r="3" fill={color} />
      <circle cx="60" cy="12" r="3" fill={color} />
    </svg>
  );
};

// Lightbulb Doodle (inside letter O in Image 4)
export const LightbulbDoodle = ({ className = '', size = 32 }) => {
  return (
    <svg 
      className={`select-none pointer-events-none ${className}`} 
      viewBox="0 0 60 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size * 1.15 }}
    >
      <circle cx="30" cy="26" r="16" stroke="#fbbf24" strokeWidth="2.5" fill="rgba(251, 191, 36, 0.2)" />
      {/* Rays */}
      <line x1="30" y1="4" x2="30" y2="8" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="12" x2="16" y2="15" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="12" x2="44" y2="15" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="26" x2="12" y2="26" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="26" x2="48" y2="26" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
      {/* Base */}
      <path d="M 23 42 L 37 42 L 34 52 L 26 52 Z" stroke="#e5e7eb" strokeWidth="2" fill="#9ca3af" />
      <line x1="25" y1="56" x2="35" y2="56" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

// Question Mark Doodle (from Image 1 & 2)
export const QuestionMarkDoodle = ({ className = '', color = '#f97316', size = 40 }) => {
  return (
    <svg 
      className={`select-none pointer-events-none ${className}`} 
      viewBox="0 0 60 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size }}
    >
      <path 
        d="M 18 20 C 18 10, 36 8, 38 20 C 40 30, 28 32, 28 44" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      <circle cx="28" cy="56" r="3.5" fill={color} />
    </svg>
  );
};

// Rubber Stamp Component
export const RubberStamp = ({ text = "CLASSIFIED", type = "red", className = "", angle = "-6deg" }) => {
  const styles = {
    red: "text-red-600 border-red-600 shadow-red-900/20",
    green: "text-emerald-600 border-emerald-600 shadow-emerald-900/20",
    dark: "text-neutral-900 border-neutral-900 shadow-black/20",
    amber: "text-amber-600 border-amber-600 shadow-amber-900/20"
  };

  return (
    <div 
      className={`select-none pointer-events-none inline-block border-2 sm:border-4 border-dashed px-3 py-1 font-display tracking-widest text-lg sm:text-2xl uppercase transition-transform ${styles[type] || styles.red} ${className}`}
      style={{ transform: `rotate(${angle})` }}
    >
      {text}
    </div>
  );
};

// Brand SVG Icons
export const GithubIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

