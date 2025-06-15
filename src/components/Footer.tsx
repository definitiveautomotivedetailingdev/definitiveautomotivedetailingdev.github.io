import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Facebook, Instagram, Youtube, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-16 w-16 relative">
                <img 
                  src="/lovable-uploads/b38643c2-7a0d-4cbb-b50e-41b841a27c05.png" 
                  alt="Definitive Automotive Detailing Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Professional automotive detailing services that bring out the best in your vehicle. Quality work, attention to detail, and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com/definitiveautomotivedetailing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/definitiveautomotivedetailing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/packages-pricing" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Packages & Pricing
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/additional-services" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Additional Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/booking" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Book Appointment
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-green-500" />
                <span>(416) 275-1179</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-green-500" />
                <span>definitiveautomotivedetailing@outlook.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Clock size={16} className="text-green-500" />
                <span>8am to 10pm, 7 days a week</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Facebook size={16} className="text-green-500" />
                <a 
                  href="https://facebook.com/definitiveautomotivedetails" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Definitive Automotive Details
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Instagram size={16} className="text-green-500" />
                <a 
                  href="https://www.instagram.com/definitiveautomotivedetailing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  @definitiveautomotivedetailing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Definitive Automotive Detailing. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
