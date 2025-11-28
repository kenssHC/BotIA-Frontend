import React, { useState, useMemo, useEffect } from 'react';
import { FiUpload, FiInfo, FiEdit2, FiGrid, FiMessageSquare, FiArrowLeft } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserConfig.scss';
import { API_ENDPOINTS, getAuthHeaders, logApiCall, logApiResponse } from '../../config/api.config.js';

const UserConfig = () => {
  const { tenantId } = useParams(); // Para detectar si estamos editando un tenant
  const navigate = useNavigate();
  const isTenantMode = Boolean(tenantId); // true si estamos editando un tenant
  
  // Debug inicial
  console.log('🚀 UserConfig iniciado');
  console.log('🔍 tenantId desde URL:', tenantId);
  console.log('🔍 isTenantMode:', isTenantMode);
  console.log('🔍 URL actual:', window.location.pathname);
  
  const [activeTab, setActiveTab] = useState('account');
  const [loading, setLoading] = useState(isTenantMode); // Loading si es modo tenant
  const [tenantData, setTenantData] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    position: 'Ejecutivo de atención al cliente',
    personType: 'Interno',
    locations: [],
    // Campos específicos para tenants
    description: '',
    adminPassword: '',
    businessInfo: {
      companyName: '',
      industry: '',
      size: '',
      contactEmail: '',
      contactPhone: ''
    }
  });

  // DESACTIVADO - Módulos en blanco
  const [modules, setModules] = useState({
    dashboard: {
      resumen: false,
      automatizacion: false,
      speechAnalytics: false,
      encuestas: false
    },
    fineTunning: {
      informacionNegocio: false,
      respuestasFrecuentes: false,
      productos: false,
      tiendas: false,
      medios: false
    },
    bots: false,
    asistenteIA: {
      automatizacion: false,
      campanias: false,
      gestorCitas: false,
      mensajeRecuperacion: false,
      baseDatos: false,
      bandejaMensajes: false,
      calendario: false,
      usuarios: false
    }
  });

  // DESACTIVADO - Notificaciones en blanco
  const [notifications, setNotifications] = useState({
    resultados: false,
    reclamos: false,
    asistencia: false,
    citas: false
  });

  // Cargar información del tenant o usuario según el modo
  useEffect(() => {
    if (isTenantMode && tenantId) {
      const fetchTenantData = async () => {
        const endpoint = API_ENDPOINTS.TENANTS.BY_ID(tenantId);
        logApiCall('GET', endpoint);

        try {
          const response = await fetch(endpoint, {
            headers: getAuthHeaders(),
          });
          
          if (!response.ok) {
            throw new Error('Error al obtener información del tenant');
          }
          
          const result = await response.json();
          logApiResponse('GET', endpoint, response.status, result);
          
          if (result.success && result.data) {
            setTenantData(result.data);
            // Cargar datos en el formulario
            setFormData(prev => ({
              ...prev,
              name: result.data.name || '',
              description: result.data.metadata?.description || '',
              businessInfo: {
                companyName: result.data.businessInfo?.companyName || '',
                industry: result.data.businessInfo?.industry || '',
                size: result.data.businessInfo?.size || '',
                contactEmail: result.data.businessInfo?.contactEmail || '',
                contactPhone: result.data.businessInfo?.contactPhone || ''
              }
            }));
            
            // Cargar módulos y notificaciones si existen
            if (result.data.modules) {
              setModules(result.data.modules);
            }
            if (result.data.notifications) {
              setNotifications(result.data.notifications);
            }
          }
        } catch (error) {
          console.error('Error al cargar tenant:', error);
          logApiResponse('GET', endpoint, 500, error);
          toast.error('❌ No se pudo cargar la información del tenant');
          navigate('/usuarios'); // Redirigir de vuelta si hay error
        } finally {
          setLoading(false);
        }
      };

      fetchTenantData();
    } else {
      // Cargar datos del usuario actual cuando no está en modo tenant
      const fetchUserData = async () => {
        setLoading(true);
        const endpoint = API_ENDPOINTS.USERS.PROFILE; // Endpoint para usuario actual
        logApiCall('GET', endpoint);

        try {
          const response = await fetch(endpoint, {
            headers: getAuthHeaders(),
          });
          
          if (!response.ok) {
            throw new Error('Error al obtener información del usuario');
          }
          
          const result = await response.json();
          logApiResponse('GET', endpoint, response.status, result);
          
          console.log('📋 Datos del usuario cargados:', result);
          
          // Cargar todos los datos del usuario en el formulario
          setFormData(prev => ({
            ...prev,
            id: result.id,
            name: result.name || '',
            phone: result.phone || '',
            email: result.email || '',
            position: result.position || 'Ejecutivo de atención al cliente',
            personType: result.personType || 'Interno',
            locations: result.locations || []
          }));
          
          // Cargar módulos y notificaciones del usuario
          if (result.modules) {
            setModules(result.modules);
          }
          if (result.notificationPreferences?.notificationPreferences) {
            setNotifications(result.notificationPreferences.notificationPreferences);
          }
          
        } catch (error) {
          console.error('Error al cargar usuario:', error);
          logApiResponse('GET', endpoint, 500, error);
          toast.error('❌ No se pudo cargar la información del usuario');
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [isTenantMode, tenantId, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Manejar campos anidados (como businessInfo)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    }
  };

  const handleLocationChange = (locations) => {
    setFormData(prev => ({
      ...prev,
      locations
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted - Form data:', formData);
    
    if (isTenantMode) {
      console.log('🔄 Form submit: Actualizando tenant...');
      await handleUpdateTenant();
    } else {
      console.log('🔄 Form submit: Creando usuario...');
      await handleCreateUser();
    }
  };

  const isAccountComplete = useMemo(() => {
    return (
      formData.name.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.password.trim() !== '' &&
      formData.locations.length > 0
    );
  }, [formData]);

  const isAccessComplete = useMemo(() => {
    // Verificar si al menos un módulo está seleccionado en cada sección
    const hasSelectedDashboard = modules.dashboard ? Object.values(modules.dashboard).some(value => value) : false;
    const hasSelectedFineTunning = modules.fineTunning ? Object.values(modules.fineTunning).some(value => value) : false;
    const hasSelectedAssistant = modules.asistenteIA ? Object.values(modules.asistenteIA).some(value => value) : false;
    
    // Verificar si al menos una notificación está activada
    const hasSelectedNotifications = notifications ? Object.values(notifications).some(value => value) : false;

    return (
      (hasSelectedDashboard || hasSelectedFineTunning || modules.bots || hasSelectedAssistant) &&
      hasSelectedNotifications
    );
  }, [modules, notifications]);

  const isFormComplete = useMemo(() => {
    return isAccountComplete && isAccessComplete;
  }, [isAccountComplete, isAccessComplete]);
//CREAR USUARIO EN EL BACKEND O ACTUALIZAR TENANT
  const handleCreateUser = async () => {
    console.log('🎯 handleCreateUser ejecutado');
    console.log('🔍 isTenantMode:', isTenantMode);
    
    if (isTenantMode) {
      console.log('✅ Modo tenant detectado - llamando handleUpdateTenant');
      // Si estamos en modo tenant, actualizar en lugar de crear
      await handleUpdateTenant();
      return;
    }

    if (!isFormComplete) return;

    const endpoint = API_ENDPOINTS.USERS.BASE;

    const payload = {
      ...formData,
      modules,
      notifications,
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Si usas autenticación, agrega aquí el token
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al crear usuario');
      }

      const data = await response.json();
      console.log('Usuario creado exitosamente:', data);
      toast.success('✅ Usuario creado exitosamente');
    } catch (error) {
      console.error('Error al crear usuario:', error);
      toast.error('❌ Error al crear usuario');
    }
  };

  // ACTUALIZAR TENANT
  const handleUpdateTenant = async () => {
    console.log('🚀 handleUpdateTenant iniciado');
    console.log('🔍 tenantId:', tenantId);
    console.log('🔍 isTenantMode:', isTenantMode);
    
    if (!tenantId) {
      console.log('❌ No hay tenantId, saliendo...');
      return;
    }

    const endpoint = API_ENDPOINTS.TENANTS.BY_ID(tenantId);
    console.log('🌐 Endpoint:', endpoint);
    logApiCall('PUT', endpoint, formData);

    const payload = {
      // Información del formulario
      name: formData.name,
      description: formData.description,
      adminPassword: formData.adminPassword,
      businessInfo: formData.businessInfo,
      // Configuraciones de módulos y notificaciones
      modules,
      notifications,
      // Cualquier otro campo que se haya editado
      metadata: {
        lastUpdated: new Date().toISOString(),
        updatedBy: 'user' // Aquí podrías poner el usuario actual
      }
    };

    console.log('📦 Payload a enviar:', JSON.stringify(payload, null, 2));
    console.log('📋 formData actual:', JSON.stringify(formData, null, 2));
    console.log('🔧 modules:', modules);
    console.log('🔔 notifications:', notifications);

    // Mostrar notificación de carga
    const loadingToast = toast.loading('💾 Guardando cambios...');

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar tenant');
      }

      const result = await response.json();
      logApiResponse('PUT', endpoint, response.status, result);

      console.log('Datos enviados al backend:', payload);
      console.log('Respuesta del backend:', result);
      
      // Actualizar el toast de loading con éxito
      toast.update(loadingToast, {
        render: `✅ Información del tenant "${tenantId}" actualizada exitosamente`,
        type: 'success',
        isLoading: false,
        autoClose: 3000
      });

      // Actualizar el estado local con los nuevos datos si es necesario
      if (result.success && result.data) {
        console.log('✅ Actualizando estado local con:', result.data);
        setTenantData(result.data);
      } else {
        console.log('⚠️ Respuesta sin success o data:', result);
      }

    } catch (error) {
      console.error('Error al actualizar tenant:', error);
      logApiResponse('PUT', endpoint, 500, error);
      
      // Actualizar el toast de loading con error
      toast.update(loadingToast, {
        render: '❌ Error al actualizar la información del tenant',
        type: 'error',
        isLoading: false,
        autoClose: 3000
      });
    }
  };

  const handleSaveAccess = async () => {
    console.log('💾 handleSaveAccess ejecutado');
    console.log('🔍 isTenantMode:', isTenantMode);
    
    if (isTenantMode) {
      console.log('✅ Modo tenant en SaveAccess - llamando handleUpdateTenant');
      // Si estamos en modo tenant, usar la función de actualización de tenant
      await handleUpdateTenant();
      return;
    }

    const endpoint = API_ENDPOINTS.USERS.BY_ID(formData.id || 'current');

    // Incluir todos los campos del formulario para actualización completa
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      position: formData.position,
      personType: formData.personType,
      locations: formData.locations,
      modules,
      notifications,
    };

    console.log('📦 Payload de usuario a enviar:', JSON.stringify(payload, null, 2));

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al guardar accesos');
      }

      const data = await response.json();
      console.log('Accesos guardados exitosamente:', data);
      toast.success('✅ Accesos guardados exitosamente');
    } catch (error) {
      console.error('Error al guardar accesos:', error);
      toast.error('❌ Error al guardar accesos');
    }
  };

  const renderAccountTab = () => (
    <form onSubmit={handleSubmit} className="user-config-form">
      <div className="user-config-form__section">
        <h3 className="user-config-form__subtitle">
          {isTenantMode ? 'Información del Tenant' : 'Información personal'}
          <span className="info-icon">
            <FiInfo />
          </span>
        </h3>

        {/* DESACTIVADO - Sección de foto de perfil */}
        {/*
        <div className="profile-photo">
          <div className="profile-photo__placeholder">
            {/* Aquí iría la imagen de perfil */}
          {/*</div>
          <button type="button" className="uc-btn uc-btn--outline">
            <FiUpload />
            Subir imagen
          </button>
        </div>
        */}

        <div className="form-group">
          <label htmlFor="name">{isTenantMode ? 'Nombre del Tenant' : 'Nombre'}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={isTenantMode ? 'Nombre del tenant' : 'Escribe el nombre completo'}
            value={formData.name}
            onChange={handleInputChange}
            readOnly={isTenantMode} // En modo tenant, el nombre no se puede cambiar
            style={isTenantMode ? { backgroundColor: '#f5f5f5', cursor: 'not-allowed' } : {}}
          />
        </div>

        {isTenantMode ? (
          <>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                name="description"
                placeholder="Descripción del tenant"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}
              />
            </div>



            <div className="form-group">
              <label htmlFor="businessInfo.companyName">Nombre de la Empresa</label>
              <input
                type="text"
                id="businessInfo.companyName"
                name="businessInfo.companyName"
                placeholder="Nombre de la empresa"
                value={formData.businessInfo.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessInfo.contactEmail">Email de Contacto</label>
              <input
                type="email"
                id="businessInfo.contactEmail"
                name="businessInfo.contactEmail"
                placeholder="Email de contacto de la empresa"
                value={formData.businessInfo.contactEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessInfo.contactPhone">Teléfono de Contacto</label>
              <input
                type="tel"
                id="businessInfo.contactPhone"
                name="businessInfo.contactPhone"
                placeholder="Teléfono de contacto de la empresa"
                value={formData.businessInfo.contactPhone}
                onChange={handleInputChange}
              />
            </div>
          </>
        ) : (
          <>
        <div className="form-group">
          <label htmlFor="phone">Número de contacto</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Escribe el número de contacto"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escribe el correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <div className="password-input">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe la contraseña inicial"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="button" className="password-edit">
              <FiEdit2 />
            </button>
          </div>
        </div>
          </>
        )}
      </div>

      {!isTenantMode && (
      <div className="user-config-form__section">
        <h3 className="user-config-form__subtitle">Empresa</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="position">Puesto</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
            >
              <option value="Ejecutivo de atención al cliente">Ejecutivo de atención al cliente</option>
              {/* Agregar más opciones según necesidad */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="personType">Tipo de personal</label>
            <select
              id="personType"
              name="personType"
              value={formData.personType}
              onChange={handleInputChange}
            >
              <option value="Interno">Interno</option>
              <option value="Externo">Externo</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="locations">Ubicación tiendas</label>
          <div className="locations-select">
            <div className="locations-tags">
              {formData.locations.map((location, index) => (
                <span key={index} className="location-tag">
                  {location}
                  <button
                    type="button"
                    onClick={() => {
                      const newLocations = formData.locations.filter((_, i) => i !== index);
                      handleLocationChange(newLocations);
                    }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <select
              id="locations"
              onChange={(e) => {
                if (e.target.value && !formData.locations.includes(e.target.value)) {
                  handleLocationChange([...formData.locations, e.target.value]);
                }
              }}
              value=""
            >
              <option value="">Seleccionar ubicación</option>
              <option value="Oficina Miraflores">Oficina Miraflores</option>
              <option value="Oficina B">Oficina B</option>
              {/* Agregar más opciones según necesidad */}
            </select>
          </div>
        </div>
      </div>
      )}

      <div className="form-actions">
        <button type="submit" className="uc-btn uc-btn--success">
          Guardar Cambios
        </button>
      </div>
    </form>
  );

  // DESACTIVADO - Función de renderizado de módulos
  /*
  const renderModules = () => (
    <div className="modules-grid">
      // ... código de módulos comentado
    </div>
  );
  */

  // DESACTIVADO - Función de renderizado de accesos y notificaciones
  /*
  const renderAccessTab = () => (
    <div>
      // ... código de accesos y notificaciones comentado
    </div>
  );
  */

  // Mostrar loading si estamos cargando datos del tenant
  if (loading) {
    return (
      <div className="user-config-view">
        <h1 className="user-config-view__title">Cargando...</h1>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Cargando información del tenant...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="user-config-view">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        {isTenantMode && (
          <button 
            onClick={() => navigate('/usuarios')}
            className="uc-btn uc-btn--outline"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FiArrowLeft /> Volver a Tenants
          </button>
        )}
        <h1 className="user-config-view__title">
          {isTenantMode ? `Editar Tenant: ${tenantId}` : 'Usuarios'}
        </h1>
      </div>

      <div className="user-config-card">
        <div className="user-config-card__header">
          <div>
            <h2 className="user-config-card__title">
              {isTenantMode ? 'Configuración del Tenant' : 'Configuración de usuario'}
            </h2>
            <p className="user-config-card__description">
              {isTenantMode 
                ? 'En esta sección podrás personalizar la información y configuraciones del tenant.'
                : 'En esta sección podrás personalizar tus datos de usuario.'
              }
            </p>
          </div>

        </div>

        {/* DESACTIVADO - Tabs de módulos y configuraciones */}
        {/*
        <div className="user-config-card__tabs">
          <button 
            className={`tab-btn ${activeTab === 'account' ? 'tab-btn--active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            {isTenantMode ? 'Información del Tenant' : 'Mi cuenta'}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'access' ? 'tab-btn--active' : ''}`}
            onClick={() => setActiveTab('access')}
          >
            {isTenantMode ? 'Módulos y Configuraciones' : 'Accesos y notificaciones'}
          </button>
        </div>
        */}

        {/* Solo mostrar la información de la cuenta */}
        {renderAccountTab()}
      </div>
      
      {/* Contenedor de notificaciones toast */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="light" 
      />
    </div>
  );
};

export default UserConfig;
