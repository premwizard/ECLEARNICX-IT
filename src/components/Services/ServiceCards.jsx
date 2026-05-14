import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../../data/servicesData';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCards() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      gsap.from(".service-panel", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "all"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-light py-20 md:py-24 overflow-hidden" id="services">
      <div className="w-full px-6 md:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-12 md:mb-16">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-primary"></div>
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">What We Do</p>
          </div>
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase tracking-tighter leading-[1.1] py-4 text-heading">
            End-to-End <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryGradient ">Digital Solutions</span>
          </h2>
        </div>


        {/* INTERACTIVE PANELS */}
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[420px] gap-4">
          {servicesData.map((service, i) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className={`service-panel relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] overflow-hidden rounded-[2.5rem] cursor-pointer group 
                ${hoveredIndex === i ? 'lg:flex-[3]' : 'lg:flex-1'}
                ${hoveredIndex !== null && hoveredIndex !== i ? 'lg:opacity-40 lg:blur-sm' : 'opacity-100'}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="panel-bg w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/80 via-transparent to-transparent" />
              </div>

              {/* Panel Content */}
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10">
                {/* Number Indicator */}
                <div className="absolute top-10 left-10 text-white/20 font-black text-4xl tracking-tighter group-hover:text-primary transition-colors">
                  0{i + 1}
                </div>

                <div className="max-w-md">
                  <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform origin-left duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black !text-white uppercase tracking-tighter mb-3 leading-none group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === i ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 lg:hidden'}`}>
                    <p className="!text-white/80 font-medium mb-5 leading-relaxed text-sm md:text-base">
                      {service.shortDesc}
                    </p>
                    <div className="inline-flex items-center gap-4 text-primary font-black tracking-widest text-[9px] uppercase group-hover:gap-6 transition-all">
                      Learn More <FiArrowRight />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Borders */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative Blur Layers */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}