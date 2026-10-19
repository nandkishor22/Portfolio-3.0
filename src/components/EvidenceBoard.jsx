import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pushpin, WashiTape, RubberStamp, GithubIcon } from './ScrapbookAssets';
import { portfolioData } from '../data/portfolioData';
import { CaseModal } from './CaseModal';
import { playPaperSound, playStampSound } from '../utils/soundEffects';
import { ExternalLink, ZoomIn, Sparkles, Filter } from 'lucide-react';

export const EvidenceBoard = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const { projects } = portfolioData;

  const filters = ['All', 'Embedded & Firmware', 'Wireless & IoT', 'Digital Logic & FPGA', 'Hardware Design'];


  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 relative">

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Pushpin color="red" size={24} />
            <div>
              <h2 className="font-display text-4xl sm:text-6xl tracking-wider text-amber-300">
                EVIDENCE BOARD // CASES SOLVED
              </h2>
              <p className="font-typewriter text-xs sm:text-sm text-stone-400">
                PINNED CASE EVIDENCE, ARCHITECTURAL DEPLOYMENTS & LIVE SYSTEMS
              </p>
            </div>
          </div>

          {/* Filter Pills (Hanging file tags) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-typewriter text-xs text-stone-400 flex items-center gap-1 mr-1">
              <Filter size={13} />
              <span>FILTER INTEL:</span>
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  playPaperSound();
                  setActiveFilter(filter);
                }}
                className={`px-3 py-1 font-typewriter text-xs tracking-wider rounded-xs transition-all cursor-pointer border ${activeFilter === filter
                    ? 'bg-amber-400 text-neutral-950 font-bold border-amber-300 shadow-md -translate-y-0.5'
                    : 'bg-[#27211b] text-stone-300 border-[#4a3b2c] hover:bg-[#382f25]'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* --- CORKBOARD PINBOARD CONTAINER (Inspired by Image 2 Corkboard) --- */}
        <div className="relative p-6 sm:p-10 rounded-sm bg-cork border-8 border-[#5b3e22] shadow-[inset_0_0_40px_rgba(0,0,0,0.6),0_20px_35px_rgba(0,0,0,0.8)] overflow-hidden">

          {/* Corkboard Top Header Stamp */}
          <div className="flex justify-between items-center mb-8 border-b-2 border-[#82542a] pb-4">
            <div className="bg-[#fef08a] px-3 py-1 text-black font-marker text-xs sm:text-sm -rotate-2 shadow-sm border border-yellow-400">
              📌 Investigation Map // Classified Projects
            </div>
            <div className="font-typewriter text-xs text-amber-950 font-bold tracking-widest uppercase">
              CONFIDENTIAL CASE NETWORK
            </div>
          </div>

          {/* Connected Red Thread SVG Accent across pinboard */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40 z-0">
            <line x1="15%" y1="20%" x2="48%" y2="28%" stroke="#b91c1c" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="48%" y1="28%" x2="82%" y2="22%" stroke="#b91c1c" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="48%" y1="28%" x2="52%" y2="65%" stroke="#b91c1c" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="20%" y1="70%" x2="52%" y2="65%" stroke="#b91c1c" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="52%" y1="65%" x2="85%" y2="72%" stroke="#b91c1c" strokeWidth="2.5" strokeDasharray="6 4" />
          </svg>

          {/* Grid of Polaroid Evidence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 relative z-10">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  rotate: 0,
                  transition: { type: 'spring', stiffness: 300 }
                }}
                className="polaroid-card relative flex flex-col justify-between cursor-pointer group"
                style={{ transform: `rotate(${project.tapeAngle})` }}
              >
                {/* 3D Pushpin at Top Center */}
                <Pushpin color={project.pinColor} className="absolute -top-3 left-1/2 -translate-x-1/2" size={20} />

                {/* Washi tape at Top Corner */}
                <WashiTape
                  type={idx % 2 === 0 ? "yellow" : "craft"}
                  className={idx % 2 === 0 ? "-top-3 -left-3" : "-top-3 -right-3"}
                  width="70px"
                  height="22px"
                  angle={idx % 2 === 0 ? "-12deg" : "15deg"}
                />

                <div>
                  {/* Polaroid Photo Frame */}
                  <div className="w-full h-56 sm:h-64 bg-stone-900 rounded-xs overflow-hidden relative shadow-inner">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover Inspect Overlay */}
                    <div
                      onClick={() => {
                        playStampSound();
                        setSelectedCase(project);
                      }}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-amber-300 font-display text-lg tracking-wider"
                    >
                      <ZoomIn size={22} />
                      <span>INSPECT CASE DOSSIER</span>
                    </div>

                    {/* Case Number Badge in Photo Corner */}
                    <div className="absolute top-2 left-2 bg-stone-950/85 text-amber-300 font-typewriter text-[11px] px-2.5 py-0.5 rounded-xs border border-stone-700">
                      {project.caseNo}
                    </div>

                    {/* Rubber Stamp Overlay on Corner */}
                    <div className="absolute bottom-2 right-2">
                      <RubberStamp text={project.stamp} type={project.stampType} angle="-6deg" className="text-xs sm:text-sm py-0.5 bg-white/90" />
                    </div>
                  </div>

                  {/* Title and Short Intel */}
                  <div className="mt-4">
                    <h3 className="font-marker text-xl sm:text-2xl text-neutral-900 group-hover:text-amber-800 transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-typewriter text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech stack torn paper tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#fbf9f5] border border-stone-300 text-neutral-800 font-typewriter text-[11px] rounded-xs shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-6 pt-3 border-t-2 border-dashed border-stone-300 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      playStampSound();
                      setSelectedCase(project);
                    }}
                    className="font-typewriter text-xs text-red-700 hover:text-red-900 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <ZoomIn size={14} />
                    <span>Open Case File</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        playPaperSound();
                      }}
                      className="px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display text-sm tracking-wider uppercase rounded-xs border border-neutral-900 flex items-center gap-1 shadow-xs cursor-pointer"
                    >
                      <ExternalLink size={13} />
                      <span>Live</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        playPaperSound();
                      }}
                      className="p-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 rounded-xs border border-stone-700 shadow-xs cursor-pointer"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={14} />
                    </a>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* Case Investigation Modal */}
      {selectedCase && (
        <CaseModal
          caseItem={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}

    </section>
  );
};
