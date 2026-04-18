import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Send } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center px-6 md:px-16 pt-32 pb-20 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-35" 
        style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 60% 50%, black 20%, transparent 80%)'
        }}
      />
      <div className="absolute top-1/5 right-[5%] w-[520px] h-[520px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl space-y-6">
        <Badge variant="outline" className="font-mono text-[0.7rem] uppercase tracking-widest text-gold border-gold/30 rounded py-1.5 px-4 mb-4 gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Available for opportunities
        </Badge>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-light leading-none text-white tracking-tight">
          Dennis<br/><em className="text-gold2 not-italic italic">Jean Thompson</em>
        </h1>
        
        <p className="font-serif text-xl md:text-2xl font-light italic text-muted-foreground mt-2 mb-8">
          Web Developer
        </p>
        
        <p className="text-base text-smoke max-w-xl leading-relaxed mb-10">
          I build fast, scalable web applications. Based in Baguio City, Philippines.
        </p>
        
        <div className="flex flex-wrap gap-5">
          <a href="#projects">
            <Button className="bg-gold text-navy hover:bg-gold2 font-mono text-xs uppercase tracking-widest font-medium py-6 px-8 rounded-sm">
              <ArrowRight className="w-4 h-4 mr-2" />
              View my work
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="border-border text-smoke hover:border-gold hover:text-gold2 font-mono text-xs uppercase tracking-widest py-6 px-8 rounded-sm bg-transparent">
              Get in touch
            </Button>
          </a>
        </div>
        
        <div className="pt-16 mt-16 border-t border-border flex gap-12">
          <div>
            <div className="font-serif text-4xl font-light text-gold2 leading-none">PH</div>
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground mt-2">Baguio City</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-16 hidden md:flex flex-col items-center gap-3 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        Scroll
      </div>
    </section>
  );
}
