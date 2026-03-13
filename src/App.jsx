import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyHire from "./components/WhyHire";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="bg-[#05060a] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyHire />
      <Skills />
      <CTA />
      <Contact />
    </div>
  );
}

export default App;
