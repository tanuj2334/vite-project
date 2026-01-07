
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#';
      setCurrentPath(hash);
      // Only scroll to top if we're moving to a specific page, not just an anchor like #contact
      if (hash.startsWith('#/')) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial path
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    // Exact matching for routes
    if (currentPath.startsWith('#/about')) return <AboutPage />;
    if (currentPath.startsWith('#/gallery')) return <GalleryPage />;
    
    // Default to Landing Page (handles #, #contact, etc)
    return <LandingPage />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <FloatingActions />
    </div>
  );
};

export default App;
