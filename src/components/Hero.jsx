import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Pushpin, 
  WashiTape, 
  PaperAirplaneDoodle, 
  CrownDoodle, 
  LightbulbDoodle, 
  RubberStamp,
  HandDrawnArrow,
  QuestionMarkDoodle 
} from './ScrapbookAssets';
import { portfolioData } from '../data/portfolioData';
import { playPaperSound, playStampSound, playCameraSound, playTypewriterSound } from '../utils/soundEffects';
import { ArrowDown, Eye, EyeOff, Sparkles, Terminal, FileCode2 } from 'lucide-react';

export const Hero = () => {
  const [isRedacted, setIsRedacted] = useState(false);
  const { personal } = portfolioData;

  // Ransom cutout letters configuration
  const letters = [
    { char: 'P', bg: 'bg-amber-400 text-neutral-900', rotate: '-3deg', font: 'font-display', border: 'border-2 border-neutral-900' },
    { char: 'O', bg: 'bg-[#faf6ee] text-neutral-900', rotate: '2deg', font: 'font-display', hasBulb: true, border: 'border-2 border-neutral-800' },
    { char: 'R', bg: 'bg-neutral-900 text-amber-300', rotate: '-2deg', font: 'font-display', border: 'border-2 border-amber-400' },
    { char: 'T', bg: 'bg-amber-400 text-neutral-900', rotate: '4deg', font: 'font-display', border: 'border-2 border-neutral-900' },
    { char: 'F', bg: 'bg-[#f4efe4] text-neutral-900', rotate: '-4deg', font: 'font-display', border: 'border-2 border-neutral-800' },
    { char: 'O', bg: 'bg-neutral-900 text-white', rotate: '1deg', font: 'font-display', border: 'border-2 border-neutral-700' },
    { char: 'L', bg: 'bg-amber-500 text-neutral-900', rotate: '-2deg', font: 'font-display', border: 'border-2 border-neutral-900' },
    { char: 'I', bg: 'bg-[#faf7f0] text-neutral-900', rotate: '3deg', font: 'font-display', border: 'border-2 border-neutral-800' },
    { char: 'O', bg: 'bg-neutral-900 text-amber-400', rotate: '-1deg', font: 'font-display', border: 'border-2 border-amber-400' },
  ];

  return (
    <section className="relative pt-6 pb-20 px-4 sm:px-8 overflow-hidden">
      
      {/* Overhead Spotlight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Date & Location Stamp in corner (From Image 1) */}
      <div className="max-w-6xl mx-auto flex justify-between items-start mb-6 text-xs sm:text-sm font-typewriter text-amber-200/80">
        <div className="flex items-center gap-2">
          <span className="font-marker text-amber-400 text-sm sm:text-base">instagram stories // case logs</span>
        </div>
        <div className="text-right">
          <p className="font-bold text-amber-400 text-base sm:text-lg">04, NOV 2026</p>
          <p className="text-stone-400 tracking-wider">LAT 37.7749° N / FIELD REPORT</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* --- TOP BANNER: RANSOM CUTOUT "PORTFOLIO" TITLE (From Image 4) --- */}
        <div className="relative py-4 mb-6 flex flex-col items-center">
          
          {/* Floating Paper Airplane Doodle */}
          <PaperAirplaneDoodle className="absolute -top-3 left-6 sm:left-16 hidden sm:block" color="#fcd34d" />
          
          {/* Floating Crown Doodle over letter 'R' / 'T' */}
          <CrownDoodle className="absolute -top-6 left-1/2 -translate-x-12 w-14 h-10 hidden sm:block" color="#f59e0b" />

          {/* Large Magazine Ransom Letter Tiles */}
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2.5 z-10 max-w-full px-1">
            {letters.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.15, rotate: 0, transition: { type: 'spring', stiffness: 400 } }}
                onMouseEnter={playPaperSound}
                className={`relative px-2 xs:px-3 sm:px-6 py-1.5 xs:py-2 sm:py-4 rounded-sm shadow-xl cursor-pointer select-none transition-transform ${item.bg} ${item.border}`}
                style={{ transform: `rotate(${item.rotate})` }}
              >
                {/* Washi tape accents on some letters */}
                {idx === 0 && <WashiTape type="yellow" className="-top-2 sm:-top-3 -left-2 sm:-left-3" width="30px" height="14px" angle="-15deg" />}
                {idx === 7 && <WashiTape type="red" className="-top-2 sm:-top-3 -right-2" width="28px" height="12px" angle="12deg" />}
                
                <span className={`text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight ${item.font}`}>
                  {item.char}
                </span>

                {/* Lightbulb in second 'O' */}
                {item.hasBulb && (
                  <div className="absolute inset-0 flex items-center justify-center scale-75 sm:scale-100">
                    <LightbulbDoodle size={36} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>


          {/* Subtitle stamp banner */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="font-marker text-stone-200 text-lg sm:text-2xl tracking-wide bg-stone-900/80 px-4 py-1 border border-stone-700 -rotate-1 rounded-sm shadow-md">
              {personal.title}
            </span>
            <RubberStamp text="CLASSIFIED" type="red" angle="4deg" className="text-sm sm:text-base py-0.5" />
          </div>
        </div>

        {/* --- CENTRAL COLLAGE STAGE (From Reference Image 1 & 3) --- */}
        <div className="relative mt-4 min-h-[460px] xs:min-h-[520px] sm:min-h-[640px] flex items-center justify-center">

          {/* PINNED STICKY NOTE: Top Left (Image 4) */}
          <motion.div 
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            whileHover={{ scale: 1.05 }}
            onMouseDown={playPaperSound}
            className="absolute top-0 xs:top-2 left-1 xs:left-2 sm:left-6 z-20 w-32 xs:w-44 sm:w-56 p-2.5 xs:p-3 sm:p-4 bg-[#fef08a] text-neutral-900 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing -rotate-6 border border-yellow-300 hidden xs:block"
          >
            <Pushpin color="black" className="absolute -top-2 left-1/2 -translate-x-1/2" size={14} />
            <h4 className="font-marker text-xs xs:text-base sm:text-lg leading-tight mb-0.5 sm:mb-1">
              Creative Ideas<br/>Real Impact
            </h4>
            <p className="font-handwriting text-xs sm:text-base text-neutral-800 leading-snug">
              "Turning abstract thoughts into visual stories & rock-solid code."
            </p>
          </motion.div>

          {/* PINNED LINED NOTE: Top Right (Image 1 & 4) */}
          <motion.div 
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            whileHover={{ scale: 1.05 }}
            onMouseDown={playPaperSound}
            className="absolute top-0 right-1 xs:right-2 sm:right-6 z-20 w-36 xs:w-48 sm:w-60 p-2.5 xs:p-3 sm:p-4 bg-[#fffefb] text-neutral-900 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing rotate-3 border border-stone-300 paper-lined hidden sm:block"
          >
            <Pushpin color="brass" className="absolute -top-2 right-4" size={14} />
            <span className="font-marker text-xs uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
              ECE Hardware Stack
            </span>
            <ul className="font-typewriter text-xs text-stone-800 mt-2 space-y-1">
              <li>✔ STM32 / Embedded C</li>
              <li>✔ PCB Design (KiCad)</li>
              <li>✔ FPGA & Verilog HDL</li>
              <li>✔ IoT, LoRa & CAN Bus</li>
            </ul>
          </motion.div>

          {/* ECE DIGITAL OSCILLOSCOPE CUTOUT (Left Flank) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            onClick={playCameraSound}
            className="absolute left-0 xs:left-2 sm:left-8 bottom-6 xs:bottom-12 sm:bottom-16 z-10 w-24 xs:w-36 sm:w-60 cursor-pointer group select-none"
            title="Digital Laboratory Oscilloscope // Probe Active"
          >
            <img 
              src="/assets/oscilloscope.png" 
              alt="ECE Digital Oscilloscope" 
              className="w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]" 
            />
            {/* Hanging Label Tag */}
            <div className="absolute -bottom-2 sm:-bottom-3 left-1 sm:left-2 bg-[#fef08a] text-black font-marker text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded shadow rotate-6">
              Oscilloscope 100MHz ⚡
            </div>
          </motion.div>

          {/* CENTERPIECE: CUTOUT PORTRAIT ON STOOL (Image 1 & 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-15 w-[250px] xs:w-[310px] sm:w-[440px] md:w-[490px] flex flex-col items-center select-none"
          >
            <div className="relative">
              {/* Cutout Portrait Image */}
              <img 
                src="/assets/portrait.png" 
                alt="ECE Engineer Cutout Portrait" 
                className="w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
              />

              {/* Redacted Bar Toggle on Face (Image 2 - Detective Censor Bar) */}
              <div 
                onClick={() => {
                  playStampSound();
                  setIsRedacted(!isRedacted);
                }}
                className="absolute top-[13%] left-1/2 -translate-x-1/2 z-30 cursor-pointer group"
                title="Click to Toggle Redaction"
              >
                {isRedacted ? (
                  <div className="bg-black text-amber-300 font-typewriter text-[10px] sm:text-xs px-6 py-1 border border-neutral-700 shadow-xl flex items-center gap-1.5 -rotate-1 group-hover:scale-105 transition-transform">
                    <EyeOff size={13} className="text-red-400" />
                    <span>[REDACTED EVIDENCE]</span>
                  </div>
                ) : (
                  <div className="bg-red-700/90 text-white font-typewriter text-[9px] sm:text-[10px] px-2 py-0.5 rounded-sm shadow-md flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Eye size={12} />
                    <span>TOGGLE CENSOR</span>
                  </div>
                )}
              </div>

              {/* Tape Banner across thighs / stool (From Image 1) */}
              <div className="absolute bottom-[36%] -left-4 sm:-left-8 bg-[#fef08a] text-neutral-950 font-marker text-xs sm:text-sm px-3 py-1 shadow-lg -rotate-12 border-l-2 border-r-2 border-yellow-600 z-20">
                Dare to Stand Out ★
              </div>

              {/* Small Polaroid Card pinned to the side (From Image 1) */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -2 }}
                onMouseEnter={playPaperSound}
                className="absolute bottom-[18%] -left-6 sm:-left-12 z-25 bg-white p-2 pb-5 rounded-xs shadow-2xl rotate-6 w-24 sm:w-32 border border-stone-200 cursor-pointer"
              >
                <Pushpin color="red" className="absolute -top-2 left-2" />
                <div className="w-full h-20 sm:h-28 bg-neutral-900 overflow-hidden relative">
                  <img 
                    src="/assets/portrait.png" 
                    alt="Mini Polaroid" 
                    className="w-full h-full object-cover object-top scale-125"
                  />
                  <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
                </div>
                <p className="font-handwriting text-neutral-800 text-center text-xs mt-1 font-bold">
                  Field Agent #01
                </p>
              </motion.div>

              {/* Solved Stamp (From Image 2) */}
              <div className="absolute top-[38%] -right-4 sm:-right-8 z-20">
                <RubberStamp text="SOLVED" type="green" angle="12deg" className="text-base sm:text-xl py-0.5" />
              </div>

              {/* Confidential Stamp */}
              <div className="absolute bottom-[24%] -right-2 sm:-right-6 z-20">
                <RubberStamp text="CONFIDENTIAL" type="red" angle="-8deg" className="text-xs sm:text-sm py-0.5" />
              </div>
            </div>

            {/* Bottom ID Badge */}
            <div className="mt-2 bg-[#231e1a] border-2 border-[#544332] px-4 py-2 rounded-sm shadow-xl flex items-center gap-3 rotate-1">
              <Pushpin color="brass" size={14} />
              <div>
                <p className="font-marker text-amber-300 text-sm sm:text-base leading-tight">
                  {personal.name} // ECE Engineering Student
                </p>
                <p className="font-typewriter text-[11px] text-stone-400">
                  BRIDGING HARDWARE & EMBEDDED SOFTWARE
                </p>
              </div>
            </div>
          </motion.div>

          {/* ECE PRINTED CIRCUIT BOARD (PCB) DEV BOARD CUTOUT (Right Flank) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="absolute right-0 xs:right-2 sm:right-8 bottom-6 xs:bottom-10 sm:bottom-16 z-10 w-24 xs:w-36 sm:w-60 select-none pointer-events-auto cursor-pointer"
            title="ESP32 MCU PCB Development Board"
          >
            <img 
              src="/assets/pcb.png" 
              alt="ESP32 Printed Circuit Board" 
              className="w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]" 
            />
            {/* Hand-drawn scribble tag */}
            <div className="absolute bottom-1 right-2 bg-stone-900/90 text-emerald-400 font-marker text-[9px] sm:text-xs px-2 py-0.5 rounded shadow border border-emerald-900 -rotate-3">
              PCB Dev Board V1.2 🔬
            </div>
          </motion.div>

          {/* PINNED STICKY NOTE: Bottom Left */}
          <motion.div 
            drag
            dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
            whileHover={{ scale: 1.05 }}
            onMouseDown={playPaperSound}
            className="absolute bottom-2 left-6 sm:left-24 z-20 w-44 sm:w-56 p-3 bg-[#e0f2fe] text-neutral-900 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing rotate-6 border border-sky-300 hidden sm:block"
          >
            <Pushpin color="blue" className="absolute -top-2 left-4" />
            <p className="font-handwriting text-sm sm:text-base text-sky-950 font-bold leading-snug">
              "Be Different — from physical copper traces to bare-metal firmware."
            </p>
          </motion.div>

          {/* PINNED STICKY NOTE: Bottom Right */}
          <motion.div 
            drag
            dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
            whileHover={{ scale: 1.05 }}
            onMouseDown={playPaperSound}
            className="absolute bottom-2 right-6 sm:right-24 z-20 w-44 sm:w-56 p-3 bg-[#fef08a] text-neutral-900 rounded-sm shadow-2xl cursor-grab active:cursor-grabbing -rotate-6 border border-yellow-400 hidden sm:block"
          >
            <Pushpin color="black" className="absolute -top-2 right-4" />
            <h5 className="font-marker text-xs uppercase text-amber-900">Silicon Directive:</h5>
            <p className="font-handwriting text-sm sm:text-base text-neutral-900 font-bold leading-snug">
              "Zero dropped packets, rock-solid timing."
            </p>
          </motion.div>

        </div>


        {/* --- BOTTOM CALL TO ACTION STRIP --- */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          
          <button
            onClick={() => {
              playStampSound();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display text-xl tracking-wider uppercase rounded-xs shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 border-2 border-neutral-900"
          >
            <Sparkles size={20} />
            <span>INSPECT EVIDENCE BOARD</span>
            <ArrowDown size={18} />
          </button>

          <button
            onClick={() => {
              playTypewriterSound();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#2b241e] hover:bg-[#382f27] text-stone-200 font-typewriter text-sm tracking-widest uppercase rounded-xs shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2 border border-[#524131]"
          >
            <Terminal size={18} className="text-amber-400" />
            <span>DISPATCH A TIP // CONTACT</span>
          </button>

        </div>

      </div>
    </section>
  );
};
