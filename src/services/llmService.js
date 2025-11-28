import axios from 'axios';

class LlmService {
  constructor() {
    this.baseURL = '/api/llm';
    this.tenantId = 'richarq';
  }

  // Obtener el token del localStorage
  getToken() {
    return localStorage.getItem('token') || localStorage.getItem('tempToken');
  }

  // Headers comunes para las peticiones
  getHeaders() {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      'X-Tenant-ID': this.tenantId,
      ...(token && { 'Authorization': `Bearer ${token}` })
    };
  }

  // Analizar consulta con LLM (para el chat en reportes)
  async analyzeQuery(query, maxResults = 100) {
    try {
      const response = await axios.post(`${this.baseURL}/analyze`, {
        query,
        maxResults
      }, {
        headers: this.getHeaders()
      });
      
      return {
        success: true,
        data: response.data // Directamente la respuesta del LLM
      };
    } catch (error) {
      console.error('Error analizando consulta:', error);
      
      const errorMessage = error.response?.data?.message || 
                          'Error al procesar tu consulta. Por favor, intenta con términos más específicos.';
      
      return {
        success: false,
        message: errorMessage,
        data: errorMessage
      };
    }
  }

  // Procesar consulta completa con explicación (para análisis detallados)
  async processQuery(query, maxResults = 100) {
    try {
      const response = await axios.post(`${this.baseURL}/query`, {
        query,
        maxResults
      }, {
        headers: this.getHeaders()
      });
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error procesando consulta:', error);
      
      const errorMessage = error.response?.data?.message || 
                          'Error al procesar la consulta';
      
      throw {
        success: false,
        message: errorMessage
      };
    }
  }

  // Generar SQL sin ejecutar
  async generateSql(query) {
    try {
      const response = await axios.post(`${this.baseURL}/generate-sql`, {
        query
      }, {
        headers: this.getHeaders()
      });
      
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      console.error('Error generando SQL:', error);
      throw error;
    }
  }
}

// Crear una instancia del servicio
const llmService = new LlmService();

export default llmService; 