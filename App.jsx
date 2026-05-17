import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Continuedesigner from "./pages/sign up/continuedesigner";
import Continueclient from "./pages/sign up/continuecilent";
import Designers from "./pages/designers/designers";
import Viewhire from "./pages/viewhire/viewhire";

function App() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/viewhire" element={<Viewhire />} />

        <Route
          path="/continuedesigner"
          element={<Continuedesigner setUser={setUser} />}
        />
        <Route
          path="/continuecilent"
          element={<Continueclient setUser={setUser} />}
        />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
