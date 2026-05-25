import designers from "../../data/designer.json";
import { Link } from "react-router-dom";
import { Star, MapPin, Sparkles, ArrowRight } from "lucide-react";

function FeaturedDesignerCard() {
  // Filter for featured designers
  const featured = designers.filter((d) => d.isFeatured === true);

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-150/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Spotlight Creators
          </div>
          <h2 className="text-3.5xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Featured Designers
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Discover outstanding freelancers handpicked for their aesthetic design principles, exceptional execution, and outstanding client reviews.
          </p>
        </div>

        {/* Designers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((designer) => (
            <div
              key={designer.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group"
            >
              
              {/* Top Banner Accent */}
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-violet-500"></div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-grow">
                
                {/* Header: Avatar, Name, Role */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white flex items-center justify-center font-extrabold text-lg uppercase shadow-lg shadow-indigo-100 shrink-0">
                    {designer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-lg">
                      {designer.name}
                    </h3>
                    <p className="text-xs font-bold text-indigo-600 tracking-wide mt-0.5">
                      {designer.role}
                    </p>
                  </div>
                </div>

                {/* Info Badges: Rating & Location */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    <span className="text-slate-800 font-bold">{designer.rating.toFixed(1)}</span>
                    <span className="text-slate-400">/ 5.0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{designer.location}</span>
                  </div>
                </div>

                {/* Biography */}
                <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                  {designer.bio}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {designer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-55/60 text-slate-600 text-xs font-bold rounded-lg border border-slate-100/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer */}
              <div className="px-6 py-5 sm:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Starting Rate
                  </span>
                  <span className="text-lg font-black text-slate-900">
                    ${designer.price}
                    <span className="text-xs font-bold text-slate-400">/hr</span>
                  </span>
                </div>
                
                <Link to="/designers">
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-slate-200/80 rounded-xl text-xs font-bold text-slate-700 shadow-sm transition-all duration-200 cursor-pointer group-hover:border-indigo-100">
                    Hire Me
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Section Action */}
        <div className="text-center mt-12">
          <Link to="/designers">
            <button className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-850 hover:underline transition-all cursor-pointer">
              Explore All Available Designers
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
export default FeaturedDesignerCard;

