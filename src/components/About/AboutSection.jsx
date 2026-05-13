import React, { useEffect, useRef, useState, memo } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { FiCpu, FiZap, FiTrendingUp, FiUsers, FiClock, FiLayers, FiAward, FiHeart } from 'react-icons/fi';  

gsap.registerPlugin(ScrollTrigger);




 const cultureFeatures = [
    { title: "Innovation-Driven", icon: <FiCpu />, desc: "We push boundaries and explore new frontiers in technology every single day." },
    { title: "Continuous Learning", icon: <FiZap />, desc: "Our team never stops growing. We provide resources for constant skill evolution." },
    { title: "Career Growth", icon: <FiTrendingUp />, desc: "Clear paths for advancement and mentorship from industry veterans." },
    { title: "Collaborative Culture", icon: <FiUsers />, desc: "Diverse minds working together in an environment of mutual respect and creativity." },
    { title: "Flexible Work", icon: <FiClock />, desc: "Balance matters. We offer flexible schedules and remote-friendly options." },
    { title: "Modern Tech Stack", icon: <FiLayers />, desc: "Work with the latest tools and frameworks to build world-class products." },
    { title: "Creative Freedom", icon: <FiAward />, desc: "Your ideas matter. We encourage out-of-the-box thinking and ownership." },
    { title: "Employee Development", icon: <FiHeart />, desc: "Holistic support for your professional and personal well-being." },
  ];

// Memoized Heading to prevent SplitType reconciliation errors
const AboutHeading = memo(({ headingRef }) => {
  return (
    <h2 
      ref={headingRef} 
      style={{
        fontFamily: '"Manrope", sans-serif',
        fontSize: 'clamp(26px, 3vw, 38px)',
        fontWeight: 700,
        color: '#1D1729',
        lineHeight: 1.3,
        overflow: 'visible',
        padding: '0.1em 0',
        textTransform: 'uppercase',
        marginBottom: '20px'
      }}
      className="tracking-tighter w-full box-border"
    >
      <span className="block overflow-visible">Driving Innovation</span><br></br>
      <span className="highlight-text ">Forward</span>
    </h2>
  );
});

export default function AboutSection() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Split Animation
      let split;
      if (headingRef.current) {
        split = new SplitType(headingRef.current, { types: 'words' });
        gsap.from(split.words, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
          },
          opacity: 0,
          y: 10,
          filter: "blur(5px)",
          stagger: 0.02,
          duration: 1,
          ease: "power4.out",
          clearProps: "all"
        });
      }

      // Image Parallax & Reveal
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom top",
          scrub: true
        },
        y: 100,
        scale: 1.1,
        opacity: 0.5,
        ease: "none"
      });

      // Counter logic
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = 250;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      });
      if (counterRef.current) observer.observe(counterRef.current);

      // List Items Reveal
      gsap.from(".list-item", {
        scrollTrigger: {
          trigger: ".list-container",
          start: "top 85%",
        },
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all"
      });

      gsap.from([".about-text", ".button-reveal"], {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });

      return () => {
        if (split) split.revert();
      };
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-light py-32 relative overflow-hidden" id="about">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(var(--primary) 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      
      <div className="w-full px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-start relative z-10">
        <div ref={imageRef} className="relative w-full group lg:pt-16">
          <div className="relative z-10 overflow-hidden rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="About Team"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-[80px] opacity-15 pointer-events-none" />
        </div>

        <div ref={textRef} className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="text-[12px] font-black tracking-[4px] uppercase text-primary">Innovation Hub</p>
          </div>

          <AboutHeading headingRef={headingRef} />

          <p className="about-text mb-6 max-w-xl text-[15px] font-medium text-[#A09DB1] leading-[1.9]">
            ECLearnix Technology Solutions is the leading IT and technology division, established to deliver high-end digital services across global industries.
          </p>

          <p className="about-text mb-10 max-w-xl opacity-80 text-[14px] font-medium text-[#A09DB1] leading-[1.9]">
            We specialize in engineering modern digital ecosystems that empower businesses to thrive in the complex landscape of today’s technology-driven world.
          </p>

          <div className="list-container p-1 rounded-[3rem] bg-white/[0.03] border border-white/10 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              {[
                'Strategic Consulting',
                'Digital Transformation',
                'Software Engineering',
                'Quality Assurance'
              ].map((text, i) => (
                <div key={i} className="list-item flex items-center gap-6 p-7 rounded-[2.5rem] bg-white border-[3px] border-gray-50 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-primary/40 transition-all duration-500 group cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 transform group-hover:rotate-[360deg] shrink-0 border border-gray-100 shadow-sm">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div className="relative z-10 flex-1">
                    <p className="text-[17px] font-bold text-heading uppercase tracking-normal mb-2">{text}</p>
                    <div className="w-12 h-1 bg-primary group-hover:w-full transition-all duration-700 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

                  
          
          {/* Invisible ref for counter to avoid main text re-renders */}
          <div ref={counterRef} className="hidden" />
        </div>
      </div>

            {/* 2. COMPANY CULTURE SECTION (LIGHT) */}
        <div className="container mx-auto">
          <div className="text-center mb-24 animate-up">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">Our Values</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-heading">Why Work With Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureFeatures.map((item, i) => (
              <div key={i} className="animate-up group p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(95,45,238,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-heading group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-bodyText leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  

      <style>{`
        .highlight-text .word {
          background: linear-gradient(to right, var(--primary), var(--secondary), var(--primary));
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          animation: shine-about 4s linear infinite;
        }
        @keyframes shine-about {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
