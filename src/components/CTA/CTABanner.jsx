import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1020/1920/1080')] opacity-15 mix-blend-luminosity"></div>
      <div className="w-full px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/4 flex justify-center">
          <img src="https://picsum.photos/id/35/173/173" alt="CTA" className="w-[173px] h-[173px] rounded-full border-4 border-white shadow-xl object-cover" />
        </div>
        <div className="md:w-3/4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 700 }} className="text-white mb-6">We're Ready Develop Your Site!</h2>
            <div style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '15px' }} className="flex flex-wrap gap-6 text-white font-medium">
              <span className="flex items-center gap-2"><div className="bg-white/20 p-1 rounded-full"><FaCheck className="text-xs" /></div> Quality Service</span>
              <span className="flex items-center gap-2"><div className="bg-white/20 p-1 rounded-full"><FaCheck className="text-xs" /></div> Expert Team</span>
              <span className="flex items-center gap-2"><div className="bg-white/20 p-1 rounded-full"><FaCheck className="text-xs" /></div> Support 24/7</span>
            </div>
          </div>
          <button style={{ fontFamily: '"Satoshi", sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px' }} className="bg-white text-primary px-8 py-4 uppercase hover:bg-darkBg hover:text-white transition-colors whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}