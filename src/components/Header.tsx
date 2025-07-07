import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { logoutUser } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
import SideMenu from './SideMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
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
          
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300 hidden sm:block">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  Salir
                </button>
              </div>
            ) : (
              <div className="w-10 h-10"></div>
            )}
          </div>
        </div>
      </header>
      
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header; 