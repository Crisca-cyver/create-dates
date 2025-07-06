import React from 'react';
import './SideMenu.css';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay para cerrar el menú */}
      {isOpen && (
        <div className="side-menu-overlay" onClick={onClose}></div>
      )}
      
      {/* Menú lateral */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <h2>Menú</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        
        <nav className="side-menu-nav">
          <ul className="menu-items">
            <li className="menu-item">
              <a href="/" className="menu-link">
                <span className="menu-icon">🏠</span>
                Inicio
              </a>
            </li>
            <li className="menu-item">
              <a href="/makro" className="menu-link">
                <span className="menu-icon">🛒</span>
                Makro
              </a>
            </li>
            <li className="menu-item">
              <a href="/maxi-carrefour" className="menu-link">
                <span className="menu-icon">🏪</span>
                Maxi-Carrefour
              </a>
            </li>
            <li className="menu-item">
              <a href="/yaguar" className="menu-link">
                <span className="menu-icon">🚗</span>
                Yaguar
              </a>
            </li>
            <li className="menu-item">
              <a href="/settings" className="menu-link">
                <span className="menu-icon">⚙️</span>
                Configuración
              </a>
            </li>
            <li className="menu-item">
              <a href="/about" className="menu-link">
                <span className="menu-icon">ℹ️</span>
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