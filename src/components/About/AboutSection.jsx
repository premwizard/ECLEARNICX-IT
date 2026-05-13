import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';
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
      className="relative py-8 md:py-12 bg-white overflow-hidden flex items-center justify-center lg:h-screen min-h-[600px]"
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

          <div className="w-full grid lg:grid-cols-[32%_62%] justify-between gap-10 items-center">
            
            {/* Left Content - Shifted Further Left */}
            <div ref={leftContentRef} className="relative z-10 order-2 lg:order-1">
              <div className="about-fade-up inline-flex items-center gap-2 text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-4">
                <span className="opacity-100">ABOUT US</span> </div>
              
              <h2 className="about-fade-up text-[clamp(2rem,6vw,4.5rem)] font-bold text-[#1D1729] leading-[1.05] tracking-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 py-2 inline-block overflow-visible">
                  Pioneers of cross-channel customer journey intelligence
                </span>
              </h2>

              <p className="about-fade-up text-gray-500 text-base md:text-[18px] leading-relaxed mb-8 max-w-xl font-medium">
                We're building the future by learning from the past. Since the early days of online retail, we've captured the voice of the customer. We've learned to adapt, innovate, and refine our approach.
              </p>


            </div>

            {/* Right Collage - Slightly smaller as requested */}
            <div ref={rightContentRef} className="relative order-1 lg:order-2 flex items-center justify-end py-4 lg:py-0">
              <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl lg:max-w-3xl">

                {/* Image 1 - Top Left */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="public/images/c1.png" alt="Team 1" className="w-full h-full object-cover" />
                </div>
                
                {/* Image 2 - Top Right */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white mt-8 md:mt-12 transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="public/images/c2.png" alt="Team 2" className="w-full h-full object-cover" />
                </div>

                {/* Image 3 - Bottom Left */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white -mt-8 md:-mt-12 transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="public/images/c3.png" alt="Team 3" className="w-full h-full object-cover" />
                </div>

                {/* Image 4 - Bottom Right */}
                <div className="about-collage-img aspect-square rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden shadow-xl border-2 md:border-[3px] border-white transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="public/images/c4.png" alt="Team 4" className="w-full h-full object-cover" />
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
