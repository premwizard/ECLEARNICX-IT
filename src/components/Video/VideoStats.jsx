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
        <div className="w-full px-6 md:px-12 relative z-10 grid md:grid-cols-12 gap-16 items-center">

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
            <h2 className="text-4xl font-bold leading-[1.3] py-2 overflow-visible">
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
