import choose from "../../data/whychooseus.json";
import { Sparkles, ShieldCheck, Zap, Lock, DollarSign } from "lucide-react";

function Whychooseus() {
  // Map icons to list indexes
  const icons = [ShieldCheck, Zap, Lock, DollarSign];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Trusted Platform
          </div>
          <h2 className="text-3.5xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose Designora
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            We provide a structured, premium ecosystem that helps business founders, visual managers, and creative professionals collaborate painlessly.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {choose.map((item, index) => {
            const Icon = icons[index] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-start text-left"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center justify-center mb-6 shadow-sm transition-all duration-300">
                  <Icon className="w-6 h-6 shrink-0" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 font-medium leading-relaxed mt-2.5">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Whychooseus;