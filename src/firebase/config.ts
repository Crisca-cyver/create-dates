import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// 🔥 CONFIGURACIÓN DE FIREBASE
// Para obtener estas credenciales:
// 1. Ve a https://console.firebase.google.com/
// 2. Crea un proyecto o selecciona uno existente
// 3. Ve a Configuración del proyecto > Configuración general
// 4. En "Tus apps" haz clic en "Agregar app" > Web
// 5. Copia las credenciales que te muestra Firebase

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id"
};

// Validar que las credenciales no sean las de ejemplo
if (firebaseConfig.apiKey === "tu-api-key") {
  console.error("❌ ERROR: Debes configurar las credenciales reales de Firebase en src/firebase/config.ts");
  console.error("📖 Instrucciones: https://console.firebase.google.com/");
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios de Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 