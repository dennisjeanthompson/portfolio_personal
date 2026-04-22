import { Code, Layout, Server, Rocket } from 'lucide-react';

export function Skills() {
  const groupedSkills = [
    {
      group: "Languages & Frameworks",
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      items: ["TypeScript / JavaScript", "React & Next.js", "Node.js", "Python"]
    },
    {
      group: "Frontend & Styling",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      items: ["Tailwind CSS", "Framer Motion", "Astro"]
    },
    {
      group: "Backend & Data",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      items: ["PostgreSQL", "Express", "REST APIs"]
    },
    {
      group: "Tools & DevOps",
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      items: ["Git & GitHub", "Docker", "Vercel", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-zinc-950 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 border border-zinc-800 bg-zinc-900/50 rounded-full font-mono text-sm text-indigo-400 mb-6">
          Tech Stack
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-sans">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {groupedSkills.map((category, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                {category.group}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center text-zinc-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
