import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  UserCredential 
} from 'firebase/auth';
import { auth } from './config';

// 🔐 SERVICIO DE AUTENTICACIÓN

// Registrar nuevo usuario
export const registerUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('✅ Usuario registrado exitosamente:', userCredential.user.email);
    return userCredential;
  } catch (error: any) {
    console.error('❌ Error al registrar usuario:', error.message);
    throw error;
  }
};

// Iniciar sesión
export const loginUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('✅ Usuario logueado exitosamente:', userCredential.user.email);
    return userCredential;
  } catch (error: any) {
    console.error('❌ Error al iniciar sesión:', error.message);
    throw error;
  }
};

// Cerrar sesión
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log('✅ Usuario deslogueado exitosamente');
  } catch (error: any) {
    console.error('❌ Error al cerrar sesión:', error.message);
    throw error;
  }
};

// Obtener usuario actual
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Escuchar cambios en el estado de autenticación
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
}; 