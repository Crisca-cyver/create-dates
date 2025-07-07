// 🔥 EJEMPLO DE CONFIGURACIÓN DE FIREBASE
// Copia este archivo como firebase-config.ts y reemplaza con tus credenciales reales


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxU7S_SY4TJET35TbDbuHJ74X1CsjnupE",
  authDomain: "mitrabajo-51f5f.firebaseapp.com",
  projectId: "mitrabajo-51f5f",
  storageBucket: "mitrabajo-51f5f.firebasestorage.app",
  messagingSenderId: "581796029384",
  appId: "1:581796029384:web:68fbd8dc29eb7392bcd6fd",
  measurementId: "G-GDL619FBVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// 📋 PASOS PARA OBTENER TUS CREDENCIALES:
// 1. Ve a https://console.firebase.google.com/
// 2. Crea un nuevo proyecto o selecciona uno existente
// 3. Ve a Configuración del proyecto (ícono de engranaje)
// 4. Selecciona "Configuración general"
// 5. Baja hasta "Tus apps" y haz clic en "Agregar app"
// 6. Selecciona Web (</>) 
// 7. Dale un nombre a tu app (ej: "create-dates-web")
// 8. Haz clic en "Registrar app"
// 9. Copia las credenciales que te muestra Firebase
// 10. Reemplaza las credenciales en src/firebase/config.ts

// 🔧 CONFIGURACIÓN ADICIONAL NECESARIA:
// 1. En Authentication > Sign-in method, habilita Email/Password
// 2. En Firestore Database > Create database, crea la base de datos
// 3. En Firestore Database > Rules, configura las reglas de seguridad 