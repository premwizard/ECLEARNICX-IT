import { useRef, useEffect, useState, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    year: '2026',
    title: 'All College Event',
    image: 'images/Ace Web.png',
    description: 'A student-focused event platform that helps colleges organize, \nmanage, and promote workshops, hackathons, symposiums, \nand cultural events seamlessly. Connecting students with \nopportunities and campus activities nationwide.',
    link: 'https://www.allcollegeevent.com/',
  },
  {
    id: 2,
    year: '2026',
    title: 'All College Event Mobile Application',
    image: 'public/images/ace mobile.png',
    description: 'A smart campus event management app that allows students to discover, register, and \nparticipate in college events with ease. Streamlining communication and engagement between \norganizers and participants.',
    link: 'https://play.google.com/store/apps/details?id=com.all_college_event&pcampaignid=web_share',
  },
  {
    id: 3,
    year: '2025',
    title: 'ECLearnix',
    image: 'public/images/ecl Website.png',
    description: 'A modern learning management platform offering online courses, \nskill development programs, certifications, and digital learning \nsolutions for students and professionals. Simplifying education \nthrough interactive and accessible technology.',
    link: 'https://www.eclearnix.com/',
  },
  {
    id: 4,
    year: '2025',
    title: 'ECLearnix LMS App',
    image: 'public/images/ecl mobile.png',
    description: 'The official mobile learning app for ECLearnix, enabling users \nto access courses, live sessions, assignments, and learning \nmaterials anytime, anywhere. Designed for a seamless and \nflexible digital learning experience.',
    link: 'https://play.google.com/store/apps/details?id=com.eclearnix.lms&pcampaignid=web_share&pli=1',
  },
  {
    id: 5,
    year: '2024',
    title: 'Global Conference Hub',
    image: 'public/images/gc.png',
    description: 'A global academic conference platform connecting researchers, \nstudents, and professionals through international conferences, \njournals, and research collaborations. Empowering knowledge \nsharing and innovation across multiple disciplines.',
    link: 'https://globalconferencehub.com/',
  },
];

// Memoized Slide component to prevent re-renders when parent state changes
const ProjectSlide = memo(({ project, index }) => {
  return (
    <div
      className={`project-slide absolute inset-0 w-full h-full flex flex-col justify-center px-6 md:px-20 lg:px-32`}
      style={{ zIndex: index + 1, willChange: 'clip-path' }}
    >
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="slide-bg w-full h-full object-cover will-change-transform"
          style={{ willChange: 'transform' }}
        />
        {/* Cinematic Overlays */}
        {/* Refined Minimal Overlays for Maximum Clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05020D] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* OVERLAY CONTENT - With Enhanced Glassmorphism for Maximum Visibility */}
      <div className="relative z-10 max-w-7xl py-12 md:py-24 px-8 md:px-16 rounded-[2.5rem] md:rounded-[4rem] backdrop-blur-[3px] bg-black/10 border border-white/5">
        {/* Chapter & Year Label - Forced Pure White and Larger */}
        <div className="project-meta flex items-center gap-8 mb-12">
          <span className="text-white font-black tracking-[1em] text-[16px] uppercase">
            CHAPTER {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
          <div className="w-24 h-[3px] bg-white" />
          <span className="text-white font-black tracking-[0.6em] text-[16px] uppercase">
            {project.year} 
          </span>
        </div>

        {/* Title with Split Animation - 'Godzilla' Scale with Responsive Clamping */}
        <h3 className="project-title text-white text-[clamp(3rem,10vw,6rem)] md:text-[clamp(6rem,15vw,16rem)] font-extrabold leading-[0.8] mb-8 md:mb-16 tracking-[-0.06em] uppercase py-4 overflow-visible drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
          {project.title}
        </h3>

        {/* Description & Details - Responsive Scaling */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-end">
          <div className="max-w-5xl">
            <p className="project-desc text-[clamp(1.25rem,4vw,2.5rem)] md:text-[clamp(2.5rem,5vw,4.5rem)] text-white font-black leading-relaxed mb-10 md:mb-14 drop-shadow-2xl whitespace-pre-wrap">
              {project.description}
            </p>



            
            <div className="project-cta">
              <a
                href={project.link}
                className="group flex items-center gap-10 text-white uppercase font-black text-[16px] tracking-[0.6em] transition-all hover:gap-14"
              >
                EXPLORE PROJECTS
                <div className="w-24 h-24 rounded-full border-[3px] border-white flex items-center justify-center text-5xl transition-all group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                  →
                </div>
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* Chapter Indicator - Pure White and Solid */}
      
    </div>
  );
});

// Separate Navigation component to isolate state changes
const ProjectNavigation = ({ activeIndex }) => {
  return (
    <div className="fixed right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-[110] pointer-events-none">
      <span className="text-white/20 [writing-mode:vertical-lr] font-black text-[9px] uppercase tracking-[0.8em]">SCROLL TO EXPLORE</span>
      <div className="flex flex-col gap-3">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-[2px] transition-all duration-700 rounded-full text-white ${
              i === activeIndex ? 'h-12 bg-primary' : 'h-4 bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProjectStickyScroll() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".project-slide");
      
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(slides.length - 1) * 120}%`,
          pin: true,
          scrub: 1, // Reduced from 1.5 for better responsiveness
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (slides.length - 1));
            setActiveIndex(index);
          }
        }
      });

      const splits = [];
      slides.forEach((slide, i) => {
        const title = slide.querySelector('.project-title');
        const split = new SplitType(title, { types: 'words' });
        splits.push(split);
        
        if (i === 0) {
          gsap.from(split.words, {
            y: 50,
            opacity: 0,
            filter: 'blur(10px)',
            stagger: 0.05,
            duration: 1.5,
            ease: "power4.out"
          });
          return;
        }

        const slideTl = gsap.timeline();
        slideTl.fromTo(slide, 
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { 
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.5,
            ease: "none" 
          }
        )
        .from(split.words, {
          y: 100,
          scale: 0.9,
          opacity: 0,
          filter: 'blur(15px)',
          stagger: 0.05,
          duration: 1.2,
          ease: "power4.out"
        }, "-=1")
        .from(slide.querySelector('.project-meta'), {
          x: -30,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=1")
        .from(slide.querySelector('.project-desc'), {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=0.8")
        .from(slide.querySelector('.project-cta'), {
          y: 10,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.4");

        mainTl.add(slideTl);
      });

      gsap.to(".slide-bg", {
        scale: 1.05,
        x: '1%',
        y: '1%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      return () => {
        splits.forEach(s => s.revert());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative section-light overflow-hidden" 
      id="projects"
    >
      {/* Visual Integrity Maintained */}

      <div className="relative h-screen w-full text-white">
        {projects.map((project, index) => (
          <ProjectSlide key={project.id} project={project} index={index} />
        ))}
      </div>

      <ProjectNavigation activeIndex={activeIndex} />
    </div>
  );
}
