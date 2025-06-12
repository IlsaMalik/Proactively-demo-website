import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Doctors', path: '/doctors' },
    { label: 'Patients', path: '/patients' },
    { label: 'List your practice', path: '/list-practice' },
    { label: 'For Employers', path: '/employers' },
    { label: 'Courses', path: '/courses' },
    { label: 'Books', path: '/books' },
    { label: 'Speakers', path: '/speakers' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/" className="header__logo-text">ProVital</Link>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="header__nav-item">
                  <Link to={item.path} className="header__nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__auth">
            <Link to="/login" className="header__auth-link">Login</Link>
            <span className="header__auth-separator">/</span>
            <Link to="/signup" className="header__auth-link">Sign up</Link>
          </div>

          <button 
            className="header__mobile-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="header__mobile-nav-item">
                  <Link 
                    to={item.path} 
                    className="header__mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header__mobile-auth">
              <Link 
                to="/login" 
                className="header__mobile-auth-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="header__mobile-auth-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;