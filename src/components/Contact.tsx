import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-32 bg-navy2 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-2xl mx-auto animate-fade-up">
        <div className="section-label justify-center">Let's connect</div>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
          Have a project in<br /><em className="text-gold2 italic">mind? Let's talk.</em>
        </h2>
        
        <p className="text-smoke leading-relaxed max-w-md mx-auto mb-8">
          Whether you're looking for a developer, a collaborator, or just want to say hello — my inbox is always open.
        </p>
        
        <a 
          href="mailto:dennisjeanthompson@gmail.com" 
          className="inline-block font-serif text-2xl md:text-3xl italic font-light text-gold2 no-underline border-b border-gold/30 pb-1 mb-12 hover:text-gold3 hover:border-gold transition-colors duration-300"
        >
          dennisjeanthompson@gmail.com
        </a>
        
        <div>
          <a href="https://github.com/dennisjeanthompson" target="_blank" className="inline-block">
            <Button className="bg-gold text-navy hover:bg-gold2 font-mono text-[0.7rem] uppercase tracking-wider py-6 px-8 rounded-sm gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.577C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
              View GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
