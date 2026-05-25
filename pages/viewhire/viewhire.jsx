import { Link } from "react-router-dom";
import { Star, MapPin, Briefcase, Sparkles, FolderOpen, Mail, ArrowRight } from "lucide-react";

const Viewhire = () => {
  let hired = [];

  try {
    hired = JSON.parse(localStorage.getItem("hired")) || [];
  } catch {
    hired = [];
  }

  hired = hired.filter(Boolean);

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-indigo-50/20 via-white to-slate-50 py-16 sm:py-24 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Workspace Contracts
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            My Active Hires
          </h1>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Manage your visual design resources, review freelance contract starting budgets, and send project messages to your contracted talent.
          </p>
        </div>

        {/* Contents */}
        {hired.length === 0 ? (
          
          /* Premium Empty State */
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md p-10 sm:p-12 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-650 shadow-inner mb-2 animate-pulse-slow">
              <FolderOpen className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">No hires yet</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                You haven't contracted any visual designers yet. Head over to our directory to find the perfect creative freelancer for your brand.
              </p>
            </div>
            <Link to="/designers" className="block pt-2">
              <button className="w-full py-3.5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-100 hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group">
                Browse Talent Directory
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
          </div>

        ) : (
          
          /* Hired Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hired.map((d, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group"
              >
                
                {/* Active Contract Header */}
                <div className="px-6 py-4 sm:px-8 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Active Contract
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">ID: #{1000 + d.id}</span>
                </div>

                {/* Card Main Body */}
                <div className="p-6 sm:p-8 space-y-5 flex-grow">
                  
                  {/* Title & Role */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center font-extrabold text-base uppercase shrink-0">
                      {d.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
                        {d.name}
                      </h3>
                      <p className="text-xs font-bold text-indigo-650 capitalize mt-0.5">
                        {d.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating display */}
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                    <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    <span>{d.rating || "5.0"}</span>
                    <span className="text-slate-350">/ 5.0 Rating</span>
                  </div>

                </div>

                {/* Footer and message action */}
                <div className="px-6 py-5 sm:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      Contract Rate
                    </span>
                    <span className="text-base font-black text-slate-900">
                      ${d.price}
                      <span className="text-xs font-bold text-slate-400">/hr</span>
                    </span>
                  </div>

                  <a
                    href={`mailto:${d.email || "support@designora.com"}?subject=Project Collaboration - Designora`}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Message
                  </a>
                </div>

              </div>
            ))}
          </div>

        )}

      </div>
    </div>
  );
};

export default Viewhire;