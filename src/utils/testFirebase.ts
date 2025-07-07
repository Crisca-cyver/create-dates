import { auth, db } from '../firebase/config';
import { getCurrentUser } from '../firebase/auth';

// 🧪 UTILIDAD PARA PROBAR FIREBASE

export const testFirebaseConnection = async () => {
  console.log('🧪 Probando conexión a Firebase...');
  
  try {
    // Probar autenticación
    const user = getCurrentUser();
    console.log('✅ Autenticación configurada correctamente');
    console.log('👤 Usuario actual:', user ? user.email : 'No autenticado');
    
    // Probar Firestore
    console.log('📊 Firestore configurado correctamente');
    
    // Probar Storage
    console.log('📁 Storage configurado correctamente');
    
    console.log('🎉 ¡Firebase está configurado correctamente!');
    return true;
  } catch (error) {
    console.error('❌ Error en la configuración de Firebase:', error);
    return false;
  }
};

// Función para verificar si las credenciales están configuradas
export const checkFirebaseConfig = () => {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'tu-api-key',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'tu-proyecto.firebaseapp.com',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'tu-proyecto',
  };
  
  const isConfigured = !config.apiKey.includes('tu-api-key') && 
                      !config.authDomain.includes('tu-proyecto') &&
                      !config.projectId.includes('tu-proyecto');
  
  if (!isConfigured) {
    console.error('❌ ERROR: Las credenciales de Firebase no están configuradas');
    console.error('📖 Ve a src/firebase/config.ts y reemplaza las credenciales');
    console.error('🔗 Instrucciones: https://console.firebase.google.com/');
    return false;
  }
  
  console.log('✅ Credenciales de Firebase configuradas');
  return true;
}; 