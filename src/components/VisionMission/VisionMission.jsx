import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const CharReveal = ({ text, delay = 0, color = "white", hoverColor = "primary" }) => {
  const characters = text.split("");
  
  return (
    <motion.h2 
      className={`text-[clamp(2.5rem,12vw,5rem)] md:text-[clamp(5rem,15vw,10rem)] font-bold text-${color} mb-2 md:mb-3 tracking-tighter transition-colors duration-500 group-hover:text-${hoverColor} relative leading-[0.9]`}
    >

      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 80, opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.8,
            delay: delay + index * 0.05,
            ease: [0.215, 0.61, 0.355, 1]
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className={`absolute -bottom-2 left-0 h-1 bg-${hoverColor} w-full origin-left opacity-0 group-hover:opacity-100 hidden md:block ${
          hoverColor === 'primary' 
            ? 'shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]' 
            : 'shadow-[0_0_20px_rgba(var(--secondary-rgb),0.8)]'
        }`}
      />

    </motion.h2>
  );
};

const VisionMission = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const missionY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const visionY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[40vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#0A0820] py-12 md:py-16 px-6 md:px-12 lg:px-24"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Grain/Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay noise animate-grain" />
        
        {/* Moving Radial Gradients */}
        <motion.div 
          style={{ rotate: bgRotate }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] opacity-40" 
        />
        <motion.div 
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[150px] opacity-40" 
        />

        {/* Floating Blurred Orbs */}
        <motion.div 
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0"
      >
        {/* Mission Side */}
        <motion.div 
          style={{ y: missionY }}
          className="flex-1 text-center md:text-left md:pr-16 group cursor-default"
        >
          <CharReveal text="MISSION" hoverColor="primary" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0 group-hover:text-gray-300 transition-colors duration-500"
          >
            To empower businesses through innovative technology solutions that drive sustainable growth and digital excellence in an ever-evolving world.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 1, duration: 1, ease: "circOut" }}
            className="h-[2px] bg-primary mt-4 hidden md:block shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
          />
        </motion.div>

        {/* Advanced Divider */}
        <div className="hidden md:flex items-center justify-center h-80 relative mx-8 px-4">
          <motion.div 
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent relative"
          >
            {/* Glowing Pulse */}
            <motion.div 
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleY: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/20 blur-[2px]"
            />
            
            {/* Light Sweep */}
            <motion.div 
              animate={{
                top: ["-10%", "110%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 1
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-transparent via-white to-transparent blur-sm shadow-[0_0_20px_#fff]"
            />
          </motion.div>
        </div>

        {/* Vision Side */}
        <motion.div 
          style={{ y: visionY }}
          className="flex-1 text-center md:text-right md:pl-16 group cursor-default"
        >
          <CharReveal text="VISION" hoverColor="secondary" delay={0.2} />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md mx-auto md:ml-auto group-hover:text-gray-300 transition-colors duration-500"
          >
            To be the global catalyst for digital transformation, setting the standard for excellence and innovation in the technology landscape.
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
            className="h-[2px] bg-secondary mt-4 ml-auto hidden md:block shadow-[0_0_10px_rgba(var(--secondary-rgb),0.5)]"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic Accent Elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [0, -100 - Math.random() * 200],
              x: [0, (Math.random() - 0.5) * 50]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${90 + Math.random() * 10}%`,
            }}
            className={`absolute w-[1px] h-10 bg-gradient-to-t from-transparent ${i % 2 === 0 ? 'via-primary/40' : 'via-secondary/40'} to-transparent`}
          />
        ))}
      </div>

      {/* Decorative Orbs Reacting to Scroll */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
        className="absolute top-20 left-10 w-3 h-3 bg-primary/30 rounded-full blur-md"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [200, -50]) }}
        className="absolute bottom-20 right-10 w-4 h-4 bg-secondary/30 rounded-full blur-md"
      />

      <style>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        .animate-grain {
          animation: grain 8s steps(10) infinite;
        }
      `}</style>
    </section>
  );
};

export default VisionMission;
