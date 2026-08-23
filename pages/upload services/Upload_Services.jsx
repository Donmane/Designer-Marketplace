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
    <div className="min-h-[85vh] bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-[#111111] rounded-lg border border-[#222222] transition-colors duration-300 overflow-hidden">
        
        {/* Header Section */}
        <div className="px-6 py-8 border-b border-[#222222] bg-[#111111]">
          <h2 className="text-2xl font-bold tracking-tight text-white">Upload Your Services</h2>
          <p className="mt-1.5 text-[#888888] text-xs max-w-xl">
            Setup your professional freelancer profile. Showcase your services, set your hourly rate, and start connecting with clients.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={hanSubmit} className="p-6 space-y-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
                Freelancer / Agency Name
              </label>
              <input
                type="text"
                placeholder="e.g. Creative Labs"
                value={designer.name}
                onChange={(e) => setDesigner({ ...designer, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
                Professional Role
              </label>
              <input
                type="text"
                placeholder="e.g. Brand Identity Specialist"
                value={designer.role}
                onChange={(e) => setDesigner({ ...designer, role: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. London, UK (or Remote)"
                value={designer.location}
                onChange={(e) => setDesigner({ ...designer, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
                Hourly Rate ($ USD)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888] text-xs">$</span>
                <input
                  type="number"
                  placeholder="e.g. 85"
                  value={designer.price}
                  onChange={(e) => setDesigner({ ...designer, price: e.target.value })}
                  className="w-full pl-7 pr-16 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight"
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] text-xs">/hr</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
              Core Skills
            </label>
            <input
              type="text"
              placeholder="e.g. Figma, Branding, Web Design, Illustration"
              value={designer.skill}
              onChange={(e) => setDesigner({ ...designer, skill: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight"
              required
            />
            <p className="text-[10px] text-[#888888] font-bold tracking-tight">
              Separate your skills with commas to make them filterable.
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
              Professional Biography
            </label>
            <textarea
              placeholder="Describe your design philosophy, past experience, and unique value proposition..."
              value={designer.bio}
              onChange={(e) => setDesigner({ ...designer, bio: e.target.value })}
              className="w-full h-24 px-3.5 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight resize-none"
              required
            ></textarea>
          </div>

          <div className="flex gap-3 pt-4 border-t border-[#222222]">
            <button
              type="button"
              onClick={clearform}
              className="flex-1 py-2.5 px-4 border border-[#222222] text-white text-xs font-bold tracking-tight rounded-md hover:bg-[#222222] transition-colors cursor-pointer block text-center"
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="flex-2 py-2.5 px-4 bg-[#FF6B35] hover:bg-[#e0531f] text-white text-xs font-bold tracking-tight rounded-md transition-colors cursor-pointer block text-center"
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