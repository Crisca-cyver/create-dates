import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import './CreateEvent.css';

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
    <div className="create-event">
      <header className="create-event-header">
        <button onClick={handleCancel} className="back-btn">
          ←
        </button>
        <h1>Crear Evento</h1>
        <div></div>
      </header>

      <form onSubmit={handleSubmit} className="create-event-form">
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="title">Título del Evento *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Cumpleaños de Juan"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Fecha *</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Hora *</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Ubicación</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ej: Casa de María"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe tu evento..."
            rows={4}
          />
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
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