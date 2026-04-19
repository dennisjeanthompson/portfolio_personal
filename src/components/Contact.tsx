import { Mail, Briefcase, Code2, MessageCircle, FileText, Send } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const socials = [
    { name: "GitHub", url: "https://github.com/dennisjeanthompson", icon: Code2 },
    { name: "LinkedIn", url: "https://linkedin.com/in/dennisjeanthompson", icon: Briefcase },
    { name: "Email", url: "mailto:contact@dennisjeanthompson.com", icon: MessageCircle }
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-16 bg-[#09090b] border-t border-zinc-900/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left Side - Details */}
        <div className="w-full lg:w-1/2 space-y-8 text-left animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 border border-zinc-800 bg-zinc-900/50 rounded-full font-mono text-sm text-indigo-400 mb-2">
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-white leading-tight">
            Ready to build <br/> your next idea?
          </h2>
          <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
            I'm currently available for full-time opportunities or exciting freelance projects. If you're looking for a developer who product-focused and highly driven, my inbox is always open.
          </p>

          <div className="flex flex-col space-y-6 pt-4">
            <a href="mailto:contact@dennisjeanthompson.com" className="flex items-center text-xl text-zinc-300 hover:text-indigo-400 transition-colors font-medium">
              <Mail className="w-6 h-6 mr-4 text-zinc-500" />
              contact@dennisjeanthompson.com
            </a>
            
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="relative group p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-indigo-500 hover:bg-zinc-800 transition-all shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800/90 backdrop-blur-sm text-zinc-200 text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded whitespace-nowrap shadow-lg pointer-events-none z-50">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="h-12 w-fit px-8 bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 font-medium rounded-full transition-all font-sans"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <form 
            action="https://submit-form.com/contact@dennisjeanthompson.com" 
            method="POST" 
            className="bg-zinc-900/60 border border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-400 font-mono">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-400 font-mono">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400 font-mono">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4}
                className="w-full bg-[#09090b] border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                placeholder="What are you working on?"
              ></textarea>
            </div>
            <Button type="submit" className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-lg font-medium tracking-wide transition-all mt-4">
              Send out
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
