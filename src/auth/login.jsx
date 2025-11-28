import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../assets/styles/auth/login.scss';
import logo from '../assets/img/logo.png';
import axios from 'axios';
import setupAxiosInterceptors from '../utils/axiosConfig';
import authService from '../services/authService';

// Configurar interceptores de Axios
setupAxiosInterceptors();

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener la ruta desde donde vino el usuario (si viene de ProtectedRoute)
  const from = location.state?.from?.pathname || `${import.meta.env.BASE_URL}asistente-ia/asistente`;

  //Validaciones 
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Verificar autenticación al cargar el componente
  useEffect(() => {
    const checkExistingAuth = async () => {
      console.log('Login Component - Verificando sesión existente...');
      
      try {
        // Verificar si hay token y si es válido
        if (authService.isAuthenticated()) {
          console.log('Login Component - Token encontrado, verificando validez...');
          
          // Verificar token con el backend
          await authService.verifyToken();
          
          console.log('Login Component - Usuario ya autenticado, redirigiendo a:', from);
          
          // Si el token es válido, redirigir directamente
          const targetRoute = from && from !== `${import.meta.env.BASE_URL}login` ? from : `${import.meta.env.BASE_URL}asistente-ia/asistente`;
          navigate(targetRoute, { replace: true });
          return;
        }
      } catch (error) {
        console.log('Login Component - Token inválido o expirado, mostrando login');
        // El authService ya limpia los tokens si son inválidos
      }
      
      setIsCheckingAuth(false);
    };

    checkExistingAuth();
  }, [from, navigate]);

  // Debug para mostrar información de redirección
  useEffect(() => {
    console.log('Login Component - Estado de redirección:', {
      from,
      locationState: location.state,
      currentLocation: location.pathname
    });
  }, [from, location]);

  const validate = () => {
    let valid = true;
    const newErrors = { username: '', password: '' };
    if (!formData.username) {
      newErrors.username = 'El usuario es obligatorio';
      valid = false;
    }
    // Validación de contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Debe tener al menos 6 caracteres';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // conexion con endpoint Login 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      setIsLoading(true);
      setLoginError('');
      
      // Usar el endpoint correcto según la configuración del backend
      // El backend tiene prefijo global 'api', así que debemos usar /api/auth/login
      const apiUrl = '/api/auth/login';
      
      console.log('Intentando login con:', {
        url: apiUrl,
        username: formData.username,
        password: formData.password ? '***' : 'vacío',
        redirectTo: from
      });
      
      try {
        const response = await axios.post(apiUrl, {
          username: formData.username,
          password: formData.password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log('Login exitoso:', response.data);
        
        // Corregir la destructuración: requiresPasswordChange está dentro de data
        const { data } = response.data;
        const { access_token, user, requiresPasswordChange } = data;
        
        console.log('Datos extraídos:', {
          access_token: access_token ? 'Presente' : 'No presente',
          user: user ? 'Presente' : 'No presente',
          requiresPasswordChange: requiresPasswordChange
        });
        
        // Guardar temporalmente
        localStorage.setItem('tempToken', access_token);
        localStorage.setItem('tempUser', JSON.stringify(user));

        // Evaluación más robusta que maneja tanto boolean true como string "true"
        const shouldChangePassword = requiresPasswordChange === true || 
                                   requiresPasswordChange === 'true' || 
                                   String(requiresPasswordChange).toLowerCase() === 'true';

        console.log('shouldChangePassword final:', shouldChangePassword);

        if (shouldChangePassword) {
          console.log('✅ REDIRIGIENDO A CAMBIO DE CONTRASEÑA');
          // Guardar la ruta de destino para después del cambio de contraseña
          localStorage.setItem('redirectAfterPasswordChange', from);
          navigate(`${import.meta.env.BASE_URL}first-password-change`);
        } else {
          console.log('✅ REDIRIGIENDO A RUTA ORIGINAL');
          console.log('Ruta de destino:', from);
          
          // Guardar como autenticación definitiva
          localStorage.setItem('token', access_token);
          localStorage.setItem('usuario', JSON.stringify(user));
          
          // Limpiar tokens temporales
          localStorage.removeItem('tempToken');
          localStorage.removeItem('tempUser');
          
          // Limpiar ruta guardada si existe
          localStorage.removeItem('redirectAfterPasswordChange');
          
          // Redirigir a la ruta original o dashboard
          // Asegurar que la ruta sea válida
          const targetRoute = from && from !== `${import.meta.env.BASE_URL}login` ? from : `${import.meta.env.BASE_URL}asistente-ia/asistente`;
          console.log('Navegando hacia:', targetRoute);
          
          // Usar un setTimeout para asegurar que el estado se actualice
          setTimeout(() => {
            navigate(targetRoute, { replace: true });
          }, 100);
        }
      } catch (error) {
        console.error('Error detallado:', error);
        
        let errorMessage = 'Error de conexión con el servidor';
        
        if (error.response) {
          // El servidor respondió con un código de error
          const status = error.response.status;
          const data = error.response.data;
          
          console.error('Respuesta del servidor:', {
            status,
            data,
            headers: error.response.headers
          });
          
          switch (status) {
            case 404:
              errorMessage = 'Endpoint no encontrado. Verificando configuración...';
              break;
            case 401:
              errorMessage = data?.message || 'Credenciales incorrectas';
              break;
            case 400:
              errorMessage = data?.message || 'Datos de login inválidos';
              break;
            case 500:
              errorMessage = 'Error interno del servidor';
              break;
            default:
              errorMessage = data?.message || `Error del servidor (${status})`;
          }
        } else if (error.request) {
          // La petición se hizo pero no hubo respuesta
          console.error('Sin respuesta del servidor:', error.request);
          errorMessage = 'No se pudo conectar con el servidor. Verifica que esté funcionando.';
        } else {
          // Error en la configuración de la petición
          console.error('Error de configuración:', error.message);
          errorMessage = 'Error en la configuración de la petición';
        }
        
        setLoginError(errorMessage);
      } finally {
        setIsLoading(false);
      }
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
  };

  // Formatear la ruta de destino para mostrar
  const formatRoute = (route) => {
    if (!route) return '/asistente-ia/asistente';
    return route.replace(import.meta.env.BASE_URL, '/').replace('//', '/');
  };

  // Mostrar pantalla de carga mientras se verifica la autenticación
  if (isCheckingAuth) {
    return (
      <div className="loginContainer">
        <div className="loginBox">
          <img src={logo} alt="Logo" className="logo" />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            fontSize: '16px',
            color: '#666'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <i className="ri-loader-4-line" style={{ fontSize: '24px', animation: 'spin 1s linear infinite' }}></i>
            </div>
            <p>Verificando sesión...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Bienvenido de nuevo</h1>
        <p className="subtitle">
          Ingresa tu usuario y contraseña para continuar
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="username">Correo</label>
            <input
              type="text"
              id="username"
              placeholder="Ingresa tu usuario"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="errorText">{errors.username}</p>}

          </div>
          <div className="inputGroup passwordGroup">
            <label htmlFor="password">Contraseña</label>
            <div className="passwordInputWrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Ingresa tu contraseña"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="togglePasswordBtn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`ri-${showPassword ? 'eye-line' : 'eye-off-line'}`}></i>
              </button>
            </div>
            {errors.password && <p className="errorText">{errors.password}</p>}
          </div>


          <Link to="/ForgotPassword" className="forgotPassword">
            ¿Olvidaste tu contraseña?
          </Link>
          <hr className="divider" />
          {loginError && <p className="errorText">{loginError}</p>}
          <button type="submit" className="submitButton" disabled={isLoading}>
            {isLoading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
