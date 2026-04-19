import { useState, useEffect } from 'react';

import { Code2, Briefcase } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 grid grid-cols-2 md:grid-cols-3 items-center px-6 md:px-16 py-5 transition-all duration-300 backdrop-blur-md border-b ${scrolled ? 'bg-zinc-950/85 border-zinc-800/50 py-4 shadow-lg shadow-black/20' : 'bg-transparent border-transparent'}`}>
      <div className="flex justify-start">
        <a href="#hero" className="font-sans text-lg font-bold text-white tracking-tight no-underline">
          dennis<span className="text-indigo-500">.</span>
        </a>
      </div>
      
      <div className="hidden md:flex justify-center">
        <ul className="flex items-center gap-10 list-none">
          {['Projects', 'Skills', 'Experience', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="font-mono text-xs tracking-wider text-zinc-400 transition-colors hover:text-zinc-100 relative group"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center gap-5">
        <a href="https://github.com/dennisjeanthompson" target="_blank" rel="noopener noreferrer" className="relative group text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
          <Code2 className="w-5 h-5" />
          <span className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800/90 backdrop-blur-sm text-zinc-200 text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded whitespace-nowrap shadow-lg pointer-events-none">
            GitHub
          </span>
        </a>
        <a href="https://linkedin.com/in/dennisjeanthompson" target="_blank" rel="noopener noreferrer" className="relative group text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
          <Briefcase className="w-5 h-5" />
          <span className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800/90 backdrop-blur-sm text-zinc-200 text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded whitespace-nowrap shadow-lg pointer-events-none">
            LinkedIn
          </span>
        </a>
      </div>
    </nav>
  );
}
