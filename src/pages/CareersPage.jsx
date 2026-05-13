import React, { useEffect, useRef } from 'react';
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
    { title: "Frontend Developer", dept: "Engineering", level: "Senior", type: "Full-time", loc: "Remote / New York", desc: "Crafting immersive user experiences with React, Next.js, and GSAP." },
    { title: "Backend Developer", dept: "Engineering", level: "Mid-Senior", type: "Full-time", loc: "London", desc: "Architecting scalable systems and robust APIs using Node.js and Python." },
    { title: "Full Stack Developer", dept: "Engineering", level: "Senior", type: "Full-time", loc: "Singapore", desc: "Bridging the gap between design and technology across the entire stack." },
    { title: "UI/UX Designer", dept: "Design", level: "Mid-Senior", type: "Full-time", loc: "Remote", desc: "Creating intuitive and visually stunning interfaces for global brands." },
    { title: "Mobile App Developer", dept: "Engineering", level: "Mid", type: "Full-time", loc: "Berlin", desc: "Building high-performance native and cross-platform mobile applications." },
    { title: "AI/ML Engineer", dept: "Research", level: "Senior", type: "Full-time", loc: "San Francisco", desc: "Implementing cutting-edge machine learning models for smart solutions." },
  ];

  const hiringSteps = [
    { title: "Application Submission", desc: "Send us your resume and portfolio. Let us see your best work." },
    { title: "Initial Screening", desc: "A brief chat with our talent team to discuss your goals and values." },
    { title: "Technical Assessment", desc: "Showcase your skills through a practical challenge or live coding." },
    { title: "Interview Round", desc: "Deep dive into your experience with our technical and design leads." },
    { title: "Final Selection", desc: "Meeting the founders and final culture-fit alignment." },
    { title: "Onboarding", desc: "Welcome to the team! We'll get you set up for success from day one." },
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
            src="/assets/careers/hero-bg.png"
            alt="Careers Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-darkBg/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/80 via-transparent to-darkBg/50" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70">Work With Us</span>
          </div>

          <h1 className="hero-title text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[1.1] mb-8 py-10 overflow-visible text-white">
            <span className="inline-block">Join</span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Our Team</span>
          </h1>

          <p className="hero-sub text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            We are always looking for passionate and talented individuals who are ready to innovate, learn, and grow with us. Become part of a technology-driven environment where creativity meets opportunity.
          </p>

          <div className="hero-cta flex flex-wrap justify-center gap-6">
            <button
              onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(95,45,238,0.4)]"
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>



      {/* 3. OPEN POSITIONS SECTION (DARK) */}
      <section id="openings" className="career-section py-32 px-6 section-dark">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-up">
            <div className="max-w-2xl">
              <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">Current Opportunities</p>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-white">Open Positions</h2>
              <p className="text-white/80 text-lg font-medium">Be part of something bigger. Join a team that's building the future of technology solutions.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest border border-primary/20">All Departments</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-4">
            {positions.map((job, i) => (
              <div key={i} className="animate-up group relative p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">{job.dept}</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-[10px] font-black uppercase tracking-widest">{job.type}</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-[10px] font-black uppercase tracking-widest">{job.loc}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-white/80 max-w-xl text-sm font-medium">{job.desc}</p>
                </div>
                <div>
                  <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-500">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIRING PROCESS SECTION (LIGHT) */}
      <section id="process" className="career-section py-32 px-6 relative overflow-hidden section-light">
        <div className="container mx-auto">
          <div className="text-center mb-24 animate-up">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4">How We Hire</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-heading">Our Hiring Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-0 left-8 md:left-1/2 w-[1px] h-full bg-gradient-to-b from-primary via-secondary to-transparent opacity-20 hidden md:block" />

            <div className="grid gap-12">
              {hiringSteps.map((step, i) => (
                <div key={i} className={`animate-up flex flex-col md:flex-row items-center gap-8 md:gap-20 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:text-left text-center">
                    <div className={`p-8 md:p-12 rounded-[2.5rem] bg-white border border-black/5 shadow-xl relative transition-all duration-500 hover:bg-gray-50 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-7xl font-black text-black/5 absolute top-4 right-8 pointer-events-none">0{i + 1}</span>
                      <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-heading">{step.title}</h4>
                      <p className="text-bodyText font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-primary flex items-center justify-center text-primary font-black text-xl shadow-[0_0_30px_rgba(95,45,238,0.2)]">
                      {i + 1}
                    </div>
                  </div>

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
                      <p className="text-white font-bold">careers@eclearnix.io</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <FiPhone />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-1">Call for inquiries</p>
                      <p className="text-white font-bold">+91 1234567889</p>
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

                <button type="submit" className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_40px_rgba(95,45,238,0.3)] hover:shadow-[0_25px_50px_rgba(95,45,238,0.5)] hover:-translate-y-1 transition-all duration-500">
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
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-tight mb-8 text-heading py-6 overflow-visible">Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Future</span> With Us</h2>
            <p className="text-bodyText text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
              Join ECLearnix Technology Solutions and become part of a team shaping innovative digital experiences.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
