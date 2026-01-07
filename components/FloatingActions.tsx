
import React from 'react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      <a
        href="https://wa.me/919516165660"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a
        href="tel:+919516165660"
        className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
};

export default FloatingActions;
