
import React from 'react';
import ContactForm from '../components/ContactForm';
import { WHY_US } from '../constants';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000" 
            alt="Event Background" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <div className="mb-8 flex flex-col items-center">
                <i className="fa-solid fa-crown text-[#d4af37] text-4xl mb-2"></i>
                <h1 className="text-white text-4xl md:text-5xl font-bold tracking-[0.2em] mb-1">AD ELITE</h1>
                <p className="text-[#d4af37] tracking-[0.4em] font-medium text-xs md:text-sm uppercase">Event Management</p>
            </div>

            <h2 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Vision, Our Execution.<br />
                Unforgettable Moments Guaranteed
            </h2>
            
            <p className="text-white text-lg md:text-xl mb-10 max-w-2xl font-light opacity-90 leading-relaxed">
                We don't just organize events, we craft experiences. From high-octane shows, AD Elite brings your dreams to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                  onClick={() => window.location.hash = '#/about'}
                  className="bg-[#d4af37] hover:bg-[#b8860b] text-white font-bold py-4 px-8 rounded-md transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wide"
              >
                  Explore Packages
              </button>
              <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 backdrop-blur-md border border-white text-white font-bold py-4 px-8 rounded-md transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-wide"
              >
                  Free Consultation
              </button>
            </div>
        </div>
      </section>

      {/* Why Choose AD Elite Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-widest text-gray-800">
            WHY CHOOSE AD ELITE?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 mb-6 flex items-center justify-center text-[#333] text-3xl transition-transform group-hover:scale-110">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 uppercase tracking-widest text-gray-800">
                THE "ELITE" PROCESS
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 relative">
                <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
                {[
                    { step: '01', title: 'Consultation', desc: 'Understanding your unique dream vision.' },
                    { step: '02', title: 'Conceptualization', desc: 'Crafting the blueprint for success.' },
                    { step: '03', title: 'Planning', desc: 'Meticulous attention to detail.' },
                    { step: '04', title: 'Execution', desc: 'The magic happens, flawlessly.' }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center max-w-[200px] relative z-10 bg-gray-50 px-4">
                        <div className="w-20 h-20 rounded-full border-4 border-[#d4af37] flex items-center justify-center text-2xl font-bold mb-4 bg-white shadow-lg">
                            {item.step}
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-[#333333] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-start">
            <blockquote className="text-xl md:text-2xl italic font-light mb-8 opacity-90 border-l-4 border-[#d4af37] pl-6 leading-relaxed">
              "AD Elite ne meri behen ki shaadi itni badiya se ki, sab kehte rahe gaye. 
              Highly recommended!"
            </blockquote>
            <div className="flex items-center space-x-4">
              <img src="https://picsum.photos/60/60" alt="Ankit Pal" className="w-12 h-12 rounded-full border-2 border-[#d4af37]" />
              <p className="font-semibold text-lg">— Ankit Pal</p>
            </div>
            
            <div className="mt-16 flex flex-col space-y-4">
                <div className="flex items-center space-x-3 text-[#d4af37]">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:+919516165660" className="text-white hover:text-[#d4af37] transition-colors">+91 9516165660</a>
                </div>
                <div className="flex items-center space-x-3 text-[#d4af37]">
                    <i className="fa-brands fa-instagram"></i>
                    <span className="text-white">@ad_elite_events</span>
                </div>
                <div className="flex items-center space-x-3 text-[#d4af37]">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="text-white">Street Lane, Mumbai, India</span>
                </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-gray-700 text-center text-gray-400 text-sm">
           © 2024 AD Elite Event Management
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
