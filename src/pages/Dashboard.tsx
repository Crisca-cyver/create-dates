import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

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

  const fetchEvents = useCallback(async () => {
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
  }, [navigate]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

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
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="flex justify-center items-center min-h-screen text-lg text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-5 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold m-0">Mis Eventos</h1>
        <button 
          onClick={handleLogout} 
          className="bg-white bg-opacity-20 border border-white border-opacity-30 text-white px-4 py-2 rounded-lg text-sm cursor-pointer transition-all duration-300 hover:bg-opacity-30"
        >
          Cerrar Sesión
        </button>
      </header>

      <div className="flex bg-white p-0 border-b border-gray-200">
        <button 
          className={`flex-1 p-4 bg-transparent border-none text-base font-semibold text-gray-600 cursor-pointer transition-all duration-300 relative ${activeTab === 'upcoming' ? 'text-blue-600' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Próximos
          {activeTab === 'upcoming' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-sm"></div>
          )}
        </button>
        <button 
          className={`flex-1 p-4 bg-transparent border-none text-base font-semibold text-gray-600 cursor-pointer transition-all duration-300 relative ${activeTab === 'past' ? 'text-blue-600' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Pasados
          {activeTab === 'past' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-sm"></div>
          )}
        </button>
      </div>

      <div className="p-5">
        {events.length === 0 ? (
          <div className="text-center py-15 px-5 text-gray-600">
            <div className="text-6xl mb-5">📅</div>
            <h3 className="text-xl mb-2 text-gray-800">No tienes eventos</h3>
            <p className="mb-6">Crea tu primer evento para empezar</p>
            <button 
              onClick={handleCreateEvent} 
              className="inline-block py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:-translate-y-1 hover:shadow-lg"
            >
              Crear Evento
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-5 shadow-md transition-transform duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-800 m-0 flex-1">{event.title}</h3>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold">{event.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{event.time}</p>
                {event.location && (
                  <p className="text-gray-600 text-sm mb-2">📍 {event.location}</p>
                )}
                {event.description && (
                  <p className="text-gray-600 text-sm leading-relaxed m-0">{event.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-5 right-5 z-50">
        <button 
          onClick={handleCreateEvent} 
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none text-2xl font-bold cursor-pointer shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Dashboard; 