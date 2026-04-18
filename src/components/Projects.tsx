import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      badge: "★ Featured Project",
      title: "P.E.R.O. System",
      desc: "A cloud-based Payroll, Employee, Roster & Operations management platform built for Don Macchiato's Coffee Shop in La Union, Philippines.",
      tech: ["Full-Stack Web", "Cloud-Based", "Payroll Engine", "Three-Tier Architecture", "SUS Evaluation"],
      link: "https://github.com/dennisjeanthompson",
      featured: true,
      visual: "P.E.R.O"
    },
    {
      badge: "AI / Open Source",
      title: "AutoGPT",
      desc: "Contributing to the AutoGPT ecosystem — the pioneering autonomous AI agent framework making AI accessible for building and deploying intelligent systems. Forked and explored for personal AI experiments.",
      tech: ["Python", "AI Agents", "OpenAI API", "Automation"],
      link: "https://github.com/dennisjeanthompson/AutoGPT"
    },
    {
      badge: "Web Application",
      title: "Workforce Dashboard",
      desc: "A data-rich admin dashboard for HR operations — visualizing employee performance metrics, attendance tracking, and payroll summaries with real-time updates.",
      tech: ["React", "Node.js", "Chart.js", "MySQL"],
      link: "https://github.com/dennisjeanthompson"
    },
    {
      badge: "API Integration",
      title: "AI Chat Assistant",
      desc: "A custom AI-powered chatbot interface integrating OpenAI's API — featuring conversation memory, custom personas, and a clean minimal UI deployable as a standalone web app.",
      tech: ["JavaScript", "OpenAI API", "Firebase", "CSS"],
      link: "https://github.com/dennisjeanthompson"
    }
  ];

  return (
    <section id="projects" className="px-6 md:px-16 py-28 bg-navy2">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <div className="section-label">What I've built</div>
          <h2 className="section-title">Selected <em className="text-gold2 italic">projects</em></h2>
        </div>
        <a href="https://github.com/dennisjeanthompson" target="_blank" className="font-mono text-xs tracking-wider uppercase text-gold hover:text-gold2 flex items-center gap-2 hover:gap-3 transition-all">
          All repositories →
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" className={`bg-navy3 border border-border rounded p-8 flex flex-col relative overflow-hidden group hover:border-gold/35 hover:-translate-y-1 transition-all duration-300 no-underline text-inherit ${p.featured ? 'md:col-span-2 grid md:grid-cols-2 gap-8' : ''}`}>
            {p.featured && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-gold2 to-transparent" />
            )}
            <div className="flex flex-col h-full">
              <Badge variant="outline" className="w-fit font-mono text-[0.62rem] uppercase tracking-widest text-gold border-gold/30 rounded px-2.5 py-1 mb-4 select-none">
                {p.badge}
              </Badge>
              <h3 className="font-serif text-2xl font-light text-white mb-3">{p.title}</h3>
              <p className="text-sm text-smoke leading-relaxed flex-1 mb-6">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => (
                  <span key={t} className="font-mono text-[0.65rem] text-muted-foreground bg-white/5 border border-border rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <span className="font-mono text-xs tracking-wide text-gold flex items-center gap-1.5 group-hover:text-gold2 transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .32.216.694.825.577C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </span>
              </div>
            </div>
            
            {p.featured && p.visual && (
              <div className="hidden md:flex h-full min-h-[160px] bg-navy border border-border rounded items-center justify-center font-mono text-4xl text-gold/20 tracking-tighter w-full">
                {p.visual}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

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
