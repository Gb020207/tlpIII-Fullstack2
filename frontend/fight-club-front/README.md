# Fight Club - FFC Frontend

Un frontend moderno y visualmente atractivo inspirado en UFC Español, construido con React, Vite y Tailwind CSS.

## 🚀 Características

- **Diseño UFC-inspired**: Tema oscuro con colores rojo, negro y dorado
- **Responsive**: Funciona en desktop y mobile
- **Componentes reutilizables**: Cards, botones, loaders
- **Integración completa**: Consume la API REST del backend
- **CRUD completo**: Crear, leer, actualizar y eliminar peleadores
- **Animaciones suaves**: Hover effects y transiciones

## 🛠️ Tecnologías

- **React 18** - Framework frontend
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **ESLint** - Linting

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Barra de navegación
│   ├── Footer.jsx      # Pie de página
│   ├── FighterCard.jsx # Card de peleador
│   └── Loading.jsx     # Componente de carga
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal con hero
│   ├── Fighters.jsx    # Lista de todos los peleadores
│   ├── FighterDetail.jsx # Detalle de un peleador
│   ├── CreateFighter.jsx # Formulario de creación
│   └── EditFighter.jsx   # Formulario de edición
├── services/           # Servicios API
│   └── api.js          # Funciones para consumir el backend
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- Backend corriendo en http://localhost:3000

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
npm run preview
```

## 🎨 Diseño

### Paleta de Colores UFC
- **Rojo UFC**: `#dc143c`
- **Negro UFC**: `#0a0a0a`
- **Gris UFC**: `#1a1a1a`
- **Dorado UFC**: `#ffd700`

### Componentes Estilizados
- `.btn-ufc` - Botones con estilo UFC
- `.card-ufc` - Cards con tema oscuro
- `.hero-gradient` - Gradiente para secciones hero

## 🔌 API Integration

El frontend consume los siguientes endpoints del backend:

- `GET /api/peleadores` - Lista de peleadores
- `GET /api/peleadores/:id` - Detalle de peleador
- `POST /api/peleadores/crear` - Crear peleador
- `PUT /api/peleadores/actualizar/:id` - Actualizar peleador
- `DELETE /api/peleadores/borrar/:id` - Eliminar peleador

## 📱 Páginas

### Home (`/`)
- Hero section con llamada a acción
- Lista de peleadores destacados
- Enlaces a crear nuevo peleador

### Peleadores (`/peleadores`)
- Lista completa de todos los peleadores
- Cards con información básica
- Acciones: ver detalle, editar, eliminar

### Detalle de Peleador (`/peleador/:id`)
- Información completa del peleador
- Estadísticas (victorias/derrotas)
- Win rate calculado
- Botones de acción

### Crear Peleador (`/crear`)
- Formulario para registrar nuevo peleador
- Validación de campos requeridos
- Lista de estilos de combate

### Editar Peleador (`/editar/:id`)
- Formulario pre-llenado para editar
- Misma validación que crear

## 🎯 Funcionalidades

- ✅ Diseño responsive
- ✅ Tema oscuro UFC
- ✅ CRUD completo de peleadores
- ✅ Manejo de errores
- ✅ Estados de carga
- ✅ Navegación fluida
- ✅ Formularios con validación
- ✅ Animaciones y transiciones

## 🔧 Desarrollo

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Ejecutar ESLint

### Variables de Entorno

El frontend espera que el backend esté corriendo en:
```
http://localhost:3000/api
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**¡Únete al Fight Club y registra a los mejores peleadores!** 🥊

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
