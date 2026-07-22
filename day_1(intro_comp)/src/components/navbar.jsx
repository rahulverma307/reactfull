import React, { useState } from 'react';
import "./navbar.css"

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Ghar');

  const navLinks = [
    { name: 'Ghar', href: '#Ghar' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="minimal-navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="/" className="nav-logo">
          <span className="logo-dot"></span> Minimal.
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link ${activeNav === link.name ? 'active' : ''}`}
                onClick={() => setActiveNav(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="btn-secondary">Log In</button>
          <button className="btn-primary">Get Started</button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`mobile-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeNav === link.name ? 'active' : ''}`}
              onClick={() => {
                setActiveNav(link.name);
                setIsOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-actions">
            <button className="btn-secondary w-full">Log In</button>
            <button className="btn-primary w-full">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default navbar;
