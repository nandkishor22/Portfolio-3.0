import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Pushpin, WashiTape, RubberStamp, GithubIcon, LinkedinIcon, TwitterIcon } from './ScrapbookAssets';
import { portfolioData } from '../data/portfolioData';
import { playPaperSound, playStampSound, playTypewriterSound } from '../utils/soundEffects';
import { Send, CheckCircle2, Copy, Check, Mail } from 'lucide-react';


export const DispatchContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const { personal } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playStampSound();
    setIsSent(true);

    // Fire confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#ef4444', '#10b981', '#3b82f6', '#f59e0b']
      });
    } catch {
      // Safe fail
    }
  };

  const copyEmail = () => {
    playTypewriterSound();
    navigator.clipboard.writeText(personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 relative">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Pushpin color="red" size={24} />
          <h2 className="font-display text-4xl sm:text-6xl tracking-wider text-amber-300">
            DISPATCH TELEGRAM // CONTACT
          </h2>
          <RubberStamp text="OPEN INTAKE" type="amber" angle="3deg" className="text-xs sm:text-sm py-0.5 ml-auto" />
        </div>

        {/* --- VINTAGE AIRMAIL POSTCARD / ENVELOPE --- */}
        <div className="relative bg-[#faf7ee] text-neutral-900 rounded-sm p-4 xs:p-6 sm:p-12 shadow-2xl border-2 sm:border-4 border-[#e2d8c3] paper-shadow overflow-hidden">
          
          {/* Airmail border strip at top */}
          <div className="h-3.5 w-[calc(100%+2rem)] xs:w-[calc(100%+3rem)] sm:w-[calc(100%+6rem)] bg-[repeating-linear-gradient(45deg,#dc2626,#dc2626_15px,#ffffff_15px,#ffffff_30px,#2563eb_30px,#2563eb_45px,#ffffff_45px,#ffffff_60px)] -mt-4 xs:-mt-6 sm:-mt-12 -mx-4 xs:-mx-6 sm:-mx-12 mb-6 sm:mb-8 rounded-t-sm" />


          {/* Corner Tapes */}
          <WashiTape type="yellow" className="-top-3 left-8" width="80px" height="22px" angle="-8deg" />
          <WashiTape type="red" className="-bottom-3 right-8" width="70px" height="20px" angle="5deg" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Input Form (7 cols) */}
            <div className="md:col-span-7">
              
              <div className="mb-6">
                <span className="font-typewriter text-xs text-red-700 font-bold uppercase tracking-widest">
                  CONFIDENTIAL INCOMING WIRE //
                </span>
                <h3 className="font-marker text-2xl sm:text-3xl text-neutral-900 mt-1">
                  Got a Case or High-Stakes Project?
                </h3>
                <p className="font-typewriter text-xs sm:text-sm text-stone-600 mt-1">
                  Transmit your requirements directly to the field agent desk.
                </p>
              </div>

              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border-2 border-emerald-400 p-6 rounded-xs text-center my-6 shadow-sm"
                >
                  <Pushpin color="brass" className="mx-auto mb-2" />
                  <h4 className="font-display text-3xl text-emerald-900 tracking-wider">
                    DISPATCH TRANSMITTED!
                  </h4>
                  <p className="font-typewriter text-xs sm:text-sm text-emerald-800 mt-1">
                    Your brief has been logged into the secure intake terminal. Expect an encrypted reply shortly.
                  </p>
                  <div className="mt-4">
                    <RubberStamp text="RECEIVED & FILED" type="green" angle="-4deg" className="text-base" />
                  </div>
                  <button
                    onClick={() => {
                      playPaperSound();
                      setIsSent(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 text-xs font-typewriter underline text-stone-600 hover:text-black cursor-pointer"
                  >
                    Send another dispatch
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block font-typewriter text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      1. Agent / Client Codename:
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Director Sarah / Stealth Labs"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={playTypewriterSound}
                      className="w-full px-3 py-2 bg-white border-2 border-stone-300 rounded-xs font-typewriter text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block font-typewriter text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      2. Return Frequency (Email):
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={playTypewriterSound}
                      className="w-full px-3 py-2 bg-white border-2 border-stone-300 rounded-xs font-typewriter text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block font-typewriter text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                      3. Project Dossier / The Directive:
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell me about the goals, timeline, and stack requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onKeyDown={playTypewriterSound}
                      className="w-full px-3 py-2 bg-white border-2 border-stone-300 rounded-xs font-typewriter text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-display text-2xl tracking-widest uppercase rounded-xs border-2 border-neutral-950 shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-101 active:scale-99"
                  >
                    <Send size={18} />
                    <span>TRANSMIT WIRE (SUBMIT)</span>
                  </button>

                </form>
              )}

            </div>

            {/* Right: Postage Stamp + Direct Dossier Intel (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between h-full pt-2">
              
              {/* Postage Stamp & Cancellation Postmark */}
              <div className="flex justify-end relative select-none">
                <div className="relative">
                  {/* Postage Stamp */}
                  <div className="w-24 h-28 bg-[#faf0e1] border-2 border-dashed border-stone-400 p-1.5 shadow-md -rotate-3 rounded-xs flex flex-col items-center justify-between">
                    <div className="w-full h-16 bg-stone-900 overflow-hidden rounded-xs relative">
                      <img 
                        src="/assets/portrait.jpg" 
                        alt="Postal Stamp" 
                        className="w-full h-full object-cover object-top scale-120 filter grayscale" 
                      />
                    </div>
                    <span className="font-typewriter text-[10px] text-stone-700 font-bold tracking-widest">
                      DEV POST // 50¢
                    </span>
                  </div>

                  {/* Circular Rubber Cancellation Postmark */}
                  <div className="absolute -top-3 -left-10 w-20 h-20 rounded-full border-2 border-red-700/80 flex flex-col items-center justify-center -rotate-12 pointer-events-none">
                    <span className="font-typewriter text-[8px] text-red-700 font-bold">PORTFOLIO</span>
                    <span className="font-display text-xs text-red-700 tracking-wider">NOV 2026</span>
                    <span className="font-typewriter text-[8px] text-red-700">VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Direct Mail Card with Copy Button */}
              <div className="mt-8 p-4 bg-white/90 border-2 border-stone-300 rounded shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-marker text-xs uppercase text-amber-900">
                    Direct Encrypted Channel
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 font-typewriter text-xs text-stone-600 hover:text-black cursor-pointer bg-stone-100 px-2 py-0.5 rounded border border-stone-300"
                    title="Copy Email Address"
                  >
                    {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                    <span>{copied ? "COPIED" : "COPY"}</span>
                  </button>
                </div>
                
                <p className="font-typewriter text-xs sm:text-sm text-stone-900 font-bold break-all">
                  {personal.socials.email}
                </p>
              </div>

              {/* Social Channels Cutout Badges */}
              <div className="mt-6">
                <span className="font-typewriter text-xs text-stone-500 uppercase tracking-wider block mb-2">
                  FIELD RADAR CHANNELS:
                </span>
                
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playPaperSound()}
                    className="px-3 py-1.5 bg-[#fef08a] hover:bg-yellow-300 text-neutral-900 font-marker text-xs rounded-xs shadow-xs border border-yellow-400 flex items-center gap-1.5 cursor-pointer -rotate-2"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playPaperSound()}
                    className="px-3 py-1.5 bg-[#e0f2fe] hover:bg-sky-200 text-neutral-900 font-marker text-xs rounded-xs shadow-xs border border-sky-300 flex items-center gap-1.5 cursor-pointer rotate-2"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personal.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playPaperSound()}
                    className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-neutral-900 font-marker text-xs rounded-xs shadow-xs border border-stone-400 flex items-center gap-1.5 cursor-pointer -rotate-1"
                  >
                    <TwitterIcon size={14} />
                    <span>Twitter/X</span>
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
