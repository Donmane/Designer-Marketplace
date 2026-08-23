import { Sparkles, Compass, Target, HelpCircle, CheckCircle } from "lucide-react";

function About() {
  const steps = [
    { title: "Sign up as Client or Designer", desc: "Select your professional persona and set up your dashboard in seconds." },
    { title: "Browse designers or upload services", desc: "Clients browse visual portfolios while designers catalog their freelance offerings." },
    { title: "Hire or get hired instantly", desc: "Establish collaborations, contracts, and assignments at standard hourly rates." },
    { title: "Manage everything in one place", desc: "Track active contracts and view your team directory via your visual workspace." }
  ];

  return (
    <div className="min-h-[85vh] bg-transparent py-12 sm:py-16 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            About Designora
          </h1>
          <h2 className="text-sm sm:text-base font-medium text-white max-w-xl mx-auto">
            Connecting clients with talented designers worldwide.
          </h2>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Mission */}
          <div className="bg-[#111111] rounded-lg border border-[#222222] p-6 relative overflow-hidden group">
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded bg-[#222222] text-white flex items-center justify-center font-bold text-xs shrink-0">1</span>
              Our Mission
            </h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              We believe hiring creative talent should be fast, simple, and accessible. Our purpose is to reduce operational friction in finding world-class visual designers, so teams can construct and deploy their digital experiences instantly.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#111111] rounded-lg border border-[#222222] p-6 relative overflow-hidden group">
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded bg-[#222222] text-white flex items-center justify-center font-bold text-xs shrink-0">2</span>
              Our Vision
            </h3>
            <p className="text-xs text-[#888888] leading-relaxed">
              To build a global creative marketplace where talent meets opportunity instantly. We envision a future where designers and developers are empowered to showcase their visual artistry to verified, high-value enterprises.
            </p>
          </div>
        </div>

        {/* Process Timeline Section */}
        <div className="space-y-6 bg-[#111111] border border-[#222222] rounded-lg p-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2 select-none">
              How it works
            </h3>
            <p className="text-xs text-[#888888] mt-1 font-medium">
              Four structured phases to launch and scale visual projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-3 p-4 rounded-md bg-[#0a0a0a] border border-[#222222] transition-colors"
              >
                <div className="w-8 h-8 rounded bg-[#222222] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-white text-xs sm:text-sm leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#888888] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;

