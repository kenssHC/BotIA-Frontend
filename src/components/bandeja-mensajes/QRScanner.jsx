import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner, Badge } from 'react-bootstrap';
import QRCode from 'qrcode';
import ApiService from '../../services/apiService';
import { API_ENDPOINTS } from '../../config/api.config';
import './QRScanner.scss';

const QRScanner = () => {
  const [qrCode, setQrCode] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('checking');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(null);

  // Función para obtener el QR code del backend
  const fetchQRCode = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await ApiService.get(API_ENDPOINTS.WHATSAPP.QR_CODE);
      
      if (response.data.success && response.data.qr) {
        // Generar imagen QR
        const qrImage = await QRCode.toDataURL(response.data.qr, {
          width: 280,
          margin: 2,
          color: {
            dark: '#075E54',
            light: '#FFFFFF'
          }
        });
        setQrCode(qrImage);
        setConnectionStatus('qr_ready');
      } else {
        // Verificar si ya está conectado
        if (response.data.status === 'connected') {
          setConnectionStatus('connected');
          setQrCode(null);
        } else {
          setError(response.data.message || 'No se pudo obtener el código QR');
          setConnectionStatus('error');
        }
      }
    } catch (error) {
      console.error('Error al obtener QR:', error);
      setError('Error al conectar con el servidor');
      setConnectionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener solo el estado de conexión
  const fetchConnectionStatus = async () => {
    try {
      const response = await ApiService.get(API_ENDPOINTS.WHATSAPP.CONNECTION_STATUS);
      setConnectionStatus(response.data.status);
    } catch (err) {
      console.error('Error fetching connection status:', err);
    }
  };

  // Función para manejar la conexión
  const handleConnect = async () => {
    if (connectionStatus === 'connected') {
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Intentar obtener QR code
      await fetchQRCode();
      
    } catch (error) {
      console.error('Error al conectar:', error);
      setError('Error al intentar conectar');
    } finally {
      setLoading(false);
    }
  };

  // Función para reconectar WhatsApp
  const handleReconnect = async () => {
    try {
      setLoading(true);
      setError(null);
      setConnectionStatus('connecting');
      
      const response = await ApiService.post(API_ENDPOINTS.WHATSAPP.RECONNECT);
      
      if (response.data.success) {
        // Esperar un poco antes de obtener el nuevo QR
        setTimeout(() => {
          fetchQRCode();
        }, 2000);
      } else {
        setError(response.data.message || 'Error al reconectar');
        setConnectionStatus('error');
        setLoading(false);
      }
      
    } catch (error) {
      console.error('Error al reconectar:', error);
      setError('Error al intentar reconectar');
      setConnectionStatus('error');
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="whatsapp-loading">
          <div className="loading-spinner">
            <Spinner animation="border" variant="primary" />
          </div>
          <p className="loading-text">Cargando...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="whatsapp-error">
          <div className="error-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <h6>Error de conexión</h6>
          <p>{error}</p>
        </div>
      );
    }

    if (connectionStatus === 'connected') {
      return (
        <div className="whatsapp-connected">
          <div className="success-icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <h5>¡Ya estás conectado!</h5>
          <p>WhatsApp está vinculado y listo para enviar mensajes.</p>
          <div className="connected-info">
            <small><i className="fas fa-check-circle me-1"></i>Conexión activa y estable</small>
          </div>
        </div>
      );
    }

    if ((connectionStatus === 'qr_pending' || connectionStatus === 'qr_ready') && qrCode) {
      return (
        <div className="whatsapp-qr">
          <div className="qr-header">
            <h5>Escanea el código QR</h5>
            <p>Usa tu teléfono para escanear este código</p>
          </div>
          
          <div className="qr-code-wrapper">
            <img src={qrCode} alt="Código QR de WhatsApp" className="qr-code" />
          </div>
          
          <div className="qr-instructions">
            <div className="instruction-step">
              <span className="step-number">1</span>
              <span>Abre WhatsApp en tu teléfono</span>
            </div>
            <div className="instruction-step">
              <span className="step-number">2</span>
              <span>Ve a Configuración → Dispositivos vinculados</span>
            </div>
            <div className="instruction-step">
              <span className="step-number">3</span>
              <span>Toca "Vincular un dispositivo"</span>
            </div>
            <div className="instruction-step">
              <span className="step-number">4</span>
              <span>Escanea este código QR</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="whatsapp-disconnected">
        <div className="disconnect-icon">
          <i className="fab fa-whatsapp"></i>
        </div>
        <h6>WhatsApp Desconectado</h6>
        <p>Haga clic en "Conectar" para generar un nuevo código QR.</p>
      </div>
    );
  };

  // Efecto para cargar el QR code al montar el componente
  useEffect(() => {
    fetchQRCode();
  }, []);

  // Efecto para auto-refresh cuando está esperando QR
  useEffect(() => {
    let interval;
    
    if (autoRefresh && (connectionStatus === 'qr_pending' || connectionStatus === 'qr_ready' || connectionStatus === 'disconnected')) {
      interval = setInterval(() => {
        if (connectionStatus === 'qr_pending' || connectionStatus === 'qr_ready') {
          fetchConnectionStatus();
        } else {
          fetchQRCode();
        }
      }, 5000); // Refresh cada 5 segundos
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh, connectionStatus]);

  const getStatusBadge = () => {
    switch (connectionStatus) {
      case 'connected':
        return <Badge bg="success">✓ Conectado</Badge>;
      case 'qr_pending':
      case 'qr_ready':
        return <Badge bg="warning">⏳ Esperando escaneo</Badge>;
      case 'disconnected':
        return <Badge bg="danger">❌ Desconectado</Badge>;
      case 'checking':
        return <Badge bg="info">🔄 Verificando...</Badge>;
      case 'error':
        return <Badge bg="danger">⚠️ Error</Badge>;
      default:
        return <Badge bg="secondary">❓ Desconocido</Badge>;
    }
  };

  const getStatusMessage = () => {
    switch (connectionStatus) {
      case 'connected':
        return 'WhatsApp está conectado y listo para usar.';
      case 'qr_pending':
      case 'qr_ready':
        return 'Escanee el código QR con su teléfono para conectar WhatsApp.';
      case 'disconnected':
        return 'WhatsApp está desconectado. Haga clic en "Conectar" para generar un nuevo código QR.';
      default:
        return 'Estado de conexión desconocido.';
    }
  };

  return (
    <div className="whatsapp-qr-scanner">
      <Card className="whatsapp-card">
        <Card.Header className="whatsapp-header">
          <div className="header-content">
            <div className="header-title">
              <i className="fab fa-whatsapp me-2"></i>
              WhatsApp QR Scanner
            </div>
            {getStatusBadge()}
          </div>
        </Card.Header>
        
        <Card.Body className="whatsapp-body">
          {renderContent()}
        </Card.Body>
        
        <Card.Footer className="whatsapp-footer">
          <div className="footer-controls">
            <div className="auto-refresh-control">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="autoRefreshSwitch"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="autoRefreshSwitch">
                  Auto-actualizar
                </label>
              </div>
            </div>
            
            <div className="action-buttons">
              <Button
                 variant="outline-success"
                 size="sm"
                 onClick={fetchConnectionStatus}
                 disabled={loading}
                 className="refresh-btn"
               >
                 <i className="fas fa-sync-alt me-1"></i>
                 Actualizar
               </Button>
               
               <Button
                 variant="success"
                 size="sm"
                 onClick={handleConnect}
                 disabled={loading || connectionStatus === 'connected'}
                 className="connect-btn"
               >
                 <i className="fas fa-qrcode me-1"></i>
                 {connectionStatus === 'connected' ? 'Conectado' : 'Conectar'}
               </Button>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default QRScanner;