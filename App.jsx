import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home"
import FeaturedDesignerCard from "./pages/home/FeaturedDesignercard";
import Footer from "./components/footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Continuedesigner from "./pages/sign up/continuedesigner";
import Continuecilent from "./pages/sign up/continuecilent";
function App() {
   const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  return (
    <>
      <BrowserRouter>
        <Navbar  user = {user}  setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured-designers" element={<FeaturedDesignerCard />} />
          <Route path="/continuedesigner" element={<Continuedesigner setUser = {setUser} />} />
          <Route path="/continuecilent" element={<Continuecilent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
