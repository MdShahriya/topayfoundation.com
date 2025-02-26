import React from "react";
import  { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/images/Logo.png" className="logo-image" alt="Logo" />
        </Link>
      </div>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav ref={menuRef} className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(
            (link) =>
              link.path !== location.pathname && (
                <li key={link.path}>
                  <Link to={link.path} onClick={() => setIsOpen(false)}>
                    <strong>{link.label}</strong>
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>

      {isOpen && <div className="overlay show" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
}

export default Header;
