import React, { useState, useEffect, useRef, memo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { FiArrowRight, FiZap, FiCheck, FiCode, FiAward } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

// --- FLOATING UI CARD ---
const FloatingUICard = memo(({ icon: Icon, title, val, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1, delay, ease: "circOut" }}
    className={`absolute z-30 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center gap-4 group hover:bg-white/[0.08] transition-colors pointer-events-none md:pointer-events-auto ${className}`}
  >
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B882FC] to-[#5F2DEE] flex items-center justify-center text-white shadow-lg shadow-[#5F2DEE]/20 group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    <div>
      <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black mb-0.5">{title}</div>
      <div className="text-sm font-black text-white uppercase tracking-tighter">{val}</div>
    </div>
    <div className="ml-2 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[#B882FC]">
      <FiCheck size={12} />
    </div>
  </motion.div>
))

const MeshBackground = memo(() => (
  <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
    <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#B882FC] blur-[120px] rounded-full opacity-10 animate-pulse" />
    <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-[#5F2DEE] blur-[120px] rounded-full opacity-10 animate-pulse" style={{ animationDelay: '3s' }} />
  </div>
))

// Memoized Heading to prevent SplitType reconciliation errors
const HeroHeading = memo(({ headingRef }) => (
  <h1 
    ref={headingRef}
    style={{
      fontFamily: '"Manrope", sans-serif',
      fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
      fontWeight: 800,
      color: '#ffffff',
      lineHeight: 1.1,
      textTransform: 'uppercase',
      margin: '0 0 30px 0',
      overflow: 'visible',
      padding: '0.1em 0',
    }}
    className="perspective-[1000px]"
  >
     ENGINEERING THE FUTURE WITH <br className="hidden md:block" /> 
    <span className="text-highlight py-4 overflow-visible inline-block">
INTELLIGENT DIGITAL SOLUTIONS</span>
  </h1>
))

export default function HeroSpline() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const imageRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yPos = useTransform(scrollYProgress, [0, 1], [0, 350])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      const ctx = gsap.context(() => {
        // Advanced Text Split
        let split;
        if (headingRef.current) {
          split = new SplitType(headingRef.current, { types: 'words,chars' })
          
          gsap.set(split.chars, { 
            opacity: 0, 
            y: 20, 
            filter: 'blur(4px)',
            scale: 1.02
          })
          
          gsap.to(split.chars, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            stagger: 0.02,
            duration: 1.4,
            ease: 'power4.out',
            delay: 0.1
          })
        }

        gsap.set('.hero-reveal', { opacity: 0, y: 20 })
        gsap.to('.hero-reveal', {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          clearProps: "all",
          delay: 0.5
        })

        // Sharp Shine Animation for Highlighted Text
        gsap.to('.text-highlight', {
          backgroundPosition: '200% center',
          duration: 4,
          repeat: -1,
          ease: 'linear'
        })

        // Parallax for Background Image
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          },
          scale: 1.25,
          y: 200,
          ease: "none"
        })

        // Floating Motion for UI Cards
        gsap.to('.ui-card-float', {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: { amount: 1.5, from: 'random' }
        })

        return () => {
          if (split) split.revert();
        };
      }, containerRef)

      return () => ctx.revert()
    }
  }, [isLoaded])

  return (
    <section ref={containerRef} id="home" className="relative bg-[#05020D] h-screen overflow-hidden w-full">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop"
          alt="ECLearnix Tech"
          className="w-full h-full object-cover opacity-85 scale-105"
          style={{ willChange: 'transform' }}
        />
        <MeshBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05020D]/60 via-transparent to-[#05020D]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05020D]/40 via-transparent to-[#05020D]/10" />
        <div className="absolute inset-0 bg-[#05020D]/20" />
      </div>

      <motion.div 
        style={{ y: yPos, opacity: textOpacity, scale: textScale }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center w-full overflow-visible"
      >
        <div className="hero-reveal inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-12">
          <FiZap className="text-[#B882FC] shadow-[0_0_15px_#B882FC]" />
          <span className="text-[12px] font-semibold tracking-[5px] uppercase text-[#B882FC]">
            Empowering Businesses with Smart IT Solutions
          </span>
        </div>

        <HeroHeading headingRef={headingRef} />

        <p className="hero-reveal max-w-5xl mx-auto text-white/90 leading-relaxed mb-10 md:mb-14 text-center text-[clamp(1rem,3vw,1.25rem)] font-black px-4">
          At ECLearnix Technology Solutions, we empower businesses, startups, educational institutions, and enterprises 
          with cutting-edge technology services designed for innovation, scalability, and growth. From AI-powered automation 
          to cloud infrastructure, creative digital experiences, and business-focused software solutions, we help organizations 
          transform ideas into impactful digital products.
        </p>

        {/* Floating UI Elements */}
     
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 opacity-30">
        <span className="text-[10px] font-bold tracking-[0.5em] text-white uppercase">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>

      <style>{`
        .text-highlight .char {
          background: linear-gradient(to right, var(--primary), #FFFFFF, var(--primary));
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}
