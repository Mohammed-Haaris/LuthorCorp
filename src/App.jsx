import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Pages/Home/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Process from "./Components/Process/Process";
import FAQ from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact/Contact";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";
import Mission from "./Components/Mission/Mission";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);
  
  return null;
}


function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </>

  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-white relative">
        <div className="noise-overlay" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </main>
    </Router>
  );
}




export default App;

