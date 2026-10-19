import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pushpin, WashiTape, RubberStamp, QuestionMarkDoodle } from './ScrapbookAssets';
import { portfolioData } from '../data/portfolioData';
import { playPaperSound } from '../utils/soundEffects';
import { Cpu, Radio, Wifi, CheckSquare, Sparkles } from 'lucide-react';

export const SkillsNotebook = () => {
  const [activeCategory, setActiveCategory] = useState('embedded');
  const { skills } = portfolioData;

  const categories = [
    { key: 'embedded', label: 'Embedded & MCU', icon: Cpu, tapeColor: 'yellow' },
    { key: 'hardware', label: 'Circuits & PCB', icon: Radio, tapeColor: 'craft' },
    { key: 'communication', label: 'Wireless & DSP', icon: Wifi, tapeColor: 'red' }
  ];


  return (
    <section id="skills" className="py-16 px-4 sm:px-8 relative">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <Pushpin color="brass" size={22} />
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-amber-300">
            ARSENAL // TECHNICAL INTEL
          </h2>
          <span className="font-marker text-stone-400 text-sm hidden sm:inline -rotate-2">
            "The tools used to solve the unsolvable"
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Spiral Notebook (8 cols) - Inspired by Image 1 */}
          <div className="lg:col-span-8 relative">
            
            {/* The Notebook Page with Perforated Holes */}
            <div className="bg-[#fffefb] text-neutral-900 rounded-sm shadow-2xl border-2 border-stone-300 overflow-hidden relative paper-lined p-6 sm:p-10 pt-12 paper-shadow">
              
              {/* Spiral Ring Binder Holes (Perforated holes at top - From Image 1) */}
              <div className="absolute top-2 left-0 right-0 flex justify-around px-2 sm:px-4 select-none pointer-events-none overflow-hidden">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center shrink-0">
                    <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#1e1b18] shadow-inner" />
                    <div className="w-1 sm:w-1.5 h-2 sm:h-3 bg-stone-400 -mt-1 shadow-xs rounded-sm" />
                  </div>
                ))}
              </div>


              {/* Notebook Header Tab Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b-2 border-stone-300">
                <div className="flex items-center gap-2">
                  <h3 className="font-marker text-2xl text-neutral-900">
                    Field Manual // Tool Stack
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = activeCategory === cat.key;
                    return (
                      <button
                        key={cat.key}
                        onClick={() => {
                          playPaperSound();
                          setActiveCategory(cat.key);
                        }}
                        className={`px-3 py-1 font-typewriter text-xs sm:text-sm tracking-wide rounded-xs transition-all cursor-pointer flex items-center gap-1.5 border ${
                          isActive 
                            ? 'bg-amber-300 text-neutral-900 border-amber-500 font-bold shadow-md -translate-y-0.5' 
                            : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                        }`}
                      >
                        <Icon size={14} />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Current Skill List with Highlighter Bars & Checkboxes */}
              <div className="space-y-4">
                {skills[activeCategory]?.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded hover:bg-amber-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-marker text-emerald-700 text-lg">✔</span>
                      <span className="font-typewriter text-sm sm:text-base font-bold text-neutral-900">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:w-1/2">
                      {/* Marker Highlight Progress Bar */}
                      <div className="w-full h-3.5 bg-stone-200 rounded-xs overflow-hidden relative border border-stone-300">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full bg-amber-400 opacity-90 relative"
                        >
                          <div className="absolute inset-0 bg-yellow-300/40" />
                        </motion.div>
                      </div>
                      <span className="font-marker text-xs text-stone-700 w-9 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Notebook Footnote */}
              <div className="mt-8 pt-4 border-t border-dashed border-stone-300 flex justify-between items-center text-xs font-typewriter text-stone-500">
                <span>VERIFIED TOOLCHAIN // FIELD READY</span>
                <span className="font-handwriting text-base text-stone-700 font-bold">
                  "Continuously learning & upgrading"
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Pinned Sticky Notes & Doodles (4 cols) - Inspired by Image 1 & 4 */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* PINNED STICKY NOTE: "TAKING INSPIRATION FROM" (Directly from Image 1) */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              whileHover={{ scale: 1.04 }}
              onMouseDown={playPaperSound}
              className="bg-white p-5 rounded-xs shadow-2xl border border-stone-200 rotate-2 relative cursor-grab active:cursor-grabbing"
            >
              <Pushpin color="red" className="absolute -top-3 left-6" />
              <div className="font-marker text-sky-800 text-lg sm:text-xl leading-tight mb-2 uppercase">
                TAKING INSPIRATION FROM:
              </div>
              <ul className="font-typewriter text-xs sm:text-sm text-stone-700 space-y-1.5 list-disc pl-4">
                <li>ARM Cortex-M Architecture & RISC-V Open Silicon</li>
                <li>High-Speed Controlled Impedance PCB Routing</li>
                <li>Shannon's Information Theory & Wireless Systems</li>
                <li>Real-Time Operating Systems (FreeRTOS) & State Machines</li>
              </ul>
              <div className="mt-4 flex justify-end">
                <RubberStamp text="VERIFIED" type="amber" angle="-5deg" className="text-xs py-0.5" />
              </div>
            </motion.div>

            {/* PINNED STICKY NOTE: "THE ECE PHILOSOPHY" */}
            <motion.div
              drag
              dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
              whileHover={{ scale: 1.04 }}
              onMouseDown={playPaperSound}
              className="bg-[#fef08a] p-5 rounded-xs shadow-2xl border border-yellow-300 -rotate-3 relative cursor-grab active:cursor-grabbing"
            >
              <Pushpin color="black" className="absolute -top-3 right-6" />
              <h4 className="font-marker text-neutral-900 text-base sm:text-lg mb-1">
                Hardware Rule #01
              </h4>
              <p className="font-handwriting text-base sm:text-lg text-neutral-800 font-bold leading-snug">
                "Always verify with the oscilloscope before assuming. Clean hardware makes firmware effortless."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs font-typewriter text-stone-600">
                <span>Lab Station 04</span>
                <span className="font-bold text-amber-900">#ECE2026</span>
              </div>
            </motion.div>


          </div>

        </div>

      </div>

    </section>
  );
};
