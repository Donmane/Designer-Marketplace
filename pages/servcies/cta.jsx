
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, UserPlus } from "lucide-react";

function Cta() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative rounded-[2.5rem] bg-slate-950 text-white p-10 sm:p-16 text-center overflow-hidden shadow-2xl border border-slate-900 transition-all duration-300">
          
          {/* Ambient Background Circles */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Banner Contents */}
          <div className="relative max-w-2xl mx-auto space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 font-bold text-[10px] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Onboarding Offer
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Sign up to get started
            </h2>

            {/* Paragraph */}
            <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
              Join our active community of creative designers and innovative clients today. Find elite design talent or land premium freelance contracts instantly.
            </p>

            {/* Actions Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/continuecilent" className="w-full sm:w-auto">
                <button className="w-full px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                  <UserPlus className="w-4 h-4 text-indigo-650" />
                  Join as Client
                </button>
              </Link>
              <Link to="/continuedesigner" className="w-full sm:w-auto">
                <button className="w-full px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group">
                  Join as Designer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cta;

