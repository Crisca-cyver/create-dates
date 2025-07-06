# CreateDates - Aplicación Móvil de Eventos

Una aplicación web optimizada para móvil que permite crear y gestionar eventos de manera fácil y intuitiva.

## 🚀 Características

- **Diseño Móvil-First**: Optimizada completamente para dispositivos móviles
- **Autenticación con Firebase**: Sistema de login y registro seguro
- **Gestión de Eventos**: Crear, ver y organizar eventos
- **Interfaz Moderna**: Diseño limpio y responsive
- **Base de Datos en Tiempo Real**: Firebase Firestore para sincronización

## 📱 Tecnologías Utilizadas

- **React 18** con TypeScript
- **React Router** para navegación
- **Firebase** (Auth, Firestore)
- **CSS3** con diseño móvil optimizado

## 🛠️ Configuración

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto
3. Habilita Authentication con Email/Password
4. Crea una base de datos Firestore
5. Copia las credenciales de configuración

### 3. Configurar Variables de Entorno

Edita el archivo `src/firebase/config.ts` y reemplaza las credenciales:

```typescript
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id"
};
```

### 4. Ejecutar la Aplicación

```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`

## 📱 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout.tsx      # Layout principal
│   └── Layout.css
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página de inicio
│   ├── Login.tsx       # Página de login
│   ├── Register.tsx    # Página de registro
│   ├── Dashboard.tsx   # Dashboard principal
│   ├── CreateEvent.tsx # Crear eventos
│   └── *.css           # Estilos de cada página
├── firebase/           # Configuración de Firebase
│   └── config.ts
└── App.tsx             # Componente principal
```

## 🎨 Características de Diseño Móvil

- **Viewport Optimizado**: Configurado para dispositivos móviles
- **Touch-Friendly**: Botones y elementos optimizados para touch
- **Safe Area**: Soporte para dispositivos con notch
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Performance**: Optimizado para rendimiento móvil

## 🔧 Scripts Disponibles

- `npm start` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm test` - Ejecutar tests
- `npm run eject` - Eyectar configuración (irreversible)

## 📱 Funcionalidades

### Páginas Principales

1. **Home** (`/`) - Página de bienvenida con características
2. **Login** (`/login`) - Iniciar sesión
3. **Register** (`/register`) - Crear cuenta
4. **Dashboard** (`/dashboard`) - Ver eventos del usuario
5. **Create Event** (`/create-event`) - Crear nuevo evento

### Gestión de Eventos

- Crear eventos con título, fecha, hora, ubicación y descripción
- Ver lista de eventos en el dashboard
- Navegación intuitiva entre páginas
- Interfaz optimizada para móvil

## 🚀 Despliegue

Para desplegar la aplicación:

1. Construir la aplicación:
```bash
npm run build
```

2. Los archivos de producción estarán en la carpeta `build/`

3. Puedes desplegar en:
   - Firebase Hosting
   - Netlify
   - Vercel
   - GitHub Pages

## 📝 Notas de Desarrollo

- La aplicación está optimizada para dispositivos móviles
- Utiliza Firebase para autenticación y base de datos
- Diseño responsive con CSS moderno
- Navegación fluida entre páginas

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
