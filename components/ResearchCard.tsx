import React from 'react';
import { ResearchPaper } from '../types';
import { ExternalLink, FileText } from 'lucide-react';

interface Props {
  paper: ResearchPaper;
}

const ResearchCard: React.FC<Props> = ({ paper }) => {
  return (
    <div className="group relative flex flex-col h-full p-6 rounded-xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)]">
      <div className="flex justify-between items-start mb-4">
        <div className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-cosmic-blue/10 text-cosmic-blue border border-cosmic-blue/20">
          {paper.journal}
        </div>
        <span className="text-slate-500 text-xs font-mono">{paper.date}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-cosmic-blue transition-colors">
        {paper.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {paper.abstract}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-2">
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