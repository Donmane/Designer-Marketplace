import serve from "../../data/service.json";
import { Sparkles, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

function Servicecard() {
  return (
    <div className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Design Packages
            </h2>
            <p className="text-slate-500 font-semibold text-sm mt-1.5">
              Select standard service types to check approximate budgets and hire top creatives instantly.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-extrabold rounded-lg border border-indigo-100">
              Fixed Rates
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-650 text-xs font-extrabold rounded-lg">
              Verified Creators
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serve.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
            >
              
              {/* Highlight Ribbon for Featured packages */}
              {item.featured && (
                <div className="absolute top-0 right-0 p-3">
                  <div className="bg-indigo-600 text-white p-1 rounded-lg shadow-sm" title="Most Requested">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}

              {/* Service Info */}
              <div className="space-y-4 flex-grow">
                {/* Category tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded-lg text-xs font-bold">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Divider & Footer Details */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Starting budget
                  </span>
                  <span className="text-xl font-black text-slate-900">
                    ${item.price}
                    <span className="text-xs font-bold text-slate-400">/hr</span>
                  </span>
                </div>

                <Link to="/designers">
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer">
                    Find Talent
                    <ArrowRight className="w-3.5 h-3.5" />
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