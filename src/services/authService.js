import axios from 'axios';

class AuthService {
  constructor() {
    this.baseURL = '/api/auth';
    this.tenantId = 'richarq'; // Puedes hacer esto configurable más adelante
  }

  // Verificar si el usuario está autenticado
  isAuthenticated() {
    const token = this.getToken();
    const tempToken = this.getTempToken();
    return !!(token || tempToken);
  }

  // Obtener token principal
  getToken() {
    return localStorage.getItem('token');
  }

  // Obtener token temporal
  getTempToken() {
    return localStorage.getItem('tempToken');
  }

  // Obtener cualquier token disponible
  getAnyToken() {
    return this.getToken() || this.getTempToken();
  }

  // Obtener usuario
  getUser() {
    const userStr = localStorage.getItem('usuario') || localStorage.getItem('tempUser');
    return userStr ? JSON.parse(userStr) : null;
  }

  // Guardar autenticación temporal (para cambio de contraseña)
  saveTempAuth(token, user) {
    localStorage.setItem('tempToken', token);
    localStorage.setItem('tempUser', JSON.stringify(user));
    // Disparar evento para actualizar el menú
    window.dispatchEvent(new CustomEvent('userUpdated', { detail: user }));
  }

  // Guardar autenticación definitiva
  saveAuth(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(user));
    // Limpiar tokens temporales
    this.clearTempAuth();
    // Disparar evento para actualizar el menú
    window.dispatchEvent(new CustomEvent('userUpdated', { detail: user }));
  }

  // Limpiar autenticación temporal
  clearTempAuth() {
    localStorage.removeItem('tempToken');
    localStorage.removeItem('tempUser');
  }

  // Limpiar toda la autenticación
  clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.clearTempAuth();
    // Disparar evento para actualizar el menú
    window.dispatchEvent(new CustomEvent('userUpdated', { detail: null }));
  }

  // Login
  async login(username, password) {
    try {
      const response = await axios.post(`${this.baseURL}/login`, {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': this.tenantId
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  // Verificar token
  async verifyToken(token = null) {
    const tokenToVerify = token || this.getAnyToken();
    
    if (!tokenToVerify) {
      throw new Error('No token available');
    }

    try {
      const response = await axios.post(`${this.baseURL}/verify-token`, {}, {
        headers: {
          'Authorization': `Bearer ${tokenToVerify}`,
          'Content-Type': 'application/json',
          'X-Tenant-ID': this.tenantId
        }
      });

      console.log('Token verification successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error verificando token:', error);
      
      // Si el token es inválido o expirado, limpiar autenticación
      if (error.response?.status === 401 || error.response?.status === 403) {
        console.log('Token inválido o expirado, limpiando autenticación');
        this.clearAuth();
      }
      
      throw error;
    }
  }

  // Cambiar contraseña (primer login)
  async changePassword(currentPassword, newPassword) {
    const token = this.getTempToken();
    
    if (!token) {
      throw new Error('No temp token available for password change');
    }

    try {
      const response = await axios.post(`${this.baseURL}/first-login-change-password`, {
        currentPassword,
        newPassword
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-Tenant-ID': this.tenantId
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error cambiando contraseña:', error);
      throw error;
    }
  }

  // Solicitar restablecimiento de contraseña
  async forgotPassword(email) {
    try {
      const response = await axios.post(`${this.baseURL}/forgot-password`, {
        email
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': this.tenantId
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error en forgot password:', error);
      throw error;
    }
  }

  // Restablecer contraseña
  async resetPassword(token, tenantId, newPassword) {
    try {
      const response = await axios.post(`${this.baseURL}/reset-password?token=${token}&tenantId=${tenantId}`, {
        newPassword
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': tenantId
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error en reset password:', error);
      throw error;
    }
  }

  // Logout
  logout() {
    this.clearAuth();
    // Redirigir al login si es necesario
    window.location.href = `${import.meta.env.BASE_URL}login`;
  }
}

// Exportar una instancia única (singleton)
const authService = new AuthService();
export default authService; 