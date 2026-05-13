import React, { useState, useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    content: "From website development to automation solutions, the team delivered high-quality work with excellent communication and timely execution. Highly recommended for IT services.",
    name: "Dr. C. Somu",
    role: "Manager",
    gradient: "from-[#3D00B8] to-[#A8DAFF]"
  },
  {
    id: 2,
    content: "ECLearnix Technology Solutions delivered an exceptional platform for our business. Their team understood our requirements clearly and provided a modern, scalable, and user-friendly solution on time.",
    name: "Dhanuja",
    role: "Digital Marketing",
    gradient: "from-[#00F2FE] to-[#4FACFE]"
  },
  {
    id: 3,
    content: "The UI/UX design quality and development support were outstanding. The team was professional, responsive, and highly committed throughout the project.",
    name: "Sindhuja",
    role: "Assistant Manager",
    gradient: "from-[#FF5858] to-[#F09819]"
  },
  {
    id: 4,
    content: "Working with ECLearnix Technology Solutions was a smooth experience. Their technical expertise and problem-solving approach helped us streamline our operations efficiently.",
    name: "Vanisree",
    role: "UI/UX Designer",
    gradient: "from-[#43E97B] to-[#38F9D7]"
  },
  {
    id: 5,
    content: "We approached them for a complete digital transformation solution, and the results exceeded our expectations. Their innovation and support were truly impressive.",
    name: "Manimegalai",
    role: "Process Executive",
    gradient: "from-[#FA709A] to-[#FEE140]"
  }
];

const TestimonialCard = memo(({ testimonial, isActive, isNext, isPrev, isHidden }) => {
  return (
    <div
      className={`testimonial-card absolute w-full max-w-2xl transform transition-all duration-1000 ease-[cubic-bezier(0.23, 1, 0.32, 1)] 
        ${isActive ? 'z-30 opacity-100 scale-100' : ''}
        ${isNext ? 'z-20 opacity-40 scale-90 translate-x-[15%] md:translate-x-[40%] translate-z-[-100px] rotate-y-[-10deg] blur-sm' : ''}
        ${isPrev ? 'z-20 opacity-40 scale-90 -translate-x-[15%] md:-translate-x-[40%] translate-z-[-100px] rotate-y-[10deg] blur-sm' : ''}
        ${isHidden ? 'z-0 opacity-0 scale-75' : ''}
      `}
      style={{
        perspective: '1000px',
        visibility: isHidden ? 'hidden' : 'visible'
      }}
    >
      <div className={`relative p-8 md:p-14 rounded-[3rem] bg-white border border-black/5 shadow-xl overflow-hidden group`}>
        {/* Abstract Background Glow */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-full blur-[80px] group-hover:opacity-10 transition-opacity duration-1000`} />

        {/* Quote Icon */}
        <div className="mb-10 text-primary/20 text-5xl">
          <FaQuoteLeft />
        </div>

        {/* Content */}
        <p className="text-xl md:text-3xl text-heading font-medium leading-relaxed mb-12 tracking-tight ">
          "{testimonial.content}"
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between gap-6 border-t border-black/5 pt-10">
          <div className="flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary/20`}>
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-xl font-black text-heading uppercase tracking-tighter mb-1">
                {testimonial.name}
              </h4>
              <p className="text-primary font-black uppercase tracking-[0.3em] text-[9px]">
                {testimonial.role}
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/5">
            <FiCheck className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Verified Review</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header > *", {
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out"
      });
    });

    autoPlayRef.current = setInterval(nextSlide, 6000);

    return () => {
      ctx.revert();
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handleManual = (action) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    action();
    autoPlayRef.current = setInterval(nextSlide, 6000);
  };

  return (
    <section
      ref={containerRef}
      className="section-light py-20 md:py-24 relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[180px]" />
      </div>

      <div className="w-full px-6 md:px-20 relative z-10">
        {/* Header */}
        <div className="testimonials-header text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <p className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6">Client Trust</p>
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black text-heading uppercase tracking-tighter leading-[1.1] mb-10">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryGradient ">Clients Say</span>
          </h2>
          <div className="w-24 h-[1px] bg-black/10 mx-auto" />
        </div>



        {/* 3D STACKED CAROUSEL */}
        <div className="relative h-[600px] md:h-[550px] flex items-center justify-center px-4 md:px-20 lg:px-40">
          {/* Navigation Buttons - Repositioned to sides */}
          <button
            onClick={() => handleManual(prevSlide)}
            className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full border border-black/10 bg-white/40 backdrop-blur-md flex items-center justify-center text-heading text-2xl md:text-3xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 hover:scale-110 active:scale-95 z-[60] shadow-lg hover:shadow-primary/40"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={() => handleManual(nextSlide)}
            className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full border border-black/10 bg-white/40 backdrop-blur-md flex items-center justify-center text-heading text-2xl md:text-3xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 hover:scale-110 active:scale-95 z-[60] shadow-lg hover:shadow-primary/40"
          >
            <FiChevronRight />
          </button>

          {testimonials.map((testimonial, i) => {
            const isActive = i === activeIndex;
            const isNext = i === (activeIndex + 1) % testimonials.length;
            const isPrev = i === (activeIndex - 1 + testimonials.length) % testimonials.length;
            const isHidden = !isActive && !isNext && !isPrev;

            return (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={isActive}
                isNext={isNext}
                isPrev={isPrev}
                isHidden={isHidden}
              />
            );
          })}

          {/* Pagination Indicators - Now only dots at the bottom */}
          <div className="absolute bottom-[-40px] flex gap-3 z-50">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-700 ${i === activeIndex ? 'w-16 bg-primary shadow-[0_0_15px_#3D00B8]' : 'w-4 bg-black/10'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}