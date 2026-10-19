import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutDossier } from './components/AboutDossier';
import { SkillsNotebook } from './components/SkillsNotebook';
import { EvidenceBoard } from './components/EvidenceBoard';
import { TimelineJourney } from './components/TimelineJourney';
import { DispatchContact } from './components/DispatchContact';
import { Footer } from './components/Footer';
import { setSoundEnabled } from './utils/soundEffects';

export function App() {
  const [soundOn, setSoundOn] = useState(true);
  const [themeMode, setThemeMode] = useState('noir'); // 'noir' | 'kraft'

  useEffect(() => {
    setSoundEnabled(soundOn);
  }, [soundOn]);

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-amber-400 selection:text-neutral-950 ${
      themeMode === 'noir' 
        ? 'bg-[#151210] text-[#f4efe6] bg-noir-desk' 
        : 'bg-[#d8ceba] text-neutral-900 bg-kraft'
    }`}>
      
      {/* Top Header */}
      <Header 
        soundOn={soundOn} 
        setSoundOn={setSoundOn} 
        themeMode={themeMode} 
        setThemeMode={setThemeMode} 
      />

      {/* Main Investigation Desk Canvas */}
      <main className="relative">
        {/* 1. Hero / Central Ransom Collage Stage */}
        <Hero />

        {/* 2. Subject Dossier / About Me */}
        <AboutDossier />

        {/* 3. Spiral Notebook Arsenal / Skills */}
        <SkillsNotebook />

        {/* 4. Evidence Board / Projects Showcase on Corkboard */}
        <EvidenceBoard />

        {/* 5. Paper Trail / Timeline */}
        <TimelineJourney />

        {/* 6. Dispatch Wire / Contact Postcard */}
        <DispatchContact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
