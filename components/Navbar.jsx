import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "./Toast";
import { Menu, X, LogOut } from "lucide-react";

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
    { name: "Home", path: "/" },
    { name: "Designers", path: "/designers" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    ...(user?.role === "client"
      ? [{ name: "View Hires", path: "/viewhire" }]
      : []),
    ...(user?.role === "designer"
      ? [{ name: "Upload Services", path: "/uploadservices" }]
      : []),
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[#222222] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2 select-none">
              <span className="w-3 h-3 bg-[#FF6B35] rounded-sm shrink-0"></span>
              Designora
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-bold tracking-tight uppercase transition-colors duration-200 py-1.5
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#888888] hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth / User Info */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3 bg-[#111111] p-1 pl-3 pr-1 rounded-md border border-[#222222]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#222222] text-white flex items-center justify-center font-bold text-[10px] uppercase">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white leading-none">{user.name}</span>
                    <span className="text-[9px] text-[#888888] capitalize leading-none mt-0.5">{user.role}</span>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-transparent hover:bg-[#222222] text-[#888888] hover:text-white p-1.5 rounded-md cursor-pointer transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/continuecilent">
                  <button className="px-4 py-2 bg-transparent hover:bg-[#111111] text-white text-xs font-bold tracking-tight rounded-md border border-[#222222] transition-colors cursor-pointer">
                    Continue as Client
                  </button>
                </Link>
                <Link to="/continuedesigner">
                  <button className="px-4 py-2 bg-[#FF6B35] hover:bg-[#e0531f] text-white text-xs font-bold tracking-tight rounded-md border border-transparent transition-colors cursor-pointer">
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
              className="text-[#888888] hover:text-white p-2 rounded-md hover:bg-[#111111] border border-[#222222] transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[#222222] bg-[#0a0a0a] shadow-lg animate-slide-in">
          <div className="px-4 pt-4 pb-6 space-y-4">
            
            {/* Links List */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-tight transition-colors
                      ${
                        isActive
                          ? "bg-[#111111] text-white"
                          : "text-[#888888] hover:text-white hover:bg-[#111111]/50"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth / Info */}
            <div className="pt-4 border-t border-[#222222]">
              {user ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 px-4 py-1">
                    <div className="w-8 h-8 rounded bg-[#222222] text-white flex items-center justify-center font-bold text-xs uppercase">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">{user.name}</h4>
                      <p className="text-[10px] text-[#888888] capitalize">{user.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-transparent hover:bg-red-950/20 text-red-500 hover:text-red-400 font-bold tracking-tight text-xs rounded-md border border-[#222222] hover:border-red-900/50 transition-all cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/continuecilent" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-2.5 px-4 bg-transparent hover:bg-[#111111] text-white text-xs font-bold tracking-tight rounded-md border border-[#222222] transition-colors cursor-pointer">
                      Continue as Client
                    </button>
                  </Link>
                  <Link to="/continuedesigner" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-2.5 px-4 bg-[#FF6B35] hover:bg-[#e0531f] text-white text-xs font-bold tracking-tight rounded-md transition-colors cursor-pointer">
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

