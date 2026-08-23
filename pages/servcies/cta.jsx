
import { Link } from "react-router-dom";

function Cta() {
  return (
    <section className="py-12 sm:py-16 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative rounded-lg bg-[#111111] text-white p-8 sm:p-12 text-center overflow-hidden border border-[#222222] transition-all duration-300">
          
          {/* Banner Contents */}
          <div className="relative max-w-2xl mx-auto space-y-4">
            
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Sign up to get started
            </h2>

            {/* Paragraph */}
            <p className="text-[#888888] font-normal text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Join our active community of creative designers and innovative clients today. Find elite design talent or land premium freelance contracts instantly.
            </p>

            {/* Actions Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link to="/continuecilent" className="w-full sm:w-auto">
                <button className="w-full px-5 py-3 bg-[#FF6B35] hover:bg-[#e0531f] text-white text-xs font-bold tracking-tight rounded-md transition-colors cursor-pointer flex items-center justify-center">
                  Join as Client
                </button>
              </Link>
              <Link to="/continuedesigner" className="w-full sm:w-auto">
                <button className="w-full px-5 py-3 bg-transparent hover:bg-[#0a0a0a] text-white text-xs font-bold tracking-tight rounded-md border border-[#222222] transition-colors cursor-pointer flex items-center justify-center">
                  Join as Designer
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cta;

