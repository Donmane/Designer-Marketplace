import choose from "../../data/whychooseus.json";
import { ShieldCheck, Zap, Lock, DollarSign } from "lucide-react";

function Whychooseus() {
  // Map icons to list indexes
  const icons = [ShieldCheck, Zap, Lock, DollarSign];

  return (
    <section className="py-12 sm:py-16 bg-transparent border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Why Choose Designora
          </h2>
          <p className="text-[#888888] font-normal text-xs sm:text-sm leading-relaxed">
            We provide a structured, premium ecosystem that helps business founders, visual managers, and creative professionals collaborate painlessly.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {choose.map((item, index) => {
            const Icon = icons[index] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-[#111111] rounded-lg border border-[#222222] p-6 transition-colors duration-300 group flex flex-col justify-start text-left"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded bg-[#222222] text-white flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-5 h-5 shrink-0" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#888888] leading-relaxed mt-2">
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