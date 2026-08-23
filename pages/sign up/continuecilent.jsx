import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../components/Toast";

function Continueclient({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      role: "client"
    };

    localStorage.setItem("user", JSON.stringify(user));
    setUser(user); 

    showToast(`Welcome onboard, ${name}! You have signed in as a Client successfully.`);
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
      <div className="max-w-md w-full bg-[#111111] p-6 rounded-lg border border-[#222222] transition-colors duration-300">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Join as a Client
          </h2>
          <p className="mt-1.5 text-xs text-[#888888]">
            Find the world's best design talent for your projects
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all duration-200 bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#888888] uppercase tracking-tight block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-md border border-[#222222] focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all duration-200 bg-[#0a0a0a] text-white placeholder-[#888888] text-xs font-semibold tracking-tight"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!name || !email}
            className="w-full py-2.5 px-4 bg-[#FF6B35] hover:bg-[#e0531f] disabled:bg-[#222222] disabled:text-[#888888] disabled:cursor-not-allowed text-white font-bold tracking-tight rounded-md transition-colors cursor-pointer block text-center text-xs"
          >
            Create Client Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Continueclient;

