export function Footer() {
  return (
    <footer className="bg-navy border-t border-border px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-mono text-[0.65rem] tracking-wider text-muted-foreground">
      <div>
        © {new Date().getFullYear()} <span className="text-gold">Dennis Jean Thompson</span> — All rights reserved.
      </div>
      <div className="text-[0.6rem] opacity-80">
        Designed &amp; built with Astro x Tailwind x shadcn/ui · Baguio City, PH
      </div>
    </footer>
  );
}
