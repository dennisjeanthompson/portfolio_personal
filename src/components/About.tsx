export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-[#09090b] border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto animate-fade-up">
        <div className="inline-flex items-center px-4 py-2 border border-zinc-800 bg-zinc-900/50 rounded-full font-mono text-sm text-indigo-400 mb-6">
          Nice to meet you
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 font-sans">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed font-sans">
          <p>
            My journey into software development started out of pure curiosity. I wanted to understand how the applications I used daily were built. What began as tinkering with basic HTML and CSS quickly evolved into a deep passion for building robust, scalable web architecture.
          </p>
          <p>
            Fast forward to today, and I’ve had the privilege of architecting systems that power logistics networks and automate administrative operations. My core philosophy is simple: write clean code, focus on the user experience, and leave the codebase better than I found it. I thrive in environments where I can bridge the gap between engineering and design.
          </p>
          <p>
            When I'm not writing code, you can usually find me contributing to open-source agent ecosystems, dissecting new frontend frameworks, or hunting for the perfect cup of coffee. I believe continuous learning is the most important skill an engineer can have, and I bring that mindset to every team I join.
          </p>
        </div>
      </div>
    </section>
  );
}
