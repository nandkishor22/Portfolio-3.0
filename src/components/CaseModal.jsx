import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pushpin, WashiTape, RubberStamp, GithubIcon } from './ScrapbookAssets';
import { playPaperSound, playStampSound } from '../utils/soundEffects';
import { X, ExternalLink, Terminal, CheckCircle2, ShieldAlert } from 'lucide-react';


export const CaseModal = ({ caseItem, onClose }) => {
  if (!caseItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
        
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* The Manila Case Dossier Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl bg-[#efe6d6] text-neutral-900 rounded-sm shadow-2xl border-4 border-[#cfbe9e] p-6 sm:p-10 my-8 paper-shadow"
        >
          {/* Top Folder Tab */}
          <div className="absolute -top-7 left-8 bg-[#d8caaF] border-t-2 border-l-2 border-r-2 border-[#b8a68b] px-6 py-1 rounded-t font-typewriter text-xs font-bold text-stone-800 tracking-wider">
            FORENSIC REPORT // {caseItem.caseNo}
          </div>

          {/* Close Button with typewriter sound */}
          <button
            onClick={() => {
              playPaperSound();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 bg-stone-900 text-stone-200 hover:text-amber-400 rounded-full transition-colors cursor-pointer shadow-md"
            title="Close Dossier"
          >
            <X size={20} />
          </button>

          {/* Washi tape on corner */}
          <WashiTape type="yellow" className="-top-3 right-16" width="70px" height="20px" angle="-6deg" />

          {/* Header Area */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-[#bfae90] pb-4 mb-6">
            <div>
              <span className="font-typewriter text-xs uppercase tracking-widest text-red-700 font-bold">
                EVIDENCE CLASSIFICATION: {caseItem.category}
              </span>
              <h3 className="font-marker text-2xl sm:text-4xl text-neutral-900 mt-1">
                {caseItem.title}
              </h3>
            </div>
            <RubberStamp text={caseItem.stamp} type={caseItem.stampType} angle="4deg" className="text-sm sm:text-lg" />
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Polaroid Image Preview */}
            <div className="md:col-span-5">
              <div className="polaroid-card -rotate-1 relative shadow-xl">
                <Pushpin color="red" className="absolute -top-2 left-4" size={16} />
                <div className="w-full h-48 sm:h-56 bg-stone-900 overflow-hidden relative rounded-xs">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
                </div>
                <div className="mt-2 text-center">
                  <span className="font-handwriting text-stone-800 text-sm font-bold">
                    Captured Field Evidence // Exhibit A
                  </span>
                </div>
              </div>

              {/* Verified Metrics Badge */}
              <div className="mt-4 p-3 bg-white/90 border border-stone-300 rounded shadow-xs">
                <div className="flex items-center gap-2 text-xs font-typewriter text-emerald-800 font-bold mb-1">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                  <span>AUDITED OUTCOME:</span>
                </div>
                <p className="font-typewriter text-xs text-stone-700">
                  {caseItem.metrics}
                </p>
              </div>
            </div>

            {/* Right: Technical Breakdown & Case Story */}
            <div className="md:col-span-7 flex flex-col justify-between">
              
              <div>
                <h4 className="font-display text-xl text-neutral-900 mb-2">
                  CASE INVESTIGATION NOTES
                </h4>
                <p className="font-typewriter text-sm text-stone-800 leading-relaxed mb-4">
                  {caseItem.fullStory}
                </p>

                {/* Tech Stack Pills */}
                <h5 className="font-display text-base text-neutral-900 mb-2">
                  TOOLS & ARSENAL DEPLOYED
                </h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseItem.tech.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-[#fffdfa] border border-stone-400 font-typewriter text-xs text-neutral-800 rounded-xs shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Preview & Source Code */}
              <div className="pt-4 border-t border-dashed border-[#bfae90] flex flex-wrap gap-3">
                <a
                  href={caseItem.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playStampSound()}
                  className="flex-1 min-w-[140px] px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display text-lg tracking-wider text-center uppercase rounded-xs border-2 border-neutral-900 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-102"
                >
                  <ExternalLink size={17} />
                  <span>VIEW LIVE EVIDENCE</span>
                </a>

                <a
                  href={caseItem.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPaperSound()}
                  className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 font-typewriter text-xs tracking-wider text-center uppercase rounded-xs border border-stone-700 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-102"
                >
                  <GithubIcon size={17} />
                  <span>CASE LOGS (GITHUB)</span>
                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
