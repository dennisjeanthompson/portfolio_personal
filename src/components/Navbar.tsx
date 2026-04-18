import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-300 backdrop-blur-md border-b ${scrolled ? 'bg-navy/85 border-border py-4' : 'bg-transparent border-transparent'}`}>
      <a href="#hero" className="font-serif text-xl font-light text-white tracking-wider no-underline">
        Dennis<span className="text-gold">.</span>
      </a>
      <ul className="hidden md:flex gap-10 list-none">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-gold2 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
