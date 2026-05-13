import React from 'react';

export default function BottomCTA() {
  return (
    <section className="section-light py-20 md:py-24" id="contact">

      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/5 translate-y-1/2 -translate-x-1/3 blur-[100px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <p style={{ fontFamily: '"Manrope", sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '4px' }} className="text-primary uppercase mb-6">Let’s Build the Future Together</p>
        <h2 style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700 }} className="text-heading leading-[1.3] uppercase tracking-tighter mb-6 md:mb-10 max-w-4xl py-4 overflow-visible">

          Looking for reliable <br /> IT solutions for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary  py-2 inline-block overflow-visible">business?</span>
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px' }} className="text-bodyText/60 max-w-2xl mb-12 leading-relaxed font-medium">
          Partner with ECLearnix Technology Solutions to transform your ideas into powerful digital products and scalable business solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button style={{ fontFamily: '"Manrope", sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px' }} className="group relative px-12 py-6 bg-darkBg text-white uppercase rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl">
            <span className="relative z-10">Get In Touch Today</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
}