import designers from "../../data/designer.json";
import { useToast } from "../../components/Toast";
import { Star, MapPin, Sparkles, UserCheck, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

function Designers() {
  const { showToast } = useToast();
  const user = JSON.parse(localStorage.getItem("user"));
  const [hiredIds, setHiredIds] = useState([]);

  // Load hired designers to manage button state instantly
  useEffect(() => {
    const hired = JSON.parse(localStorage.getItem("hired")) || [];
    setHiredIds(hired.map((d) => d.id));
  }, []);

  const uploadedDesigners = JSON.parse(localStorage.getItem("uploadedDesigners")) || [];
  const allDesigners = [...designers, ...uploadedDesigners];

  const handleHire = (designer) => {
    if (!designer) return;
    const existing = JSON.parse(localStorage.getItem("hired")) || [];
    const alreadyHired = existing.some((d) => d.id === designer.id);
    
    if (alreadyHired) {
      showToast(`${designer.name} is already in your hired designers list!`, "warning");
      return;
    }
    
    const updated = [...existing, designer];
    localStorage.setItem("hired", JSON.stringify(updated));
    setHiredIds((prev) => [...prev, designer.id]);
    
    showToast(`Success! You have hired ${designer.name}. You can review their progress in 'View Hires'.`);
  };

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-indigo-50/20 via-white to-slate-50 py-16 sm:py-24 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Talent Directory
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Browse Creative Designers
          </h1>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Connect with exceptional, verified professionals. Filter starting budgets, check core skills, view user ratings, and deploy freelance power.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDesigners.map((d) => {
            const isAlreadyHired = hiredIds.includes(d.id);
            return (
              <div
                key={d.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group"
              >
                
                {/* Top decorative gradient line */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"></div>

                {/* Main Card Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-grow">
                  
                  {/* Header: Initial avatar, Name, Role */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center font-extrabold text-lg uppercase shadow-lg shadow-indigo-100 shrink-0">
                      {d.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-lg leading-snug">
                        {d.name}
                      </h3>
                      <p className="text-xs font-bold text-indigo-650 tracking-wide mt-0.5">
                        {d.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating & Location badging */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                      <span className="text-slate-800 font-bold">{d.rating.toFixed(1)}</span>
                      <span className="text-slate-400">/ 5.0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-slate-400 animate-pulse-slow" />
                      <span>{d.location}</span>
                    </div>
                  </div>

                  {/* Bio Description */}
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                    {d.bio}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {d.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-slate-55/60 text-slate-600 text-xs font-bold rounded-lg border border-slate-100/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Section */}
                <div className="px-6 py-5 sm:px-8 bg-slate-50 border-t border-slate-100 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                        Hourly Rate
                      </span>
                      <span className="text-lg font-black text-slate-900">
                        ${d.price.toFixed(2)}
                        <span className="text-xs font-bold text-slate-400">/hr</span>
                      </span>
                    </div>
                    
                    <div className="text-xs font-bold text-indigo-650 bg-indigo-50 border border-indigo-100/30 px-3 py-1 rounded-lg">
                      Free Portfolio
                    </div>
                  </div>

                  {/* Hire Actions conditionally */}
                  {user && user.role === "client" && (
                    <div className="pt-2">
                      {isAlreadyHired ? (
                        <button
                          disabled
                          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-50 text-emerald-700 font-bold text-sm rounded-xl border border-emerald-100 cursor-not-allowed transition-all"
                        >
                          <UserCheck className="w-4 h-4 shrink-0" />
                          Already Hired
                        </button>
                      ) : (
                        <button
                          onClick={() => handleHire(d)}
                          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-750 text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                        >
                          <Briefcase className="w-4 h-4 shrink-0" />
                          Hire Creative
                        </button>
                      )}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Designers;