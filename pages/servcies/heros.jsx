import { Sparkles, Palette } from "lucide-react";

function Heros() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white py-20 sm:py-28 text-center transition-all duration-300">
      
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-650/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
        
        {/* Spotlight Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 font-bold text-xs tracking-wider uppercase">
          <Palette className="w-4 h-4" />
          Creative Catalog
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Explore Our <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Creative Services</span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-sm sm:text-base leading-relaxed">
          From high-fidelity product prototyping to bespoke brand illustrations, find highly refined, flat-rate services provided by vetted freelance designers.
        </p>

      </div>
    </div>
  );
}

export default Heros;