import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/auth/login.scss';
import logo from '../assets/img/logo.png';
import axios from 'axios';
const ForgotPassword = () => {
  const navigate = useNavigate();
  //validaciones
  const [formData, setFormData] = useState({
    email: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });
  const [loading, setLoading] = useState(false);

  const [serverMessage, setServerMessage] = useState('');

  const validate = () => {
    let valid = true;
    const newErrors = { email: '' };

    // Validación de correo
    if (!formData.email) {
      newErrors.email = 'El correo es obligatorio';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  // conexion con endpoint Forgot password
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const apiUrl = '/api/auth/forgot-password';
      const response = await axios.post(apiUrl, {
        email: formData.email
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': 'richarq'
        }
      });
      
      // Siempre mostramos mensaje genérico
      setServerMessage(response.data.message || 'Si el email existe, recibirás un enlace de recuperación');

      // Redirigimos tras pequeño delay (opcional)
      setTimeout(() => {
        navigate('/VerifyEmail');
      }, 1000);

    } catch (error) {
      console.error('Error detallado:', error);
      
      let errorMessage = 'Hubo un error. Inténtalo de nuevo.';
      
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        
        switch (status) {
          case 404:
            errorMessage = 'Endpoint no encontrado. Verificando configuración...';
            break;
          case 400:
            errorMessage = data?.message || 'Datos inválidos';
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
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.id]: '',
    });
    setServerMessage('');
  };

  return (
    <div className="forgotPasswordContainer">
      <div className="forgotPasswordBox">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">¿Olvidaste tu contraseña?</h1>
        <p className="subtitle">Ingresa tu correo para continuar</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="email">Correo</label>
            <input
              type="text"
              id="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <p className="errorText">{errors.email}</p>}
          </div>

          {serverMessage && <p className="serverMessage">{serverMessage}</p>}
          
          <hr className="divider" />
          <button type="submit" className="submitButton" disabled={loading}>
            {loading ? 'Enviando...' : 'Continuar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;