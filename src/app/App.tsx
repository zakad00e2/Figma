import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { LeadMagnet } from "./components/LeadMagnet";
import { Consultation } from "./components/Consultation";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        {/* <LeadMagnet /> */}
        <Consultation />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
