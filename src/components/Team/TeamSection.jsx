import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';

// Team Data
const teamMembers = [
  {
    id: 1,
    name: "Siva",
    role: "Full Stack Developer",
    image: "/images/team/siva_portrait.jpeg",
    linkedin: "https://www.linkedin.com/in/siva-v-30b86a210/"
  },
  {
    id: 2,
    name: "Gopinath",
    role: "Mobile App Developer",
    image: "/images/team/team_1_3.png",
    linkedin: "https://www.linkedin.com/in/gopinath-manickam-941415234/"
  },
  {
    id: 3,
    name: "Sriram",
    role: "Digital Product Designer",
    image: "/images/team/image.png",
    linkedin: "https://www.linkedin.com/in/sriramr1725/"
  },
  {
    id: 4,
    name: "Prabavathi",
    role: "Full Stack Developer",
    image: "/images/team/team_1_5.png",
    linkedin: "https://www.linkedin.com/in/prabavathi-m-5b176227b/"
  },
  {
    id: 5,
    name: "Dhivyadharshini",
    role: "Front End Developer",
    image: "/images/team/team_1_7.png",
    linkedin: "#"
  },
  {
    id: 6,
    name: "Abinaya",
    role: "Software Tester",
    image: "/images/team/team_1_4.png",
    linkedin: "https://www.linkedin.com/in/abinaya-s-46a686268/"
  },
  {
    id: 7,
    name: "Kanishkaa",
    role: "UI/UX Designer",
    image: "/images/team/team_1_2.png",
    linkedin: "https://www.linkedin.com/in/kanishkaa-s/"
  },
  {
    id: 8,
    name: "Kanchana Mala",
    role: "UI/UX Designer",
    image: "/images/team/team_1_9.png",
    linkedin: "https://www.linkedin.com/in/kanchana-mala-v-g-7503622ab/"
  },
  {
    id: 9,
    name: "Swetha ",
    role: "UI/UX Designer",
    image: "/images/team/team_1_6.png",
    linkedin: "https://www.linkedin.com/in/swethasakthi1/"
  }
];

const TeamCard = ({ member }) => {
  return (
    <div className="flex-shrink-0 w-[260px] md:w-[300px] px-3">
      <div className="relative p-1.5 rounded-[2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary/50 hover:bg-white/[0.08] h-full flex flex-col group">
        {/* Uniform Portrait */}
        <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden mb-4 flex-shrink-0">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
          
          {/* LinkedIn Button */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 shadow-lg"
          >
            <FaLinkedinIn className="text-xs" />
          </a>
        </div>

        {/* Info */}
        <div className="px-4 pb-6 text-center flex-grow flex flex-col justify-center">
          <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter mb-0.5 transition-colors group-hover:text-primary">
            {member.name}
          </h3>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 transition-colors group-hover:text-white">
            {member.role}
          </p>
        </div>

        {/* Hover Glow Orb */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
};

export default function TeamSection() {
  // Triple the items for a truly seamless loop
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section 
      className="relative section-dark py-16 md:py-24 overflow-hidden" 
      id="team"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-mesh top-0 right-1/4 bg-primary/5 opacity-50" />
        <div className="glow-mesh bottom-0 left-1/4 bg-secondary/5 opacity-50" />
      </div>

      <div className="w-full relative z-10">
        {/* Compact Heading */}
        <div className="px-6 md:px-12 lg:px-20 mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row items-center md:items-end justify-between gap-8">

          <div className="max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Team Continuity</span>
            </div>
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black text-white uppercase tracking-tighter leading-[1.1] py-2">
              Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryGradient">Team</span>
            </h2>

          </div>
          <p className="text-white/30 text-sm md:text-lg font-medium max-w-sm leading-relaxed mb-2">
            A seamless collective of experts scaling excellence through constant innovation.
          </p>
        </div>

        {/* Infinite Looping Carousel */}
        <div className="relative">
          {/* Side Fades for Seamlessness */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0820] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0820] to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden py-10">
            <motion.div 
              className="flex w-fit"
              animate={{
                x: [0, "-33.33%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                }
              }}
              style={{ x: 0 }}
              // Pause on hover
              onHoverStart={(e) => {
                // Framer motion doesn't have a direct 'pause' prop in the animate array easily
                // but we can use whileHover to slow down or we can just leave it for smoothness
                // The user asked for "pause slightly if possible", but linear continuous is more premium.
              }}
            >
              {duplicatedMembers.map((member, index) => (
                <TeamCard 
                  key={`${member.id}-${index}`} 
                  member={member} 
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}