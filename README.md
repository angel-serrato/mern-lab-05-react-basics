# LAB 05 - Aplicación MERN: Gestor de Usuarios

Una aplicación full-stack MERN (MongoDB, Express, React, Node.js) para gestionar usuarios con operaciones CRUD completas. Implementa patrones modernos de React, integración con APIs RESTful, y validación de datos robusta.

## 🎯 Descripción del Proyecto

Esta aplicación permite gestionar un listado de usuarios con las siguientes operaciones:

- **Crear** nuevos usuarios
- **Listar** todos los usuarios activos e inactivos
- **Editar** información de usuarios existentes
- **Deactivar** usuarios (soft delete)

La interfaz utiliza un diseño minimalista con Tailwind CSS, mientras que el backend proporciona una API RESTful robusta con validación Joi y MongoDB.

## 🛠️ Stack Tecnológico

### Frontend

- **React 18+** con TypeScript y Vite
- **React Router v6** para navegación
- **Axios** para HTTP requests
- **Tailwind CSS v3** para estilos
- **react-hot-toast** para notificaciones
- **Custom Hooks** para manejo de estado

### Backend

- **Node.js** con Express.js
- **MongoDB** con Mongoose ODM
- **Joi** para validación de datos
- **CORS** configurado
- **Morgan** para logging

## 📋 Requisitos Previos

- Node.js v14+ instalado
- MongoDB localmente ejecutándose (puerto 27017 por defecto) o MongoDB Atlas conectado
- npm o yarn como gestor de paquetes

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd mern-lab-05-react-basics
```

### 2. Instalar dependencias del servidor

```bash
cd server
npm install
```

### 3. Instalar dependencias del cliente

```bash
cd ../client
npm install
```

## ⚙️ Configuración

### Variables de Entorno - Backend (`server/.env`)

Crear archivo `.env` en la carpeta `server/`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-lab-05
NODE_ENV=development
```

**O usar MongoDB Atlas:**

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-lab-05
NODE_ENV=development
```

### Variables de Entorno - Frontend (`client/.env`)

Crear archivo `.env` en la carpeta `client/`:

```env
VITE_API_URL=http://localhost:5000
```

## 🚀 Cómo Ejecutar

### Opción 1: Ejecutar en dos terminales (Recomendado)

**Terminal 1 - Backend:**

```bash
cd server
npm start
```

El servidor estará disponible en `http://localhost:5000`

**Terminal 2 - Frontend:**

```bash
cd client
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Opción 2: Ejecución con npm scripts desde raíz (si está configurado)

```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
mern-lab-05-react-basics/
├── client/                           # Aplicación React
│   ├── src/
│   │   ├── api/
│   │   │   └── resource.api.js      # Cliente HTTP con Axios
│   │   ├── components/
│   │   │   ├── Header.tsx           # Navegación principal
│   │   │   ├── UsersList.tsx        # Listado de usuarios
│   │   │   ├── UsersForm.tsx        # Crear/Editar usuario
│   │   │   └── ConfirmModal.tsx     # Modal de confirmación
│   │   ├── hooks/
│   │   │   └── useUser.js           # Custom hook para usuarios
│   │   ├── pages/
│   │   │   └── Home.tsx             # Página de inicio
│   │   ├── App.tsx                  # Configuración de rutas
│   │   └── main.tsx                 # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── index.html
│
├── server/                          # Servidor Node.js/Express
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.config.js         # Conexión a MongoDB
│   │   │   └── env.config.js        # Variables de entorno
│   │   ├── controllers/
│   │   │   └── user.controller.js   # Lógica de requests HTTP
│   │   ├── services/
│   │   │   └── user.service.js      # Lógica de negocio
│   │   ├── models/
│   │   │   └── user.model.js        # Schema de MongoDB
│   │   ├── routes/
│   │   │   └── user.routes.js       # Definición de rutas
│   │   ├── validators/
│   │   │   └── user.validator.js    # Validación Joi
│   │   ├── middlewares/
│   │   │   ├── error.middleware.js  # Manejo de errores
│   │   │   └── not-found.middleware.js
│   │   ├── app.js                   # Configuración Express
│   │   └── server.js                # Entry point
│   └── package.json
│
└── README.md                        # Este archivo
```

## 🔌 Endpoints API

### Base URL: `http://localhost:5000/users`

#### GET `/users`

Obtener todos los usuarios (activos e inactivos)

```bash
curl http://localhost:5000/users
```

#### GET `/users/:id`

Obtener un usuario específico

```bash
curl http://localhost:5000/users/607f1f77bcf86cd799439011
```

#### POST `/users`

Crear un nuevo usuario

```bash
curl -X POST http://localhost:5000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan García",
    "email": "juan@example.com"
  }'
```

#### PUT `/users/:id`

Actualizar un usuario existente

