import React, { useState } from 'react';
import axios from 'axios';
import setupAxiosInterceptors from '../utils/axiosConfig';

// Configurar interceptores de Axios
setupAxiosInterceptors();

const TestLogin = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testLogin = async () => {
    setLoading(true);
    try {
      console.log('Intentando login...');
      
      const response = await axios.post('/api/auth/login', {
        username: 'admin.richarq',
        password: 'admin12'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': 'richarq'
        }
      });
      
      console.log('Respuesta del login:', response.data);
      setResult(`✅ Login exitoso: ${JSON.stringify(response.data, null, 2)}`);
      
      // Guardar token para pruebas
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
      }
      
    } catch (error) {
      console.error('Error en login:', error);
      setResult(`❌ Error: ${error.message}\n${error.response ? JSON.stringify(error.response.data, null, 2) : 'Sin respuesta del servidor'}`);
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async () => {
    setLoading(true);
    try {
      console.log('Probando conexión...');
      const response = await axios.get('/api');
      setResult(`✅ Conexión exitosa: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      console.error('Error de conexión:', error);
      setResult(`❌ Error de conexión: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testConversaciones = async () => {
    setLoading(true);
    try {
      console.log('Probando conversaciones...');
      const response = await axios.get('/api/messages_whatsapp/clientes/numeros');
      setResult(`✅ Conversaciones: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      console.error('Error en conversaciones:', error);
      setResult(`❌ Error: ${error.message}\n${error.response ? JSON.stringify(error.response.data, null, 2) : 'Sin respuesta del servidor'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Pruebas de Conexión</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={testConnection} disabled={loading} style={{ marginRight: '10px' }}>
          Probar Conexión Básica
        </button>
        <button onClick={testLogin} disabled={loading} style={{ marginRight: '10px' }}>
          Probar Login
        </button>
        <button onClick={testConversaciones} disabled={loading}>
          Probar Conversaciones
        </button>
      </div>

      {loading && <p>Cargando...</p>}
      
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '5px',
        whiteSpace: 'pre-wrap',
        fontSize: '12px',
        minHeight: '200px'
      }}>
        {result || 'Haz clic en un botón para probar...'}
      </div>
    </div>
  );
};

export default TestLogin; 