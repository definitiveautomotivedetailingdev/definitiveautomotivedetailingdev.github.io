import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const additionalServices = [
    'Sectional Detailings',
    'Ceramic Coating',
    'Graphene Coatings',
    'OZone Generator',
    'Scented Steam Tank',
    'Headlight Restoration',
    'Crack & Chip Repair',
    'ATV\'s, Dirtbikes, Quad\'s',
    'Watercrafts',
    'Dozers',
    'Paint Correction',
    'Paint Protection Film (PPF)',
    'Window Tinting',
    'Engine Bay Cleaning',
    'Leather Conditioning',
    'Odor Removal',
    'Pet Hair Removal',
    'Scratch Removal',
    'Wheel & Tire Detailing',
    'Chrome Polishing'
  ];

  const handleServiceSelect = (service: string) => {
    // Navigate to booking page with service preselected
    navigate('/booking', { state: { preselectedService: service } });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages & Pricing', path: '/packages-pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Book Appointment', path: '/booking' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-definitive-red transition-colors duration-300 link-hover text-sm font-medium tracking-wide',
                  isActive && 'text-definitive-red after:w-full'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          {/* Additional Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-definitive-red transition-colors duration-300 text-sm font-medium tracking-wide flex items-center gap-1 outline-none">
              Additional Services
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="bg-psyco-black-light border-psyco-green-muted/50 max-h-80 overflow-y-auto w-64"
              align="center"
            >
              {additionalServices.map((service) => (
                <DropdownMenuItem
                  key={service}
                  onClick={() => handleServiceSelect(service)}
                  className="text-gray-300 hover:text-white hover:bg-psyco-green-DEFAULT/20 cursor-pointer"
                >
                  {service}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-white hover:text-definitive-red transition-colors ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 glassmorphism pt-24 px-8 transition-all duration-300 ease-in-out transform lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-white hover:text-definitive-red py-2 text-xl transition-colors duration-300',
                  isActive && 'text-definitive-red'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/additional-services"
            className={({ isActive }) =>
              cn(
                'text-white hover:text-definitive-red py-2 text-xl transition-colors duration-300',
                isActive && 'text-definitive-red'
              )
            }
          >
            Additional Services
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
