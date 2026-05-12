import Navbar from "./components/Navbar";
import Home from "./pages/home/Home"
import Testimonals from "./pages/home/testimonals";
import FeaturedDesignerCard from "./pages/home/FeaturedDesignercard";
import Footer from "./components/footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured-designers" element={<FeaturedDesignerCard />} />
          <Route path="/testimonials" element={<Testimonals />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
