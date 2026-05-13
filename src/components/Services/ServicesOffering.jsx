import React, { useEffect, useRef } from 'react';
import { FaSearch, FaMobileAlt, FaLock, FaDesktop, FaChartPie } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ServicesOffering() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    { title: 'Cloud Infrastructure', icon: <FaSearch />, desc: 'High-availability serverless systems designed for global scale.' },
    { title: 'Digital Strategy', icon: <FaMobileAlt />, desc: 'Growth-focused marketing through precision engineering.' },
    { title: 'Security Systems', icon: <FaLock />, desc: 'Zero-trust security frameworks for sensitive enterprise data.' },
    { title: 'Interface Design', icon: <FaDesktop />, desc: 'Minimalist user experiences that drive meaningful conversion.' },
    { title: 'Data Analytics', icon: <FaChartPie />, desc: 'Neural network powered insights for predictive business growth.' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".srv-header-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: ".srv-grid",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-darkBg relative overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

      <div className="w-full px-6 md:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-12 md:mb-16">

          <div className="lg:w-1/2">
            <div className="srv-header-reveal flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-primary"></div>
              <p style={{
                fontFamily: '"Satoshi", sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: '#5F2DEE',
              }}>Technical Ecosystem</p>
            </div>
            <h2
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: 'clamp(24px, 3vw, 38px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.3,
                overflow: 'visible',
                padding: '0.1em 0',
                textTransform: 'uppercase',
              }}
              className="srv-header-reveal tracking-tighter"
            >
              Dealing in all <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary  py-2 inline-block overflow-visible">Premium</span> IT Services.
            </h2>
          </div>
          <div className="srv-header-reveal lg:w-1/3">
            <p
              className="text-gray-400"
              style={{
                fontFamily: '"Satoshi", sans-serif',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: 1.9,
              }}
            >
              We engineer advanced solutions that combine security, scalability, and performance to give your business a competitive edge in the modern landscape.
            </p>
          </div>
        </div>

        <div className="srv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {services.map((srv, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group relative"
            >
              <div className="h-full bg-white/[0.03] backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/5 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-3 cursor-pointer flex flex-col items-start overflow-visible relative">
                {/* Glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  {srv.icon}
                </div>

                <h3 style={{ fontFamily: '"Manrope", sans-serif', fontSize: '18px', fontWeight: 600 }} className="text-white mb-4 tracking-tight leading-[1.3] py-2 overflow-visible">{srv.title}</h3>
                <p style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '14px' }} className="text-gray-400 leading-relaxed mb-6">{srv.desc}</p>

                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-primary font-bold text-xs uppercase tracking-widest">
                  Explore →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}