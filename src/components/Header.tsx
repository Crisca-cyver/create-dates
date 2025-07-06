import React, { useState } from 'react';
import SideMenu from './SideMenu';

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
      <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-5 py-4 max-w-full">
          <button 
            className="bg-transparent border-none cursor-pointer p-2 flex flex-col gap-1 w-10 h-10 justify-center items-center"
            onClick={toggleMenu}
          >
            <span className="w-5 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
            <span className="w-5 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
            <span className="w-5 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
          </button>
          
          <h1 className="text-lg font-bold text-center flex-1">Generador de Datos</h1>
          
          <div className="w-10 h-10"></div>
        </div>
      </header>
      
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header; 