import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About', path: '/', id: 'about' },
    { name: 'Services', path: '/', id: 'services' },
    { name: 'Projects', path: '/', id: 'projects' },
    { name: 'Careers', path: '/careers', id: 'careers' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  const handleLinkClick = (link) => {
    if (link.path === '/') {
      if (window.location.pathname === '/') {
        // Scroll to section
        const element = document.getElementById(link.id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo('#' + link.id, { offset: -100 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        // Navigate to home with hash
        navigate('/#' + link.id);
      }
    } else {
      // Navigate to dedicated page
      navigate(link.path);
      window.scrollTo(0, 0);
    }
  };

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
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-white font-bold text-3xl flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] rotate-3">
                  E
                </div>
                <span className="tracking-tight uppercase">ECLEARNIX</span>
              </Link>
              <p className="text-gray-400 text-base leading-relaxed max-w-xs">
                ECLearnix Technology Solutions provides innovative IT services including software development, web and mobile applications, UI/UX design, AI automation, cloud solutions, digital transformation, and enterprise technology services for businesses worldwide.
              </p>
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
                  <button 
                    onClick={() => handleLinkClick(link)}
                    className="text-gray-400 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </button>
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

          {/* Column 4: Contact & Social Media */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em] relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary" />
              </h4>
              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-3 group">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-gray-400 text-sm leading-relaxed transition-colors group-hover:text-white">
                    ECLearnix EdTech Private Limited, G Floor, Forge Factory, KCT Tech Park, Chinnavedampatti, Coimbatore, TN 641035
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
                    target="_blank"
                    rel="noopener noreferrer"
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
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium tracking-widest text-gray-500 uppercase text-center md:text-left opacity-60">
            © {currentYear} ECLEARNIX TECHNOLOGY SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-[10px] font-medium tracking-widest text-gray-500 hover:text-primary uppercase transition-colors opacity-60 hover:opacity-100"
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