/**
 * Servicio para operaciones relacionadas con usuarios
 * Utiliza el servicio base ApiService para todas las llamadas HTTP
 */

import ApiService from './apiService.js';
import { API_ENDPOINTS } from '../config/api.config.js';

class UserService {
  /**
   * Obtener todos los usuarios
   * @param {Object} params - Parámetros de consulta (paginación, filtros, etc.)
   * @returns {Promise<Object>} Lista de usuarios
   */
  static async getUsers(params = {}) {
    try {
      // Construir query string si hay parámetros
      const queryString = new URLSearchParams(params).toString();
      const endpoint = queryString ? `/users?${queryString}` : '/users';
      
      return await ApiService.get(endpoint);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  }

  /**
   * Obtener un usuario por ID
   * @param {string|number} userId - ID del usuario
   * @returns {Promise<Object>} Datos del usuario
   */
  static async getUserById(userId) {
    try {
      return await ApiService.get(`/users/${userId}`);
    } catch (error) {
      console.error(`Error al obtener usuario ${userId}:`, error);
      throw error;
    }
  }

  /**
   * Crear un nuevo usuario
   * @param {Object} userData - Datos del usuario a crear
   * @returns {Promise<Object>} Usuario creado
   */
  static async createUser(userData) {
    try {
      return await ApiService.post('/users', userData);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  /**
   * Actualizar un usuario existente
   * @param {string|number} userId - ID del usuario
   * @param {Object} userData - Datos a actualizar
   * @returns {Promise<Object>} Usuario actualizado
   */
  static async updateUser(userId, userData) {
    try {
      return await ApiService.put(`/users/${userId}`, userData);
    } catch (error) {
      console.error(`Error al actualizar usuario ${userId}:`, error);
      throw error;
    }
  }

  /**
   * Actualizar parcialmente un usuario
   * @param {string|number} userId - ID del usuario
   * @param {Object} userData - Datos a actualizar parcialmente
   * @returns {Promise<Object>} Usuario actualizado
   */
  static async patchUser(userId, userData) {
    try {
      return await ApiService.patch(`/users/${userId}`, userData);
    } catch (error) {
      console.error(`Error al actualizar parcialmente usuario ${userId}:`, error);
      throw error;
    }
  }

  /**
   * Eliminar un usuario
   * @param {string|number} userId - ID del usuario
   * @returns {Promise<Object>} Confirmación de eliminación
   */
  static async deleteUser(userId) {
    try {
      return await ApiService.delete(`/users/${userId}`);
    } catch (error) {
      console.error(`Error al eliminar usuario ${userId}:`, error);
      throw error;
    }
  }

  /**
   * Obtener el perfil del usuario actual
   * @returns {Promise<Object>} Perfil del usuario
   */
  static async getCurrentUserProfile() {
    try {
      return await ApiService.get('/users/profile');
    } catch (error) {
      console.error('Error al obtener perfil del usuario:', error);
      throw error;
    }
  }

  /**
   * Actualizar el perfil del usuario actual
   * @param {Object} profileData - Datos del perfil a actualizar
   * @returns {Promise<Object>} Perfil actualizado
   */
  static async updateCurrentUserProfile(profileData) {
    try {
      return await ApiService.put('/users/profile', profileData);
    } catch (error) {
      console.error('Error al actualizar perfil del usuario:', error);
      throw error;
    }
  }

  /**
   * Cambiar contraseña del usuario actual
   * @param {Object} passwordData - Datos de cambio de contraseña
   * @param {string} passwordData.currentPassword - Contraseña actual
   * @param {string} passwordData.newPassword - Nueva contraseña
   * @returns {Promise<Object>} Confirmación del cambio
   */
  static async changePassword(passwordData) {
    try {
      return await ApiService.post('/users/change-password', passwordData);
    } catch (error) {
      console.error('Error al cambiar contraseña:', error);
      throw error;
    }
  }

  /**
   * Actualizar módulos de acceso de un usuario
   * @param {string|number} userId - ID del usuario
   * @param {Object} modulesData - Configuración de módulos
   * @returns {Promise<Object>} Configuración actualizada
   */
  static async updateUserModules(userId, modulesData) {
    try {
      return await ApiService.patch(`/users/${userId}`, {
        modules: modulesData.modules,
        notifications: modulesData.notifications,
      });
    } catch (error) {
      console.error(`Error al actualizar módulos del usuario ${userId}:`, error);
      throw error;
    }
  }

  /**
   * Buscar usuarios por criterios específicos
   * @param {Object} searchCriteria - Criterios de búsqueda
   * @param {string} searchCriteria.query - Texto de búsqueda
   * @param {string} searchCriteria.role - Rol a filtrar
   * @param {boolean} searchCriteria.active - Estado activo/inactivo
   * @returns {Promise<Object>} Resultados de búsqueda
   */
  static async searchUsers(searchCriteria) {
    try {
      const params = new URLSearchParams();
      
      if (searchCriteria.query) {
        params.append('search', searchCriteria.query);
      }
      if (searchCriteria.role) {
        params.append('role', searchCriteria.role);
      }
      if (typeof searchCriteria.active === 'boolean') {
        params.append('active', searchCriteria.active);
      }
      
      const queryString = params.toString();
      const endpoint = `/users/search${queryString ? `?${queryString}` : ''}`;
      
      return await ApiService.get(endpoint);
    } catch (error) {
      console.error('Error al buscar usuarios:', error);
      throw error;
    }
  }

  /**
   * Activar/desactivar un usuario
   * @param {string|number} userId - ID del usuario
   * @param {boolean} active - Estado activo (true) o inactivo (false)
   * @returns {Promise<Object>} Usuario actualizado
   */
  static async toggleUserStatus(userId, active) {
    try {
      return await ApiService.patch(`/users/${userId}`, { active });
    } catch (error) {
      console.error(`Error al cambiar estado del usuario ${userId}:`, error);
      throw error;
    }
  }

  /**
   * Obtener estadísticas de usuarios
   * @returns {Promise<Object>} Estadísticas de usuarios
   */
  static async getUserStats() {
    try {
      return await ApiService.get('/users/stats');
    } catch (error) {
      console.error('Error al obtener estadísticas de usuarios:', error);
      throw error;
    }
  }

  /**
   * Exportar usuarios a CSV/Excel
   * @param {Object} exportOptions - Opciones de exportación
   * @param {string} exportOptions.format - Formato (csv, excel)
   * @param {Array} exportOptions.fields - Campos a exportar
   * @returns {Promise<Blob>} Archivo de exportación
   */
  static async exportUsers(exportOptions = {}) {
    try {
      const params = new URLSearchParams(exportOptions).toString();
      const endpoint = `/users/export${params ? `?${params}` : ''}`;
      
      return await ApiService.download(endpoint, `usuarios.${exportOptions.format || 'csv'}`);
    } catch (error) {
      console.error('Error al exportar usuarios:', error);
      throw error;
    }
  }
}

export default UserService;