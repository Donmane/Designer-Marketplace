import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Viewhire = () => {
  let hired = [];

  try {
    hired = JSON.parse(localStorage.getItem("hired")) || [];
  } catch {
    hired = [];
  }

  hired = hired.filter(Boolean);

  return (
    <div className="min-h-[85vh] bg-transparent py-12 sm:py-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
            My Active Hires
          </h1>
          <p className="text-xs sm:text-sm text-[#888888] font-normal leading-relaxed">
            Manage your visual design resources, review freelance contract starting budgets, and send project messages to your contracted talent.
          </p>
        </div>

        {/* Contents */}
        {hired.length === 0 ? (
          
          /* Premium Empty State */
          <div className="max-w-md mx-auto bg-[#111111] p-6 rounded-lg border border-[#222222] transition-colors duration-300 text-center space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white tracking-tight">No hires yet</h3>
              <p className="text-[#888888] text-xs leading-relaxed">
                You haven't contracted any visual designers yet. Head over to our directory to find the perfect creative freelancer for your brand.
              </p>
            </div>
            <Link to="/designers" className="block pt-1">
              <button className="w-full py-2.5 px-4 bg-[#FF6B35] hover:bg-[#e0531f] text-white font-bold tracking-tight text-xs rounded-md transition-colors cursor-pointer flex items-center justify-center">
                Browse Talent Directory
              </button>
            </Link>
          </div>

        ) : (
          
          /* Hired Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hired.map((d, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-lg border border-[#222222] transition-colors duration-300 overflow-hidden flex flex-col justify-between h-full group"
              >
                
                {/* Active Contract Header */}
                <div className="px-4 py-2.5 bg-[#111111] border-b border-[#222222] flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-tight text-emerald-400">
                    Active Contract
                  </span>
                  <span className="text-[9px] text-[#888888] font-semibold">ID: #{1000 + d.id}</span>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-4 flex-grow">
                  
                  {/* Title & Role */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#222222] text-white flex items-center justify-center font-bold text-base uppercase shrink-0">
                      {d.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug tracking-tight">
                        {d.name}
                      </h3>
                      <p className="text-xs text-[#888888] capitalize mt-0.5 font-semibold">
                        {d.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating display */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#888888] tracking-tight">
                    <Star className="w-3.5 h-3.5 fill-[#888888] stroke-[#888888]" />
                    <span className="text-white font-bold">{d.rating || "5.0"}</span>
                    <span>/ 5.0 Rating</span>
                  </div>

                </div>

                {/* Footer and message action */}
                <div className="px-6 py-4 bg-[#111111] border-t border-[#222222] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] font-bold text-[#888888] uppercase tracking-tight block">
                      Contract Rate
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      ${d.price}
                      <span className="text-xs text-[#888888] font-normal">/hr</span>
                    </span>
                  </div>

                  <a
                    href={`mailto:${d.email || "support@designora.com"}?subject=Project Collaboration - Designora`}
                    className="px-3 py-1.5 bg-transparent hover:bg-[#222222] text-white border border-[#222222] rounded text-xs font-bold tracking-tight transition-colors cursor-pointer"
                  >
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
}

export default Viewhire;