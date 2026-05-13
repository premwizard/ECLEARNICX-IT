import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCpu,
  FiUsers,
  FiTrendingUp,
  FiLayers,
  FiShield,
  FiZap,
  FiClock,
  FiCheckCircle,
  FiMail,
  FiPhone,
  FiUser,
  FiLinkedin,
  FiFileText,
  FiAward,
  FiCoffee,
  FiGlobe,
  FiHeart
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    const ctx = gsap.context((self) => {
      const q = gsap.utils.selector(self.container);

      // Hero Animations
      gsap.from(q(".hero-title span"), {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out"
      });

      gsap.from(q(".hero-sub"), {
        opacity: 0,
        y: 20,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out"
      });

      gsap.from(q(".hero-cta"), {
        opacity: 0,
        y: 20,
        duration: 1.2,
        delay: 0.8,
        ease: "power3.out"
      });

      // Section Entrance Animations
      const sections = q('.career-section');
      sections.forEach(section => {
        gsap.from(gsap.utils.selector(section)('.animate-up'), {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        });
      });

      // Floating Ambient Glows
      gsap.to(q(".ambient-glow"), {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Geometric Parallax
      gsap.to(q(".parallax-shape"), {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);



  const positions = [
    { title: "Frontend Developer", dept: "Engineering", type: "Full-time", loc: "Coimbatore / Remote", desc: "Build responsive and interactive web applications using modern frontend frameworks and UI technologies." },
    { title: "Backend Developer", dept: "Engineering", type: "Full-time", loc: "Coimbatore / Remote", desc: "Develop scalable APIs, server-side applications, databases, and secure backend systems for digital platforms." },
    { title: "Full Stack Developer", dept: "Engineering", type: "Full-time", loc: "Coimbatore / Remote", desc: "Work across frontend and backend technologies to build complete, high-performance web applications." },
    { title: "UI/UX Designer", dept: "Design", type: "Full-time", loc: "Coimbatore / Hybrid", desc: "Design intuitive user experiences, modern interfaces, prototypes, and creative digital solutions for web and mobile platforms." },
    { title: "Mobile App Developer", dept: "Engineering", type: "Full-time", loc: "Coimbatore / Hybrid", desc: "Create high-performance Android, iOS, and cross-platform mobile applications with seamless user experiences." },
    { title: "AI & Automation Engineer", dept: "AI & Innovation", type: "Full-time", loc: "Remote / Hybrid", desc: "Develop AI-powered systems, automation workflows, intelligent chatbots, and smart digital solutions for businesses and institutions." },
    { title: "Video Editor", dept: "Creative Media", type: "Full-time", loc: "Coimbatore / Hybrid", desc: "Create engaging video content, motion graphics, promotional reels, and digital media assets for branding and marketing campaigns." },
    { title: "Digital Marketing Executive", dept: "Marketing", type: "Full-time", loc: "Coimbatore / Remote", desc: "Manage SEO, social media marketing, performance campaigns, content strategy, and digital growth initiatives to enhance brand visibility and engagement." },
  ];

  const hiringSteps = [
    { title: "Application Submission", desc: "Submit your resume, portfolio, and relevant project details to help us understand your skills and experience." },
    { title: "Initial Screening", desc: "A quick interaction with our team to discuss your background, interests, career goals, and role expectations." },
    { title: "Skill Assessment", desc: "Demonstrate your technical, creative, or problem-solving abilities through practical tasks or assignments related to the role." },
    { title: "Technical Interview", desc: "A detailed discussion with our technical and creative team to evaluate your expertise, approach, and project experience." },
    { title: "Final Discussion", desc: "Final interaction with the leadership team to assess collaboration, communication, and organizational fit." },
    { title: "Onboarding", desc: "Welcome to ECLearnix Technology Solutions — we help you get started with the right tools, guidance, and support for success." },
  ];



  return (
    <div ref={pageRef} className="bg-darkBg relative w-full overflow-x-hidden">

      {/* GLOBAL BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Refined Ambient Glows */}
        <div className="ambient-glow absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/5 blur-[150px] rounded-full" />
        <div className="ambient-glow absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/5 blur-[150px] rounded-full" style={{ animationDelay: '-5s' }} />

        {/* Floating Geometric Shapes (Parallax) */}
        <div className="parallax-shape absolute top-1/4 right-[10%] w-32 h-32 border border-white/5 rounded-full rotate-45" />
        <div className="parallax-shape absolute top-2/3 left-[5%] w-64 h-64 border border-primary/10 rounded-[3rem] -rotate-12" />
        <div className="parallax-shape absolute bottom-1/4 right-[15%] w-48 h-48 border border-secondary/10 rounded-full" />
      </div>

      {/* 1. HERO SECTION (DARK) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-40 pb-20 px-6 overflow-hidden w-full section-dark">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="public/images/image copy.png"
            alt="Careers Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-darkBg/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/80 via-transparent to-darkBg/50" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70">JOIN OUR TEAM</span>
          </div>

          <h1 className="hero-title text-6xl md:text-[100px] lg:text-[120px] font-black uppercase tracking-tighter leading-[1.1] mb-8 py-10 overflow-visible text-white">
            <span className="inline-block">Join the</span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryGradient ">Innovation</span>
          </h1>

          <p className="hero-sub text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            We are looking for passionate, creative, and driven individuals who are ready to build impactful digital solutions, explore emerging technologies, and grow together with ECLearnix Technology Solutions.
          </p>

          <div className="hero-cta flex flex-wrap justify-center gap-6">
            <button
              onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(61,0,184,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Open Positions <FiArrowUpRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white transition-colors duration-500 z-0" />
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                View Open Positions <FiArrowUpRight size={18} />
              </span>
            </button>

            <button
              onClick={() => document.getElementById('apply').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>

      </section>



      <section id="openings" className="career-section py-32 px-6 section-dark">
        <div className="container mx-auto">
          <div className="text-center mb-24 animate-up">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">CURRENT OPPORTUNITIES</p>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-white">Open Positions</h2>
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
              Join ECLearnix Technology Solutions and work on innovative digital products, AI-powered platforms, scalable applications, and creative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((job, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="animate-up group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                      {job.dept}
                    </span>
                    <FiBriefcase className="text-white/20 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <FiClock className="text-primary/60" /> {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      <FiGlobe className="text-primary/60" /> {job.loc}
                    </div>
                  </div>
                  
                  <p className="text-white/50 text-sm leading-relaxed mb-10 group-hover:text-white/70 transition-colors">
                    {job.desc}
                  </p>
                </div>

                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all duration-500 flex items-center justify-center gap-3">
                  View Details <FiArrowUpRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="career-section py-32 px-6 relative overflow-hidden section-light">
        <div className="container mx-auto">
          <div className="text-center mb-24 animate-up">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">How We Hire</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-heading">Our Hiring Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Animated Connection Line */}
            <div className="absolute top-0 left-8 md:left-1/2 w-[2px] h-full bg-gray-100 hidden md:block">
              <motion.div 
                className="w-full bg-primary origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            <div className="grid gap-20">
              {hiringSteps.map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Card */}
                  <div className="flex-1 w-full animate-up">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`p-8 md:p-10 rounded-[2.5rem] bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <span className="text-8xl font-black text-primary/5 absolute top-4 right-8 pointer-events-none group-hover:text-primary/10 transition-colors">
                        0{i + 1}
                      </span>
                      <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-heading relative z-10">{step.title}</h4>
                      <p className="text-bodyText font-medium leading-relaxed relative z-10">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Icon/Number Marker */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 rounded-2xl bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-xl shadow-[0_0_30px_rgba(61,0,184,0.2)]"
                    >
                      {i + 1}
                    </motion.div>
                  </div>

                  {/* Empty Spacer for desktop */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPLICATION FORM SECTION (DARK) */}
      <section id="apply" className="career-section py-32 px-6 section-dark">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-white/[0.05] border border-white/10 p-8 md:p-20 backdrop-blur-3xl relative overflow-hidden">

            <div className="relative z-10 grid lg:grid-cols-2 gap-20">
              <div className="animate-up">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white">Apply for <br /><span className="text-primary ">a role</span></h2>
                <p className="text-white/80 text-lg font-medium mb-12">
                  Don't see a perfect match? Send us your details anyway. We're always on the lookout for exceptional talent.
                </p>

                <div className="grid gap-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Email our HR</p>
                      <p className="text-white font-bold">hreclearnix@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <FiPhone />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Call for inquiries</p>
                      <p className="text-white font-bold">+91 63790 16441</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="animate-up grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-3 block ml-2">Full Name</label>
                    <div className="relative">
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all duration-300" />
                      <FiUser className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-3 block ml-2">Email Address</label>
                    <div className="relative">
                      <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all duration-300" />
                      <FiMail className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-3 block ml-2">Position Applying For</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all duration-300">
                        <option className="bg-darkBg">Select a position</option>
                        {positions.map(p => <option key={p.title} className="bg-darkBg">{p.title}</option>)}
                        <option className="bg-darkBg">Other / General Application</option>
                      </select>
                      <FiBriefcase className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-3 block ml-2">Select Role Type</label>
                    <div className="relative">
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all duration-300">
                        <option className="bg-darkBg">Select Role Type</option>
                        <option className="bg-darkBg">Intern</option>
                        <option className="bg-darkBg">Trainee</option>
                        <option className="bg-darkBg">Employee</option>
                        <option className="bg-darkBg">Freelancer</option>
                      </select>
                      <FiLayers className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-3 block ml-2">LinkedIn Profile</label>
                    <div className="relative">
                      <input type="text" placeholder="linkedin.com/in/username" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all duration-300" />
                      <FiLinkedin className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-3 block ml-2">Resume Upload</label>
                    <div className="relative">
                      <div className="w-full bg-white/5 border border-white/10 border-dashed rounded-2xl px-6 py-4 text-white/40 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all">
                        <span>Choose PDF file...</span>
                        <FiFileText />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-3 block ml-2">Message (Optional)</label>
                  <textarea rows="4" placeholder="Tell us about yourself..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_40px_rgba(61,0,184,0.3)] hover:shadow-[0_25px_50px_rgba(61,0,184,0.5)] hover:-translate-y-1 transition-all duration-500">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION (LIGHT) */}
      <section className="career-section py-32 px-6 relative overflow-hidden section-light">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-up max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-tight mb-8 text-heading py-6 overflow-visible">Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryGradient ">Future</span> With Us</h2>
            <p className="text-bodyText text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
              Join ECLearnix Technology Solutions and become part of a team shaping innovative digital experiences.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
