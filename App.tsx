import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchCard from './components/ResearchCard';
import Timeline from './components/Timeline';
import { RESEARCH_DATA } from './constants';
import { Mail, Github, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-void text-slate-200 min-h-screen selection:bg-cosmic-blue/30 selection:text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Research Section */}
        <section id="research" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Publications</h2>
            <a 
              href="https://ui.adsabs.harvard.edu/public-libraries/VgxKN0BZTrS814eDY5nRNw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cosmic-blue hover:text-white transition-colors text-sm font-medium border-b border-cosmic-blue/30 hover:border-white pb-1"
            >
              More
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_DATA.map((paper) => (
              <ResearchCard key={paper.id} paper={paper} />
            ))}
          </div>
        </section>
        
        {/* Timeline Section */}
        <section id="timeline" className="py-24 px-6 md:px-16 lg:px-24 bg-cosmic-dark/30">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Academic Trajectory</h2>
             <Timeline />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-slate-900/50 to-void border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
             {/* Glow effect */}
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cosmic-blue/5 blur-[100px] rounded-full pointer-events-none"></div>
             
             {/* Left: Photo Frame */}
             <div className="relative z-10 shrink-0">
               <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-slate-800/80 overflow-hidden shadow-2xl relative bg-slate-800">
                 <img 
                   src="image.jpg" 
                   alt="Profile" 
                   className="w-full h-full object-cover" 
                 />
               </div>
             </div>

             {/* Right: Content */}
             <div className="relative z-10 flex-1 text-center md:text-left">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Collaborate</h2>
               <p className="text-slate-400 mb-8 max-w-[300px] mx-auto md:mx-0 text-lg leading-relaxed">
                 Always open to new research ideas, opportunities, and collaborative possibilities.
               </p>
               
               <div className="flex justify-center md:justify-start gap-5">
                 <a href="mailto:xiars@mail.ustc.edu.cn" className="p-3 rounded-full bg-slate-800 hover:bg-cosmic-blue hover:text-white text-slate-400 transition-all duration-300" title="Email">
                   <Mail size={20} />
                 </a>
                 <a href="https://github.com/xiaris" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-cosmic-blue hover:text-white text-slate-400 transition-all duration-300" title="GitHub">
                   <Github size={20} />
                 </a>
                 <a href="https://orcid.org/0009-0005-3916-1455" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-cosmic-blue hover:text-white text-slate-400 transition-all duration-300 flex items-center justify-center" title="ORCID">
                   <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.306v7.419h2.297c2.181 0 3.669-1.378 3.669-3.713 0-2.062-1.284-3.706-3.706-3.706h-2.26z"/>
                   </svg>
                 </a>
                 <a href="https://scholar.google.com/citations?hl=zh-CN&user=EFxWWW0AAAAJ" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 hover:bg-cosmic-blue hover:text-white text-slate-400 transition-all duration-300" title="Google Scholar">
                   <GraduationCap size={20} />
                 </a>
               </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Ruisong Xia. Built with AI STUDIO.</p>
      </footer>
    </div>
  );
};

export default App;