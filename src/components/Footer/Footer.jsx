import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = 2026; // As specified by user

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'UI/UX & Creative Design',
    'Web & Software Engineering',
    'Mobile App Development',
    'AI & Agentic Automation',
    'Cloud & DevOps Solutions',
    'Digital Marketing & Business Growth',
  ];

  const socialMedia = [
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
    { name: 'X', icon: <FaXTwitter />, href: 'https://x.com/eclearnix_888' },
    { name: 'Facebook', icon: <FaFacebookF />, href: 'https://www.facebook.com/profile.php?id=61578948513643' },
    { name: 'Youtube', icon: <FaYoutube />, href: 'https://www.youtube.com/@ECLearnix' },
  ];

  return (
    <footer className="relative bg-[#0A0820] pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="text-white font-bold text-3xl flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] rotate-3">
                  E
                </div>
                <span className="tracking-tight uppercase">ECLEARNIX</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                ECLearnix Technology Solutions - Empowering businesses through cutting-edge technology and innovative digital strategies.
              </p>
            </div>

            <div className="space-y-5">
              <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em]">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-gray-400 text-sm leading-relaxed transition-colors group-hover:text-white">
                    G Floor, KCT Tech Park, Forge.Factory, 3, Athipalayam Rd, Chinnavedampatti, Coimbatore, Tamil Nadu 641035
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <FaPhoneAlt className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                  <a href="tel:+919677522592" className="text-gray-400 text-sm transition-colors group-hover:text-white">+91 96775 22592</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <FaEnvelope className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                  <a href="mailto:info@eclearnix.com" className="text-gray-400 text-sm transition-colors group-hover:text-white">info@eclearnix.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em] relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="space-y-4 pt-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em] relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
            </h4>
            <ul className="space-y-4 pt-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group cursor-default">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media & Newsletter */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em] relative inline-block">
                Connect With Us
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
              </h4>
              <div className="flex gap-4 pt-2">
                {socialMedia.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <span className="text-xl transition-transform group-hover:rotate-6">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">Newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary w-full transition-colors"
                />
                <button className="bg-primary text-white p-3 rounded-lg hover:bg-primary/80 transition-colors">
                  <FaEnvelope className="text-base" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase text-center md:text-left">
            © {currentYear} ECLEARNIX TECHNOLOGY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-xs font-bold tracking-[0.2em] text-gray-500 hover:text-primary uppercase transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Noise Texture overlay */}
      <div className="absolute inset-0 noise opacity-[0.02] pointer-events-none" />
    </footer>
  );
};

export default Footer;