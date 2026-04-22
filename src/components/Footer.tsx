export function Footer() {
  return (
    <footer className="w-full bg-[#09090b] border-t border-zinc-900/80 py-10 px-6 md:px-16 text-center">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <p className="text-zinc-500 font-mono text-sm tracking-tight">
          &copy; {new Date().getFullYear()} Dennis Jean Thompson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
