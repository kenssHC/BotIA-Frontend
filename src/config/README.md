# Configuración de API - Frontend

Este directorio contiene la configuración centralizada para todas las llamadas a la API del frontend.

## 📁 Estructura

```
src/config/
├── api.config.js     # Configuración centralizada de URLs y endpoints
└── README.md         # Este archivo
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# URL base de la API
VITE_API_BASE_URL=http://localhost:4006

# Tenant por defecto
VITE_DEFAULT_TENANT_ID=richarq

# Configuración de desarrollo
VITE_DEV_MODE=true
VITE_API_TIMEOUT=10000
```

### Configuración por Entorno

#### Desarrollo Local
```env
VITE_API_BASE_URL=http://localhost:4006
```

#### Staging
```env
VITE_API_BASE_URL=https://staging-api.tudominio.com
```

#### Producción
```env
VITE_API_BASE_URL=https://api.tudominio.com
# O dejar vacío para usar el dominio actual
VITE_API_BASE_URL=
```

## 🚀 Uso

### 1. Importar Configuración

```javascript
import { API_ENDPOINTS, getAuthHeaders } from '../config/api.config.js';
```

### 2. Usar Endpoints Centralizados

```javascript
// ❌ Antes (hardcodeado)
const response = await fetch('http://localhost:4006/users');

// ✅ Ahora (centralizado)
const response = await fetch(API_ENDPOINTS.USERS.BASE);
```

### 3. Usar Servicio Base (Recomendado)

```javascript
import ApiService from '../services/apiService.js';
import UserService from '../services/userService.js';

// Llamadas directas con ApiService
const users = await ApiService.get('/users');
const user = await ApiService.post('/users', userData);

// Usar servicios específicos (más limpio)
const users = await UserService.getUsers();
const newUser = await UserService.createUser(userData);
```

## 📋 Endpoints Disponibles

### Autenticación
```javascript
API_ENDPOINTS.AUTH.LOGIN          // /api/auth/login
API_ENDPOINTS.AUTH.REGISTER       // /api/auth/register
API_ENDPOINTS.AUTH.FORGOT_PASSWORD // /api/auth/forgot-password
```

### Usuarios
```javascript
API_ENDPOINTS.USERS.BASE          // /users
API_ENDPOINTS.USERS.BY_ID(123)    // /users/123
API_ENDPOINTS.USERS.PROFILE       // /users/profile
```

### Reportes
```javascript
API_ENDPOINTS.REPORTS.BASE        // /api/reports
API_ENDPOINTS.REPORTS.BY_ID(456)  // /api/reports/456
```

### LLM
```javascript
API_ENDPOINTS.LLM.ANALYZE         // /api/llm/analyze
API_ENDPOINTS.LLM.QUERY           // /api/llm/query
API_ENDPOINTS.LLM.GENERATE_SQL    // /api/llm/generate-sql
```

## 🛠️ Servicios Disponibles

### ApiService (Servicio Base)

```javascript
import ApiService from '../services/apiService.js';

// Métodos disponibles
const data = await ApiService.get('/endpoint');
const result = await ApiService.post('/endpoint', data);
const updated = await ApiService.put('/endpoint', data);
const patched = await ApiService.patch('/endpoint', data);
const deleted = await ApiService.delete('/endpoint');

// Subir archivos
const uploaded = await ApiService.upload('/upload', formData, onProgress);

// Descargar archivos
const file = await ApiService.download('/download', 'filename.pdf');
```

### UserService (Usuarios)

```javascript
import UserService from '../services/userService.js';

// Operaciones CRUD
const users = await UserService.getUsers();
const user = await UserService.getUserById(123);
const newUser = await UserService.createUser(userData);
const updated = await UserService.updateUser(123, userData);
const deleted = await UserService.deleteUser(123);

// Operaciones específicas
const profile = await UserService.getCurrentUserProfile();
const search = await UserService.searchUsers({ query: 'admin' });
const stats = await UserService.getUserStats();
```

### ReportService (Reportes)

```javascript
import ReportService from '../services/reportService.js';

// El servicio mantiene su funcionalidad existente
// pero ahora usa la configuración centralizada
```

## 🔐 Autenticación

### Headers Automáticos

Todos los servicios agregan automáticamente:
- `Authorization: Bearer <token>` (si existe)
- `X-Tenant-ID: <tenantId>` (configurado o por defecto)
- `Content-Type: application/json`

### Manejo de Tokens

```javascript
// Configurar token
ApiService.setAuthToken('jwt-token-here');

// Configurar tenant
ApiService.setTenantId('mi-tenant');

// Limpiar autenticación
ApiService.clearAuth();
```

## 🚨 Manejo de Errores

### Errores Automáticos

- **401**: Redirige automáticamente a login
- **403**: Log de acceso denegado
- **404**: Log de recurso no encontrado
- **500**: Log de error del servidor
- **Red**: Manejo de errores de conexión

### Manejo Manual

```javascript
try {
  const data = await ApiService.get('/endpoint');
} catch (error) {
  if (error.isNetworkError) {
    // Error de conexión
    console.log('Sin conexión a internet');
  } else {
    // Error del servidor
    console.log(`Error ${error.status}: ${error.message}`);
  }
}
```

## 📊 Logging

En modo desarrollo, se registran automáticamente:
- Todas las llamadas a la API
- Respuestas y errores
- Tiempos de respuesta

## 🔄 Migración

### Pasos para Migrar Código Existente

1. **Reemplazar URLs hardcodeadas**:
   ```javascript
   // Antes
   const url = 'http://localhost:4006/users';
   
   // Después
   import { API_ENDPOINTS } from '../config/api.config.js';
   const url = API_ENDPOINTS.USERS.BASE;
   ```

2. **Usar servicios específicos**:
   ```javascript
   // Antes
   const response = await fetch('/users');
   const users = await response.json();
   
   // Después
   import UserService from '../services/userService.js';
   const users = await UserService.getUsers();
   ```

3. **Actualizar manejo de errores**:
   ```javascript
   // Antes
   try {
     const response = await fetch('/users');
     if (!response.ok) throw new Error('Error');
   } catch (error) {
     console.error(error);
   }
   
   // Después
   try {
     const users = await UserService.getUsers();
   } catch (error) {
     // El manejo de errores es automático
     console.error('Error específico:', error.message);
   }
   ```

## ✅ Beneficios

1. **Centralización**: Todas las URLs en un solo lugar
2. **Flexibilidad**: Fácil cambio entre entornos
3. **Mantenimiento**: Menos código duplicado
4. **Escalabilidad**: Arquitectura preparada para crecimiento
5. **Debugging**: Logging automático en desarrollo
6. **Seguridad**: Manejo automático de autenticación
7. **Robustez**: Manejo centralizado de errores

## 🔧 Configuración Avanzada

### Timeout Personalizado

```javascript
// Para operaciones que requieren más tiempo
const config = { timeout: 60000 }; // 1 minuto
const data = await ApiService.get('/long-operation', config);
```

### Headers Personalizados

```javascript
const config = {
  headers: {
    'Custom-Header': 'valor'
  }
};
const data = await ApiService.post('/endpoint', data, config);
```

### Interceptors Personalizados

```javascript
const axiosInstance = ApiService.getAxiosInstance();

// Agregar interceptor personalizado
axiosInstance.interceptors.request.use((config) => {
  // Lógica personalizada
  return config;
});
```