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
      <div className="w-full px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt="Partner" className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
        ))}
      </div>
    </section>
  );
}