import React from 'react';
import { ResearchPaper } from '../types';
import { ExternalLink, FileText, Github } from 'lucide-react';
import baddatResult from '../assets/baddat-result.png';
import qpoModel from '../assets/qpo-model.png';
import lagQpoEvolution from '../assets/lag-qpo-evolution.png';
import badmetResult from '../assets/badmet-result.png';

interface Props {
  paper: ResearchPaper;
}

const ResearchCard: React.FC<Props> = ({ paper }) => {
  if (paper.id === '1' || paper.id === '2' || paper.id === '3' || paper.id === '4') {
    const isBaddat = paper.id === '1';
    const isQpoTriplet = paper.id === '2';
    const isBadmet = paper.id === '4';
    const scixLink = isBadmet
      ? 'https://scixplorer.org/abs/arXiv%3A2611.22771'
      : isBaddat
        ? 'https://scixplorer.org/abs/2025MNRAS.544L..96X/abstract'
        : isQpoTriplet
          ? 'https://scixplorer.org/abs/2025ApJ...989...59X/abstract'
          : 'https://scixplorer.org/abs/2024ApJ...961L..32X/abstract';
    return (
      <article className="group flex flex-col overflow-hidden rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cosmic-blue/50 transition-colors duration-300">
        <div className="bg-white p-3">
          <img
            src={isBadmet ? badmetResult : isBaddat ? baddatResult : isQpoTriplet ? qpoModel : lagQpoEvolution}
            alt={isBadmet ? 'BADMET predicted black hole masses compared with reference masses' : isBaddat ? 'Comparison of BADDAT and other estimates of the relation between damping timescale and black hole mass' : isQpoTriplet ? 'Schematic views of the accretion disk, corona and QPO region' : 'Evolution of time lag versus QPO frequency across observations of RE J1034+396'}
            className="w-full h-auto block"
          />
        </div>
        <div className="relative flex flex-col flex-1 p-6">
          <div className="flex items-center justify-between gap-4 text-xs font-mono mb-4">
            <a href={paper.link} target="_blank" rel="noopener noreferrer" aria-label={`Read paper: ${paper.title}`} className="inline-flex items-center px-2 py-1 rounded text-cosmic-blue bg-cosmic-blue/10 border border-cosmic-blue/20 hover:bg-cosmic-blue/20 hover:border-cosmic-blue/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cosmic-blue transition-colors">
              {paper.journal}
            </a>
            <span className="text-slate-500">{paper.date}</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-100 leading-snug mb-6">{isBadmet ? 'BADMET: Combining variability and other mass-related observables to estimate black hole masses' : isBaddat ? 'BADDAT: Recovering how optical damping timescales depend on AGN properties from finite observations through population-level inference' : isQpoTriplet ? 'A possible QPO Triplet and Its Relativistic Precession Origin' : 'Interconnected evolution of time lag and QPO frequency in RE J1034+396'}</h3>
          <div className="h-5" aria-hidden="true" />
          <div className="absolute right-5 bottom-5 flex items-center justify-end gap-3">
            <a href={scixLink} target="_blank" rel="noopener noreferrer" aria-label={`View on SciX: ${paper.title}`} title="View on SciX" className="p-1 rounded-lg text-slate-700 hover:text-slate-100 focus-visible:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cosmic-blue transition-colors duration-300">
              <FileText size={38} strokeWidth={1.5} aria-hidden="true" />
            </a>
            {(isBadmet || isBaddat) && (
              <a
                href={isBadmet ? 'https://github.com/xiaris/BADMET' : 'https://github.com/xiaris/BADDAT'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${isBadmet ? 'BADMET' : 'BADDAT'} on GitHub`}
                title={`View ${isBadmet ? 'BADMET' : 'BADDAT'} on GitHub`}
                className="p-1 rounded-lg text-slate-700 hover:text-slate-100 focus-visible:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cosmic-blue transition-colors duration-300"
              >
                <Github size={38} strokeWidth={1.5} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }
  return (
    <div className="group relative flex flex-col p-6 rounded-xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]">
      <div className="flex justify-between items-start mb-4">
        <div className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-cosmic-blue/10 text-cosmic-blue border border-cosmic-blue/20">
          {paper.journal}
        </div>
        <span className="text-slate-500 text-xs font-mono">{paper.date}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-cosmic-blue transition-colors">
        {paper.title}
      </h3>

      <div className="text-sm text-slate-400 font-medium mb-4">
        {paper.authors}
      </div>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {paper.abstract}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-2 max-w-[85%]">
          {paper.tags.map(tag => (
            <span key={tag} className="text-xs text-slate-500">#{tag}</span>
          ))}
        </div>
        
        <a href={paper.link || "#"} className="text-slate-400 hover:text-white transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
};

export default ResearchCard;
