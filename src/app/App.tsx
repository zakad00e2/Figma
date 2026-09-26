import { lazy, Suspense, useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ScrollBlur } from "./components/ScrollBlur";
import { SiteAnimations } from "./components/SiteAnimations";
import { OpeningSequence } from "./components/OpeningSequence";
import { createSmoothScroll } from "./scrollSmoothing";

// Lazy load below-the-fold components for better performance
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Books = lazy(() => import("./components/Books").then(m => ({ default: m.Books })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Consultation = lazy(() => import("./components/Consultation").then(m => ({ default: m.Consultation })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const RegistrationForm = lazy(() => import("./components/RegistrationForm"));

// Minimal loading fallback
function SectionFallback() {
  return <div data-section-loading className="py-24 flex justify-center"><div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" /></div>;
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const { controller, update } = createSmoothScroll(Lenis);
    let frame = 0;

    const animate = (time: number) => {
      update(time);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      controller.destroy();
    };
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", syncRoute);
    window.addEventListener("app:navigate", syncRoute);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("app:navigate", syncRoute);
    };
  }, []);

  useEffect(() => {
    if (path === "/register") {
      return;
    }

    const targetId = window.location.hash.replace("#", "");
    const main = document.querySelector("main");

    if (!targetId || !main) {
      return;
    }

    let frame = 0;
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);

      // Wait for lazy sections so their final heights determine the scroll position.
      if (!target || main.querySelector("[data-section-loading]")) {
        return;
      }

      observer.disconnect();
      frame = requestAnimationFrame(() => {
        if (window.location.hash.slice(1) === targetId) {
          target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          });
        }
      });
    };

    const observer = new MutationObserver(scrollToTarget);
    observer.observe(main, { childList: true, subtree: true });
    scrollToTarget();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [path]);

  if (path === '/register') {
    return (
      <div className="min-h-screen pt-20">
        <Navbar />
        <main>
          <Suspense fallback={<SectionFallback />}>
            <RegistrationForm />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Toaster position="top-center" richColors />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <OpeningSequence />
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Books />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Consultation />
        </Suspense>
        <SiteAnimations scope={mainRef} />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollBlur />
      <Toaster position="top-center" richColors />
    </div>
  );
}
