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
