import { useState } from "react";
import { useToast } from "../../components/Toast";

function Upload_Services() {
  const { showToast } = useToast();
  const [designer, setDesigner] = useState({
    name: "",
    role: "",
    skill: "",
    location: "",
    bio: "",
    price: "",
  });

  function hanSubmit(e) {
    e.preventDefault();

    if (!designer.name || !designer.role || !designer.skill || !designer.location || !designer.price) {
      showToast("Please fill in all required fields.", "warning");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("uploadedDesigners")) || [];

    const newDesigner = {
      ...designer,
      id: Date.now(),
      skills: designer.skill.split(",").map((s) => s.trim()).filter(Boolean),
      price: parseFloat(designer.price),
      rating: 5.0, // default rating for new professional portfolios
    };

    const updated = [...existing, newDesigner];
    localStorage.setItem("uploadedDesigners", JSON.stringify(updated));
    console.log("Saved!", newDesigner);
    
    showToast("Service uploaded successfully! Your profile has been published to the directory.");
    clearform();
  }

  function clearform() {
    setDesigner({
      name: "",
      role: "",
      skill: "",
      location: "",
      bio: "",
      price: "",
    });
  }

  return (
    <div className="min-h-[85vh] bg-gradient-to-tr from-slate-50 via-slate-100 to-indigo-50/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        
        {/* Header Section */}
        <div className="px-8 py-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Upload Your Services</h2>
          <p className="mt-2 text-indigo-100/90 text-sm max-w-xl font-medium">
            Setup your professional freelancer profile. Showcase your services, set your hourly rate, and start connecting with clients.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={hanSubmit} className="p-8 sm:p-10 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Freelancer / Agency Name
              </label>
              <input
                type="text"
                placeholder="e.g. Creative Labs"
                value={designer.name}
                onChange={(e) => setDesigner({ ...designer, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Professional Role
              </label>
              <input
                type="text"
                placeholder="e.g. Brand Identity Specialist"
                value={designer.role}
                onChange={(e) => setDesigner({ ...designer, role: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. London, UK (or Remote)"
                value={designer.location}
                onChange={(e) => setDesigner({ ...designer, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Hourly Rate ($ USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">$</span>
                <input
                  type="number"
                  placeholder="e.g. 85"
                  value={designer.price}
                  onChange={(e) => setDesigner({ ...designer, price: e.target.value })}
                  className="w-full pl-8 pr-24 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-semibold">per hour</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Core Skills
            </label>
            <input
              type="text"
              placeholder="e.g. Figma, Branding, Web Design, Illustration"
              value={designer.skill}
              onChange={(e) => setDesigner({ ...designer, skill: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
              required
            />
            <p className="text-xs text-slate-400 font-medium">
              Separate your skills with commas to make them filterable.
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Professional Biography
            </label>
            <textarea
              placeholder="Describe your design philosophy, past experience, and unique value proposition..."
              value={designer.bio}
              onChange={(e) => setDesigner({ ...designer, bio: e.target.value })}
              className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium resize-none"
              required
            ></textarea>
          </div>

          <div className="flex gap-4 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={clearform}
              className="flex-1 py-4 px-6 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 active:scale-[0.98] transition-all duration-200 cursor-pointer block text-center"
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="flex-2 py-4 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-100 hover:shadow-xl active:scale-[0.98] transition-all duration-200 cursor-pointer block text-center"
            >
              Publish Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload_Services;