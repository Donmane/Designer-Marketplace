import { Sparkles, Palette } from "lucide-react";

function Heros() {
  return (
    <div className="relative overflow-hidden bg-transparent text-white py-12 sm:py-16 text-center transition-all duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-4">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
          Explore Our Creative Services
        </h1>

        {/* Description */}
        <p className="text-[#888888] max-w-xl mx-auto font-normal text-xs sm:text-sm leading-relaxed">
          From high-fidelity product prototyping to bespoke brand illustrations, find highly refined, flat-rate services provided by vetted freelance designers.
        </p>

      </div>
    </div>
  );
}

export default Heros;