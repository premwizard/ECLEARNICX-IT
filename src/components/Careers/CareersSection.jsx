import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function CareersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".career-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-dark py-5 md:py-7" id="careers">

      {/* Background Lighting */}
      <div className="glow-mesh top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/10" />

      <div className="w-full px-6 md:px-12 relative z-10">
        <div className="career-content grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p style={{
              fontFamily: '"Satoshi", sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#5F2DEE',
              marginBottom: '32px'
            }}>Join Our Team</p>
            <h2
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
                overflow: 'visible',
                paddingBottom: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '48px'
              }}
              className="tracking-tighter"
            >
              Join the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary  text-rendering-sharp py-2 inline-block overflow-visible">Innovation</span>
            </h2>
            <p
              style={{
                fontFamily: '"Satoshi", sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: 1.9,
                marginBottom: '48px'
              }}
              className="max-w-xl"
            >
              We are looking for passionate, creative, and driven individuals who are ready to build impactful digital solutions, explore emerging technologies, and grow together with ECLearnix Technology Solutions.
            </p>
            <Link
              to="/careers"
              style={{ fontFamily: '"Satoshi", sans-serif', fontWeight: 700, fontSize: '13px' }}
              className="group relative inline-block px-12 py-6 bg-white text-black text-xs uppercase tracking-[0.3em] rounded-2xl overflow-hidden transition-all duration-500 hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Openings <FiArrowUpRight size={18} />
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "Culture", d: "Work in a collaborative, creative, and technology-driven environment that encourages innovation and teamwork." },
              { t: "Growth", d: "Enhance your skills through real-world projects, continuous learning, mentorship, and career development opportunities." },
              { t: "Impact", d: "Build meaningful digital products and solutions that create value for businesses, institutions, and users worldwide." },
              { t: "Innovation", d: "Be part of a forward-thinking team where ideas, creativity, and modern technology come together to shape the future." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500">
                <h4 style={{ fontFamily: '"Manrope", sans-serif', fontSize: '18px', fontWeight: 600 }} className="uppercase tracking-tighter mb-4 text-primary">{item.t}</h4>
                <p style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '13px', fontWeight: 400 }} className="text-white/40 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
