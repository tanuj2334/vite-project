
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About & Packages', href: '#/about' },
    { name: 'Gallery', href: '#/gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    // Handle home or specific paths
    if (href === '#' || href === '#/') {
      window.location.hash = '#';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#/')) {
      window.location.hash = href;
    } else if (href.startsWith('#')) {
      // If it's a scroll link like #contact, and we are not on the home page, go home first
      if (window.location.hash !== '' && window.location.hash !== '#') {
        window.location.hash = '#';
        // Give it a tiny moment to switch pages before scrolling
        setTimeout(() => {
          const el = document.getElementById(href.substring(1));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(href.substring(1));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('#'); }} className="flex items-center space-x-2 cursor-pointer">
            <div className="flex flex-col items-center">
                <i className="fa-solid fa-crown text-[#d4af37] text-xl"></i>
                <span className={`font-bold tracking-widest text-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}>AD ELITE</span>
                <span className={`text-[8px] tracking-[0.2em] font-medium ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>EVENT MANAGEMENT</span>
            </div>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-semibold uppercase tracking-widest hover:text-[#d4af37] transition-colors cursor-pointer ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? 'text-gray-900' : 'text-white'}>
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-[#d4af37] border-b border-gray-50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
