/**
 * Configuración centralizada de la API
 * Este archivo maneja todas las URLs base y endpoints de la aplicación
 * para facilitar el despliegue en diferentes entornos
 */

// Configuración de entorno
const getApiBaseUrl = () => {
  // En producción, usar variables de entorno o URL relativa
  if (import.meta.env.PROD) {
    // En producción, usar la URL del dominio actual o variable de entorno
    return import.meta.env.VITE_API_BASE_URL || window.location.origin;
  }
  
  // En desarrollo, usar localhost
  return import.meta.env.VITE_API_BASE_URL || 'http://localhost:4006';
};

// URL base de la API
export const API_BASE_URL = getApiBaseUrl();

// Configuración de endpoints centralizados
export const API_ENDPOINTS = {
  // Módulo de autenticación
  AUTH: {
    BASE: `${API_BASE_URL}/api/auth`,
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    FORGOT_PASSWORD: `${API_BASE_URL}/api/auth/forgot-password`,
    RESET_PASSWORD: `${API_BASE_URL}/api/auth/reset-password`,
    ME: `${API_BASE_URL}/api/auth/me`,
  },

  // Módulo de usuarios
  USERS: {
    BASE: `${API_BASE_URL}/api/users`,
    BY_ID: (id) => `${API_BASE_URL}/api/users/${id}`,
    PROFILE: `${API_BASE_URL}/api/users/profile`,
  },

  // Módulo de super admin
  SUPER_ADMIN: {
    BASE: `${API_BASE_URL}/super-admin`,
    CREATE: `${API_BASE_URL}/super-admin/create`,
    EXISTS: `${API_BASE_URL}/super-admin/exists`,
    PROFILE: `${API_BASE_URL}/super-admin/profile`,
    TENANTS: {
      BASE: `${API_BASE_URL}/super-admin/tenants`,
      CREATE: `${API_BASE_URL}/super-admin/tenants`,
    },
  },

  // Módulo de reportes
  REPORTS: {
    BASE: `${API_BASE_URL}/api/reports`,
    BY_ID: (id) => `${API_BASE_URL}/api/reports/${id}`,
  },

  // Módulo de tenants
  TENANTS: {
    BASE: `${API_BASE_URL}/api/tenants`,
    BY_ID: (id) => `${API_BASE_URL}/api/tenants/${id}`,
    CREATE: `${API_BASE_URL}/api/tenants`,
    VERIFY: `${API_BASE_URL}/api/tenants/verify`,
    RESET_ADMIN: `${API_BASE_URL}/api/tenants/reset-admin`,
  },

  // Módulo de WhatsApp
  WHATSAPP: {
    BASE: `${API_BASE_URL}/api/whatsapp`,
    MESSAGES: `${API_BASE_URL}/api/whatsapp/messages`,
    TEMPLATES: `${API_BASE_URL}/api/whatsapp/templates`,
    QR_CODE: `${API_BASE_URL}/api/whatsapp/qr-code`,
    CONNECTION_STATUS: `${API_BASE_URL}/api/whatsapp/connection-status`,
    RECONNECT: `${API_BASE_URL}/api/whatsapp/reconnect`,
  },

  // Módulo de datos
  DATA: {
    BASE: `${API_BASE_URL}/api/data`,
    EXPORT: `${API_BASE_URL}/api/data/export`,
    IMPORT: `${API_BASE_URL}/api/data/import`,
  },

  // Módulo LLM
  LLM: {
    BASE: `${API_BASE_URL}/api/llm`,
    ANALYZE: `${API_BASE_URL}/api/llm/analyze`,
    QUERY: `${API_BASE_URL}/api/llm/query`,
    GENERATE_SQL: `${API_BASE_URL}/api/llm/generate-sql`,
  },
};

// Configuración de headers por defecto
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'X-Tenant-ID': 'richarq', // Valor por defecto, puede ser sobrescrito
};

// Función helper para obtener headers con autenticación
export const getAuthHeaders = (token = null) => {
  const headers = { ...DEFAULT_HEADERS };
  
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  return headers;
};

// Función helper para obtener headers con tenant específico
export const getTenantHeaders = (tenantId = 'richarq', token = null) => {
  const headers = {
    ...DEFAULT_HEADERS,
    'X-Tenant-ID': tenantId,
  };
  
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  return headers;
};

// Configuración de timeouts
export const API_CONFIG = {
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 segundo
};

// Función para logging de API calls (solo en desarrollo)
export const logApiCall = (method, url, data = null) => {
  if (import.meta.env.DEV) {
    console.log(`🔄 API Call: ${method} ${url}`, data ? { data } : '');
  }
};

// Función para logging de respuestas de API (solo en desarrollo)
export const logApiResponse = (method, url, status, data = null) => {
  if (import.meta.env.DEV) {
    const emoji = status >= 200 && status < 300 ? '✅' : '❌';
    console.log(`${emoji} API Response: ${status} ${method} ${url}`, data ? { data } : '');
  }
};