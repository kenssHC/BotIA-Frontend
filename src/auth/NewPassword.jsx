// Nota esto se usara tambien para el primer acceso

import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../assets/styles/auth/login.scss';
import logo from '../assets/img/logo.png';
import axios from 'axios';


const NewPassword = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);


  const token = searchParams.get('token');
  const tenantId = searchParams.get('tenantId');
  // Validaciones

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { newPassword: '', confirmPassword: '' };

    const { newPassword, confirmPassword } = formData;

    if (newPassword.length < 8) {
      newErrors.newPassword = 'Debe tener al menos 8 caracteres';
      valid = false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
      newErrors.newPassword = 'Debe contener mayúsculas, minúsculas y números';
      valid = false;
    }

    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!token || !tenantId) {
      setServerMessage('Token o tenantId faltantes en la URL.');
      return;
    }
    
    setLoading(true);
    try {
      const apiUrl = '/api/auth/reset-password';
      await axios.post(`${apiUrl}?token=${token}&tenantId=${tenantId}`, {
        newPassword: formData.newPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': tenantId
        }
      });

      setServerMessage('¡Tu contraseña fue actualizada con éxito! Redirigiendo...');
      setShowSuccess(true);
      setTimeout(() => navigate('/PasswordUpdated'), 3000);

    } catch (error) {
      console.error('Error completo:', error);
      console.error('Respuesta del backend:', error.response?.data);
      
      let errorMessage = 'Error interno del servidor';
      
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        
        switch (status) {
          case 404:
            errorMessage = 'Endpoint no encontrado. Verificando configuración...';
            break;
          case 400:
            errorMessage = data?.message || 'Token inválido o expirado';
            break;
          case 401:
            errorMessage = 'Token no autorizado o expirado';
            break;
          case 500:
            errorMessage = 'Error interno del servidor';
            break;
          default:
            errorMessage = data?.message || `Error del servidor (${status})`;
        }
      } else if (error.request) {
        errorMessage = 'No se pudo conectar con el servidor. Verifica que esté funcionando.';
      }
      
      setServerMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };


  return (
    <div className="newPasswordContainer">
      <div className="newPasswordBox">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Crear nueva contraseña</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup passwordGroup">
            <label htmlFor="newPassword">Nueva contraseña</label>
            <div className="passwordInputWrapper">
              <input
                type={showNewPassword ? 'text' : 'password'}
                id="newPassword"
                placeholder="Debe tener al menos 8 caracteres"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="togglePasswordBtn"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                <i className={`ri-${showNewPassword ? 'eye-line' : 'eye-off-line'}`}></i>
              </button>
            </div>
            {errors.newPassword && <p className="errorText">{errors.newPassword}</p>}
          </div>

          <div className="inputGroup passwordGroup">
            <label htmlFor="confirmPassword">Repetir nueva contraseña</label>
            <div className="passwordInputWrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Ingrese nuevamente la contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="togglePasswordBtn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className={`ri-${showConfirmPassword ? 'eye-line' : 'eye-off-line'}`}></i>
              </button>
            </div>
            {errors.confirmPassword && <p className="errorText">{errors.confirmPassword}</p>}
          </div>

          {serverMessage && <p className="serverMessage">{serverMessage}</p>}

          <hr className="divider" />
          <button type="submit" className="submitButton" disabled={loading}>
            {loading ? 'Guardando...' : 'Continuar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;