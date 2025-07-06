import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Iniciar Sesión</h1>
          <p className="text-gray-600">Bienvenido de vuelta a CreateDates</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm border border-red-200">{error}</div>}
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700 text-sm">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-gray-700 text-sm">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              required
              className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
            />
          </div>

          <button 
            type="submit" 
            className="p-4 rounded-xl font-semibold text-base transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:-translate-y-1 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-6 text-center flex flex-col gap-3">
          <p className="text-gray-600 text-sm">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-blue-600 font-semibold transition-colors hover:text-blue-700">
              Regístrate aquí
            </Link>
          </p>
          <Link to="/" className="text-blue-600 font-semibold transition-colors hover:text-blue-700">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 