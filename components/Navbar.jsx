import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "./Toast";
import { Menu, X, Sparkles, LogOut, User, LayoutDashboard, Compass, Info, Heart } from "lucide-react";

function Navbar({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const { showToast } = useToast();
  const location = useLocation();

  function handleLogout() {
    const prevName = user?.name || "there";
    localStorage.removeItem("user");
    setUser(null);
    localStorage.removeItem("role");
    localStorage.removeItem("hired");
    showToast(`Goodbye, ${prevName}! You have logged out successfully.`);
    setIsOpen(false);
  }

  const navLinks = [
    { name: "Home", path: "/", icon: Compass },
    { name: "Designers", path: "/designers", icon: User },
    { name: "Services", path: "/services", icon: LayoutDashboard },
    { name: "About", path: "/about", icon: Info },
    ...(user?.role === "client"
      ? [{ name: "View Hires", path: "/viewhire", icon: Heart }]
      : []),
    ...(user?.role === "designer"
      ? [{ name: "Upload Services", path: "/uploadservices", icon: Sparkles }]
      : []),
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Designora
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-all duration-200 py-1.5 border-b-2
                    ${
                      isActive
                        ? "border-indigo-600 text-indigo-600 scale-[1.02]"
                        : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                    }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth / User Info */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4 bg-slate-50 p-1.5 pl-4 pr-1.5 rounded-full border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800 leading-none">{user.name}</span>
                    <span className="text-[10px] font-semibold text-slate-400 capitalize">{user.role}</span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-white hover:bg-rose-50 text-slate-500 hover:text-rose-600 p-2 rounded-full border border-slate-200/50 shadow-sm active:scale-95 transition-all cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/continuecilent">
                  <button className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-sm rounded-xl border border-slate-200/60 transition-all duration-200 cursor-pointer">
                    Continue as Client
                  </button>
                </Link>
                <Link to="/continuedesigner">
                  <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-100 hover:shadow-lg transition-all duration-200 cursor-pointer">
                    Continue as Designer
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md shadow-lg animate-slide-in">
          <div className="px-4 pt-4 pb-6 space-y-4">
            
            {/* Links List */}
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-150
                      ${
                        isActive
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth / Info */}
            <div className="pt-4 border-t border-slate-100/80">
              {user ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 px-4 py-1">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm uppercase shadow-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{user.name}</h4>
                      <p className="text-xs text-slate-400 capitalize">{user.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold rounded-xl border border-rose-100 transition-all cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link to="/continuecilent" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200/60 transition-all cursor-pointer">
                      Continue as Client
                    </button>
                  </Link>
                  <Link to="/continuedesigner" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-100 transition-all cursor-pointer">
                      Continue as Designer
                    </button>
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

