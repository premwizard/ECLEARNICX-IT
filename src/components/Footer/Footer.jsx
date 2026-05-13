import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const MarqueeRow = ({ text, direction = "left", speed = 20 }) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap py-4 select-none group">
      <motion.div 
        animate={{ 
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0] 
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-nowrap w-max"
      >
        {/* We repeat the text twice for a seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-nowrap items-center shrink-0">
            {text.map((item, index) => (
              <span 
                key={index} 
                className={`text-4xl md:text-6xl font-black px-12 uppercase tracking-tighter transition-all duration-500 group-hover:text-primary shrink-0 inline-block ${index % 2 !== 0 && item === "•" ? 'text-primary opacity-50' : index % 2 !== 0 ? 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]' : 'text-white'}`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};


const Footer = () => {
  const marqueeText = ["LET'S BUILD", "•", "CREATE", "•", "INNOVATE", "•", "SCALE", "•", "ECLEARNIX IT", "•"];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] pt-12 pb-6 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Marquee Section */}
      <div className="mb-12 opacity-80 hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <MarqueeRow text={marqueeText} direction="left" speed={40} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 py-10 border-t border-white/5">
          {/* Left: Logo & Info */}
          <div className="max-w-[280px]">
            <div className="text-white font-bold text-xl flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">E</div>
              ECLEARNIX
            </div>
            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-medium">
              ELEVATING DIGITAL EXPERIENCES THROUGH INNOVATIVE TECHNOLOGY.
            </p>
          </div>

          {/* Center: Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Socials & CTA */}
          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              {[
                { Icon: FaLinkedinIn, link: '#' },
                { Icon: FaInstagram, link: '#' },
                { Icon: FaGithub, link: '#' }
              ].map(({ Icon, link }, i) => (
                <motion.a 
                  key={i}
                  href={link}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold tracking-[0.3em] text-gray-600 uppercase">
          <p>© {currentYear} ECLEARNIX. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Subtle Noise */}
      <div className="absolute inset-0 noise opacity-[0.01] pointer-events-none" />
    </footer>
  );
};

export default Footer;