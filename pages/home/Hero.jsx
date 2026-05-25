import { Link } from "react-router-dom";
import heroImg from "../../src/assets/hero.png";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 py-16 sm:py-24 transition-all duration-300">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 lg:col-span-7 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Creative Freedom Awaits
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hire <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">creatives</span>.<br />
              Show your <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">talent</span>.<br />
              Build your reputation
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Designora helps clients discover and hire exceptional creative talent instantly, while giving designers and freelancers a premium, visual workspace to showcase their digital portfolios.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/designers" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer">
                  Explore Designers
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <button className="w-full px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border border-slate-200/80 hover:border-slate-350 shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <Compass className="w-4 h-4 text-slate-400" />
                  Browse Services
                </button>
              </Link>
            </div>
            
            {/* Quick Metrics */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
              <div>
                <span className="block text-2xl font-black text-slate-900">4.9/5</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Rating</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900">10k+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Creative Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-slate-900">100%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Reviews</span>
              </div>
            </div>

          </div>

          {/* Floating Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="w-72 sm:w-96 lg:w-full max-w-md aspect-square relative select-none animate-pulse-slow">
              
              {/* Outer floating decorative frames */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl opacity-20 blur-sm -z-10 animate-bounce-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500 to-pink-500 rounded-3xl opacity-20 blur-sm -z-10 animate-bounce-slow" style={{ animationDelay: "1s" }}></div>
              
              {/* Image Frame */}
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-tr from-slate-100 to-indigo-50 border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center group">
                <img
                  src={heroImg}
                  alt="Designora Creative Workspace"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;