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
            What started as curiosity about how apps work turned into a passion for building them. Today I architect cloud-based systems — from automated payroll platforms to AI-powered tools — with a focus on clean code, great UX, and leaving every codebase better than I found it.
          </p>
          <p>
            Outside of client work, I contribute to open-source projects like AutoGPT, explore new frontend frameworks, and hunt for the perfect cup of coffee. I believe continuous learning is the most important skill an engineer can have, and I bring that mindset to every project I take on.
          </p>
        </div>
      </div>
    </section>
  );
}
