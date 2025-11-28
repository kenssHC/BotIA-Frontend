// src/components/usuarios/UserManagement.jsx

import React, { useState, useEffect } from 'react';
// Importa los iconos que necesitas
import { FiSearch, FiMoreVertical, FiChevronLeft, FiChevronRight, FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Importa el archivo SCSS único para esta vista
import '../../assets/scss/usuarios/_user-management.scss';
import { API_ENDPOINTS, getAuthHeaders, logApiCall, logApiResponse } from '../../config/api.config.js';

const UserManagement = () => {
  const navigate = useNavigate();
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState(3);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [tenantToDelete, setTenantToDelete] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTenantName, setNewTenantName] = useState('');

  const recordsPerPageOptions = [3, 6, 9, 12];

  useEffect(() => {
    const fetchTenants = async () => {
      const endpoint = API_ENDPOINTS.TENANTS.BASE;
      logApiCall('GET', endpoint);

      try {
        const response = await fetch(endpoint, {
          headers: getAuthHeaders(),
        });
        
        if (!response.ok) throw new Error('Error al obtener tenants');
        
        const result = await response.json();
        logApiResponse('GET', endpoint, response.status, result);
        
        // El backend retorna { success: true, data: [...] }
        setTenants(result.data || []);
      } catch (error) {
        console.error('Error al obtener tenants:', error);
        logApiResponse('GET', endpoint, 500, error);
        setTenants([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTenants();
  }, []);

  const handleRecordsPerPageChange = (e) => {
    const newRecordsPerPage = parseInt(e.target.value);
    setRecordsPerPage(newRecordsPerPage);
    setCurrentPage(1); // Reset to first page when changing records per page
  };

  // --- Lógica de Filtro y Paginación ---
  const filteredTenants = tenants.filter(tenant =>
    (tenant.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (tenant.schema?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTenants.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredTenants.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination__btn ${currentPage === i ? 'pagination__btn--active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  // --- Fin Lógica ---

  const handleCreateTenant = async () => {
    if (!newTenantName.trim()) {
      toast.error('❌ Por favor ingresa un nombre para el tenant');
      return;
    }

    // Validar formato del tenantId (solo letras, números y guiones bajos)
    if (!/^[a-z0-9_]+$/.test(newTenantName)) {
      toast.error('❌ El nombre del tenant solo puede contener letras minúsculas, números y guiones bajos');
      return;
    }

    const endpoint = API_ENDPOINTS.TENANTS.CREATE;
    logApiCall('POST', endpoint, { tenantId: newTenantName, isSuperAdmin: false });

    // Mostrar notificación de carga
    const loadingToast = toast.loading('🔄 Creando tenant...');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          tenantId: newTenantName,
          isSuperAdmin: false // Siempre false como solicita el usuario
        }),
      });

      if (!response.ok) throw new Error('Error al crear tenant');

      const result = await response.json();
      logApiResponse('POST', endpoint, response.status, result);

      // Recargar la lista de tenants
      const fetchResponse = await fetch(API_ENDPOINTS.TENANTS.BASE, {
        headers: getAuthHeaders(),
      });
      
      if (fetchResponse.ok) {
        const fetchResult = await fetchResponse.json();
        setTenants(fetchResult.data || []);
      }

      // Actualizar el toast de loading con éxito
      toast.update(loadingToast, {
        render: `✅ Tenant "${newTenantName}" creado exitosamente`,
        type: 'success',
        isLoading: false,
        autoClose: 3000
      });

      setShowCreateModal(false);
      setNewTenantName('');
      
      // Redirigir a UserConfig para editar el tenant recién creado
      setTimeout(() => {
        navigate(`/usuarios/tenant/${newTenantName}/editar`);
      }, 1000); // Esperar un poco para que se vea la notificación
    } catch (error) {
      console.error('Error al crear tenant:', error);
      logApiResponse('POST', endpoint, 500, error);
      
      // Actualizar el toast de loading con error
      toast.update(loadingToast, {
        render: '❌ No se pudo crear el tenant. Intenta de nuevo.',
        type: 'error',
        isLoading: false,
        autoClose: 3000
      });
    }
  };

  //endpoint eliminar tenant
  const handleDeleteTenant = async () => {
    if (!tenantToDelete) return;
    
    const endpoint = API_ENDPOINTS.TENANTS.BY_ID(tenantToDelete.id);
    logApiCall('DELETE', endpoint);
    
    // Mostrar notificación de carga
    const loadingToast = toast.loading('🗑️ Eliminando tenant...');
    
    try {
      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) throw new Error('Error al eliminar tenant');
      
      const result = await response.json();
      logApiResponse('DELETE', endpoint, response.status, result);
      
      setTenants(tenants.filter(t => t.id !== tenantToDelete.id));
      
      // Actualizar el toast de loading con éxito
      toast.update(loadingToast, {
        render: '✅ Tenant eliminado exitosamente',
        type: 'success',
        isLoading: false,
        autoClose: 3000
      });
    } catch (error) {
      console.error('Error al eliminar tenant:', error);
      logApiResponse('DELETE', endpoint, 500, error);
      
      // Actualizar el toast de loading con error
      toast.update(loadingToast, {
        render: '❌ No se pudo eliminar el tenant. Intenta de nuevo.',
        type: 'error',
        isLoading: false,
        autoClose: 3000
      });
    } finally {
      setShowDeleteModal(false);
      setTenantToDelete(null);
    }
  };

  if (loading) {
    return <div>Cargando tenants...</div>;
  }

  return (
    <div className="user-management-view">
      <h1 className="user-management-view__title">Tenants</h1>

      <div className="user-card">
        <div className="user-card__main-header">
          <h2 className="user-card__main-title">Gestión de Tenants</h2>
          <button className="um-btn um-btn--primary" onClick={() => setShowCreateModal(true)}>
            <FiPlus style={{ marginRight: '0.5rem' }} />
            Nuevo tenant
          </button>
        </div>

        <div className="user-card__content">
          <div className="user-card__section-header">
            <h3 className="user-card__subtitle">Registro de tenants</h3>
            <p className="user-card__description">
              En esta sección podrás visualizar, crear y eliminar tenants del sistema.
            </p>
          </div>

          <div className="search-bar">
            <FiSearch className="search-bar__icon" />
            <input
              type="search"
              placeholder="Buscar en registro de tenants"
              className="search-bar__input"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="user-table-wrapper">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Esquema</th>
                  <th>Super Admin</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.length > 0 ? currentRecords.map(tenant => (
                  <tr key={tenant.id}>
                    <td>{tenant.name}</td>
                    <td>{tenant.schema}</td>
                    <td>
                      <span className={`status-badge ${tenant.isSuperAdmin ? 'status-badge--success' : 'status-badge--default'}`}>
                        {tenant.isSuperAdmin ? 'Sí' : 'No'}
                      </span>
                    </td>
                    <td>
                      <span className="status-badge status-badge--success">
                        Activo
                      </span>
                    </td>
                    <td>
                      <div className="user-table__actions" style={{ position: 'relative' }}>
                        <button className="more-options-btn"
                          onClick={() => setOpenMenuId(openMenuId === tenant.id ? null : tenant.id)} 
                        >
                          <FiMoreVertical />
                        </button>
                        {openMenuId === tenant.id && (
                          <div className="options-menu">
                            <button
                              className="options-menu__item"
                              onClick={() => {
                                navigate(`/usuarios/tenant/${tenant.id}/editar`);
                                setOpenMenuId(null); // Cierra el menú
                              }}
                            >
                              <FiEdit2 style={{ marginRight: 8 }} /> Editar
                            </button>
                            <button
                              className="options-menu__item options-menu__item--danger"
                              onClick={() => {
                                setTenantToDelete(tenant);
                                setShowDeleteModal(true);
                                setOpenMenuId(null); // Cierra el menú
                              }}
                            >
                              <FiTrash2 style={{ marginRight: 8 }} /> Eliminar
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '1.5rem 1rem', color: 'var(--text-light)' }}>
                      No se encontraron tenants {searchTerm ? 'que coincidan con la búsqueda' : ''}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 0 && (
            <div className="pagination">
              <div className="pagination__records">
                <span>Registros por página:</span>
                <select
                  value={recordsPerPage}
                  onChange={handleRecordsPerPageChange}
                  aria-label="Seleccionar registros por página"
                >
                  {recordsPerPageOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pagination__controls">
                <button
                  className={`pagination__btn ${currentPage === 1 ? 'pagination__btn--disabled' : ''}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FiChevronLeft />
                </button>
                {renderPaginationButtons()}
                <button
                  className={`pagination__btn ${currentPage === totalPages ? 'pagination__btn--disabled' : ''}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showCreateModal && (
        <div className="modal-backdrop-custom">
          <div className="modal-custom">
            <h3>Crear Nuevo Tenant</h3>
            <p>
              Ingresa el nombre del tenant. Solo se permiten letras minúsculas, números y guiones bajos.
            </p>
            <div className="form-group" style={{ margin: '1rem 0' }}>
              <input
                type="text"
                placeholder="Nombre del tenant (ej: mi_tenant_123)"
                value={newTenantName}
                onChange={(e) => setNewTenantName(e.target.value.toLowerCase())}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleCreateTenant();
                  }
                }}
              />
            </div>
            <div className="modal-custom__actions">
              <button
                className="um-btn"
                onClick={() => {
                  setShowCreateModal(false);
                  setNewTenantName('');
                }}
              >
                Cancelar
              </button>
              <button
                className="um-btn um-btn--primary"
                onClick={handleCreateTenant}
                disabled={!newTenantName.trim()}
              >
                Crear Tenant
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal-backdrop-custom">
          <div className="modal-custom">
            <h3>¿Estás seguro?</h3>
            <p>
              Esto eliminará el tenant <strong>{tenantToDelete?.name}</strong> y todo su contenido asociado. 
              Esta acción no se puede deshacer.
            </p>
            <div className="modal-custom__actions">
              <button
                className="um-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancelar
              </button>
              <button
                className="um-btn um-btn--danger"
                onClick={handleDeleteTenant}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
      
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

export default UserManagement;
