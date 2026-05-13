import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
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
      setScrolled(window.scrollY > 50);

      // Section Highlighting Logic - Optimized for precision
      const sections = navLinks.map(link => document.getElementById(link.id));
      const viewportHeight = window.innerHeight;

      let currentSection = activeSection;

      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // If the section's top is in the upper half of the screen
          if (rect.top < viewportHeight * 0.4 && rect.bottom > viewportHeight * 0.4) {
            currentSection = section.getAttribute('id');
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // GSAP Entrance
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, [activeSection]);

  const scrollToSection = (id) => {
    setMobileMenu(false);

    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }

    if (window.lenis) {
      window.lenis.scrollTo('#' + id, {
        offset: -80,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div
      ref={navRef}
      className={`fixed left-0 right-0 z-[10000] transition-all duration-500 ${scrolled ? 'top-0' : 'top-6 md:top-10'
        }`}
    >
      <div className={`w-full relative transition-all duration-500 ${scrolled ? 'px-4 md:px-10' : 'px-4 md:px-10'}`}>
        {/* Glow behind the bar */}
        <div className={`absolute inset-0 bg-primary/20 blur-[100px] transition-opacity duration-700 pointer-events-none ${scrolled ? 'opacity-40' : 'opacity-0'}`} />

        <nav
          className={`relative transition-all duration-500 border-b lg:border overflow-hidden ${scrolled
            ? 'bg-darkBg/90 backdrop-blur-xl border-white/10 shadow-xl py-5 lg:rounded-[2rem]'
            : 'bg-white/[0.02] backdrop-blur-sm border-white/5 py-7 md:py-8 lg:rounded-[3rem]'
            }`}
        >
          <div className="px-6 md:px-10 flex justify-between items-center">
            {/* Logo Section */}
            <Link
              to="/"
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-all duration-700 group-hover:rotate-[360deg] shadow-lg shadow-primary/20">
                <span className="text-white text-xl font-black ">E</span>
              </div>
              <div className="flex flex-col">
                <span style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 700, fontSize: '18px' }} className="text-white tracking-tighter leading-tight">ECLearnix</span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-primary font-black -mt-0.5">Technology</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-1 items-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="relative px-6 py-2 group"
                  >
                    <span
                      style={{
                        fontFamily: '"Satoshi", sans-serif',
                        fontSize: '12px',
                        fontWeight: 800,
                        letterSpacing: '0.15em'
                      }}
                      className={`relative z-10 uppercase transition-all duration-300 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white'
                        }`}
                    >
                      {link.name}
                    </span>

                    {/* Active/Hover Indicator (Pill style) */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/5 rounded-full z-0"
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                      />
                    )}

                    {/* Animated Underline */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${isActive ? 'w-8' : 'w-0 group-hover:w-4'
                      }`} />
                  </button>
                );
              })}
            </div>

            {/* Action Area */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="h-6 w-[1px] bg-white/10" />

              <div
                onClick={() => scrollToSection('contact')}
                className="group flex items-center gap-4 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-all duration-500 group-hover:scale-105">
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-darkBg shadow-[0_0_10px_#00F2FE]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 font-black mb-0.5">Contact Us</span>
                  <span style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '14px', fontWeight: 800 }} className="text-white tracking-tight group-hover:text-primary transition-all duration-300">+91 1234567889</span>
                </div>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl"
              onClick={() => setMobileMenu(true)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-darkBg z-[2000] lg:hidden"
          >
            <div className="h-full flex flex-col p-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-20 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-black ">E</span>
                  </div>
                  <span className="text-white font-black text-2xl tracking-tighter uppercase">ECLearnix</span>
                </div>
                <button
                  onClick={() => setMobileMenu(false)}
                  className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                {navLinks.map((link, i) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left group"
                  >
                    <span
                      className={`text-5xl md:text-7xl font-black uppercase tracking-tighter transition-all duration-300 block ${activeSection === link.id ? 'text-primary' : 'text-white/20 group-hover:text-white'
                        }`}
                    >
                      {link.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}