```bash
curl -X PUT http://localhost:5000/users/607f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan García Pérez",
    "email": "juan.nuevo@example.com"
  }'
```

#### DELETE `/users/:id`

Deactivar un usuario (soft delete)

```bash
curl -X DELETE http://localhost:5000/users/607f1f77bcf86cd799439011
```

## ✨ Características Principales

### Frontend

- ✅ **Interfaz Minimalista**: Diseño limpio con Tailwind CSS
- ✅ **Routing Dinámico**: Navegación entre vistas con React Router v6
- ✅ **Custom Hook**: `useUser.js` para gestión centralizada de estado
- ✅ **Validación de Formularios**: Control de inputs y manejo de errores
- ✅ **Notificaciones Toast**: Feedback visual con react-hot-toast
- ✅ **Estados de Carga**: Spinners y mensajes durante operaciones async
- ✅ **Modal de Confirmación**: Prevenir eliminaciones accidentales
- ✅ **Edición Pre-poblada**: Al editar, el formulario se llena automáticamente

### Backend

- ✅ **API RESTful**: Endpoints CRUD bien definidos
- ✅ **Validación Robusta**: Joi para validación de entrada
- ✅ **Manejo de Errores**: Middleware centralizado para errores
- ✅ **Soft Delete**: Usuarios inactivados, no eliminados
- ✅ **CORS Configurado**: Restricción a cliente local
- ✅ **Logging**: Morgan para registrar requests HTTP
- ✅ **Normalización de Datos**: Email en minúsculas automáticamente

## 🔄 Flujo de Datos

### Crear Usuario

```
Frontend (Form) → Validación local → Axios POST → Express Controller
→ Joi Validation → User Service → MongoDB insert → Response
→ Toast "Éxito" → Actualizar estado en useUser hook → Re-render
```

### Editar Usuario

```
Frontend (Link a /edit/:id) → useEffect carga datos → Form pre-poblada
→ Usuario edita y submit → Axios PUT → Express Controller → Joi Validation
→ User Service → MongoDB update → Response → Toast "Éxito" → Redirect a /users
```

### Eliminar Usuario

```
Frontend (Modal de confirmación) → Axios DELETE → Express Controller
→ User Service → MongoDB soft delete (isActive: false) → Response
→ Toast "Éxito" → removeUser de estado → Re-render lista
```

## 📚 Conceptos Aprendidos

### React Avanzado

- **Custom Hooks**: Encapsulación de lógica reutilizable en `useUser.js`
- **useEffect**: Manejo de efectos secundarios y cleanup para prevenir race conditions
- **Controlled Components**: Inputs controlados con `value` y `onChange`
- **Immutable State Updates**: Uso de spread operator y métodos de array puro
- **Component Composition**: Separación de componentes en rutas y componentes reutilizables

### Node.js/Express

- **Arquitectura en capas**: Controllers → Services → Models
- **Middleware**: Logging, CORS, error handling
- **RESTful Design**: Métodos HTTP apropiados para operaciones
- **Manejo de Errores**: Try-catch y middleware centralizado

### MongoDB/Mongoose

- **Schema Validation**: Definición y validación de datos
- **Normalization**: Lowercase para emails únicos
- **Soft Delete**: isActive flag en lugar de eliminar registros
- **Timestamps**: Control automático de createdAt/updatedAt

### Full-Stack Integration

- **CORS**: Comunicación segura entre dominios
- **API Contracts**: Respuestas consistentes
- **Environment Variables**: Configuración según entorno

## 🔐 Validación de Datos

### Usuario Crear/Actualizar

```javascript
{
  name: string (3-30 caracteres),
  email: string (formato válido, único)
}
```

- Ambos campos son requeridos al crear
- Al actualizar, almenos uno debe estar presente
- Email se normaliza a minúsculas automáticamente

## 📊 Modelo de Datos - Usuario

```javascript
{
  _id: ObjectId,
  name: String (requerido, trimmed),
  email: String (requerido, único, lowercase),
  isActive: Boolean (default: true),
  deactivatedAt: Date (null si activo),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🚨 Troubleshooting

### Error: "ECONNREFUSED - MongoDB"

- Verificar que MongoDB está ejecutándose: `mongod`
- Verificar MONGODB_URI en `.env`

### Error: "CORS blocked"

- Verificar que VITE_API_URL es correcto en `client/.env`
- Verificar que el servidor tiene CORS habilitado

### Error: "Cannot find module"

- Ejecutar `npm install` en ambas carpetas
- Verificar que no hay errores de dependencias

### Frontend no recibe datos

- Verificar que el servidor está en http://localhost:5000
- Abrir DevTools → Network para ver requests
- Verificar `resource.api.js` tiene baseURL correcto

## 📝 Licencia

Proyecto educativo para LAB 05.

## 👨‍💻 Autor

Desarrollado como parte del programa MERN.

---

**Última actualización**: Febrero 2026
**Versión**: 1.0.0
