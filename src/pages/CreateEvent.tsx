import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const CreateEvent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = auth.currentUser;
      if (!user) {
        navigate('/login');
        return;
      }

      const eventData = {
        title,
        date,
        time,
        location,
        description,
        userId: user.uid,
        createdAt: new Date().toISOString()
      };

      await addDoc(collection(db, 'events'), eventData);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5 flex justify-between items-center shadow-lg">
        <button 
          onClick={handleCancel} 
          className="bg-white bg-opacity-20 border border-white border-opacity-30 text-white w-10 h-10 rounded-full text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:bg-opacity-30"
        >
          ←
        </button>
        <h1 className="text-xl font-bold m-0">Crear Evento</h1>
        <div></div>
      </header>

      <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-5">
        {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm border border-red-200">{error}</div>}
        
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-semibold text-gray-700 text-sm">Título del Evento *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Cumpleaños de Juan"
            required
            className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="date" className="font-semibold text-gray-700 text-sm">Fecha *</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
            />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="time" className="font-semibold text-gray-700 text-sm">Hora *</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="font-semibold text-gray-700 text-sm">Ubicación</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ej: Casa de María"
            className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-semibold text-gray-700 text-sm">Descripción</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe tu evento..."
            rows={4}
            className="p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-blue-500 focus:outline-none bg-gray-50 resize-vertical min-h-24"
          />
        </div>

        <div className="flex gap-3 mt-5">
          <button 
            type="button" 
            onClick={handleCancel}
            className="flex-1 p-4 rounded-xl font-semibold text-base transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:-translate-y-1"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="flex-1 p-4 rounded-xl font-semibold text-base transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:-translate-y-1 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Creando...' : 'Crear Evento'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent; 