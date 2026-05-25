import { Sparkles, Compass, Target, HelpCircle, CheckCircle } from "lucide-react";

function About() {
  const steps = [
    { title: "Sign up as Client or Designer", desc: "Select your professional persona and set up your dashboard in seconds." },
    { title: "Browse designers or upload services", desc: "Clients browse visual portfolios while designers catalog their freelance offerings." },
    { title: "Hire or get hired instantly", desc: "Establish collaborations, contracts, and assignments at standard hourly rates." },
    { title: "Manage everything in one place", desc: "Track active contracts and view your team directory via your visual workspace." }
  ];

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 py-16 sm:py-24 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[10px] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Company Profile
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            About Designora
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-indigo-650 leading-relaxed max-w-2xl mx-auto">
            Connecting clients with talented designers worldwide.
          </h2>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Mission */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-indigo-100 group-hover:text-indigo-200/40 transition-colors pointer-events-none">
              <Target className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">1</span>
              Our Mission
            </h3>
            <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
              We believe hiring creative talent should be fast, simple, and accessible. Our purpose is to reduce operational friction in finding world-class visual designers, so teams can construct and deploy their digital experiences instantly.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 text-violet-100 group-hover:text-violet-200/40 transition-colors pointer-events-none">
              <Compass className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-sm shrink-0">2</span>
              Our Vision
            </h3>
            <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
              To build a global creative marketplace where talent meets opportunity instantly. We envision a future where designers and developers are empowered to showcase their visual artistry to verified, high-value enterprises.
            </p>
          </div>
        </div>

        {/* Process Timeline Section */}
        <div className="space-y-8 bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <HelpCircle className="w-6 h-6 text-indigo-600" />
              How it works
            </h3>
            <p className="text-sm font-semibold text-slate-400 mt-1">
              Four structured phases to launch and scale visual projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                  {idx + 1}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
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

