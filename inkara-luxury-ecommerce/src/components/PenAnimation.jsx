import React, { useState, useEffect } from 'react';

export default function PenAnimation() {
  const [isSeparated, setIsSeparated] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (!autoPlay || reducedMotion) return;
    const interval = setInterval(() => {
      setIsSeparated(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, reducedMotion]);

  return (
    <div className="pen-container w-full max-w-xl relative p-6 sm:p-10 bg-gradient-to-br from-inkara-charcoal/80 to-inkara-black/90 border border-gold-accent rounded-2xl shadow-2xl backdrop-blur-sm">
      <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 650 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="barrelGradNext" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#282828"/>
              <stop offset="35%" stopColor="#141414"/>
              <stop offset="70%" stopColor="#0c0c0c"/>
              <stop offset="100%" stopColor="#1f1f1f"/>
            </linearGradient>
            <linearGradient id="goldGradNext" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A58252"/>
              <stop offset="30%" stopColor="#E1C79C"/>
              <stop offset="70%" stopColor="#C4A477"/>
              <stop offset="100%" stopColor="#8F6E3F"/>
            </linearGradient>
            <linearGradient id="nibGradNext" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8f8f8"/>
              <stop offset="40%" stopColor="#d4d4d4"/>
              <stop offset="75%" stopColor="#e5e5e5"/>
              <stop offset="100%" stopColor="#a3a3a3"/>
            </linearGradient>
          </defs>

          {/* Blue ink line on slate */}
          <path
            d="M 120 200 Q 180 230 260 205 T 380 240 T 520 220"
            stroke="#1E40AF"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
            style={{
              strokeDasharray: 600,
              strokeDashoffset: isSeparated ? 0 : 600,
              transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />

          <g transform="translate(320, 200) rotate(-16)">
            {/* Body */}
            <g>
              <path d="M -160 0 L -120 -15 L -90 -12 L -90 12 L -120 15 Z" fill="url(#nibGradNext)" stroke="#C4A477" strokeWidth="1"/>
              <path d="M -160 0 L -115 0" stroke="#404040" strokeWidth="1.2"/>
              <circle cx="-115" cy="0" r="2.5" fill="#141414"/>
              <rect x="-90" y="-13" width="25" height="26" rx="2" fill="#1a1a1a" stroke="#000" strokeWidth="1"/>
              <rect x="-65" y="-14" width="8" height="28" fill="url(#goldGradNext)" rx="1"/>
              <path d="M -57 -15 L -20 -18 L -20 18 L -57 15 Z" fill="url(#barrelGradNext)"/>
              <rect x="-20" y="-19" width="12" height="38" fill="url(#goldGradNext)" rx="1.5"/>
              <path d="M -8 -18 L 180 -15 Q 195 -14 195 0 Q 195 14 180 15 L -8 18 Z" fill="url(#barrelGradNext)" stroke="#222" strokeWidth="0.8"/>
              <path d="M 180 -15 L 195 -12 Q 200 0 195 12 L 180 15 Z" fill="url(#goldGradNext)"/>
            </g>

            {/* Separating Cap */}
            <g
              style={{
                transformOrigin: 'center right',
                transform: isSeparated ? 'translate(-120px, -20px) rotate(-8deg)' : 'translate(0, 0) rotate(0)',
                transition: reducedMotion ? 'none' : 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              <path d="M -170 -19 L -18 -19 L -18 19 L -170 19 Q -185 16 -185 0 Q -185 -16 -170 -19 Z" fill="url(#barrelGradNext)" stroke="#1a1a1a" strokeWidth="1"/>
              <rect x="-22" y="-19.5" width="8" height="39" fill="url(#goldGradNext)" rx="1"/>
              <g transform="translate(-100, 0)">
                <circle cx="0" cy="0" r="14" fill="#1B1B1B" stroke="url(#goldGradNext)" strokeWidth="2"/>
                <circle cx="0" cy="0" r="11" fill="#101010"/>
                <path d="m0 -7 3 5-3 8-3-8 3-5z" fill="none" stroke="#C4A477" strokeWidth="1"/>
                <text x="0" y="8" fontFamily="'DM Sans', sans-serif" fontSize="3.5" fill="#E1C79C" textAnchor="middle" fontWeight="bold">INKARA</text>
              </g>
              <path d="M -170 -18 L -90 -16 Q -85 -14 -85 -8 Q -85 -14 -80 -16 L -40 -17 L -40 -19 L -170 -20 Z" fill="url(#goldGradNext)"/>
              <circle cx="-168" cy="-18" r="3" fill="#E1C79C"/>
            </g>
          </g>
        </svg>
      </div>

      <div className="mt-4 pt-4 border-t border-gold-accent flex flex-wrap items-center justify-between text-xs gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-inkara-gold"></span>
          <span className="text-inkara-grey font-medium">{isSeparated ? 'Cap Separated — Nib Exposed' : 'Pen Assembled & Sealed'}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSeparated(!isSeparated)}
            className="px-3 py-1.5 bg-inkara-charcoal border border-inkara-gold text-inkara-gold hover:bg-inkara-gold hover:text-inkara-black transition-colors rounded uppercase tracking-wider font-semibold"
          >
            {isSeparated ? 'Snap Cap Back' : 'Separate Cap'}
          </button>
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="px-3 py-1.5 border border-gold-accent text-inkara-grey hover:text-inkara-ivory transition-colors rounded uppercase tracking-wider"
          >
            {autoPlay ? 'Auto-Cycle: Active' : 'Auto-Cycle: Paused'}
          </button>
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className="px-2 py-1.5 text-[10px] text-inkara-grey/60 hover:text-inkara-grey"
          >
            {reducedMotion ? 'Reduced Motion: ON' : 'Reduced Motion: OFF'}
          </button>
        </div>
      </div>
    </div>
  );
}
