export function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-28 bg-navy2">
      <div className="section-label">Who I am</div>
      <h2 className="section-title">About <em className="text-gold2 italic">me</em></h2>
      
      <div className="grid md:grid-cols-2 gap-20 items-center mt-12 animate-fade-up">
        <div className="text-smoke leading-relaxed space-y-5 text-base">
          <p>I'm Dennis Jean Thompson, a web developer based in Baguio City, Philippines.</p>
          <p>I build practical, full-stack web applications. Recently developed the P.E.R.O. System, a cloud-based payroll and workforce management system.</p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <img 
            src="data:image/jpeg;base64,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"
            alt="Dennis Jean Thompson" 
            className="w-36 h-36 rounded-full object-cover object-top border-2 border-border shadow-[0_0_0_4px_rgba(201,168,76,0.15)]"
          />
          
          <div className="bg-navy3 border border-border rounded p-8 w-full max-w-sm">
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground mb-6 pb-3 border-b border-border">
              // Quick facts
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-border text-sm">
              <span className="font-mono text-xs text-muted-foreground tracking-wider">Status</span>
              <span className="text-smoke flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse block"/>
                Open to work
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border text-sm">
              <span className="font-mono text-xs text-muted-foreground tracking-wider">Location</span>
              <span className="text-smoke">Baguio City, PH</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border text-sm">
              <span className="font-mono text-xs text-muted-foreground tracking-wider">Education</span>
              <span className="text-smoke">Univ of the Cordilleras</span>
            </div>
            <div className="flex justify-between items-center py-3 text-sm">
              <span className="font-mono text-xs text-muted-foreground tracking-wider">GitHub</span>
              <span className="text-smoke">
                <a href="https://github.com/dennisjeanthompson" target="_blank" className="text-gold2 hover:underline">
                  @dennisjeanthompson
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-28 bg-navy">
      <div className="section-label">What I work with</div>
      <h2 className="section-title">My <em className="text-gold2 italic">technical</em> toolkit</h2>
      
      <p className="max-w-xl text-smoke mb-14 text-base leading-relaxed">
        Modern stack for high-performance applications. Excellent performance (98–100), optimized bundle payloads with Islands architecture using Astro.
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
        {[
          {
            icon: '◈', title: 'Frontend',
            tags: ['Astro', 'TypeScript', 'Tailwind v4', 'React', 'shadcn/ui', 'Responsive']
          },
          {
            icon: '◉', title: 'Backend',
            tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'PHP', 'Laravel']
          },
          {
            icon: '◫', title: 'Database & Cloud',
            tags: ['MySQL', 'PostgreSQL', 'Firebase', 'MongoDB', 'Supabase', 'Cloud Hosting']
          },
          {
            icon: '⬡', title: 'Tools',
            tags: ['Git & GitHub', 'VS Code', 'Figma', 'Agile / Scrum', 'UML']
          }
        ].map((cat, i) => (
          <div key={i} className="bg-navy3 border border-border rounded p-7 relative overflow-hidden group hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-transparent" />
            <div className="text-2xl mb-4 text-gold2">{cat.icon}</div>
            <div className="font-mono text-xs tracking-[0.15em] uppercase text-gold2 mb-4">{cat.title}</div>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map(tag => (
                <span key={tag} className="font-mono text-[0.68rem] text-smoke bg-white/5 border border-border rounded px-2.5 py-1 tracking-wider transition-colors group-hover:border-gold/30 hover:!bg-gold/10 hover:!text-gold2 hover:!border-gold/50 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
