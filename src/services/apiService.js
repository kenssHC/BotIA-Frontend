/**
 * Servicio base para todas las llamadas a la API
 * Centraliza la lógica de HTTP requests, manejo de errores y autenticación
 */

import axios from 'axios';
import { 
  API_BASE_URL, 
  API_ENDPOINTS, 
  getAuthHeaders, 
  getTenantHeaders,
  API_CONFIG,
  logApiCall,
  logApiResponse 
} from '../config/api.config.js';

// Crear instancia de axios con configuración base
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requests - agregar headers automáticamente
apiClient.interceptors.request.use(
  (config) => {
    // Obtener token del localStorage
    const token = localStorage.getItem('token');
    const tenantId = localStorage.getItem('tenantId') || import.meta.env.VITE_DEFAULT_TENANT_ID || 'richarq';
    
    // Agregar headers de autenticación y tenant
    config.headers = {
      ...config.headers,
      ...getTenantHeaders(tenantId, token),
    };
    
    // Log de la llamada (solo en desarrollo)
    logApiCall(config.method?.toUpperCase(), config.url, config.data);
    
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Interceptor para responses - manejo centralizado de errores
apiClient.interceptors.response.use(
  (response) => {
    // Log de la respuesta (solo en desarrollo)
    logApiResponse(
      response.config.method?.toUpperCase(), 
      response.config.url, 
      response.status, 
      response.data
    );
    
    return response;
  },
  (error) => {
    const { response, request, config } = error;
    
    // Log del error
    if (response) {
      logApiResponse(
        config?.method?.toUpperCase(), 
        config?.url, 
        response.status, 
        response.data
      );
      
      // Manejo específico de errores HTTP
      switch (response.status) {
        case 401:
          // Token expirado o inválido
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/login';
          break;
        case 403:
          console.error('❌ Acceso denegado:', response.data?.message);
          break;
        case 404:
          console.error('❌ Recurso no encontrado:', config?.url);
          break;
        case 500:
          console.error('❌ Error interno del servidor:', response.data?.message);
          break;
        default:
          console.error(`❌ Error HTTP ${response.status}:`, response.data?.message);
      }
    } else if (request) {
      // Error de red
      console.error('❌ Error de red - No se pudo conectar con el servidor');
    } else {
      // Error de configuración
      console.error('❌ Error de configuración:', error.message);
    }
    
    return Promise.reject(error);
  }
);

/**
 * Clase principal del servicio API
 */
class ApiService {
  /**
   * Realizar petición GET
   * @param {string} endpoint - Endpoint relativo o URL completa
   * @param {Object} config - Configuración adicional de axios
   * @returns {Promise} Respuesta de la API
   */
  static async get(endpoint, config = {}) {
    try {
      const response = await apiClient.get(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Realizar petición POST
   * @param {string} endpoint - Endpoint relativo o URL completa
   * @param {Object} data - Datos a enviar
   * @param {Object} config - Configuración adicional de axios
   * @returns {Promise} Respuesta de la API
   */
  static async post(endpoint, data = {}, config = {}) {
    try {
      const response = await apiClient.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Realizar petición PUT
   * @param {string} endpoint - Endpoint relativo o URL completa
   * @param {Object} data - Datos a enviar
   * @param {Object} config - Configuración adicional de axios
   * @returns {Promise} Respuesta de la API
   */
  static async put(endpoint, data = {}, config = {}) {
    try {
      const response = await apiClient.put(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Realizar petición DELETE
   * @param {string} endpoint - Endpoint relativo o URL completa
   * @param {Object} config - Configuración adicional de axios
   * @returns {Promise} Respuesta de la API
   */
  static async delete(endpoint, config = {}) {
    try {
      const response = await apiClient.delete(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Realizar petición PATCH
   * @param {string} endpoint - Endpoint relativo o URL completa
   * @param {Object} data - Datos a enviar
   * @param {Object} config - Configuración adicional de axios
   * @returns {Promise} Respuesta de la API
   */
  static async patch(endpoint, data = {}, config = {}) {
    try {
      const response = await apiClient.patch(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Subir archivos
   * @param {string} endpoint - Endpoint para subir archivos
   * @param {FormData} formData - Datos del formulario con archivos
   * @param {Function} onUploadProgress - Callback para progreso de subida
   * @returns {Promise} Respuesta de la API
   */
  static async upload(endpoint, formData, onUploadProgress = null) {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      
      if (onUploadProgress) {
        config.onUploadProgress = onUploadProgress;
      }
      
      const response = await apiClient.post(endpoint, formData, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Descargar archivos
   * @param {string} endpoint - Endpoint para descargar
   * @param {string} filename - Nombre del archivo
   * @returns {Promise} Blob del archivo
   */
  static async download(endpoint, filename = 'download') {
    try {
      const response = await apiClient.get(endpoint, {
        responseType: 'blob',
      });
      
      // Crear enlace de descarga
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Manejo centralizado de errores
   * @param {Error} error - Error de axios
   * @returns {Object} Error formateado
   */
  static handleError(error) {
    const { response } = error;
    
    if (response) {
      // Error con respuesta del servidor
      return {
        status: response.status,
        message: response.data?.message || 'Error del servidor',
        data: response.data,
        isNetworkError: false,
      };
    } else if (error.request) {
      // Error de red
      return {
        status: 0,
        message: 'Error de conexión - Verifique su conexión a internet',
        data: null,
        isNetworkError: true,
      };
    } else {
      // Error de configuración
      return {
        status: 0,
        message: error.message || 'Error desconocido',
        data: null,
        isNetworkError: false,
      };
    }
  }

  /**
   * Obtener instancia de axios configurada
   * @returns {AxiosInstance} Instancia de axios
   */
  static getAxiosInstance() {
    return apiClient;
  }

  /**
   * Configurar token de autenticación
   * @param {string} token - Token JWT
   */
  static setAuthToken(token) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  /**
   * Configurar tenant ID
   * @param {string} tenantId - ID del tenant
   */
  static setTenantId(tenantId) {
    if (tenantId) {
      localStorage.setItem('tenantId', tenantId);
    } else {
      localStorage.removeItem('tenantId');
    }
  }

  /**
   * Limpiar datos de autenticación
   */
  static clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tenantId');
  }
}

export default ApiService;
export { apiClient };