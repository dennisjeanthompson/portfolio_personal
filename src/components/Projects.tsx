import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: "P.E.R.O. Network Payroll System",
      shortDescription: "A scalable, cloud-based platform standardizing payroll and workforce management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      highlights: [
        "Architected a centralized dashboard capable of handling 50+ local businesses.",
        "Implemented a dynamic roles-and-permissions rules engine from scratch.",
        "Reduced manual payroll processing time by 40% across client companies."
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "E-Commerce Microservices Migration",
      shortDescription: "A complete backend rewrite for a major B2B logistics supplier.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2370&auto=format&fit=crop",
      tags: ["Vue.js", "Express", "Docker", "AWS"],
      highlights: [
        "Spearheaded the transition from a brittle legacy monolith to independent microservices.",
        "Set up Dockerized containers and AWS automated deployment pipelines.",
        "Improved system uptime from 96% to 99.9% and resolved critical timeout errors."
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AutoGPT UI Refactor",
      shortDescription: "An open-source contribution to enhance the usability of autonomous agents.",
      image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=2370&auto=format&fit=crop",
      tags: ["Next.js", "Tailwind CSS", "Python", "OpenAI API"],
      highlights: [
        "Redesigned the primary conversation interface to handle complex nested agent thoughts.",
        "Optimized client-side rendering for large token-stream outputs.",
        "Merged code directly into the main repository, used by thousands of developers."
      ],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-[#09090b] border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 border border-zinc-800 bg-zinc-900/50 rounded-full font-mono text-sm text-indigo-400 mb-6">
          Selected Work
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-sans">
          Featured Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-10 items-center group animate-fade-up">
              
              {/* Image Container - takes up roughly half */}
              <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative">
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-indigo-300 border-transparent font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-3 text-zinc-300">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-3 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
                  <Button 
                    className="w-full sm:w-auto h-12 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors px-6 shadow-lg rounded-full"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto h-12 bg-transparent border-zinc-700 text-white hover:bg-zinc-800 transition-colors px-6 rounded-full"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
