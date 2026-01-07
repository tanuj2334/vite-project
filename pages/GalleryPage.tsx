
import React from 'react';

const GalleryPage: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    'https://images.unsplash.com/photo-1507504031003-b417219a0fde',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    'https://images.unsplash.com/photo-1511578314322-379afb476865'
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-[0.2em] text-[#333]">Gallery</h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Glimpses of Perfection</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={`${img}?auto=format&fit=crop&q=80&w=600`} 
                alt={`Gallery ${i}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-xs">View Case Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
