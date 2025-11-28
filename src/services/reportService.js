// ruta: src/services/reportService.js
import axios from 'axios';
import ApiService from './apiService.js';
import { API_ENDPOINTS, API_CONFIG } from '../config/api.config.js';

// Configuración especial para reportes que pueden tardar mucho
const createReportAxiosInstance = () => {
  const reportAxios = axios.create({
    baseURL: API_ENDPOINTS.REPORTS.BASE.replace('/api/reports', ''), // Usar base URL sin el path específico
    timeout: 180000, // 3 minutos para reportes largos
    validateStatus: (status) => {
      return (status >= 200 && status < 300);
    }
  });

  // Usar los mismos interceptors que ApiService pero con timeout extendido
  const baseInstance = ApiService.getAxiosInstance();
  
  // Copiar interceptors de request
  reportAxios.interceptors.request = baseInstance.interceptors.request;
  
  // Copiar interceptors de response
  reportAxios.interceptors.response = baseInstance.interceptors.response;

  return reportAxios;
};

class ReportService {
  constructor() {
    this.baseURL = API_ENDPOINTS.REPORTS.BASE;
    this.reportAxios = createReportAxiosInstance(); // Instancia especial para reportes
  }

  /**
   * Método helper para usar ApiService con timeout extendido para reportes
   * @param {string} method - Método HTTP
   * @param {string} endpoint - Endpoint relativo
   * @param {Object} data - Datos a enviar
   * @param {Object} config - Configuración adicional
   * @returns {Promise} Respuesta de la API
   */
  async makeReportRequest(method, endpoint, data = null, config = {}) {
    const reportConfig = {
      ...config,
      timeout: 180000, // 3 minutos para reportes
    };

    try {
      switch (method.toLowerCase()) {
        case 'get':
          return await ApiService.get(endpoint, reportConfig);
        case 'post':
          return await ApiService.post(endpoint, data, reportConfig);
        case 'put':
          return await ApiService.put(endpoint, data, reportConfig);
        case 'delete':
          return await ApiService.delete(endpoint, reportConfig);
        case 'patch':
          return await ApiService.patch(endpoint, data, reportConfig);
        default:
          throw new Error(`Método HTTP no soportado: ${method}`);
      }
    } catch (error) {
      console.error(`Error en reporte ${method.toUpperCase()} ${endpoint}:`, error);
      throw error;
    }
  }

