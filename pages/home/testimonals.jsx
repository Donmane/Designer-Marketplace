import testimonials from "../../data/testimonial.json";
import { Star, MessageSquareQuote, Sparkles } from "lucide-react";

function Testimonals() {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Client Endorsements
          </div>
          <h2 className="text-3.5xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Loved by Teams Globally
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Read real, verified reviews from startup founders, visual creators, and digital product teams who connect and collaborate through Designora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              
              {/* Quote Icon Overlay */}
              <div className="absolute top-8 right-8 text-slate-200/60 pointer-events-none">
                <MessageSquareQuote className="w-10 h-10" />
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                
                {/* Gold Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating
                          ? "fill-amber-400 stroke-amber-400"
                          : "fill-slate-200 stroke-slate-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-650 font-medium italic leading-relaxed pt-2">
                  "{t.message}"
                </p>
              </div>

              {/* User Identity */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-extrabold text-sm uppercase shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs font-semibold text-slate-400">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonals;