import React from 'react';
import { TIMELINE_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
      {TIMELINE_DATA.map((event) => (
        <div key={event.id} className="relative pl-8 md:pl-12">
          {/* Dot */}
          <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-void border-2 border-cosmic-blue shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-1">
            <span className="text-cosmic-blue font-mono text-sm font-bold">{event.year}</span>
            <h3 className="text-lg font-semibold text-slate-100">{event.title}</h3>
          </div>
          
          <div className="text-slate-500 font-medium mb-2">{event.institution}</div>
          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;