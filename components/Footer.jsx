import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Kuxury Mexican Dining</h3>
            <p className="text-text-secondary">A Symphony of Authentic Flavors, Elevated.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'Our Story', 'Reservations', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-text-secondary mb-2">123 Gourmet Street, Foodie City, FC 12345</p>
            <p className="text-text-secondary mb-2">Phone: (123) 456-7890</p>
            <p className="text-text-secondary">Email: info@kuxurydining.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-text-secondary text-center">
          <p className="text-text-secondary">&copy; 2023 Kuxury Mexican Dining. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;