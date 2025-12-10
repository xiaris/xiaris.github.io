import React from 'react';
import { motion } from 'framer-motion';
import BlackHole from './BlackHole';
import { Download, Telescope } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center">
      
      {/* Background Visual Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <BlackHole />
        {/* Left Gradient Mask to unify text background */}
        <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-void via-void/95 to-transparent pointer-events-none"></div>
      </div>

      {/* Background Gradient Mesh (Subtle Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cosmic-blue/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10 w-[40%] h-full flex flex-col justify-center px-6 md:px-0 md:pl-[3%] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Elegant ease
          className="pointer-events-auto max-w-xl md:ml-12"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cosmic-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cosmic-blue"></span>
            </span>
            <span className="text-slate-300 font-mono text-xs tracking-widest uppercase">PhD Candidate</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] whitespace-nowrap">
            Ruisong <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-cosmic-blue">Xia</span>
          </h1>
          
          <div className="mb-10 pl-6 border-l-2 border-cosmic-blue/30 md:pr-[4vw] flex flex-col gap-3">
            <h3 className="text-cosmic-blue font-mono text-xs tracking-widest uppercase opacity-90 font-semibold">Research Interests</h3>
            <div className="text-slate-400 text-lg md:text-xl font-light tracking-wide flex flex-col gap-2">
              <span className="leading-snug">AGN Optical/X-ray Variability</span>
              <span className="leading-snug">Statistical Methods</span>
              <span className="leading-snug">Accretion Disks</span>
              <span className="leading-snug">AI Applications in AGN Variability</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3.5 items-end">
            <a 
              href="https://ui.adsabs.harvard.edu/public-libraries/VgxKN0BZTrS814eDY5nRNw"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cosmic-blue/30 transition-all duration-300 flex items-center justify-center gap-3.5 backdrop-blur-md overflow-hidden active:scale-95 shadow-lg shadow-black/20"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cosmic-blue/0 via-cosmic-blue/5 to-cosmic-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Telescope size={27} className="text-cosmic-blue group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-slate-100 font-medium tracking-wide text-base">View Research</span>
            </a>
            
            <button className="group relative px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cosmic-blue/30 transition-all duration-300 flex items-center justify-center gap-3.5 backdrop-blur-md overflow-hidden active:scale-95 shadow-lg shadow-black/20">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cosmic-blue/0 via-cosmic-blue/5 to-cosmic-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Download size={27} className="text-cosmic-blue group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-slate-100 font-medium tracking-wide text-base">Download CV</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;