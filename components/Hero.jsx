import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="Kuxury Mexican Dining" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="heading text-text-primary mb-4">Kuxury Mexican Dining</h1>
        <p className="subheading text-text-primary mb-8">A Symphony of Authentic Flavors, Elevated.</p>
        <div className="space-x-4">
          <Link to="/menu" className="bg-secondary text-primary px-6 py-3 rounded hover:bg-accent transition-colors">
            View Menu
          </Link>
          <Link to="/reservations" className="bg-transparent border border-text-primary text-text-primary px-6 py-3 rounded hover:bg-text-primary hover:text-primary transition-colors">
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;