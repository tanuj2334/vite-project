
import React from 'react';

const AboutPage: React.FC = () => {
  const packages = [
    {
      id: 'first',
      title: 'FIRST PACKAGE – Classic White Elegance',
      subtitle: 'A timeless white themed wedding setup for a royal and graceful celebration.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913520.png', // Lotus placeholder
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
      description: 'Package Description',
      includes: [
        'Steering props',
        'Various decorations'
      ],
      footer: 'Package Title and Theme: Elegance, Royal and Graceful'
    },
    {
      id: 'second',
      title: 'SECOND PACKAGE – Lotus Royal Frame',
      subtitle: 'A premium and elegant setup inspired by traditional luxury.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913520.png', // Geometry placeholder
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
      description: 'Includes',
      includes: [
        'Steering props',
        'Elegant flower theme'
      ],
      footer: 'Package Title and Theme: Signature, Timely, Traditional'
    },
    {
      id: 'third',
      title: 'THIRD PACKAGE – Modern Black Luxury',
      subtitle: 'Perfect for couples who love modern, bold & trending decor.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913520.png', // Modern placeholder
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
      description: 'Includes',
      includes: [
        'Elegant props',
        'Modern trending setup'
      ],
      footer: 'Package Title and Theme: Modern, Bold & Trending'
    },
    {
      id: 'fourth',
      title: 'FOURTH PACKAGE – Elegant White Fusion',
      subtitle: 'A balanced mix of elegance, simplicity, and luxury.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913520.png', // Arch placeholder
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
      description: 'Includes',
      includes: [
        'Staging props',
        'Marble finish finish'
      ],
      footer: 'Package Title and Theme: Elegance, Bold Style, High Quality'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#fdfaf5] pb-20">
      {/* Header Section from Image */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="w-8 h-8 opacity-40">
             <i className="fa-solid fa-ring text-[#d4af37] text-2xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#b08d57] tracking-tight">Our Wedding Packages</h1>
          <div className="w-8 h-8 opacity-40">
             <i className="fa-solid fa-ring text-[#d4af37] text-2xl"></i>
          </div>
        </div>
        <h2 className="text-xl text-gray-800 font-medium mb-2">Complete Packages for Your Dream Event</h2>
        <p className="text-gray-600 mb-8 uppercase tracking-widest text-sm font-semibold">By DS Grand Weddings</p>
        
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm mb-16">
          We create unforgettable wedding experiences with luxury decor, premium setups and flawless execution. Choose from exclusive packages designed to match vision and budget.
        </p>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="flex flex-col text-left">
              {/* Decorative Icon */}
              <div className="h-24 flex items-center justify-center mb-4">
                <i className="fa-solid fa-leaf text-[#d4af37] text-5xl opacity-30"></i>
              </div>

              {/* Main Image */}
              <div className="aspect-[4/5] w-full overflow-hidden border border-gray-100 mb-6 shadow-sm">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>

              {/* Text Content */}
              <div className="space-y-4 px-1">
                <h3 className="text-sm font-bold flex items-center gap-2">
                  <i className="fa-solid fa-spa text-[#e2a8c0]"></i> {pkg.title}
                </h3>
                <p className="text-[11px] text-gray-600 leading-relaxed min-h-[40px]">
                  {pkg.subtitle}
                </p>

                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold text-gray-800 flex items-center gap-2">
                    <i className="fa-solid fa-star text-[#d4af37] text-[10px]"></i> {pkg.description}
                  </h4>
                  <ul className="text-[10px] text-gray-600 space-y-1 pl-4 list-disc marker:text-[#d4af37]">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-dashed border-gray-200">
                   <p className="text-[10px] text-gray-500 italic flex items-start gap-2">
                     <i className="fa-solid fa-wand-magic-sparkles text-[#d4af37] text-[10px] mt-1"></i>
                     {pkg.footer}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Logo Section */}
        <div className="mt-32 flex flex-col items-center">
            <div className="text-[#b08d57] font-serif text-3xl font-bold tracking-widest">DS</div>
            <div className="text-[#333] font-bold tracking-[0.3em] text-lg">DS GRAND</div>
            <div className="text-gray-400 text-[8px] tracking-[0.4em] uppercase">Professional Services</div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