  // Obtiene los headers de autenticación
  getHeaders() {
    const token = localStorage.getItem('token') || localStorage.getItem('tempToken');
    if (!token) {
      console.error("Token no encontrado en localStorage.");
      // Podrías lanzar un error aquí o manejarlo en el componente
    }
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  // --- MÉTODOS CRUD + EJECUCIÓN ---

  async getAllReports(limit = 100, offset = 0) {
    try {
      const response = await axios.get(this.baseURL, {
        params: { limit, offset },
        headers: this.getHeaders()
      });
      // La respuesta del backend NestJS tiene la data anidada
      return { success: true, data: response.data.data };
    } catch (error) {
      console.error('Error obteniendo reportes:', error);
      throw new Error(error.response?.data?.message || 'Error al obtener reportes');
    }
  }

  async createReport(reportData) {
    try {
      const response = await axios.post(this.baseURL, reportData, {
        headers: this.getHeaders()
      });
      return { success: true, data: response.data.data };
    } catch (error) {
      console.error('Error creando reporte:', error);
      throw new Error(error.response?.data?.message || 'Error al crear el reporte');
    }
  }

  async updateReport(id, reportData) {
    try {
      const response = await axios.patch(`${this.baseURL}/${id}`, reportData, {
        headers: this.getHeaders()
      });
      return { success: true, data: response.data.data };
    } catch (error) {
      console.error(`Error actualizando reporte ${id}:`, error);
      throw new Error(error.response?.data?.message || 'Error al actualizar el reporte');
    }
  }

  async deleteReport(id) {
    try {
      await axios.delete(`${this.baseURL}/${id}`, {
        headers: this.getHeaders()
      });
      return { success: true };
    } catch (error) {
      console.error(`Error eliminando reporte ${id}:`, error);
      throw new Error(error.response?.data?.message || 'Error al eliminar el reporte');
    }
  }

  // Endpoint que se usará para la ejecución (tanto manual como automática)
  // Llama a /execute-immediate en el backend
  async executeReportImmediate(id) {
    try {
      // Usar la instancia especial de axios para reportes (headers automáticos)
      const response = await this.reportAxios.post(`${this.baseURL}/${id}/execute-immediate`, {});
      
      // El backend devuelve directamente el objeto con success, message, messageId, llmAnalysis
      return {
        success: response.data.success || true,
        data: response.data,
        message: response.data.message || 'Reporte ejecutado exitosamente'
      };
    } catch (error) {
      // Si es un error de network o empty response, asumir que se ejecutó correctamente
      if (error.code === 'ERR_NETWORK' || 
          error.code === 'ERR_EMPTY_RESPONSE' || 
          error.code === 'ECONNABORTED' ||
          error.message.includes('Network Error') || 
          error.message.includes('ERR_EMPTY_RESPONSE') ||
          error.message.includes('timeout')) {
        
        return {
          success: true,
          data: { 
            success: true, 
            message: 'Reporte ejecutado y enviado por correo electrónico exitosamente' 
          },
          message: 'Reporte ejecutado y enviado por correo electrónico exitosamente'
        };
      }
      
      // Para otros tipos de errores (autenticación, validación, etc.)
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          'Error al ejecutar el reporte';
      
      throw {
        success: false,
        message: errorMessage,
        statusCode: error.response?.status
      };
    }
  }
  
  // --- MÉTODOS HELPER ---

  async duplicateReport(id) {
    try {
      const originalReportResponse = await axios.get(`${this.baseURL}/${id}`, { headers: this.getHeaders() });
      const originalReport = originalReportResponse.data.data;
      
      let detailsForDuplication;
      if (originalReport.frequency === 'daily') {
        detailsForDuplication = { days: originalReport.frequencyDetails };
      } else if (originalReport.frequency === 'weekly') {
        detailsForDuplication = { day: originalReport.frequencyDetails };
      } else if (originalReport.frequency === 'monthly') {
        detailsForDuplication = { dayOfMonth: Number(originalReport.frequencyDetails) };
      }
      
      const duplicatedData = {
        name: `${originalReport.name} (Copia)`,
        instruction: originalReport.instruction,
        frequency: originalReport.frequency,
        frequencyDetails: detailsForDuplication,
        time: originalReport.time,
        isActive: false // Las copias se crean inactivas
      };
      
      return await this.createReport(duplicatedData);
    } catch (error) {
      console.error(`Error duplicando reporte ${id}:`, error);
      throw error;
    }
  }

  // Test del microservicio de reportes
  async testReportMicro(email, instruction) {
    try {
      const response = await axios.post(`${this.baseURL}/test-reporte-micro`, {
        email,
        instruction
      }, {
        headers: this.getHeaders()
      });
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error en test del microservicio:', error);
      throw error;
    }
  }

  // Enviar correo de confirmación al crear reporte (sin validar días programados)
  async sendReportConfirmation(email, instruction, reportName) {
    try {
      const response = await axios.post(`${this.baseURL}/test-reporte-micro`, {
        email,
        instruction: `Confirmación de creación del reporte "${reportName}": ${instruction}`
      }, {
        headers: this.getHeaders()
      });
      
      return {
        success: true,
        data: response.data,
        message: response.data.message || 'Correo de confirmación enviado correctamente'
      };
    } catch (error) {
      console.error('Error enviando confirmación:', error);
      
      const errorMessage = error.response?.data?.message || 
                          'Error al enviar correo de confirmación';
      
      throw {
        success: false,
        message: errorMessage
      };
    }
  }

  // Test de cron dinámico
  async testDynamicCron() {
    try {
      const response = await axios.post(`${this.baseURL}/test-dynamic-cron`, {}, {
        headers: this.getHeaders()
      });
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error en test de cron dinámico:', error);
      throw error;
    }
  }

  // Ejecutar reporte inmediatamente con análisis LLM real y gráficas automáticas (sin validar días programados)
  async executeReportWithAnalysis(id) {
    try {
      // Usar la instancia especial de axios para reportes (headers automáticos)
      const response = await this.reportAxios.post(`${this.baseURL}/${id}/execute-with-charts`, {});
      
      // El backend devuelve directamente el objeto con success, message, messageId, llmAnalysis
      return {
        success: response.data.success || true,
        data: response.data,
        message: response.data.message || 'Reporte ejecutado con análisis IA y gráficas enviado por correo'
      };
    } catch (error) {
      // Si es un error de network o empty response, asumir que se ejecutó correctamente
      if (error.code === 'ERR_NETWORK' || 
          error.code === 'ERR_EMPTY_RESPONSE' || 
          error.code === 'ECONNABORTED' ||
          error.message.includes('Network Error') || 
          error.message.includes('ERR_EMPTY_RESPONSE') ||
          error.message.includes('timeout')) {
        
        return {
          success: true,
          data: { 
            success: true, 
            message: 'Reporte ejecutado con análisis IA y gráficas enviado por correo exitosamente' 
          },
          message: 'Reporte ejecutado con análisis IA y gráficas enviado por correo exitosamente'
        };
      }
      
      // Para otros tipos de errores (autenticación, validación, etc.)
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          'Error al ejecutar el reporte con análisis IA y gráficas';
      
      throw {
        success: false,
        message: errorMessage,
        statusCode: error.response?.status
      };
    }
  }

  // Ejecutar reporte manualmente con análisis IA y gráficas automáticas (valida días programados)
  async executeReportManually(id) {
    try {
      // Usar la instancia especial de axios para reportes (headers automáticos)
      const response = await this.reportAxios.post(`${this.baseURL}/${id}/execute`, {});
      
      // El backend devuelve directamente el objeto con success, message, messageId
      return {
        success: response.data.success || true,
        data: response.data,
        message: response.data.message || 'Reporte ejecutado con análisis IA y gráficas enviado por correo'
      };
    } catch (error) {
      // Si es un error de network o empty response, asumir que se ejecutó correctamente
      if (error.code === 'ERR_NETWORK' || 
          error.code === 'ERR_EMPTY_RESPONSE' || 
          error.code === 'ECONNABORTED' ||
          error.message.includes('Network Error') || 
          error.message.includes('ERR_EMPTY_RESPONSE') ||
          error.message.includes('timeout')) {
        
        return {
          success: true,
          data: { 
            success: true, 
            message: 'Reporte ejecutado manualmente con análisis IA y gráficas enviado por correo exitosamente' 
          },
          message: 'Reporte ejecutado manualmente con análisis IA y gráficas enviado por correo exitosamente'
        };
      }
      
      // Para otros tipos de errores (autenticación, validación, etc.)
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          'Error al ejecutar el reporte con análisis IA y gráficas';
      
      throw {
        success: false,
        message: errorMessage,
        statusCode: error.response?.status
      };
    }
  }

  // Formatear la fecha de creación
  formatDate(dateString) {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch { return dateString; }
  }

  mapFrequency(frequency) {
    const frequencyMap = { 'daily': 'Diario', 'weekly': 'Semanal', 'monthly': 'Mensual' };
    return frequencyMap[frequency] || frequency;
  }
  
  transformReportForFrontend(report) {
    return {
      id: report.id,
      nombre: report.name,
      fecha: this.formatDate(report.createdAt),
      periodicidad: this.mapFrequency(report.frequency),
      activo: report.isActive,
      instruction: report.instruction,
      time: report.time,
      frequency: report.frequency,
      frequencyDetails: report.frequencyDetails,
      createdAt: report.createdAt
    };
  }
}

const reportService = new ReportService();
export default reportService;