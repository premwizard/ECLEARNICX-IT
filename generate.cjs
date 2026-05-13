const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');

const dirs = [
  'Header', 'Hero', 'About', 'Services', 'CTA', 'Projects',
  'Partners', 'Testimonials', 'Team', 'Video', 'Blog', 'BottomCTA', 'Footer'
];

dirs.forEach(dir => {
  const fullPath = path.join(componentsDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

const files = {
  'Header/TopBar.jsx': `
import React from 'react';
import { FaEnvelope, FaRegClock, FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="hidden md:flex bg-white border-b h-[45px] items-center justify-between px-8 text-sm text-bodyText max-w-container mx-auto w-full">
      <div className="flex gap-6">
        <span>Welcome to IT Professional Services</span>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-primary" />
          <span>needhelp@company.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock className="text-primary" />
          <span>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</span>
        </div>
        <div className="flex gap-4 ml-4">
          <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaPinterestP /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
}
  `,
  'Header/Navbar.jsx': `
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Pages', 'Services', 'Blog', 'Contact'];

  return (
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${scrolled ? 'bg-darkBg shadow-lg py-4 top-0' : 'bg-transparent py-6 top-[45px] md:top-[45px]'}\`}>
      <div className="max-w-container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-white font-bold text-2xl flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">E</div>
          ECLEARNIX
        </div>

        <div className="hidden lg:flex gap-8 text-white font-medium">
          {navLinks.map(link => (
            <Link key={link} to="#" className="hover:text-secondary transition-colors uppercase tracking-wide text-sm">{link}</Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <FaSearch className="text-white hover:text-secondary cursor-pointer" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <FaPhoneAlt />
            </div>
            <div className="text-white">
              <p className="text-xs text-gray-400">Call Anytime</p>
              <p className="font-bold">+91 1234567889</p>
            </div>
          </div>
        </div>

        <button className="lg:hidden text-white text-2xl" onClick={() => setMobileMenu(true)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={\`fixed inset-0 bg-black/50 z-[100] transition-opacity \${mobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}\`}>
        <div className={\`fixed top-0 left-0 w-64 h-full bg-white transform transition-transform duration-300 \${mobileMenu ? 'translate-x-0' : '-translate-x-full'}\`}>
          <div className="p-4 flex justify-between items-center border-b">
            <span className="font-bold text-xl text-darkBg">Menu</span>
            <button onClick={() => setMobileMenu(false)}><FaTimes className="text-2xl text-darkBg" /></button>
          </div>
          <div className="flex flex-col p-4">
            {navLinks.map(link => (
              <Link key={link} to="#" className="py-3 border-b text-darkBg uppercase text-sm font-medium">{link}</Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
  `,
  'Hero/HeroSlider.jsx': `
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function HeroSlider() {
  const slides = [
    { bg: 'https://picsum.photos/id/119/1920/1080', subtitle: 'WELCOME TO IT SOLUTIONS', title: 'We Provide Best IT', title2: 'Solutions', ampersand: '&' },
    { bg: 'https://picsum.photos/id/160/1920/1080', subtitle: 'WELCOME TO IT SOLUTIONS', title: 'Technology for', title2: 'Business', ampersand: '&' },
    { bg: 'https://picsum.photos/id/180/1920/1080', subtitle: 'WELCOME TO IT SOLUTIONS', title: 'Smart IT Software', title2: 'Services', ampersand: '&' }
  ];

  return (
    <div className="relative w-full h-[560px] md:h-[794px] bg-darkBg overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="absolute inset-0 bg-darkBg">
              <div className="absolute inset-0 bg-black/40 mix-blend-luminosity z-10" />
              <img src={slide.bg} alt="bg" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-20 h-full flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <p className="text-white uppercase tracking-[2px] font-medium mb-4 animate-fade-in-up">{slide.subtitle}</p>
                <h1 className="text-white font-bold text-5xl md:text-[100px] leading-tight uppercase mb-8 animate-fade-in-up delay-100">
                  {slide.title} <span className="text-secondary">{slide.ampersand}</span> {slide.title2}
                </h1>
                <button className="bg-primary text-white px-8 py-4 uppercase font-bold text-sm tracking-wider hover:bg-secondary transition-colors animate-fade-in-up delay-200">
                  Discover More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
  `,
  'About/AboutSection.jsx': `
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLaptopCode, FaNetworkWired } from 'react-icons/fa';

export default function AboutSection() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = 6800;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect();
      }
    });
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="relative w-full"
        >
          <img src="https://picsum.photos/id/11/400/504" alt="About" className="w-[80%] rounded shadow-lg" />
          <img src="https://picsum.photos/id/12/300/200" alt="About Overlap" className="absolute bottom-0 right-0 border-8 border-white rounded shadow-xl w-[60%]" />
          <div ref={counterRef} className="absolute top-8 right-8 bg-darkBg p-6 text-white text-center rounded">
            <h3 className="text-4xl font-bold mb-1 text-primary">{count}+</h3>
            <p className="text-sm font-medium">Satisfied Clients</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-primary"></div>
            <p className="text-primary font-bold uppercase tracking-wider">About Company</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading leading-tight mb-6">
            We're Partner of Your Innovations
          </h2>
          <p className="text-bodyText mb-8">
            There are many variations of passages of lorem free market to available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary text-2xl">
                <FaLaptopCode />
              </div>
              <h4 className="font-bold text-heading">Website Development</h4>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary text-2xl">
                <FaNetworkWired />
              </div>
              <h4 className="font-bold text-heading">Internal Networking</h4>
            </div>
          </div>

          <ul className="space-y-3 mb-10">
            {['Refresing to get such a personal touch.', 'Duis aute irure dolor in reprehenderit in voluptate.', 'Velit esse cillum dolore eu fugiat nulla pariatur.'].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-heading font-medium">
                <FaCheckCircle className="text-secondary" /> {text}
              </li>
            ))}
          </ul>

          <button className="bg-primary text-white px-8 py-4 uppercase font-bold text-sm tracking-wider hover:bg-secondary transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
  `,
  'Services/ServiceCards.jsx': `
import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export default function ServiceCards() {
  const cards = [
    { title: "Perfect solutions that business demands", icon: <FaCloud />, img: "https://picsum.photos/id/21/400/300" },
    { title: "Providing excellent technology solutions", icon: <FaChartLine />, img: "https://picsum.photos/id/22/400/300" },
    { title: "We eagerly put in use new IT innovations", icon: <FaShieldAlt />, img: "https://picsum.photos/id/23/400/300" },
  ];

  return (
    <section className="pb-24 pt-12 bg-white">
      <div className="max-w-container mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white border rounded shadow-sm overflow-hidden hover:bg-background transition-colors duration-300">
              <div className="relative">
                <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                  {card.icon}
                </div>
              </div>
              <div className="p-8 pt-10">
                <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors cursor-pointer">{card.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
  `,
  'Services/ServicesOffering.jsx': `
import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMobileAlt, FaLock, FaDesktop, FaChartPie } from 'react-icons/fa';

export default function ServicesOffering() {
  const services = [
    { title: 'Product Development', icon: <FaSearch />, desc: 'We systematically build businesses.' },
    { title: 'Digital Marketing', icon: <FaMobileAlt />, desc: 'We systematically build businesses.' },
    { title: 'Security System', icon: <FaLock />, desc: 'We systematically build businesses.' },
    { title: 'UI/UX Designing', icon: <FaDesktop />, desc: 'We systematically build businesses.' },
    { title: 'Data Analysis', icon: <FaChartPie />, desc: 'We systematically build businesses.' },
  ];

  return (
    <section className="py-24 bg-darkBg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1043/1920/1080')] opacity-5 mix-blend-luminosity"></div>
      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary"></div>
              <p className="text-primary font-bold uppercase tracking-wider">What We're Offering</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dealing in all Professional IT Services
            </h2>
          </div>
          <div className="md:w-1/2 text-gray-400">
            <p>We are dedicated to providing excellent IT services. Our team of experts works tirelessly to bring you the best possible solutions for your business needs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark p-8 rounded border border-gray-800 hover:border-primary transition-colors group cursor-pointer"
            >
              <div className="text-4xl text-primary mb-6 animate-float group-hover:text-white transition-colors">
                {srv.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{srv.title}</h3>
              <p className="text-gray-400 text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'CTA/CTABanner.jsx': `
import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1020/1920/1080')] opacity-15 mix-blend-luminosity"></div>
      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/4 flex justify-center">
          <img src="https://picsum.photos/id/35/173/173" alt="CTA" className="w-[173px] h-[173px] rounded-full border-4 border-white shadow-xl object-cover" />
        </div>
        <div className="md:w-3/4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We're Ready Develop Your Site!</h2>
            <div className="flex flex-wrap gap-6 text-white font-medium">
              <span className="flex items-center gap-2"><div className="bg-white/20 p-1 rounded-full"><FaCheck className="text-xs" /></div> Quality Service</span>
              <span className="flex items-center gap-2"><div className="bg-white/20 p-1 rounded-full"><FaCheck className="text-xs" /></div> Expert Team</span>
              <span className="flex items-center gap-2"><div className="bg-white/20 p-1 rounded-full"><FaCheck className="text-xs" /></div> Support 24/7</span>
            </div>
          </div>
          <button className="bg-white text-primary px-8 py-4 uppercase font-bold text-sm tracking-wider hover:bg-darkBg hover:text-white transition-colors whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
  `,
  'Projects/ProjectSlider.jsx': `
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../../data/data';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectSlider() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-4 md:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary"></div>
              <p className="text-primary font-bold uppercase tracking-wider">Recently Completed</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-heading leading-tight">
              Our Latest Projects
            </h2>
          </div>
        </div>
      </div>

      <div className="ml-auto pl-4 md:pl-8 lg:pl-[calc((100vw-1290px)/2+2rem)] pr-4 md:pr-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {projectsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative group overflow-hidden rounded cursor-pointer h-[400px]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-darkBg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-secondary font-medium uppercase text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.category}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.title}</h3>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
  `,
  'Projects/ProjectVerticalScroll.jsx': `
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { verticalProjectsData } from '../../data/data';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectVerticalScroll() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.vertical-card');
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: \`+=\${cards.length * 100}%\`,
        pin: true,
        scrub: true,
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        gsap.to(card, {
          yPercent: -100 * i,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: \`top top-=\${i * 100}%\`,
            end: \`top top-=\${(i + 1) * 100}%\`,
            scrub: true,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full relative overflow-hidden bg-darkBg hidden md:block">
      <div ref={wrapperRef} className="h-full w-full relative">
        {verticalProjectsData.map((project, i) => (
          <div 
            key={project.id} 
            className="vertical-card absolute top-0 left-0 w-full h-full"
            style={{ zIndex: i + 1, transform: i > 0 ? 'translateY(100%)' : 'translateY(0)' }}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            
            <div className="absolute bottom-20 left-20 z-20 text-white max-w-2xl">
              <div className="bg-primary text-white text-sm font-bold py-1 px-3 inline-block mb-4">
                {project.year}
              </div>
              <p className="text-secondary uppercase tracking-widest font-medium mb-2">{project.category}</p>
              <h2 className="text-6xl font-bold leading-tight">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
  `,
  'Partners/PartnersStrip.jsx': `
import React from 'react';

export default function PartnersStrip() {
  const logos = [
    'https://picsum.photos/id/111/150/50',
    'https://picsum.photos/id/112/150/50',
    'https://picsum.photos/id/113/150/50',
    'https://picsum.photos/id/114/150/50',
    'https://picsum.photos/id/115/150/50',
  ];

  return (
    <section className="py-[90px] bg-white border-t border-gray-200">
      <div className="max-w-container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt="Partner" className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
        ))}
      </div>
    </section>
  );
}
  `,
  'Testimonials/TestimonialsSlider.jsx': `
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { testimonialsData } from '../../data/data';

export default function TestimonialsSlider() {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-primary"></div>
            <p className="text-primary font-bold uppercase tracking-wider">Testimonials</p>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading">What They're Talking?</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-10 rounded shadow-sm relative overflow-hidden">
                <div className="flex text-[#FFB629] mb-6">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-xl text-heading font-medium  mb-8 relative z-10 leading-relaxed">
                  "{item.review}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-heading">{item.name}</h4>
                    <p className="text-primary text-sm font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
  `,
  'Team/TeamSection.jsx': `
import React from 'react';
import { FaShareAlt, FaTwitter, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { teamData } from '../../data/data';

export default function TeamSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1025/1920/1080')] opacity-5"></div>
      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary"></div>
              <p className="text-primary font-bold uppercase tracking-wider">Team Member</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-heading leading-tight">
              Meet Our Professional Team Member
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-bodyText">
              We have a team of highly experienced professionals who are passionate about their work and dedicated to delivering the best results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="group relative">
              <div className="relative overflow-hidden mb-6 rounded">
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white p-3 rounded flex gap-4 shadow-lg">
                    <a href="#" className="text-bodyText hover:text-primary"><FaTwitter /></a>
                    <a href="#" className="text-bodyText hover:text-primary"><FaFacebookF /></a>
                    <a href="#" className="text-bodyText hover:text-primary"><FaPinterestP /></a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-heading hover:text-primary transition-colors cursor-pointer">{member.name}</h3>
                <p className="text-primary uppercase text-sm font-medium tracking-wider mt-1">{member.role}</p>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <FaShareAlt />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'Video/VideoStats.jsx': `
import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

export default function VideoStats() {
  const [modalOpen, setModalOpen] = useState(false);
  const [stats, setStats] = useState({ cust: 0, proj: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const timer = setInterval(() => {
          start += 16;
          const progress = start / duration;
          if (progress >= 1) {
            setStats({ cust: 9280, proj: 6420 });
            clearInterval(timer);
          } else {
            setStats({
              cust: Math.floor(9280 * progress),
              proj: Math.floor(6420 * progress)
            });
          }
        }, 16);
        observer.disconnect();
      }
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="py-24 bg-darkBg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1050/1920/1080')] opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-12 gap-16 items-center">
          
          <div className="md:col-span-5 text-white">
            <div 
              onClick={() => setModalOpen(true)}
              className="w-24 h-24 rounded-full border-2 border-dashed border-primary flex items-center justify-center mb-10 cursor-pointer hover:bg-primary transition-colors group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary group-hover:text-darkBg transition-colors">
                <FaPlay className="ml-1" />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[2px] bg-primary"></div>
              <p className="text-primary font-bold uppercase tracking-wider">Watch Video</p>
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Best IT Technology Services & Solutions
            </h2>
          </div>

          <div className="md:col-span-7 flex flex-col sm:flex-row gap-8">
            <div className="bg-dark p-10 rounded border border-gray-800 flex-1">
              <h3 className="text-5xl font-bold text-white mb-2">{stats.cust.toLocaleString()}</h3>
              <p className="text-gray-400 font-medium">We have satisfied customers</p>
            </div>
            <div className="bg-primary p-10 rounded flex-1">
              <h3 className="text-5xl font-bold text-white mb-2">{stats.proj.toLocaleString()}</h3>
              <p className="text-white/80 font-medium">Projects has been completed</p>
            </div>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button onClick={() => setModalOpen(false)} className="absolute top-8 right-8 text-white text-4xl">
            <FaTimes />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
  `,
  'Blog/BlogSection.jsx': `
import React from 'react';
import { FaUser, FaComments, FaArrowRight } from 'react-icons/fa';
import { blogData } from '../../data/data';

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-[2px] bg-primary"></div>
            <p className="text-primary font-bold uppercase tracking-wider">News & Articles</p>
            <div className="w-10 h-[2px] bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading">Read Our Latest Insights</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div key={post.id} className="group border rounded overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative overflow-hidden h-[250px]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold py-1 px-3 rounded">
                  {post.date}
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-6 mb-4 text-sm text-bodyText font-medium">
                  <span className="flex items-center gap-2"><FaUser className="text-primary" /> {post.author}</span>
                  <span className="flex items-center gap-2"><FaComments className="text-primary" /> {post.comments} Comments</span>
                </div>
                <h3 className="text-2xl font-bold text-heading mb-6 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                  {post.title}
                </h3>
                <a href="#" className="flex items-center gap-2 text-heading font-bold uppercase text-sm group-hover:text-primary transition-colors">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'BottomCTA/BottomCTA.jsx': `
import React from 'react';

export default function BottomCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-black/5 translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-[81%] text-center md:text-left">
          <p className="text-white/80 font-medium uppercase tracking-widest mb-2">Let's Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Looking for the Best IT Business Solutions?
          </h2>
        </div>
        <div className="md:w-[19%] flex justify-center md:justify-end">
          <button className="bg-white text-primary px-8 py-4 uppercase font-bold text-sm tracking-wider hover:bg-darkBg hover:text-white transition-colors whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
  `,
  'Footer/Footer.jsx': `
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-darkBg relative overflow-hidden text-gray-400">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1060/1920/1080')] opacity-5 mix-blend-luminosity"></div>
      
      <div className="max-w-container mx-auto px-4 md:px-8 py-20 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div>
          <div className="text-white font-bold text-3xl flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">E</div>
            ECLEARNIX
          </div>
          <p className="mb-8">Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</p>
          <div className="flex gap-3">
            {[FaTwitter, FaFacebookF, FaPinterestP, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary text-white transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-6 flex flex-col gap-2">
            Explore Links
            <span className="w-12 h-1 bg-primary"></span>
          </h3>
          <ul className="space-y-3 font-medium">
            {['About Company', 'Meet Our Team', 'News & Media', 'Our Projects', 'Contact Us'].map((link, i) => (
              <li key={i}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-6 flex flex-col gap-2">
            Newsletter
            <span className="w-12 h-1 bg-primary"></span>
          </h3>
          <p className="mb-6">Subscribe to our newsletter to get latest news & updates.</p>
          <div className="relative mb-4">
            <input type="email" placeholder="Email Address" className="w-full bg-dark text-white p-4 rounded outline-none border border-gray-800 focus:border-primary transition-colors" />
            <button className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r hover:bg-secondary transition-colors">
              <FaEnvelope />
            </button>
          </div>
          <label className="flex items-start gap-2 text-sm cursor-pointer">
            <input type="checkbox" className="mt-1 accent-primary" />
            <span>I agree to all terms and policies of the company</span>
          </label>
        </div>

        <div>
          <h3 className="text-white text-xl font-bold mb-6 flex flex-col gap-2">
            Contact
            <span className="w-12 h-1 bg-primary"></span>
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="text-primary text-xl mt-1"><FaPhoneAlt /></div>
              <div>
                <p className="text-sm font-medium">Call Anytime</p>
                <p className="text-white font-bold text-lg">+91 1234567889</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="text-primary text-xl mt-1"><FaEnvelope /></div>
              <div>
                <p className="text-sm font-medium">Send Email</p>
                <p className="text-white font-bold text-lg">needhelp@company.com</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="text-primary text-xl mt-1"><FaMapMarkerAlt /></div>
              <div>
                <p className="text-sm font-medium">Visit Office</p>
                <p className="text-white font-bold text-lg">80 Broklyn Golden Street</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="bg-[#15101E] py-6 relative z-10 text-center text-sm font-medium">
        <p>© All Copyright {new Date().getFullYear()} by ECLEARNIX</p>
      </div>
    </footer>
  );
}
  `
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(componentsDir, filepath), content.trim());
}

console.log('Components generated.');
