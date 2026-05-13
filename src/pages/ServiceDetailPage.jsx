import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { FiArrowLeft, FiCheckCircle, FiCpu, FiLayers, FiActivity } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } }
};

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!service) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.from(".service-hero-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        clearProps: "all"
      });

      // 2. Feature Cards Entrance
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
      });

      // 3. Process Steps Entrance
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        clearProps: "all"
      });

      // 4. Parallax Hero Image
      gsap.to(".hero-bg-img", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 150,
        scale: 1.2,
        ease: "none"
      });
    });

    return () => ctx.revert();
  }, [service]);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-darkBg">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-6">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-bold uppercase tracking-widest text-xs">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      ref={containerRef}
      className="bg-darkBg min-h-screen relative overflow-hidden"
    >
      {/* HERO SECTION (DARK) */}
      <section className="relative h-[85vh] flex items-center px-6 md:px-20 overflow-hidden section-dark">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="hero-bg-img w-full h-full object-cover opacity-40 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/20 via-darkBg/60 to-darkBg" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-color-dodge" />
        </div>

        {/* Content */}
        <div className="service-hero-content relative z-10 max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-primary font-black tracking-widest text-[10px] uppercase mb-12 hover:gap-5 transition-all"
          >
            <FiArrowLeft /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl">{service.icon}</span>
            <div className="h-[1px] w-12 bg-primary/50" />
            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase">Service Showcase</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[1.05] mb-10 [text-shadow:0_20px_50px_rgba(0,0,0,0.5)] text-white">
            {service.details.heroTitle}
          </h1>

          <p className="text-xl md:text-3xl text-white/90 font-medium leading-relaxed max-w-3xl">
            {service.details.heroDesc}
          </p>
        </div>

        {/* Floating Accents */}
        <div className="glow-mesh -top-24 -right-24 bg-primary/10" />
      </section>

      {/* SPECIALTIES SECTION (LIGHT) */}
      <section className="py-32 px-6 md:px-20 relative z-10 section-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] uppercase mb-6">Expertise</p>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-heading">
                Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Specialties</span>
              </h2>
            </div>
            <p className="text-bodyText max-w-sm font-medium leading-relaxed">
              We leverage cutting-edge tools and methodologies to deliver excellence in {service.title}.
            </p>
          </div>

          <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.details.features.map((feature, i) => (
              <div
                key={i}
                className="feature-card group p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-8 group-hover:scale-110 transition-transform">
                  <FiCheckCircle />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-heading group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-bodyText leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION (DARK) */}
      <section className="process-section py-32 px-6 md:px-20 section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase mb-6">Our Workflow</p>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary ">Process</span></h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {service.details.process.map((step, i) => (
              <div key={i} className="process-step group relative text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-black mb-8 mx-auto group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                  {i + 1}
                </div>
                <h4 className="text-lg font-black uppercase tracking-tighter text-white mb-2">{step}</h4>
                <div className="h-[2px] w-0 bg-primary mx-auto group-hover:w-full transition-all duration-500" />
                {i < 4 && <div className="hidden lg:block absolute top-10 left-[70%] w-full h-[1px] bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION (LIGHT) */}
      <section className="py-32 px-6 md:px-20 section-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <div className="p-12 rounded-[3rem] bg-white border border-black/5 shadow-2xl relative overflow-hidden group">
              <FiCpu className="absolute -top-10 -right-10 text-[200px] text-primary/5 group-hover:text-primary/10 transition-all duration-1000" />
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-heading">Powered by <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Innovation</span></h2>
              <p className="text-bodyText text-xl font-medium leading-relaxed">
                We use the world’s most advanced technologies to ensure your project is built for the future.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {service.details.technologies.map((tech, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-black/5 flex items-center gap-4 group hover:border-primary/20 transition-all shadow-lg">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-black tracking-widest text-xs uppercase text-bodyText group-hover:text-primary transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION (DARK) */}
      <section className="py-32 px-6 md:px-20 relative overflow-hidden section-dark bg-gradient-to-b from-darkBg to-black">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none text-white">
            Scale Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Digital Future</span> Today
          </h2>
          <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-medium">
            Let’s discuss how our {service.title} expertise can help you achieve your goals and transform your business operations.
          </p>
        </div>

        {/* Ambient background lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      </section>
    </motion.div>
  );
}
