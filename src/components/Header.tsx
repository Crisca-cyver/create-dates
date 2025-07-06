import React, { useState } from 'react';
import SideMenu from './SideMenu';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
          
          <h1 className="header-title">Generador de Datos</h1>
          
          <div className="header-right"></div>
        </div>
      </header>
      
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header; 