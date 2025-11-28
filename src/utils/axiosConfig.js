import axios from 'axios';

// Variable para evitar configurar los interceptores múltiples veces
let interceptorsConfigured = false;

// Configuración centralizada de Axios para la aplicación
const setupAxiosInterceptors = () => {
  // Solo configurar una vez
  if (interceptorsConfigured) return;
  
  // Interceptor para agregar token de autorización automáticamente
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    
    // Logging para debugging
    console.log(`[Axios Request] ${config.method?.toUpperCase()} ${config.url}`);
    
    // Para todas las peticiones a los endpoints de la API, agregar el tenant
    if (config.url && (
      config.url.includes('/messages_whatsapp') || 
      config.url.includes('/whatsapp') ||
      config.url.includes('/messaging') ||
      config.url.includes('/auth') ||
      config.url.includes('/api')
    )) {
      // Agregar tenant por defecto si no existe
      if (!config.headers['X-Tenant-ID']) {
        config.headers['X-Tenant-ID'] = 'richarq'; // Tenant por defecto
      }
      
      // Solo agregar Authorization header si hay token y no es login
      if (token && !config.url.includes('/auth/login')) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // Interceptor de respuesta para manejo de errores de autenticación
  axios.interceptors.response.use(
    (response) => {
      console.log(`[Axios Response] ${response.status} ${response.config.method?.toUpperCase()} ${response.config.url}`);
      return response;
    },
    (error) => {
      console.error(`[Axios Error] ${error.response?.status || 'Network Error'} ${error.config?.method?.toUpperCase()} ${error.config?.url}`, error.message);
      
      // Si hay un error 401 (no autorizado), redirigir al login
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('tempToken');
        // Opcional: redirigir al login
        // window.location.href = '/login';
      }
      
      // Manejo de reintentos como estaba en ChatPanel
      const { config } = error;
      if (axios.isCancel(error) || !config) return Promise.reject(error);
      
      config.retryCount = config.retryCount || 0;
      const shouldRetry = (
        config.retry && config.retryCount < config.retry &&
        (error.code === 'ECONNABORTED' || error.code === 'ECONNREFUSED' || (error.response && error.response.status >= 500))
      );
      
      if (shouldRetry) {
        config.retryCount += 1;
        const delay = config.retryDelay || 1000;
        const backoff = Math.pow(2, config.retryCount) * delay;
        return new Promise(resolve => setTimeout(() => resolve(axios(config)), backoff));
      }
      
      return Promise.reject(error);
    }
  );

  interceptorsConfigured = true;
  console.log('[Axios] Interceptores configurados correctamente');
};

export default setupAxiosInterceptors; 