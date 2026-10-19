import React from 'react';
import { motion } from 'framer-motion';
import { Pushpin, WashiTape, RubberStamp, HandDrawnArrow, QuestionMarkDoodle } from './ScrapbookAssets';
import { portfolioData } from '../data/portfolioData';
import { playPaperSound, playStampSound } from '../utils/soundEffects';
import { FolderGit2, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const AboutDossier = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 px-4 sm:px-8 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header with Pushpin and Stamped Dossier Title */}
        <div className="flex items-center gap-3 mb-8">
          <Pushpin color="red" size={22} />
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-amber-300">
            CASE DOSSIER // SUBJECT PROFILE
          </h2>
          <RubberStamp text="DECLASSIFIED" type="green" angle="2deg" className="text-xs sm:text-sm py-0.5 ml-auto" />
        </div>

        {/* The Manila Case Folder / Desk Paperwork Container */}
        <div className="relative bg-[#efe7d8] text-neutral-900 rounded-sm p-6 sm:p-10 shadow-2xl border-2 border-[#d5c6ad] paper-shadow">
          
          {/* Top Edge Manila Folder Tab */}
          <div className="absolute -top-7 left-8 bg-[#d8caaF] border-t-2 border-l-2 border-r-2 border-[#c2b295] px-6 py-1 rounded-t-md font-typewriter text-xs font-bold text-stone-800 tracking-wider">
            FILE NO: #2026-MALIN-DEV
          </div>

          {/* Corner Washi Tapes */}
          <WashiTape type="yellow" className="-top-3 -right-3" width="90px" height="24px" angle="15deg" />
          <WashiTape type="craft" className="-bottom-3 -left-3" width="80px" height="22px" angle="-10deg" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Evidence Photo + Pinned Calendar + Solved Stamp (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center">
              
              {/* Polaroid Evidence Photo */}
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.03 }}
                onMouseEnter={playPaperSound}
                className="polaroid-card w-full max-w-[260px] -rotate-2 relative cursor-pointer"
              >
                <Pushpin color="brass" className="absolute -top-3 left-1/2 -translate-x-1/2" />
                <div className="w-full h-52 bg-stone-900 overflow-hidden relative">
                  <img 
                    src="/assets/portrait.png" 
                    alt="Subject Portrait" 
                    className="w-full h-full object-cover object-top scale-115" 
                  />
                  {/* Subtle noise grain */}
                  <div className="absolute inset-0 bg-amber-500/10 mix-blend-color" />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-typewriter text-xs text-stone-700 tracking-wider uppercase font-bold">
                    SUBJECT: {personal.name}
                  </p>
                  <p className="font-handwriting text-stone-600 text-sm">
                    Status: Active at the bench
                  </p>
                </div>
              </motion.div>

              {/* Pinned Vintage Calendar Page (From Image 2 & 3: DEC 20 1962 / OCT 2026) */}
              <div className="mt-6 bg-white p-3 border-2 border-stone-300 rounded shadow-md w-36 text-center relative rotate-3">
                <Pushpin color="red" className="absolute -top-2 right-2" size={16} />
                <p className="font-typewriter text-xs text-red-600 font-bold uppercase tracking-wider">
                  ACTIVE SINCE
                </p>
                <p className="font-display text-4xl text-neutral-900 leading-none my-1">
                  2020
                </p>
                <p className="font-typewriter text-[11px] text-stone-500">
                  ECE BATCH 2026
                </p>
              </div>

              {/* Pinned "WHY?" Sticky note (From Image 2) */}
              <div className="mt-4 bg-[#fef08a] px-4 py-2 border border-yellow-300 rounded-xs shadow-md -rotate-6">
                <p className="font-marker text-neutral-900 text-lg leading-tight text-center">
                  WHY?
                </p>
                <p className="font-handwriting text-xs text-neutral-800 text-center font-bold">
                  Because hardware and firmware run the physical world.
                </p>
              </div>

            </div>

            {/* Right Column: Case Intel & Typewritten Brief (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              
              <div>
                {/* Blue marker highlighted role (From Image 1) */}
                <div className="inline-block bg-[#0284c7] text-white px-3 py-1 font-display text-xl sm:text-2xl uppercase tracking-wider rounded-xs shadow-sm mb-3 -rotate-1">
                  Electronics & Communication Engineering Student
                </div>

                <h3 className="font-marker text-2xl sm:text-3xl text-neutral-900 mb-4">
                  "Good engineering isn't just theory — it's making physical electrons compute reliably."
                </h3>

                {/* Typewritten Bio Paragraphs */}
                <div className="font-typewriter text-sm sm:text-base text-stone-800 leading-relaxed space-y-3">
                  <p>
                    <span className="bg-amber-200/80 px-1 font-bold">AGENT IDENTIFIER:</span> Malin is an Electronics & Communication Engineering (ECE) student and embedded systems researcher who communicates ideas, circuits, and architecture through physical silicon and intelligent firmware.
                  </p>
                  <p>
                    Specializing in hardware-software co-design: <span className="underline decoration-wavy decoration-red-500 font-semibold">Embedded C/C++, STM32 & ESP32 Microcontrollers, KiCad Multi-Layer PCB Design, and Verilog FPGA synthesis</span>. When debugging complex hardware bugs, EMI noise, or timing glitches on serial buses, every case is approached like a forensic laboratory investigation.
                  </p>
                </div>

              </div>

              {/* Red Connecting String & Key Stats Strip (From Image 2 Corkboard) */}
              <div className="mt-8 pt-6 border-t-2 border-dashed border-[#b8a68b] relative">
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-display text-lg text-red-700 tracking-wider">
                    VERIFIED EVIDENCE METRICS
                  </span>
                  <div className="h-0.5 flex-1 bg-red-400 border-b border-dashed border-red-600" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {personal.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      onMouseEnter={playPaperSound}
                      className="bg-white/90 p-3 rounded-xs border border-stone-300 shadow-sm relative group cursor-pointer"
                    >
                      <Pushpin color={i % 2 === 0 ? "brass" : "red"} className="absolute -top-2 left-2" size={14} />
                      <p className="font-display text-3xl sm:text-4xl text-neutral-900 group-hover:text-red-700 transition-colors">
                        {stat.value}
                      </p>
                      <p className="font-typewriter text-[11px] text-stone-600 uppercase tracking-tight mt-1">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
