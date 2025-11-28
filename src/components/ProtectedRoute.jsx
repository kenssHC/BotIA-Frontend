import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import authService from '../services/authService';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        console.log('ProtectedRoute - Verificando autenticación para:', location.pathname);
        
        // Verificar si hay token disponible
        if (!authService.isAuthenticated()) {
          console.log('ProtectedRoute - No hay tokens disponibles, redirigiendo a login');
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        console.log('ProtectedRoute - Token encontrado, verificando con backend...');
        
        // Verificar el token con el backend
        await authService.verifyToken();
        console.log('ProtectedRoute - Token válido, acceso permitido');
        setIsAuthenticated(true);
      } catch (error) {
        console.error('ProtectedRoute - Error verificando autenticación:', error);
        console.log('ProtectedRoute - Token inválido, redirigiendo a login');
        setIsAuthenticated(false);
        // El authService ya limpia los tokens en caso de error
      }
      setIsLoading(false);
    };

    checkAuthentication();
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px'
      }}>
        Verificando autenticación...
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('ProtectedRoute - Redirigiendo a login con estado:', {
      from: location,
      pathname: location.pathname
    });
    
    // Redirigir al login y mantener la ruta a la que quería acceder
    return <Navigate to={`${import.meta.env.BASE_URL}login`} state={{ from: location }} replace />;
  }

  console.log('ProtectedRoute - Acceso permitido para:', location.pathname);
  return children;
};

export default ProtectedRoute; 