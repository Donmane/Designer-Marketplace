import { Sparkles, Mail } from "lucide-react";

// Inline brand SVGs to replace missing brand icons in newer lucide-react versions
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900/60 pt-16 pb-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-slate-900">
          
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Designora
              </span>
            </div>
            <h1 className="text-lg font-semibold text-slate-200 leading-snug max-w-sm">
              Connecting clients with creative designers worldwide.
            </h1>
            <p className="text-sm text-slate-400 max-w-sm">
              Discover top freelance talent, manage contracts, build your reputation, and scale your creative vision on a single aesthetic platform.
            </p>
          </div>

          {/* Directory Links */}
          <div>
            <h4 className="text-xs font-bold uppercase text-white tracking-widest mb-4">
              Marketplace
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="/" className="hover:text-indigo-400 transition-colors">Find Talents</a>
              </li>
              <li>
                <a href="/services" className="hover:text-indigo-400 transition-colors">Browse Services</a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400 transition-colors">How It Works</a>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-widest">
              Join Our Community
            </h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-200" title="Twitter">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-200" title="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-200" title="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-200" title="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Need assistance? contact@designora.com
            </p>
          </div>

        </div>

        {/* Footer Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            &copy; 2026 Designer Marketplace. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;