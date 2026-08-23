import testimonials from "../../data/testimonial.json";
import { Star } from "lucide-react";

function Testimonals() {
  return (
    <section className="py-12 sm:py-16 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Loved by Teams Globally
          </h2>
          <p className="text-[#888888] font-normal text-xs sm:text-sm leading-relaxed">
            Read real, verified reviews from startup founders, visual creators, and digital product teams who connect and collaborate through Designora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#111111] rounded-lg border border-[#222222] p-6 transition-colors duration-300 relative flex flex-col justify-between"
            >
              
              {/* Card Body */}
              <div className="space-y-3">
                
                {/* Gold Stars replaced with Monochromatic Gray Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < t.rating
                          ? "fill-[#888888] stroke-[#888888]"
                          : "fill-transparent stroke-[#222222]"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs text-[#888888] italic leading-relaxed pt-1">
                  "{t.message}"
                </p>
              </div>

              {/* User Identity */}
              <div className="flex items-center gap-2.5 pt-4 mt-4 border-t border-[#222222]">
                <div className="w-8 h-8 rounded bg-[#222222] text-white flex items-center justify-center font-bold text-xs uppercase shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-medium text-white">{t.name}</h4>
                  <p className="text-[10px] text-[#888888]">{t.role}</p>
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