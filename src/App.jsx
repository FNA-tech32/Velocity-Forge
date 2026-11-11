import ClientLogos from "./components/ClientLogos.jsx";
import Contact from "./components/Contact.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Navbar from "./components/Navbar.jsx";
import Pricing from "./components/Pricing.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

