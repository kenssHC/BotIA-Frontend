import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/auth/login.scss';
import logo from '../assets/img/logo.png';

const FirstPasswordChange = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const validate = () => {
        let valid = true;
        const newErrors = { currentPassword: '', newPassword: '', confirmPassword: '' };

        if (!formData.currentPassword) {
            newErrors.currentPassword = 'La contraseña actual es obligatoria';
            valid = false;
        }

        if (!formData.newPassword) {
            newErrors.newPassword = 'La nueva contraseña es obligatoria';
            valid = false;
        } else if (formData.newPassword.length < 8) {
            newErrors.newPassword = 'Debe tener al menos 8 caracteres';
            valid = false;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        setErrorMessage('');

        try {
            const token = localStorage.getItem('tempToken');
            const user = JSON.parse(localStorage.getItem('tempUser'));
            const apiUrl = '/api/auth/first-login-change-password';

            if (!token || !user?.tenant) {
                setErrorMessage('Sesión inválida. Intenta iniciar sesión nuevamente.');
                setLoading(false);
                return;
            }

            const response = await axios.post(
                `${apiUrl}`,
                {
                    currentPassword: formData.currentPassword,
                    newPassword: formData.newPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                        'X-Tenant-ID': user.tenant
                    }
                }
            );

            console.log('Respuesta del cambio de contraseña:', response.data);

            if (response.data && response.data.data?.success) {
                // Limpiar tokens temporales
                localStorage.removeItem('tempToken');
                localStorage.removeItem('tempUser');
                
                // Guardar los tokens definitivos para la sesión
                // Usar el token temporal como definitivo ya que el cambio fue exitoso
                localStorage.setItem('token', token);
                localStorage.setItem('usuario', JSON.stringify(user));
                
                console.log('✅ Contraseña cambiada exitosamente, verificando redirección');
                
                // Verificar si hay una ruta de redirección guardada
                const savedRedirectRoute = localStorage.getItem('redirectAfterPasswordChange');
                const targetRoute = savedRedirectRoute || `${import.meta.env.BASE_URL}asistente-ia/asistente`;
                
                // Limpiar la ruta guardada
                localStorage.removeItem('redirectAfterPasswordChange');
                
                console.log('Redirigiendo a:', targetRoute);
                
                // Redirigir a la ruta original o dashboard
                setTimeout(() => {
                    navigate(targetRoute, { replace: true });
                }, 3000);
            } else {
                setErrorMessage(response.data.data?.message || 'Error inesperado al cambiar la contraseña.');
            }
        } catch (error) {
            console.error('Error detallado:', error);
            
            let errorMessage = 'Error de conexión. Inténtalo de nuevo.';
            
            if (error.response) {
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
                        errorMessage = data?.message || 'Contraseña actual incorrecta';
                        break;
                    case 400:
                        errorMessage = data?.message || 'Datos de contraseña inválidos';
                        break;
                    case 500:
                        errorMessage = 'Error interno del servidor';
                        break;
                    default:
                        errorMessage = data?.message || `Error del servidor (${status})`;
                }
            } else if (error.request) {
                errorMessage = 'No se pudo conectar con el servidor. Verifica que esté funcionando.';
            } else {
                errorMessage = 'Error en la configuración de la petición';
            }
            
            setErrorMessage(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="newPasswordContainer">
            <div className="newPasswordBox">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="title">Cambio de contraseña requerido</h1>
                <p className="subtitle">Por seguridad, debes actualizar tu contraseña para continuar</p>

                <form className="form" onSubmit={handleSubmit}>

                    <div className="inputGroup passwordGroup">
                        <label htmlFor="currentPassword">Contraseña actual</label>
                        <div className="passwordInputWrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="currentPassword"
                                name="currentPassword"
                                placeholder="Ingresa tu contraseña actual"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="togglePasswordBtn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i className={`ri-${showPassword ? 'eye-line' : 'eye-off-line'}`}></i>
                            </button>
                        </div>
                        {errors.currentPassword && <p className="errorText">{errors.currentPassword}</p>}
                    </div>


                    <div className="inputGroup passwordGroup">
                        <label htmlFor="newPassword">Nueva contraseña</label>
                        <div className="passwordInputWrapper">
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            id="newPassword"
                            name="newPassword"
                            placeholder="Ingresa nueva contraseña"
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

                    {/* Confirmar contraseña */}
                    <div className="inputGroup passwordGroup">
                        <label htmlFor="confirmPassword">Confirmar contraseña</label>
                        <div className='passwordInputWrapper'>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Repite la nueva contraseña"
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

                    {errorMessage && <p className="errorText">{errorMessage}</p>}

                    <hr className="divider" />
                    <button type="submit" className="submitButton" disabled={loading}>
                        {loading ? 'Guardando...' : 'Continuar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FirstPasswordChange;
