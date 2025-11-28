# Flujo de Autenticación - Azira React App

## Endpoints Configurados

Todos los endpoints de autenticación están configurados para usar el proxy hacia `http://localhost:9543`:

### 1. Login
- **Endpoint**: `/api/auth/login`
- **Método**: POST
- **Headers**: 
  - `Content-Type: application/json`
  - `X-Tenant-ID: richarq`
- **Body**: `{ username, password }`
- **Respuesta exitosa**: `{ access_token, user, requiresPasswordChange }`

### 2. Forgot Password
- **Endpoint**: `/api/auth/forgot-password`
- **Método**: POST
- **Headers**: 
  - `Content-Type: application/json`
  - `X-Tenant-ID: richarq`
- **Body**: `{ email }`

### 3. Reset Password
- **Endpoint**: `/api/auth/reset-password?token=XXX&tenantId=XXX`
- **Método**: POST
- **Headers**: 
  - `Content-Type: application/json`
  - `X-Tenant-ID: {tenantId}`
- **Body**: `{ newPassword }`

### 4. Change Password (Primera vez)
- **Endpoint**: `/api/auth/change-password`
- **Método**: POST
- **Headers**: 
  - `Authorization: Bearer {tempToken}`
  - `Content-Type: application/json`
  - `X-Tenant-ID: {user.tenant}`
- **Body**: `{ currentPassword, newPassword }`
- **Respuesta exitosa**: `{ success: true, access_token?, token? }` (puede incluir nuevo token)

## Flujo de Autenticación

### Flujo Normal de Login
1. Usuario ingresa credenciales en `/login`
2. Si las credenciales son correctas:
   - Si `requiresPasswordChange = true`: redirige a `/first-password-change`
   - Si `requiresPasswordChange = false`: redirige a `/dashboard`

### Flujo de Primer Cambio de Contraseña
1. Usuario cambia la contraseña en `/first-password-change`
2. Tras cambio exitoso: 
   - Se guarda el nuevo token definitivo (si viene en la respuesta del endpoint)
   - Se guardan los datos del usuario definitivamente
   - **Redirige directamente a `/dashboard`** (sin necesidad de volver a loguearse)
3. Usuario ya está autenticado en el sistema con la nueva contraseña

### Flujo de Recuperación de Contraseña
1. Usuario solicita recuperación en `/ForgotPassword`
2. Redirige a `/VerifyEmail` con mensaje de confirmación
3. Usuario hace clic en enlace del email (formato: `/reset-password?token=XXX&tenantId=XXX`)
4. Usuario establece nueva contraseña en `/reset-password`
5. Tras éxito redirige a `/PasswordUpdated`
6. Desde `/PasswordUpdated` puede regresar a `/login`

## Archivos Modificados

### ✅ Corregidos:
- `src/auth/FirstPasswordChange.jsx`: 
  - Corregido error de sintaxis en input type
  - Cambiado redirección a `/login` después del cambio exitoso
  - Mejorado manejo de errores
  
- `src/auth/ForgotPassword.jsx`:
  - Reemplazada variable de entorno con endpoint directo
  - Agregados headers requeridos
  - Mejorado manejo de errores

- `src/auth/NewPassword.jsx`:
  - Reemplazada variable de entorno con endpoint directo
  - Agregados headers requeridos  
  - Mejorado manejo de errores

- `src/auth/VerifyEmail.jsx`:
  - Cambiada redirección de `/` a `/login`

- `src/auth/PasswordUpdated.jsx`:
  - Cambiada redirección de `/` a `/login`

### ✅ Ya configurados correctamente:
- `src/auth/login.jsx`: Ya usaba `/api/auth/login` correctamente
- `src/auth/auth.jsx`: Layout wrapper funcional
- `src/main.jsx`: Todas las rutas de auth configuradas

## Configuración del Proxy

El archivo `vite.config.js` está configurado para:
- Proxy `/api/*` → `http://localhost:9543`
- Puerto frontend: 4006
- Puerto backend: 9543

## Manejo de Errores

Todos los archivos de autenticación incluyen manejo detallado de errores:
- Error 404: Endpoint no encontrado
- Error 400: Datos inválidos
- Error 401: Credenciales incorrectas/Token expirado
- Error 500: Error interno del servidor
- Sin respuesta: Error de conexión

## Almacenamiento Local

### Tokens Temporales (para cambio de contraseña)
- `tempToken`: Token temporal para cambio de contraseña
- `tempUser`: Datos temporales del usuario

### Tokens Definitivos (para sesión)
- `token`: Token de autenticación definitivo
- `usuario`: Datos del usuario autenticado

## Interceptores de Axios

El archivo `src/utils/axiosConfig.js` configura automáticamente:
- Headers `X-Tenant-ID` para todas las peticiones a `/api`
- Header `Authorization` cuando hay token (excepto para login)
- Manejo de errores 401 (limpieza de tokens)
- Sistema de reintentos para errores de conexión 