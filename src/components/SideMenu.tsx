import React from 'react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay para cerrar el menú */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      
      {/* Menú lateral */}
      <div className={`fixed top-0 left-0 w-72 h-screen bg-gray-900 text-white z-50 transition-transform duration-300 ease-in-out shadow-lg ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-700 bg-black">
          <h2 className="text-xl font-bold m-0">Menú</h2>
          <button 
            className="bg-transparent border-none text-white text-2xl cursor-pointer p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 hover:bg-gray-700"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <nav className="p-5">
          <ul className="list-none m-0 p-0">
            <li className="m-0">
              <a href="/" className="flex items-center p-4 text-white no-underline transition-colors duration-300 border-b border-gray-700 hover:bg-gray-700">
                <span className="mr-3 text-xl w-6 text-center">🏠</span>
                Inicio
              </a>
            </li>
            <li className="m-0">
              <a href="/makro" className="flex items-center p-4 text-white no-underline transition-colors duration-300 border-b border-gray-700 hover:bg-gray-700">
                <span className="mr-3 text-xl w-6 text-center">🛒</span>
                Makro
              </a>
            </li>
            <li className="m-0">
              <a href="/maxi-carrefour" className="flex items-center p-4 text-white no-underline transition-colors duration-300 border-b border-gray-700 hover:bg-gray-700">
                <span className="mr-3 text-xl w-6 text-center">🏪</span>
                Maxi-Carrefour
              </a>
            </li>
            <li className="m-0">
              <a href="/yaguar" className="flex items-center p-4 text-white no-underline transition-colors duration-300 border-b border-gray-700 hover:bg-gray-700">
                <span className="mr-3 text-xl w-6 text-center">🚗</span>
                Yaguar
              </a>
            </li>
            <li className="m-0">
              <a href="/settings" className="flex items-center p-4 text-white no-underline transition-colors duration-300 border-b border-gray-700 hover:bg-gray-700">
                <span className="mr-3 text-xl w-6 text-center">⚙️</span>
                Configuración
              </a>
            </li>
            <li className="m-0">
              <a href="/about" className="flex items-center p-4 text-white no-underline transition-colors duration-300 border-b border-gray-700 hover:bg-gray-700">
                <span className="mr-3 text-xl w-6 text-center">ℹ️</span>
                Acerca de
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu; 