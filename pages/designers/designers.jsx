import designers from "../../data/designer.json";
import { useToast } from "../../components/Toast";
import { Star, MapPin } from "lucide-react";
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
    <div className="min-h-[85vh] bg-transparent py-12 sm:py-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
            Browse Creative Designers
          </h1>
          <p className="text-xs sm:text-sm text-[#888888] font-normal leading-relaxed">
            Connect with exceptional, verified professionals. Filter starting budgets, check core skills, view user ratings, and deploy freelance power.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDesigners.map((d) => {
            const isAlreadyHired = hiredIds.includes(d.id);
            return (
              <div
                key={d.id}
                className="bg-[#111111] rounded-lg border border-[#222222] transition-colors duration-300 overflow-hidden flex flex-col justify-between h-full group"
              >
                
                {/* Main Card Body */}
                <div className="p-6 space-y-4 flex-grow">
                  
                  {/* Header: Initial avatar, Name, Role */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#222222] text-white flex items-center justify-center font-bold text-base uppercase shrink-0">
                      {d.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug tracking-tight">
                        {d.name}
                      </h3>
                      <p className="text-xs text-[#888888] tracking-tight mt-0.5 font-semibold">
                        {d.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating & Location badging */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#888888] tracking-tight">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#888888] stroke-[#888888]" />
                      <span className="text-white font-bold">{d.rating.toFixed(1)}</span>
                      <span>/ 5.0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#888888]" />
                      <span>{d.location}</span>
                    </div>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs text-[#888888] leading-relaxed line-clamp-3">
                    {d.bio}
                  </p>

                  {/* Skills list */}
                  <div className="pt-1">
                    <p className="text-[10px] font-bold text-[#888888] tracking-tight uppercase">
                      {d.skills.join(" • ")}
                    </p>
                  </div>

                </div>

                {/* Footer Section */}
                <div className="px-6 py-4 bg-[#111111] border-t border-[#222222] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-[#888888] uppercase tracking-tight block">
                        Hourly Rate
                      </span>
                      <span className="text-sm font-bold text-white tracking-tight">
                        ${d.price.toFixed(2)}
                        <span className="text-xs text-[#888888] font-normal">/hr</span>
                      </span>
                    </div>
                  </div>

                  {/* Hire Actions conditionally */}
                  {user && user.role === "client" && (
                    <div className="pt-1">
                      {isAlreadyHired ? (
                        <button
                          disabled
                          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-transparent text-emerald-500 font-bold tracking-tight text-xs rounded border border-[#222222] cursor-not-allowed transition-all"
                        >
                          Already Hired
                        </button>
                      ) : (
                        <button
                          onClick={() => handleHire(d)}
                          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#FF6B35] hover:bg-[#e0531f] text-white font-bold tracking-tight text-xs rounded transition-all cursor-pointer"
                        >
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