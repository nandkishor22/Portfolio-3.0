import React from 'react';
import { Pushpin, RubberStamp } from './ScrapbookAssets';
import { playTypewriterSound } from '../utils/soundEffects';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    playTypewriterSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#3a3026] bg-[#14110f] py-12 px-4 sm:px-8 relative text-stone-400">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Case Closed Stamp & Signature */}
        <div className="flex items-center gap-4">
          <RubberStamp text="CASE CLOSED" type="red" angle="-5deg" className="text-sm sm:text-base py-0.5" />
          <div>
            <p className="font-marker text-stone-200 text-base sm:text-lg">
              Malin // Full-Stack Creative Portfolio
            </p>
            <p className="font-typewriter text-xs text-stone-500">
              ORIGINAL COLLAGE & DETECTIVE EVIDENCE THEME • 2026
            </p>
          </div>
        </div>

        {/* Center: Quote */}
        <div className="text-center font-handwriting text-stone-400 text-lg sm:text-xl">
          "Be different — not only in perception, be different in execution."
        </div>

        {/* Right: Scroll to top with pushpin */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 bg-[#26201a] hover:bg-[#342c23] text-amber-300 font-typewriter text-xs uppercase tracking-widest rounded-xs border border-[#4d3e30] shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-1 active:translate-y-0"
        >
          <Pushpin color="red" size={14} />
          <span>RETURN TO TOP</span>
          <ArrowUp size={14} />
        </button>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-[#26201a] flex flex-wrap justify-between items-center text-[11px] font-typewriter text-stone-500">
        <span>BUILT WITH REACT 19 • VITE • FRAMER MOTION • TAILWIND CSS</span>
        <span>NO COOKIES • ZERO SURVEILLANCE • 100% PURE CRAFT</span>
      </div>

    </footer>
  );
};
