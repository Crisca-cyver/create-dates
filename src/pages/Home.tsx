import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { checkFirebaseConfig, testFirebaseConnection } from '../utils/testFirebase';

const Home: React.FC = () => {
  useEffect(() => {
    // Probar Firebase al cargar la página
    const testConnection = async () => {
      const isConfigured = checkFirebaseConfig();
      if (isConfigured) {
        await testFirebaseConnection();
      }
    };
    
    testConnection();
  }, []);

  return (
    <div className="min-h-screen p-5 flex flex-col justify-between bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center mt-15 mb-10">
        <h1 className="text-4xl font-bold mb-2 text-shadow">CreateDates</h1>
        <p className="text-lg opacity-90 mb-5">Organiza tus eventos de manera fácil</p>
      </div>
      
      <div className="flex-1 flex flex-col gap-5 mb-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20 transition-transform duration-300 hover:-translate-y-1">
          <div className="text-4xl mb-4 block">📅</div>
          <h3 className="text-xl mb-2 font-semibold">Crear Eventos</h3>
          <p className="text-sm opacity-90 leading-relaxed">Crea eventos personalizados con fecha, hora y detalles</p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20 transition-transform duration-300 hover:-translate-y-1">
          <div className="text-4xl mb-4 block">👥</div>
          <h3 className="text-xl mb-2 font-semibold">Invitar Amigos</h3>
          <p className="text-sm opacity-90 leading-relaxed">Comparte tus eventos con amigos y familiares</p>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20 transition-transform duration-300 hover:-translate-y-1">
          <div className="text-4xl mb-4 block">🔔</div>
          <h3 className="text-xl mb-2 font-semibold">Recordatorios</h3>
          <p className="text-sm opacity-90 leading-relaxed">Recibe notificaciones para no olvidar tus eventos</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-3 mb-5">
        <Link to="/login" className="block w-full py-4 px-6 rounded-xl text-center font-semibold text-lg transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100 hover:-translate-y-1">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="block w-full py-4 px-6 rounded-xl text-center font-semibold text-lg transition-all duration-300 bg-white bg-opacity-20 text-white border border-white border-opacity-30 hover:bg-opacity-30 hover:-translate-y-1">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default Home; 