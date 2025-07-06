import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">CreateDates</h1>
        <p className="home-subtitle">Organiza tus eventos de manera fácil</p>
      </div>
      
      <div className="home-content">
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h3>Crear Eventos</h3>
          <p>Crea eventos personalizados con fecha, hora y detalles</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Invitar Amigos</h3>
          <p>Comparte tus eventos con amigos y familiares</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔔</div>
          <h3>Recordatorios</h3>
          <p>Recibe notificaciones para no olvidar tus eventos</p>
        </div>
      </div>
      
      <div className="home-actions">
        <Link to="/login" className="btn btn-primary">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Home; 