import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './Dashboard.css';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        navigate('/login');
        return;
      }

      const eventsRef = collection(db, 'events');
      const q = query(eventsRef, where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      
      const eventsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Event[];
      
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleCreateEvent = () => {
    navigate('/create-event');
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Mis Eventos</h1>
        <button onClick={handleLogout} className="logout-btn">
          Cerrar Sesión
        </button>
      </header>

      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Próximos
        </button>
        <button 
          className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Pasados
        </button>
      </div>

      <div className="events-container">
        {events.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📅</div>
            <h3>No tienes eventos</h3>
            <p>Crea tu primer evento para empezar</p>
            <button onClick={handleCreateEvent} className="btn btn-primary">
              Crear Evento
            </button>
          </div>
        ) : (
          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <h3>{event.title}</h3>
                  <span className="event-date">{event.date}</span>
                </div>
                <p className="event-time">{event.time}</p>
                {event.location && (
                  <p className="event-location">📍 {event.location}</p>
                )}
                {event.description && (
                  <p className="event-description">{event.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="floating-action">
        <button onClick={handleCreateEvent} className="fab">
          +
        </button>
      </div>
    </div>
  );
};

export default Dashboard; 