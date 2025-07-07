# CreateDates - Aplicación Móvil de Eventos

Una aplicación web optimizada para móvil que permite crear y gestionar eventos de manera fácil e intuitiva, con un diseño moderno usando Tailwind CSS.

## 🚀 Características

- **Diseño Móvil-First**: Optimizada completamente para dispositivos móviles
- **Autenticación con Firebase**: Sistema de login y registro seguro
- **Gestión de Eventos**: Crear, ver y organizar eventos
- **Interfaz Moderna**: Diseño limpio y responsive con Tailwind CSS
- **Base de Datos en Tiempo Real**: Firebase Firestore para sincronización
- **Páginas Especializadas**: Makro, Yaguar y Maxi-Carrefour con funcionalidades específicas
- **Despliegue Automático**: Configurado para Vercel

## 📱 Tecnologías Utilizadas

- **React 18** con TypeScript
- **React Router** para navegación
- **Firebase** (Auth, Firestore)
- **Tailwind CSS** para estilos modernos y responsive
- **PostCSS** y **Autoprefixer** para optimización

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
│   ├── Layout.tsx      # Layout principal con menú lateral
│   ├── Header.tsx      # Header de la aplicación
│   └── SideMenu.tsx    # Menú lateral responsive
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página de inicio
│   ├── Login.tsx       # Página de login
│   ├── Register.tsx    # Página de registro
│   ├── Dashboard.tsx   # Dashboard principal
│   ├── CreateEvent.tsx # Crear eventos
│   ├── Makro.tsx       # Página especializada Makro
│   ├── Yaguar.tsx      # Página especializada Yaguar
│   └── MaxiCarrefour.tsx # Página especializada Maxi-Carrefour
├── firebase/           # Configuración de Firebase
│   └── config.ts
├── App.tsx             # Componente principal con rutas
├── index.css           # Estilos globales con Tailwind
├── tailwind.config.js  # Configuración de Tailwind CSS
└── postcss.config.js   # Configuración de PostCSS
```

## 🎨 Características de Diseño

### Tailwind CSS
- **Diseño Moderno**: Utilizando clases de utilidad de Tailwind CSS
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Componentes Reutilizables**: Botones, cards y elementos consistentes
- **Animaciones**: Transiciones suaves y efectos visuales

### Páginas Especializadas
- **Makro**: Desplegables para selección de productos y categorías
- **Yaguar**: Sistema de desplegables con opciones específicas
- **Maxi-Carrefour**: Interfaz para gestión de productos

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

### Páginas Especializadas

6. **Makro** (`/makro`) - Gestión de productos Makro con desplegables
7. **Yaguar** (`/yaguar`) - Gestión de productos Yaguar con desplegables
8. **Maxi-Carrefour** (`/maxi-carrefour`) - Gestión de productos Maxi-Carrefour

### Características Avanzadas

- **Menú Lateral**: Navegación responsive con animaciones
- **Desplegables Dinámicos**: Selección de productos y categorías
- **Autenticación Segura**: Sistema de login/registro con Firebase
- **Gestión de Estado**: Hooks optimizados para evitar warnings

## 🚀 Despliegue

### Despliegue en Vercel

La aplicación está configurada para despliegue automático en Vercel:

1. **Configuración Automática**: El archivo `vercel.json` está configurado
2. **Build Optimizado**: Configuración para React y Tailwind CSS
3. **Despliegue Continuo**: Integración con GitHub para despliegue automático

### Comandos de Despliegue

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod

# O construir y desplegar manualmente
npm run build
vercel --prod
```

### Otras Plataformas

También puedes desplegar en:
- Firebase Hosting
- Netlify
- GitHub Pages

## 📝 Notas de Desarrollo

### Migración a Tailwind CSS
- ✅ Eliminados todos los archivos CSS personalizados
- ✅ Migrados todos los estilos a clases de Tailwind
- ✅ Configuración optimizada de PostCSS y Autoprefixer
- ✅ Diseño responsive y moderno

### Mejoras Recientes
- ✅ Páginas especializadas con funcionalidades específicas
- ✅ Sistema de desplegables dinámicos
- ✅ Menú lateral con animaciones suaves
- ✅ Configuración de Vercel para despliegue automático
- ✅ Corrección de warnings de ESLint y hooks

## 🎯 Próximas Mejoras

- [ ] Integración con APIs de productos
- [ ] Sistema de notificaciones push
- [ ] Modo offline con Service Workers
- [ ] PWA (Progressive Web App)
- [ ] Tests automatizados

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🔗 Enlaces Útiles

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Router Documentation](https://reactrouter.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
