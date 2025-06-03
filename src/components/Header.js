import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Make sure to install lucide-react or use any icon lib
import logoDark from '../assets/images/logo.svg'; // Dark background logo
import logoLight from '../assets/images/logo.svg'; // Light background logo

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Virtual Tour', path: '/virtual-tour' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'KPV Group', path: '/kpv-group' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black text-white' : 'text-white'
      }`}
    >
      <div className="flex justify-between items-center py-8 max-w-[90%] mx-auto">
        <Link to="/" onClick={closeMenu}>
          <img
            src={scrolled ? logoLight : logoDark}
            alt="Logo"
            className="h-12 transition-all duration-300 w-full"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === item.path
                  ? scrolled
                    ? 'text-yellow-600 border-b-2 border-yellow-600'
                    : 'text-yellow-500 border-b-2 border-yellow-500'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Burger Icon */}
        <button
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} className={`${scrolled ? 'text-black' : 'text-white'}`} /> : <Menu size={28} className={`${scrolled ? 'text-black' : 'text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white text-black shadow-lg transition-transform duration-300 transform ${
          menuOpen ? 'translate-y-0' : '-translate-y-[200%]'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`text-base font-medium ${
                location.pathname === item.path ? 'text-yellow-600' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;