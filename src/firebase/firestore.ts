import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy,
  Timestamp,
  DocumentData,
  QuerySnapshot 
} from 'firebase/firestore';
import { db } from './config';
import { getCurrentUser } from './auth';

// 📊 SERVICIO DE FIRESTORE

// Tipos de datos
export interface Event {
  id?: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Crear un nuevo evento
export const createEvent = async (eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error('Usuario no autenticado');
    }

    const event = {
      ...eventData,
      userId: user.uid,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'events'), event);
    console.log('✅ Evento creado exitosamente con ID:', docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error('❌ Error al crear evento:', error.message);
    throw error;
  }
};

// Obtener todos los eventos del usuario actual
export const getUserEvents = async (): Promise<Event[]> => {
  try {
    const user = getCurrentUser();
    if (!user) {
      throw new Error('Usuario no autenticado');
    }

    const q = query(
      collection(db, 'events'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    const events: Event[] = [];

    querySnapshot.forEach((doc) => {
      events.push({
        id: doc.id,
        ...doc.data()
      } as Event);
    });

    console.log('✅ Eventos obtenidos:', events.length);
    return events;
  } catch (error: any) {
    console.error('❌ Error al obtener eventos:', error.message);
    throw error;
  }
};

// Obtener un evento específico
export const getEvent = async (eventId: string): Promise<Event | null> => {
  try {
    const docRef = doc(db, 'events', eventId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const event = {
        id: docSnap.id,
        ...docSnap.data()
      } as Event;
      console.log('✅ Evento obtenido:', event.title);
      return event;
    } else {
      console.log('⚠️ Evento no encontrado');
      return null;
    }
  } catch (error: any) {
    console.error('❌ Error al obtener evento:', error.message);
    throw error;
  }
};

// Actualizar un evento
export const updateEvent = async (eventId: string, eventData: Partial<Event>): Promise<void> => {
  try {
    const docRef = doc(db, 'events', eventId);
    await updateDoc(docRef, {
      ...eventData,
      updatedAt: new Date()
    });
    console.log('✅ Evento actualizado exitosamente');
  } catch (error: any) {
    console.error('❌ Error al actualizar evento:', error.message);
    throw error;
  }
};

// Eliminar un evento
export const deleteEvent = async (eventId: string): Promise<void> => {
  try {
    const docRef = doc(db, 'events', eventId);
    await deleteDoc(docRef);
    console.log('✅ Evento eliminado exitosamente');
  } catch (error: any) {
    console.error('❌ Error al eliminar evento:', error.message);
    throw error;
  }
};

// Obtener todos los eventos (para administradores)
export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const q = query(
      collection(db, 'events'),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    const events: Event[] = [];

    querySnapshot.forEach((doc) => {
      events.push({
        id: doc.id,
        ...doc.data()
      } as Event);
    });

    console.log('✅ Todos los eventos obtenidos:', events.length);
    return events;
  } catch (error: any) {
    console.error('❌ Error al obtener todos los eventos:', error.message);
    throw error;
  }
}; 