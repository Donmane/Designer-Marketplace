import { Link } from "react-router-dom";
import heroImg from "../../src/assets/hero.png";

function Hero() {
  return (
    <div className="relative overflow-hidden bg-transparent py-12 sm:py-20 transition-all duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 lg:col-span-7 text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Hire creatives.<br />
              Show your talent.<br />
              Build your reputation.
            </h1>

            <p className="text-sm sm:text-base text-[#888888] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Designora helps clients discover and hire exceptional creative talent instantly, while giving designers and freelancers a premium, visual workspace to showcase their digital portfolios.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link to="/designers" className="w-full sm:w-auto">
                <button className="w-full px-5 py-3 bg-[#FF6B35] hover:bg-[#e0531f] text-white text-xs font-bold tracking-tight rounded-md transition-colors cursor-pointer flex items-center justify-center">
                  Explore Designers
                </button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <button className="w-full px-5 py-3 bg-transparent hover:bg-[#111111] text-white text-xs font-bold tracking-tight rounded-md border border-[#222222] transition-colors cursor-pointer flex items-center justify-center">
                  Browse Services
                </button>
              </Link>
            </div>
            
            {/* Quick Metrics */}
            <div className="pt-6 border-t border-[#222222] flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
              <div>
                <span className="block text-xl font-bold text-white tracking-tight">4.9/5</span>
                <span className="text-[10px] font-bold text-[#888888] uppercase tracking-tight">Average Rating</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white tracking-tight">10k+</span>
                <span className="text-[10px] font-bold text-[#888888] uppercase tracking-tight">Projects</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white tracking-tight">100%</span>
                <span className="text-[10px] font-bold text-[#888888] uppercase tracking-tight">Verified Reviews</span>
              </div>
            </div>

          </div>

          {/* Floating Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="w-72 sm:w-96 lg:w-full max-w-md aspect-square relative select-none">
              
              {/* Image Frame replaced with CSS geometric shapes */}
              <div className="w-full h-full rounded-lg bg-[#111111] border border-[#222222] overflow-hidden flex items-center justify-center group relative">
                {/* Minimalist wireframe grid background */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="border border-white"></div>
                  ))}
                </div>
                {/* Subtle coral radial glow */}
                <div className="absolute w-48 h-48 rounded-full bg-[#FF6B35]/5 blur-3xl pointer-events-none"></div>
                {/* Rotating outlined diamond and solid coral square */}
                <div className="relative w-36 h-36 rounded border border-[#222222] flex items-center justify-center rotate-45 transition-transform duration-700 group-hover:rotate-90">
                  <div className="w-24 h-24 border border-[#FF6B35]/50 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-sm"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;