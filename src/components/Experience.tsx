import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "Lead Software Engineer",
      company: "P.E.R.O. Network",
      period: "2023 - Present",
      bullets: [
        "Architected a centralized, cloud-based employment management platform scaling across 50+ business units.",
        "Engineered an automated roles & permissions engine that eliminated 40% of manual HR processing bottlenecks.",
        "Mentored a team of 3 junior developers, establishing code review practices and CI/CD deployment pipelines."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "TechSolutions PH",
      period: "2021 - 2023",
      bullets: [
        "Led the migration of a legacy monolithic enterprise application to a Node.js & Vue microservices architecture.",
        "Optimized Docker container deployment strategies, cutting AWS infrastructure costs by 15%.",
        "Improved database query performance heavily utilized by client dashboards, bringing load times under 200ms."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Creative Digital",
      period: "2020 - 2021",
      bullets: [
        "Developed custom React components for high-traffic e-commerce storefronts, ensuring AAA accessibility standards.",
        "Integrated robust lazy-loading stategies, lifting Google Lighthouse performance scores from 70 to 95+.",
        "Collaborated directly with UI/UX designers to translate Figma prototypes into pixel-perfect application views."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-16 bg-[#09090b] border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 border border-zinc-800 bg-zinc-900/50 rounded-full font-mono text-sm text-indigo-400 mb-6">
          Work History
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-sans">
          Experience
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 animate-fade-up border-l md:border-l-0 border-zinc-800" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="md:grid md:grid-cols-[1fr_3fr] md:gap-12 md:items-start group">
                
                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                <div className="mb-4 md:mb-0 md:text-right flex flex-col md:items-end">
                  <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider uppercase mb-1">
                    {exp.period}
                  </span>
                  <div className="hidden md:flex mt-4 items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Briefcase className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-2xl hover:border-zinc-700/80 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-zinc-400 font-medium mb-6">{exp.company}</h4>
                  
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start text-zinc-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
