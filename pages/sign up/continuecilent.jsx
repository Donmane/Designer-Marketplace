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
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50/30">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-100 mb-4 animate-bounce-slow">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Join as a Client
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Find the world's best design talent for your projects
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!name || !email}
            className="w-full py-4 px-6 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg shadow-violet-100 hover:shadow-xl active:scale-[0.98] transition-all duration-200 cursor-pointer block text-center"
          >
            Create Client Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Continueclient;

