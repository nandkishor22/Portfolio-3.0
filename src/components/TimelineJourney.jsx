import React from 'react';
import { motion } from 'framer-motion';
import { Pushpin, WashiTape, RubberStamp } from './ScrapbookAssets';
import { portfolioData } from '../data/portfolioData';
import { playPaperSound } from '../utils/soundEffects';
import { Briefcase, Calendar, MapPin, Milestone } from 'lucide-react';

export const TimelineJourney = () => {
  const { timeline } = portfolioData;

  return (
    <section id="timeline" className="py-16 px-4 sm:px-8 relative">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Pushpin color="red" size={22} />
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-amber-300">
            THE PAPER TRAIL // TIMELINE
          </h2>
          <span className="font-marker text-stone-400 text-sm hidden sm:inline -rotate-1">
            "Chronological chain of custody"
          </span>
        </div>

        {/* Timeline Desk Sheet */}
        <div className="relative bg-[#f4ece1] text-neutral-900 rounded-sm p-6 sm:p-10 shadow-2xl border-2 border-[#d3c2a5] paper-shadow">
          
          <WashiTape type="craft" className="-top-3 left-10" width="80px" height="22px" angle="-4deg" />
          <WashiTape type="yellow" className="-bottom-3 right-12" width="70px" height="20px" angle="8deg" />

          {/* Central Connecting Red Thread Line */}
          <div className="absolute top-12 bottom-12 left-8 sm:left-12 w-0.5 bg-red-600 border-l-2 border-dashed border-red-500 z-0" />

          <div className="space-y-8 relative z-10 pl-6 sm:pl-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                onMouseEnter={playPaperSound}
                className="relative bg-white/95 p-5 sm:p-6 rounded-xs border-2 border-stone-300 shadow-md group cursor-pointer"
              >
                {/* 3D Pushpin on Timeline String */}
                <div className="absolute -left-8 sm:-left-12 top-6 -translate-x-1/2">
                  <Pushpin color={idx === 0 ? "red" : idx === 1 ? "brass" : "black"} size={20} />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-stone-900 text-amber-300 font-typewriter text-xs font-bold rounded-xs tracking-wider">
                      {item.period}
                    </span>
                    <span className="bg-[#fef08a] px-2 py-0.5 text-black font-marker text-[11px] rounded-xs -rotate-2">
                      {item.tag}
                    </span>
                  </div>

                  <RubberStamp 
                    text={idx === 0 ? "CURRENT" : "RESOLVED"} 
                    type={idx === 0 ? "amber" : "dark"} 
                    angle={idx % 2 === 0 ? "3deg" : "-3deg"} 
                    className="text-xs py-0.2" 
                  />
                </div>

                <h3 className="font-marker text-xl sm:text-2xl text-neutral-900 mt-2 group-hover:text-amber-800 transition-colors">
                  {item.role}
                </h3>
                <p className="font-display text-base text-stone-600 tracking-wider">
                  @ {item.firm}
                </p>

                <p className="font-typewriter text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
                  {item.evidence}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
