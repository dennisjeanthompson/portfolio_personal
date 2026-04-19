export function Footer() {
  return (
    <footer className="w-full bg-[#09090b] border-t border-zinc-900/80 py-10 px-6 md:px-16 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-zinc-500 font-mono text-sm tracking-tight text-left">
          &copy; {new Date().getFullYear()} Dennis Jean Thompson. <br className="md:hidden" /> All rights reserved.
        </p>

        <p className="text-zinc-500 font-mono text-sm tracking-tight text-right">
          Built with <a href="https://astro.build" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-indigo-400 transition-colors hover:underline">Astro</a>, <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-indigo-400 transition-colors hover:underline">React</a> & <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-indigo-400 transition-colors hover:underline">Tailwind v4</a>.
        </p>

      </div>
    </footer>
  );
}
