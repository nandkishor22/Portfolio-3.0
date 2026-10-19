import React from 'react';
import { Volume2, VolumeX, Sun, Moon, FileText, Send, Sparkles } from 'lucide-react';
import { Pushpin } from './ScrapbookAssets';
import { playTypewriterSound } from '../utils/soundEffects';

export const Header = ({ 
  soundOn, 
  setSoundOn, 
  themeMode, 
  setThemeMode, 
  onNavigate 
}) => {
  const handleNav = (id) => {
    playTypewriterSound();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#181512]/90 border-b border-[#3e342b] py-3 px-4 sm:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Case Status Badge */}
        <div className="flex items-center gap-3">
          <Pushpin color="red" size={16} />
          <div className="font-typewriter text-xs sm:text-sm tracking-wider text-amber-300/90 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>CASE #2026-DEV // DECLASSIFIED</span>
          </div>
        </div>

        {/* Center / Nav Tabs (Hanging folder tabs) */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full py-1 scrollbar-none">
          {[
            { label: 'Dossier', id: 'about' },
            { label: 'Evidence', id: 'projects' },
            { label: 'Arsenal', id: 'skills' },
            { label: 'Timeline', id: 'timeline' },
            { label: 'Dispatch', id: 'contact' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleNav(tab.id)}
              className="px-2 sm:px-3 py-1 font-typewriter text-xs sm:text-sm tracking-wide rounded border border-[#44382c] bg-[#241f1a] hover:bg-[#342c24] hover:text-amber-300 text-stone-300 transition-all cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              {tab.label}
            </button>
          ))}
        </nav>


        {/* Right: Controls (Sound + Theme) */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              playTypewriterSound();
              setSoundOn(!soundOn);
            }}
            title={soundOn ? "Mute physical audio effects" : "Enable physical audio effects"}
            className="p-1.5 rounded border border-[#44382c] bg-[#241f1a] hover:bg-[#342c24] text-stone-300 hover:text-amber-300 transition-all cursor-pointer flex items-center gap-1 text-xs font-mono-tech"
          >
            {soundOn ? <Volume2 size={15} className="text-amber-400" /> : <VolumeX size={15} className="text-stone-500" />}
            <span className="hidden md:inline font-typewriter text-[11px]">{soundOn ? "SFX: ON" : "SFX: OFF"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              playTypewriterSound();
              setThemeMode(themeMode === 'noir' ? 'kraft' : 'noir');
            }}
            title="Toggle Detective Noir / Studio Kraft Desk"
            className="p-1.5 rounded border border-[#44382c] bg-[#241f1a] hover:bg-[#342c24] text-stone-300 hover:text-amber-300 transition-all cursor-pointer flex items-center gap-1 text-xs font-mono-tech"
          >
            {themeMode === 'noir' ? (
              <>
                <Moon size={15} className="text-amber-300" />
                <span className="hidden md:inline font-typewriter text-[11px]">NOIR</span>
              </>
            ) : (
              <>
                <Sun size={15} className="text-amber-500" />
                <span className="hidden md:inline font-typewriter text-[11px]">KRAFT</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
