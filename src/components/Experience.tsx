export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 py-28 bg-navy">
      <div className="section-label">Where I've been</div>
      <h2 className="section-title">Experience &amp; <em className="text-gold2 italic">education</em></h2>
      
      <div className="relative mt-12 animate-fade-up before:content-[''] before:absolute before:left-[1px] before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-gold before:to-border">
        {[
          {
            period: "2025 — Present",
            role: "Lead Developer — P.E.R.O. System",
            org: "University of the Cordilleras",
            desc: "Designed and built a cloud-based payroll and workforce management system for a real client (Don Macchiato's Coffee Shop, La Union). Managed the full software development lifecycle from requirements gathering to usability evaluation.",
            tags: ["Full-Stack", "Cloud", "SUS Evaluation", "System Design"]
          },
          {
            period: "2022 — 2025",
            role: "Information Technology",
            org: "University of the Cordilleras — Baguio City, Philippines",
            desc: "Focused on web systems development, database management, and software engineering.",
            tags: ["Web Systems", "Software Engineering"]
          },
          {
            period: "2022 — Ongoing",
            role: "Open Source Contributor",
            org: "GitHub — @dennisjeanthompson",
            desc: "Actively building and exploring personal projects — from experiments with AI agents (AutoGPT) to full-stack web apps, utilities, and learning projects.",
            tags: ["Open Source", "AI", "Python", "JavaScript"]
          }
        ].map((item, i) => (
          <div key={i} className="relative pl-10 pb-12 last:pb-0 before:content-[''] before:absolute before:left-[-3px] before:top-1.5 before:w-2.5 before:h-2.5 before:bg-gold before:rounded-full before:border-2 before:border-navy before:shadow-[0_0_0_3px_rgba(201,168,76,0.2)]">
            <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground mb-2">{item.period}</div>
            <div className="font-serif text-2xl font-light text-white mb-1">{item.role}</div>
            <div className="font-mono text-sm text-gold2 mb-3">{item.org}</div>
            <p className="text-sm text-smoke leading-relaxed max-w-2xl mb-4">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="font-mono text-[0.68rem] text-smoke bg-white/5 border border-border rounded px-2.5 py-1 tracking-wider">
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
