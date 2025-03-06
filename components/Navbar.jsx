import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-secondary text-2xl font-bold">Kuxury</Link>
        <div className="hidden md:flex space-x-6">
          {['Home', 'Menu', 'Our Story', 'Reservations', 'Gallery', 'Contact'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-text-primary hover:text-accent transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-text-primary">
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-overlay backdrop-blur-md z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {['Home', 'Menu', 'Our Story', 'Reservations', 'Gallery', 'Contact'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-text-primary text-2xl hover:text-accent transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;