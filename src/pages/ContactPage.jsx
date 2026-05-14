import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaCheck } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const containerRef = useRef(null);
  const [formStatus, setFormStatus] = React.useState('idle'); // idle, sending, success
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: 'General Inquiry',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.contact-hero-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Form Section Entrance
      gsap.from('.contact-form-section', {
        y: 40,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Info Card Entrance
      gsap.from('.contact-info-card', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.8,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  return (
    <div ref={containerRef} className="bg-[#050505] min-h-screen pt-32 pb-20 overflow-hidden relative">
      {/* Background Cinematic Effects - Obsidian & Purple Atmosphere */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#3D00B8]/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[#6B35E8]/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.06] pointer-events-none" />
      
      {/* Interactive Cursor Glow (CSS only approximation for performance) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] bg-[#3D00B8]/[0.03] rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ top: '20%', left: '10%' }} />
        <div className="absolute w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]" style={{ bottom: '10%', right: '15%' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#3D00B8] to-transparent"></div>
            <span className="text-[#3D00B8] uppercase tracking-[0.6em] text-[10px] font-black">Contact</span>
          </motion.div>
          
          <h1 className="contact-hero-text text-white text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 py-2 overflow-visible">
            Let’s Build the<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D00B8] via-[#6B35E8] to-[#3D00B8] inline-block py-2 overflow-visible">Future Together</span>
          </h1>
          
          <p className="contact-hero-text text-white/40 text-lg md:text-2xl max-w-2xl leading-relaxed font-light tracking-wide">
            Looking for reliable IT solutions for your business?
Partner with ECLearnix Technology Solutions to transform your ideas into powerful digital products and scalable business solutions.
Get in touch with us today and start your digital transformation journey.

          </p>
        </div>

        {/* The top row was removed as requested to bring info closer to the form */}


        {/* Centered Form Section */}
        <div className="max-w-4xl mx-auto contact-form-section">
          <AnimatePresence mode="wait">
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 rounded-[3.5rem] bg-white/[0.01] border border-[#3D00B8]/20 backdrop-blur-3xl text-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#3D00B8]/10 flex items-center justify-center text-[#3D00B8] text-4xl mb-8 animate-bounce">
                  <FaCheck />
                </div>
                <h2 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">Message Transmitted</h2>
                <p className="text-white/40 max-w-sm mb-12">Thank you for initiating contact. Our team will review your inquiry and respond within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-white text-xs uppercase tracking-[0.3em] font-black hover:bg-[#3D00B8] hover:text-white transition-all duration-500"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <div className="p-8 md:p-16 rounded-[3.5rem] bg-white/[0.01] border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
                {/* Internal Cinematic Glows */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#3D00B8]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#3D00B8]/15 transition-colors duration-1000" />
                
                <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
                  <div className="grid md:grid-cols-2 gap-10">
                    <FormInput label="Full Name" placeholder="John Doe" required />
                    <FormInput label="Email Address" placeholder="john@company.com" type="email" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <FormInput label="Phone Number" placeholder="+1 (555) 000-0000" optional />
                    <FormInput label="Company / Org" placeholder="Your Business Name" optional />
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-[#3D00B8] font-black ml-4 opacity-70">Inquiry Type</label>
                      <div className="relative group/select">
                        <select 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-[#3D00B8]/50 focus:bg-[#3D00B8]/5 transition-all duration-500 appearance-none cursor-pointer"
                          defaultValue="General Inquiry"
                        >
                          <option className="bg-[#050505]">General Inquiry</option>
                          <option className="bg-[#050505]">Project Discussion</option>
                          <option className="bg-[#050505]">Technical Support</option>
                          <option className="bg-[#050505]">Partnership</option>
                          <option className="bg-[#050505]">Career Opportunity</option>
                          <option className="bg-[#050505]">Consultation</option>
                          <option className="bg-[#050505]">Other</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-[#3D00B8] transition-transform group-hover/select:translate-y-[-40%]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                    </div>
                    <FormInput label="Subject" placeholder="Brief overview of inquiry" required />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-[#3D00B8] font-black ml-4 opacity-70">Message</label>
                    <textarea 
                      rows="6"
                      required
                      placeholder="Provide details about your inquiry..."
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-[#3D00B8]/50 focus:bg-[#3D00B8]/5 transition-all duration-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full group relative py-8 bg-[#3D00B8] text-white rounded-[2rem] overflow-hidden shadow-2xl shadow-[#3D00B8]/20 transition-all duration-700 hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-wait"
                    >
                      <span className="relative z-10 font-black uppercase tracking-[0.5em] text-xs">
                        {formStatus === 'sending' ? 'Transmitting...' : 'Send Inquiry'}
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 opacity-30 transition-transform duration-700" />
                      
                      {/* Magnetic Glow Effect */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </AnimatePresence>
          
          {/* Quick Contact & Socials Hub - Combined and Centered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex flex-wrap items-center justify-between gap-10 overflow-hidden relative group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#3D00B8]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3D00B8]/10 transition-colors duration-700" />
            
            <div className="w-full relative z-10 flex flex-col gap-10">
              {/* Top Row: Direct Contact & Socials */}
              <div className="flex flex-wrap items-center justify-between gap-8 pb-8 border-b border-white/5">
                <div className="flex flex-wrap gap-8 md:gap-12">
                  {[
                    { icon: <FaEnvelope />, label: "Email", val: "info@eclearnix.com" },
                    { icon: <FaPhone />, label: "Phone", val: "+91 96775 22592" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-[#3D00B8]/10 flex items-center justify-center text-[#3D00B8] text-sm group-hover/item:bg-[#3D00B8] group-hover/item:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#3D00B8] text-[8px] uppercase tracking-[0.3em] font-black opacity-50">{item.label}</span>
                        <span className="text-white text-xs font-bold tracking-tight">{item.val}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Hub */}
                <div className="flex items-center gap-3">
                  {[<FaLinkedin />, <FaTwitter />, <FaInstagram />, <FaGithub />].map((icon, i) => (
                    <button key={i} className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/30 border border-white/5 hover:bg-[#3D00B8]/10 hover:text-[#3D00B8] hover:border-[#3D00B8]/40 transition-all duration-500 hover:scale-110">
                      <span className="text-sm">{icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Office Locations */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {[
                  { 
                    type: "Main Office", 
                    address: "ECLearnix EdTech Private Limited, G Floor, Forge Factory, KCT Tech Park, Chinnavedampatti, Coimbatore, TN 641035" 
                  },
                  { 
                    type: "Branch Office", 
                    address: "ECLearnix EdTech Private Limited, 3rd Floor, Sri Radha Towers, Saravanampatti, Coimbatore, TN 641035" 
                  }
                ].map((office, i) => (
                  <div key={i} className="flex gap-5 group/office">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#3D00B8] group-hover/office:bg-[#3D00B8]/10 transition-colors duration-500">
                      <FaMapMarkerAlt className="text-xs" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#3D00B8] text-[9px] uppercase tracking-[0.4em] font-black opacity-60 group-hover/office:opacity-100 transition-opacity">{office.type}</span>
                      <p className="text-white/50 text-[11px] leading-relaxed font-medium group-hover:text-white/80 transition-colors">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

// Sub-component for Animated Inputs
const FormInput = ({ label, placeholder, type = "text", required = false, optional = false }) => (
  <div className="space-y-4 relative group/input">
    <div className="flex justify-between items-end px-4">
      <label className="text-[10px] uppercase tracking-[0.4em] text-[#3D00B8] font-black opacity-70 transition-opacity group-focus-within/input:opacity-100">{label}</label>
      {optional && <span className="text-[8px] uppercase tracking-widest text-white/20 font-bold">Optional</span>}
    </div>
    <div className="relative">
      <input 
        type={type} 
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-white/10 focus:outline-none focus:border-[#3D00B8]/50 focus:bg-[#3D00B8]/5 transition-all duration-500 peer"
      />
      {/* Premium Animated Underline */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#3D00B8] to-transparent transition-all duration-700 peer-focus:w-full" />
      
      {/* Focus Glow Background */}
      <div className="absolute inset-0 bg-[#3D00B8]/[0.02] rounded-2xl opacity-0 peer-focus:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </div>
  </div>
);

export default ContactPage;
