import React, { useState, useEffect } from 'react';
import { RiChat3Line, RiCloseLine, RiSendPlane2Line, RiEmotionHappyLine, RiMore2Line } from 'react-icons/ri';
import '../../assets/scss/chat-flotante/ChatFlotante.scss';
import axios from 'axios';
import setupAxiosInterceptors from '../../utils/axiosConfig';
import authService from '../../services/authService';

// Configurar interceptores de Axios
setupAxiosInterceptors();

const ChatFlotante = () => {
    const [abierto, setAbierto] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [usuario, setUsuario] = useState(null);

    // Cargar información del usuario al montar el componente
    useEffect(() => {
        const cargarUsuario = () => {
            try {
                const userData = authService.getUser();
                console.log('👤 [ChatFlotante] Usuario cargado:', userData);
                setUsuario(userData);
            } catch (error) {
                console.error('❌ [ChatFlotante] Error cargando usuario:', error);
            }
        };
        
        cargarUsuario();
    }, []);

    // Cargar historial desde localStorage
    useEffect(() => {
        const historial = localStorage.getItem('chat_novaly');
        if (historial) {
            console.log('📚 [ChatFlotante] Cargando historial desde localStorage');
            setMensajes(JSON.parse(historial));
        } else {
            console.log('🆕 [ChatFlotante] Creando nuevo historial de chat');
            setMensajes([
                { remitente: 'bot', texto: 'Hola, bienvenido a Novaly. Puedo ayudarte a consultar datos de tu base de datos usando lenguaje natural. ¿Qué información necesitas?' }
            ]);
        }
    }, []);

    // Guardar historial en localStorage cuando cambian los mensajes
    useEffect(() => {
        if (mensajes.length > 0) {
            console.log('💾 [ChatFlotante] Guardando historial en localStorage');
            localStorage.setItem('chat_novaly', JSON.stringify(mensajes));
        }
    }, [mensajes]);

    const enviarMensaje = async () => {
        if (!mensaje.trim() || cargando) {
            console.warn('⚠️ [ChatFlotante] Mensaje vacío o cargando, ignorando envío');
            return;
        }

        console.log('📤 [ChatFlotante] Enviando mensaje:', mensaje);

        const mensajeUsuario = { remitente: 'user', texto: mensaje };
        console.log('👤 [ChatFlotante] Agregando mensaje de usuario:', mensajeUsuario);
        setMensajes(prev => {
            const newMessages = [...prev, mensajeUsuario];
            console.log('📝 [ChatFlotante] Mensajes después de agregar usuario:', {
                previousCount: prev.length,
                newCount: newMessages.length,
                userMessage: mensajeUsuario
            });
            return newMessages;
        });
        setMensaje('');
        setCargando(true);

        try {
            // Verificar autenticación antes de enviar
            if (!authService.isAuthenticated()) {
                throw new Error('Usuario no autenticado');
            }

            const token = authService.getAnyToken();
            const userData = authService.getUser();
            
            if (!token) {
                throw new Error('No hay token de autenticación válido');
            }

            console.log('🔐 [ChatFlotante] Token obtenido:', token.substring(0, 20) + '...');
            console.log('👤 [ChatFlotante] Datos de usuario:', userData);

            // Preparar el payload para el endpoint de web chat
            const payload = {
                message: mensaje,
                userId: userData?.username || userData?.id || 'web-user',
                userName: userData?.username || 'Usuario',
                sessionId: `chat-${Date.now()}`
            };

            console.log('📦 [ChatFlotante] Payload enviado:', payload);

            // Usar el endpoint de messaging web chat que usa el mismo flujo que WhatsApp
            const response = await axios.post('/api/messaging/web-chat', payload, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'X-Tenant-ID': userData?.tenant || 'richarq'
                },
                timeout: 45000 // 45 segundos de timeout
            });

            console.log('📥 [ChatFlotante] Respuesta recibida:', response.data);
            
            // La respuesta real está en response.data.data
            const backendResponse = response.data.data || response.data;
            
            console.log('🔍 [ChatFlotante] Detalles de respuesta:', {
                success: backendResponse.success,
                hasContent: !!backendResponse.content,
                content: backendResponse.content,
                contentType: typeof backendResponse.content,
                contentLength: backendResponse.content?.length,
                fullResponse: JSON.stringify(response.data, null, 2),
                backendResponse: JSON.stringify(backendResponse, null, 2)
            });

            let respuestaTexto = '';
            
            if (backendResponse.success && backendResponse.content) {
                respuestaTexto = backendResponse.content;
                console.log('✅ [ChatFlotante] Respuesta exitosa recibida:', respuestaTexto);
            } else {
                respuestaTexto = backendResponse.content || 'No pude procesar tu consulta. ¿Podrías reformularla?';
                console.warn('⚠️ [ChatFlotante] Respuesta sin éxito:', {
                    success: backendResponse.success,
                    content: backendResponse.content,
                    fallbackUsed: !backendResponse.content,
                    respuestaTexto
                });
            }

            const respuestaBot = {
                remitente: 'bot',
                texto: respuestaTexto,
                timestamp: new Date().toISOString()
            };

            console.log('🤖 [ChatFlotante] Agregando respuesta del bot:', {
                respuestaBot,
                textoLength: respuestaTexto.length,
                textoPreview: respuestaTexto.substring(0, 50) + '...',
                currentMessagesCount: mensajes.length
            });
            
            setMensajes(prev => {
                const newMessages = [...prev, respuestaBot];
                console.log('📝 [ChatFlotante] Mensajes actualizados:', {
                    previousCount: prev.length,
                    newCount: newMessages.length,
                    lastMessage: newMessages[newMessages.length - 1]
                });
                return newMessages;
            });

        } catch (error) {
            console.error('❌ [ChatFlotante] Error en consulta:', {
                error: error.message,
                response: error.response?.data,
                status: error.response?.status,
                stack: error.stack
            });
            
            let mensajeError = '';
            
            if (error.response?.status === 401) {
                mensajeError = '🔒 Tu sesión ha expirado. Por favor, inicia sesión nuevamente.';
                console.log('🚪 [ChatFlotante] Sesión expirada, redirigiendo al login');
                // Limpiar datos de autenticación y redirigir
                authService.logout();
                window.location.href = '/login';
                return;
            } else if (error.response?.status === 404) {
                mensajeError = '❌ El servicio de chat no está disponible. Verifica que el backend esté funcionando.';
            } else if (error.response?.status === 500) {
                mensajeError = '⚠️ Error interno del servidor. Por favor, intenta nuevamente en unos momentos.';
            } else if (error.message.includes('timeout')) {
                mensajeError = '⏱️ La consulta está tomando mucho tiempo. Intenta con una consulta más específica.';
            } else if (error.message.includes('token') || error.message.includes('autenticado')) {
                mensajeError = '🔒 No estás autenticado. Por favor, inicia sesión para usar el chat.';
            } else if (error.code === 'NETWORK_ERROR') {
                mensajeError = '🌐 Error de conexión. Verifica tu conexión a internet.';
            } else {
                mensajeError = '❌ Hubo un error procesando tu consulta. Intenta nuevamente o reformula tu pregunta.';
            }

            const mensajeErrorBot = {
                remitente: 'bot',
                texto: mensajeError,
                timestamp: new Date().toISOString(),
                error: true
            };

            console.log('🚨 [ChatFlotante] Agregando mensaje de error:', mensajeErrorBot);
            setMensajes(prev => [...prev, mensajeErrorBot]);
        } finally {
            setCargando(false);
            console.log('🏁 [ChatFlotante] Proceso de envío finalizado');
        }
    };

    const manejarTeclaEnter = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log('⌨️ [ChatFlotante] Enter presionado, enviando mensaje');
            enviarMensaje();
        }
    };

    const manejarApertura = () => {
        console.log('👁️ [ChatFlotante] Abriendo chat');
        setAbierto(true);
        
        // Verificar autenticación al abrir
        if (!authService.isAuthenticated()) {
            console.warn('⚠️ [ChatFlotante] Usuario no autenticado al abrir chat');
            setMensajes([
                { 
                    remitente: 'bot', 
                    texto: '🔒 Para usar el chat, necesitas iniciar sesión. Por favor, inicia sesión y vuelve a intentar.',
                    error: true
                }
            ]);
        }
    };

    return (
        <div className="chat-flotante-container">
            {abierto && (
                <div className="chat-box shadow">
                    <div className="chat-header">
                        <div className="left">
                            <div className="icon-bot" />
                            <div className="chat-title">
                                Chatea con <strong>Novaly</strong>
                                {usuario && <small style={{display: 'block', fontSize: '11px', opacity: 0.8}}>
                                    Como: {usuario.username}
                                </small>}
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <RiMore2Line className="dots" />
                            <RiCloseLine className="close" onClick={() => {
                                console.log('❌ [ChatFlotante] Cerrando chat');
                                setAbierto(false);
                            }} />
                        </div>
                    </div>

                    <div className="chat-sub">
                        Novaly se ha unido al chat - Consulta tu base de datos en lenguaje natural
                        {!authService.isAuthenticated() && (
                            <div style={{color: '#ff6b6b', fontSize: '12px', marginTop: '4px'}}>
                                ⚠️ Necesitas iniciar sesión para usar el chat
                            </div>
                        )}
                    </div>

                    <div className="chat-mensajes">
                        {(() => {
                            console.log('🎨 [ChatFlotante] Renderizando mensajes:', {
                                totalMessages: mensajes.length,
                                messages: mensajes.map((m, i) => ({
                                    index: i,
                                    remitente: m.remitente,
                                    textoLength: m.texto?.length,
                                    preview: m.texto?.substring(0, 30) + '...'
                                }))
                            });
                            return mensajes.map((m, i) => (
                                <div key={i} className={`mensaje ${m.remitente} ${m.error ? 'error' : ''}`}>
                                    {m.remitente === 'bot' && <div className="avatar" />}
                                    <div className="mensaje-texto">
                                        <div className="bubble">
                                            {m.texto.split('\n').map((linea, idx) => (
                                                <div key={idx}>
                                                    {linea.includes('**') ? (
                                                        <strong>{linea.replace(/\*\*/g, '')}</strong>
                                                    ) : linea.startsWith('`') && linea.endsWith('`') ? (
                                                        <code style={{background: '#f0f0f0', padding: '2px 4px', borderRadius: '3px'}}>
                                                            {linea.slice(1, -1)}
                                                        </code>
                                                    ) : (
                                                        linea
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="hora">
                                            {m.timestamp ? 
                                                new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) :
                                                new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                            }
                                        </div>
                                    </div>
                                </div>
                            ));
                        })()}
                        {cargando && (
                            <div className="mensaje bot">
                                <div className="avatar" />
                                <div className="mensaje-texto">
                                    <div className="bubble">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        Procesando tu consulta...
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder={authService.isAuthenticated() ? 
                                "Ej: Muestra los clientes más activos de este mes" : 
                                "Inicia sesión para chatear..."
                            }
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            onKeyDown={manejarTeclaEnter}
                            disabled={cargando || !authService.isAuthenticated()}
                        />
                        <div className="icono-emojis" />
                        <div 
                            className={`enviar-icono ${(cargando || !authService.isAuthenticated()) ? 'disabled' : ''}`} 
                            onClick={enviarMensaje}
                            style={{ opacity: (cargando || !authService.isAuthenticated()) ? 0.5 : 1 }}
                        />
                    </div>
                </div>
            )}

            <div className="chat-fab" onClick={manejarApertura}>
                <RiChat3Line size={24} />
            </div>
        </div>
    );
};

export default ChatFlotante;
