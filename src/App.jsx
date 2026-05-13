import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.0, // Snappier scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1, // Better feel
      touchMultiplier: 2,
      syncTouch: true,
    });

    // Expose lenis globally for component access
    window.lenis = lenis;

    // CRITICAL — sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Optimize GSAP performance
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.config({ limitCallbacks: true });

    // Refresh ScrollTrigger on load and resize
    window.addEventListener('load', () => ScrollTrigger.refresh());
    window.addEventListener('resize', () => ScrollTrigger.refresh());

    // Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener('load', () => ScrollTrigger.refresh());
      window.removeEventListener('resize', () => ScrollTrigger.refresh());
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container relative selection:bg-primary selection:text-white bg-darkBg min-h-screen overflow-x-hidden">

        {/* Grainy Noise Texture Overlay */}
        <div className="noise" />

        <header className="relative z-[100]">
          <Navbar />
        </header>

        <main className="overflow-x-hidden">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            {/* Add other routes if needed, or fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <footer className="relative z-10">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
