import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight, FiCheckCircle, FiSmartphone, FiLayers, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(cardRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      gsap.from(".about-fade-up", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
        }
      });

      // Floating animation for images
      gsap.to(".about-collage-img", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1,
          from: "random"
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-20 pb-16 md:pt-32 md:pb-20 bg-white overflow-hidden flex items-center justify-center min-h-[85vh]"
      id="about"
    >
      <div className="w-full max-w-[100%] px-6 md:px-12 lg:px-24 relative z-10">
        {/* Main Composition Wrapper */}
        <div
          ref={cardRef}
          className="relative overflow-hidden flex items-center w-full"
        >
          {/* Subtle Background Texture (Circles) - Repositioned for wide layout */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <circle cx="95%" cy="50%" r="200" fill="none" stroke="black" strokeWidth="1" />
              <circle cx="95%" cy="50%" r="400" fill="none" stroke="black" strokeWidth="1" />
            </svg>
          </div>

          <div className="w-full grid lg:grid-cols-[46%_50%] justify-between gap-12 items-start">

            {/* Left Content - Realigned to Top */}
            <div ref={leftContentRef} className="relative z-10 order-2 lg:order-1 pt-4 lg:pt-0">
              <div className="about-fade-up text-primary font-black text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-[0.2em] uppercase mb-6">
                ABOUT US
              </div>

              <h2 className="about-fade-up text-[clamp(2.5rem,5vw,5rem)] font-extrabold text-[#0A0820] leading-[1.1] tracking-tighter mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B35E8] to-[#3D00B8] py-2 inline-block overflow-visible">
                  Innovating the Future of Digital Experiences
                </span>
              </h2>

              <p className="about-fade-up text-gray-500 text-lg md:text-xl lg:text-[22px] leading-[1.6] mb-12 max-w-2xl font-medium">
                ECLearnix Technology Solutions is the IT and technology division of ECLearnix, established to deliver complete digital and technology services across multiple industries.
                <br />We specialize in designing, developing, and managing modern digital solutions that help businesses stay competitive in today’s fast-moving digital world. Our team combines creativity, technology, and strategy to create impactful solutions tailored to every client’s needs.
                <br />Whether it’s a startup launching a new idea or an enterprise undergoing digital transformation, we provide end-to-end IT services with innovation, quality, and reliability.
              </p>

              {/* Services & Expertise Grid - Styled as Equal Bento Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {[
                  { title: "UI/UX & Quality Engineering", icon: <FiCheckCircle size={22} /> },
                  { title: "Software & Mobile Development", icon: <FiSmartphone size={22} /> },
                  { title: "Digital Platforms", icon: <FiLayers size={22} /> },
                  { title: "Strategic Consulting", icon: <FiTrendingUp size={22} /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -5, backgroundColor: '#ffffff', boxShadow: '0 30px 60px rgba(61, 0, 184, 0.1)' }}
                    className="group p-4 rounded-[2.5rem] bg-[#F4F7FF] border border-black/[0.04] hover:border-primary/40 transition-all duration-500 flex flex-col justify-between gap-4 shadow-sm relative overflow-hidden min-h-[110px]"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 flex-shrink-0 relative z-10 border border-black/[0.02]">
                      {item.icon}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-[12px] font-black text-[#0A0820] uppercase tracking-[0.2em] leading-tight group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <div className="w-8 h-[2px] bg-primary/20 mt-3 group-hover:w-16 transition-all duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>


            </div>

            {/* Right Collage - Reduced scale */}
            <div ref={rightContentRef} className="relative order-1 lg:order-2 flex items-center justify-end py-4 lg:py-0">
              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-xl lg:max-w-2xl p-4">

                {/* Image 1 - Top Left */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/c1.png" alt="Team 1" className="w-full h-full object-cover" />
                </div>

                {/* Image 2 - Top Right */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white mt-8 md:mt-12 transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/c2.png" alt="Team 2" className="w-full h-full object-cover" />
                </div>

                {/* Image 3 - Bottom Left */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white -mt-8 md:-mt-12 transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/c3.png" alt="Team 3" className="w-full h-full object-cover" />
                </div>

                {/* Image 4 - Bottom Right */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/c4.png" alt="Team 4" className="w-full h-full object-cover" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default AboutSection;
