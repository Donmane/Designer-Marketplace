import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../components/Toast";

function Continuedesigner({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handlesubmit = (e) => {
    e.preventDefault();
    const user = {
      role: "designer",
      name,
      email,
    };
    console.log("Saving user", user);

    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    console.log("Saved in localStorage", localStorage.getItem("user"));
    
    showToast(`Welcome onboard, ${name}! You have signed in as a Designer successfully.`);
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50/30">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-100 mb-4 animate-bounce-slow">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Join as a Designer
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Showcase your skills and find top-tier projects
          </p>
        </div>

        <form onSubmit={handlesubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 bg-slate-50/50 hover:bg-slate-50 text-slate-900 placeholder-slate-400 font-medium"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!name || !email}
            className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg shadow-indigo-100 hover:shadow-xl active:scale-[0.98] transition-all duration-200 cursor-pointer block text-center"
          >
            Create Designer Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Continuedesigner;

