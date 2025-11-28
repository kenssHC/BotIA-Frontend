import React, { useState, useRef } from 'react';
import { Card, Row, Col, Button, Form, Breadcrumb, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { RiUpload2Line, RiVolumeUpLine, RiPencilLine, RiCustomerService2Line, RiInformationLine, RiSearchLine, RiCloseLine } from 'react-icons/ri';
import MultiSelectProducts from '../fine_tunning/medios/MultiSelectProducts';
import './nuevo-bot.scss';

const NuevoBot = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipoBot: 'Llamada',
    canal: [],
    genero: 'Masculino',
    tipoAtencion: 'Outbound',
    rol: '',
    objetivo: '',
    saludo: '',
    despedida: '',
    mensajeDerivacion: '',
    tipoEntrenamiento: [],
    selectedVoice: 'Fernando'
  });

  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [voiceSearch, setVoiceSearch] = useState('');

  const channelOptions = ['WhatsApp', 'Messenger'];
  const trainingOptions = ['Atención al cliente', 'Ventas'];

  const voiceOptions = [
    { name: 'Fernando', gender: 'male' },
    { name: 'Susana', gender: 'female' },
    { name: 'Lucia', gender: 'female' },
    { name: 'Martín', gender: 'male' },
    { name: 'Pedro', gender: 'male' }
  ];

  const filteredVoices = voiceOptions.filter(voice => 
    voice.name.toLowerCase().includes(voiceSearch.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos
  };

  return (
    <div className="nuevo-bot-container">
      <div className="breadcrumb-header">
        <Breadcrumb>
          <Breadcrumb.Item href="#/bots">Bots</Breadcrumb.Item>
          <Breadcrumb.Item active>Nuevo bot</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Card className="custom-card">
        <Card.Body>
          <h1 className="page-title">Configuración del bot</h1>
          <p className="page-description">Personaliza tu bot para adaptarlo a las necesidades de tu empresa.</p>
          
          <hr className="separator" />

          <Form onSubmit={handleSubmit}>
            {/* Información básica */}
            <section className="form-section">
              <h2>Información básica</h2>
              <Row>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Escribe el nombre de tu bot"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de bot</Form.Label>
                    <Form.Select
                      value={formData.tipoBot}
                      onChange={(e) => setFormData({...formData, tipoBot: e.target.value})}
                    >
                      <option>Llamada</option>
                      <option>Chat</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <MultiSelectProducts
                    label="Canal"
                    options={channelOptions}
                    selected={formData.canal}
                    onChange={(newCanal) => setFormData({...formData, canal: newCanal})}
                    placeholder="Buscar canal..."
                    defaultText="Selecciona canal"
                  />
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Género</Form.Label>
                    <Form.Select
                      value={formData.genero}
                      onChange={(e) => setFormData({...formData, genero: e.target.value})}
                    >
                      <option>Masculino</option>
                      <option>Femenino</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </section>

            {/* Personalización de imagen y voz */}
            <section className="form-section">
              <h2>Personalización de imagen y voz</h2>
              <Row>
                <Col md={6}>
                  <div className="image-upload-section">
                    <Form.Label>Imagen</Form.Label>
                    <div className="upload-area">
                      <div className="robot-icon">
                        <RiCustomerService2Line />
                      </div>
                      <Button variant="outline-primary" className="upload-btn">
                        <RiUpload2Line /> Subir imagen
                      </Button>
                      <span className="size-recommendation">
                        Tamaño recomendado: 250 px x 250 px
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Voz</Form.Label>
                    <div className="voice-section">
                      <div className="voice-name">{formData.selectedVoice}</div>
                      <div className="voice-controls">
                        <Button variant="outline-primary">
                          <RiVolumeUpLine /> Escuchar
                        </Button>
                        <Button variant="outline-primary" onClick={() => setShowVoiceModal(true)}>
                          <RiPencilLine /> Editar
                        </Button>
                      </div>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tono de voz</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Describe el tono de voz de tu bot"
                      value={formData.tonoVoz}
                      onChange={(e) => setFormData({...formData, tonoVoz: e.target.value})}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </section>

            {/* Configuración de la atención */}
            <section className="form-section">
              <h2>Configuración de la atención</h2>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de atención</Form.Label>
                    <Form.Select
                      value={formData.tipoAtencion}
                      onChange={(e) => setFormData({...formData, tipoAtencion: e.target.value})}
                    >
                      <option>Outbound</option>
                      <option>Inbound</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Rol</Form.Label>
                    <Form.Select
                      value={formData.rol}
                      onChange={(e) => setFormData({...formData, rol: e.target.value})}
                    >
                      <option>Ejecutivo de atención al cliente</option>
                      <option>Vendedor</option>
                      <option>Soporte técnico</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Objetivo</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Describe el objetivo del bot"
                      value={formData.objetivo}
                      onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </section>

            {/* Configuración de mensajes */}
            <section className="form-section">
              <h2>Configuración de mensajes</h2>
              <Row>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Saludo</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Escribe el mensaje de saludo de tu bot"
                      value={formData.saludo}
                      onChange={(e) => setFormData({...formData, saludo: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Despedida</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Escribe el mensaje de despedida de tu bot"
                      value={formData.despedida}
                      onChange={(e) => setFormData({...formData, despedida: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Form.Label>Mensaje de derivación</Form.Label>
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id="derivacion-tooltip">
                            Mensaje que el bot enviará para derivar el caso a una persona
                          </Tooltip>
                        }
                      >
                        <span className="tooltip-icon">
                          <RiInformationLine />
                        </span>
                      </OverlayTrigger>
                    </div>
                    <Form.Control
                      as="textarea"
                      placeholder="Escribe el mensaje de derivación de tu bot"
                      value={formData.mensajeDerivacion}
                      onChange={(e) => setFormData({...formData, mensajeDerivacion: e.target.value})}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </section>

            {/* Entrenamiento del bot */}
            <section className="form-section">
              <h2>Entrenamiento del bot</h2>
              <Row>
                <Col xs={12}>
                  <MultiSelectProducts
                    label="Tipo de entrenamiento"
                    options={trainingOptions}
                    selected={formData.tipoEntrenamiento}
                    onChange={(newTipo) => setFormData({...formData, tipoEntrenamiento: newTipo})}
                    placeholder="Buscar tipo de entrenamiento..."
                    defaultText="Selecciona tipo de entrenamiento"
                  />
                </Col>
              </Row>
            </section>

            <div className="form-actions">
              <Button variant="primary" type="submit" className="crear-bot-btn">
                Crear bot
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Voice Selection Modal */}
      <Modal 
        show={showVoiceModal} 
        onHide={() => setShowVoiceModal(false)}
        centered
        className="voice-selection-modal"
      >
        <Modal.Header>
          <Modal.Title>Seleccionar voz</Modal.Title>
          <Button 
            variant="link" 
            className="close-button" 
            onClick={() => setShowVoiceModal(false)}
          >
            <RiCloseLine />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="voice-search">
            <RiSearchLine className="search-icon" />
            <Form.Control
              type="text"
              placeholder="Buscar aquí"
              value={voiceSearch}
              onChange={(e) => setVoiceSearch(e.target.value)}
            />
          </div>
          <div className="voice-list">
            {filteredVoices.map((voice) => (
              <div key={voice.name} className="voice-item">
                <div className="voice-info">
                  <RiVolumeUpLine className="voice-icon" />
                  <span>{voice.name}</span>
                </div>
                <Button 
                  variant="link" 
                  className="rename-button"
                >
                  Renombrar
                </Button>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="outline-primary" 
            onClick={() => setShowVoiceModal(false)}
          >
            Cancelar
          </Button>
          <Button 
            variant="primary"
            onClick={() => {
              // Handle voice selection
              setShowVoiceModal(false);
            }}
          >
            Seleccionar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NuevoBot;
