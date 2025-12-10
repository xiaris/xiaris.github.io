import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Overview', href: '#hero' },
  { label: 'Research', href: '#research' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-void/80 backdrop-blur-md shadow-none' : 'bg-transparent'
      }`}
    >
      <div className="w-full h-20 flex items-center justify-end md:justify-start px-6 md:px-[3%]">

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-xs font-mono font-medium tracking-[0.2em] uppercase text-slate-400 hover:text-cosmic-blue transition-colors duration-300 group"
            >
              {item.label}
              {/* Hover Effect: Glowing Dot */}
              <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-cosmic-blue rounded-full opacity-0 transform -translate-x-1/2 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-void/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col space-y-6">
           {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-mono tracking-widest uppercase text-slate-300 hover:text-cosmic-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;