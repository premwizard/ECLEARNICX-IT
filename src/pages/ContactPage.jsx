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

      <div className="container mx-auto px-6 lg:px-20 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* LEFT COLUMN: Info & Branding */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-[1px] bg-primary"></div>
                <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-black">Contact Us</span>
              </motion.div>
              
              <h1 className="contact-hero-text text-white text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
                Let’s Build the<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondaryGradient">Future Together</span>
              </h1>
              
              <p className="contact-hero-text text-white/40 text-sm md:text-base max-w-md leading-relaxed font-medium">
                Partner with ECLearnix to transform your ideas into powerful digital products. 
                Get in touch with us today.
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-6 pt-4">
              {[
                { icon: <FaEnvelope />, label: "Email", val: "info@eclearnix.com" },
                { icon: <FaPhone />, label: "Phone", val: "+91 96775 22592" },
              ].map((item, i) => (
                <div key={i} className="contact-info-card flex items-center gap-5 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary transition-all duration-500 group-hover/item:bg-primary group-hover/item:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.4em] text-primary font-black mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {[<FaLinkedin />, <FaTwitter />, <FaInstagram />, <FaGithub />].map((icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 hover:bg-primary/20 hover:text-primary transition-all duration-500">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-7 contact-form-section">
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-primary/20 backdrop-blur-3xl text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mx-auto mb-6">
                    <FaCheck />
                  </div>
                  <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-4">Success!</h2>
                  <p className="text-white/40 mb-10">We've received your message and will respond shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="px-10 py-4 bg-primary text-white rounded-2xl text-xs uppercase tracking-widest font-black">Send Another</button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden group/form"
                >
                  {/* Internal Ambient Glows */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover/form:bg-primary/20 transition-colors duration-700" />
                  
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="relative z-10 space-y-5"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="grid md:grid-cols-2 gap-5">
                      <FormInput id="name" label="Full Name" placeholder="John Doe" required />
                      <FormInput id="email" label="Email" type="email" placeholder="john@company.com" required />
                    </motion.div>
                    
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="grid md:grid-cols-2 gap-5">
                      <FormInput id="phone" label="Phone" placeholder="+91 96775 22592" optional />
                      <FormInput id="company" label="Company" placeholder="Business Name" optional />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-3 group/select">
                        <label htmlFor="inquiry_type" className="text-[10px] uppercase tracking-[0.4em] text-primary font-black ml-4 opacity-70 transition-opacity group-focus-within/select:opacity-100">Inquiry Type</label>
                        <select 
                          id="inquiry_type"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer hover:bg-white/[0.08]"
                          defaultValue="General Inquiry"
                        >
                          <option className="bg-[#050505]">General Inquiry</option>
                          <option className="bg-[#050505]">Project Discussion</option>
                          <option className="bg-[#050505]">Technical Support</option>
                          <option className="bg-[#050505]">Career Opportunity</option>
                        </select>
                      </div>
                      <FormInput id="subject" label="Subject" placeholder="Brief overview" required />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-3 group/textarea">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-[0.4em] text-primary font-black ml-4 opacity-70 transition-opacity group-focus-within/textarea:opacity-100">Message</label>
                      <textarea 
                        id="message"
                        rows="3"
                        placeholder="How can we help?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-all resize-none hover:bg-white/[0.08]"
                        required
                      ></textarea>
                    </motion.div>

                    <motion.button 
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-[0.4em] text-xs transition-all shadow-xl shadow-primary/20 relative overflow-hidden"
                    >
                      <span className="relative z-10">{formStatus === 'sending' ? 'Sending...' : 'Transmit Message'}</span>
                      <motion.div 
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.button>
                  </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component for Animated Inputs
const FormInput = ({ label, placeholder, type = "text", required = false, optional = false, id, name }) => (
  <div className="space-y-4 relative group/input">
    <div className="flex justify-between items-end px-4">
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.4em] text-[#3D00B8] font-black opacity-70 transition-opacity group-focus-within/input:opacity-100">{label}</label>
      {optional && <span className="text-[8px] uppercase tracking-widest text-white/20 font-bold">Optional</span>}
    </div>
    <div className="relative">
      <input 
        id={id}
        name={name || id}
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
