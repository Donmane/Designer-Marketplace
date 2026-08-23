import serve from "../../data/service.json";
import { Link } from "react-router-dom";

function Servicecard() {
  return (
    <div className="py-12 bg-transparent border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Featured Design Packages
            </h2>
            <p className="text-xs text-[#888888] font-normal mt-1">
              Select standard service types to check approximate budgets and hire top creatives instantly.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serve.map((item) => (
            <div
              key={item.id}
              className="bg-[#111111] rounded-lg border border-[#222222] p-6 transition-colors duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
            >
              
              {/* Service Info */}
              <div className="space-y-3 flex-grow">
                {/* Category text */}
                <div className="text-[10px] font-bold text-[#888888] uppercase tracking-tight select-none">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#888888] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Divider & Footer Details */}
              <div className="pt-4 mt-4 border-t border-[#222222] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-[#888888] uppercase tracking-tight block">
                    Starting budget
                  </span>
                  <span className="text-sm font-bold text-white tracking-tight">
                    ${item.price}
                    <span className="text-xs text-[#888888] font-normal">/hr</span>
                  </span>
                </div>

                <Link to="/designers">
                  <button className="px-3 py-1.5 bg-[#FF6B35] hover:bg-[#e0531f] text-white rounded text-[11px] font-bold tracking-tight transition-colors cursor-pointer">
                    Find Talent
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Servicecard;