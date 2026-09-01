import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Users, Briefcase, Info } from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  const quickLinks = [
    {
      title: "Explore Designers",
      desc: "Connect with verified creative talent and freelancers.",
      path: "/designers",
      icon: Users,
      badge: "Talent",
    },
    {
      title: "Browse Services",
      desc: "Explore fixed-price packages and custom design offerings.",
      path: "/services",
      icon: Briefcase,
      badge: "Marketplace",
    },
    {
      title: "About Designora",
      desc: "Learn how our creative collaboration workspace works.",
      path: "/about",
      icon: Info,
      badge: "Platform",
    },
  ];

  return (
    <main className="min-h-[85vh] bg-transparent py-12 sm:py-20 flex items-center justify-center relative overflow-hidden transition-all duration-300">
      {/* Ambient background glow & geometric wireframes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#1a0a05] rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 space-y-8">
        {/* Large Glowing 404 Number */}
        <div className="space-y-4">
          <div className="relative select-none flex justify-center items-center py-2">
            <h1 className="text-8xl sm:text-9xl lg:text-[11rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-[#FF6B35]/40 drop-shadow-2xl">
              404
            </h1>
          </div>

          {/* Heading and Description */}
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              Looks like you've wandered off the path
            </h2>
            <p className="text-xs sm:text-sm text-[#888888] font-normal leading-relaxed">
              The page, portfolio, or resource you are looking for has been moved, renamed, or does not exist in the Designora workspace.
            </p>
          </div>
        </div>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <Link to="/" className="w-full sm:w-auto flex-1">
            <button
              id="back-home-btn"
              className="w-full px-5 py-3 bg-[#FF6B35] hover:bg-[#e0531f] text-white text-xs font-bold tracking-tight rounded-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/30 active:scale-[0.98]"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>
          </Link>

          <button
            id="go-back-btn"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex-1 px-5 py-3 bg-[#111111] hover:bg-[#1a1a1a] text-white text-xs font-bold tracking-tight rounded-md border border-[#222222] hover:border-[#333333] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4 text-[#888888]" />
            <span>Go to Previous Page</span>
          </button>
        </div>

        {/* Suggested Quick Destinations */}
        <div className="pt-8 border-t border-[#222222] max-w-3xl mx-auto">
          <p className="text-[11px] font-bold text-[#888888] uppercase tracking-wider mb-4">
            Or explore popular sections
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {quickLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="p-4 rounded-lg bg-[#111111] hover:bg-[#161616] border border-[#222222] hover:border-[#FF6B35]/40 transition-all duration-200 group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded bg-[#222222] group-hover:bg-[#FF6B35]/20 text-white group-hover:text-[#FF6B35] flex items-center justify-center transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold text-[#888888] group-hover:text-white uppercase tracking-wider px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#222222]">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-[#FF6B35] transition-colors flex items-center gap-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#888888] mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
