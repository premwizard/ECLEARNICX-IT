import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Route-based active state
      if (location.pathname === '/careers') {
        setActiveSection('careers');
        return;
      }
      if (location.pathname === '/contact') {
        setActiveSection('contact');
        return;
      }

      // Section Highlighting
      const sections = navLinks.map(link => document.getElementById(link.id));
      const viewportHeight = window.innerHeight;
      let currentSection = activeSection;

      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.4 && rect.bottom > viewportHeight * 0.4) {
            currentSection = section.getAttribute('id');
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, [scrolled, activeSection]);

  const scrollToSection = (id) => {
    setMobileMenu(false);
    
    // Dedicated pages
    if (id === 'careers') {
      navigate('/careers');
      return;
    }
    if (id === 'contact') {
      navigate('/contact');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }

    if (window.lenis) {
      window.lenis.scrollTo('#' + id, {
        offset: -100,
        duration: 1.2,
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[1000000] transition-all duration-500 ${
  scrolled
    ? 'bg-[#0A0820]/70 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg'
    : 'bg-transparent py-5'
}`}
    >
      <div className="container mx-auto px-6 md:px-12 h-[72px] flex items-center">
        {/* Left: Logo Section */}
        <div className="flex-1 flex items-center justify-start">
          <Link
            to="/"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-4 group shrink-0"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-all duration-700 group-hover:rotate-[360deg] shadow-lg shadow-primary/20">
              <span className="text-white text-xl font-black">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-tighter leading-tight font-heading">ECLearnix</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-primary font-black -mt-0.5">Technology</span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex gap-1 items-center justify-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative px-5 py-2 group"
              >
                <span
                  className={`relative z-10 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 font-body ${
                    isActive ? 'text-white' : 'text-white/40 group-hover:text-white'
                  }`}
                >
                  {link.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/5 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Spacer (Keeps center links centered) */}
        <div className="flex-1 hidden lg:flex items-center justify-end" />

        {/* Mobile Menu Button (Stays right on small screens) */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button
            className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenu(true)}
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-[#0A0820] z-[2000000] lg:hidden flex flex-col"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="h-full flex flex-col p-8 md:p-12 relative z-10 overflow-hidden">
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-black">E</span>
                  </div>
                  <span className="text-white font-black text-2xl tracking-tighter uppercase font-heading">ECLearnix</span>
                </div>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/20 hover:bg-primary transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="flex flex-col gap-4 overflow-y-auto pr-4">
                {navLinks.map((link, i) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left group py-2"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                      className={`text-4xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-300 block ${
                        activeSection === link.id ? 'text-primary' : 'text-white/60 group-hover:text-white'
                      }`}
                    >
                      {link.name}
                    </motion.span>
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-white/10">
                 <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black mb-3">© 2026 ECLearnix Technology</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}