import designers from "../../data/designer.json";
import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";

function FeaturedDesignerCard() {
  // Filter for featured designers
  const featured = designers.filter((d) => d.isFeatured === true);

  return (
    <section className="py-12 sm:py-16 bg-transparent border-b border-[#222222] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Featured Designers
          </h2>
          <p className="text-[#888888] font-normal text-xs sm:text-sm leading-relaxed">
            Discover outstanding freelancers handpicked for their aesthetic design principles, exceptional execution, and outstanding client reviews.
          </p>
        </div>

        {/* Designers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((designer) => (
            <div
              key={designer.id}
              className="bg-[#111111] rounded-lg border border-[#222222] transition-colors duration-300 overflow-hidden flex flex-col justify-between h-full group"
            >
              
              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow">
                
                {/* Header: Avatar, Name, Role */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#222222] text-white flex items-center justify-center font-bold text-base uppercase shrink-0">
                    {designer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base tracking-tight">
                      {designer.name}
                    </h3>
                    <p className="text-xs text-[#888888] tracking-tight mt-0.5 font-semibold">
                      {designer.role}
                    </p>
                  </div>
                </div>

                {/* Info Badges: Rating & Location */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#888888] tracking-tight">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#888888] stroke-[#888888]" />
                    <span className="text-white font-bold">{designer.rating.toFixed(1)}</span>
                    <span>/ 5.0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#888888]" />
                    <span>{designer.location}</span>
                  </div>
                </div>

                {/* Biography */}
                <p className="text-xs text-[#888888] leading-relaxed line-clamp-3">
                  {designer.bio}
                </p>

                {/* Skills list */}
                <div className="pt-1">
                  <p className="text-[10px] font-bold text-[#888888] tracking-tight uppercase">
                    {designer.skills.join(" • ")}
                  </p>
                </div>

              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-[#111111] border-t border-[#222222] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold text-[#888888] uppercase tracking-tight block">
                    Starting Rate
                  </span>
                  <span className="text-sm font-bold text-white tracking-tight">
                    ${designer.price}
                    <span className="text-xs text-[#888888] font-normal">/hr</span>
                  </span>
                </div>
                
                <Link to="/designers">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF6B35] hover:bg-[#e0531f] text-white rounded text-[11px] font-bold tracking-tight transition-colors cursor-pointer">
                    Hire Me
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Section Action */}
        <div className="text-center mt-8">
          <Link to="/designers">
            <button className="inline-flex items-center gap-1 text-xs font-bold tracking-tight text-[#FF6B35] hover:text-[#e0531f] transition-all cursor-pointer">
              Explore All Available Designers &rarr;
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
export default FeaturedDesignerCard;

