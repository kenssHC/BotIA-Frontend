import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../../assets/scss/bandeja-mensajes/Mensajeria.scss';
const BloqueColapsable = ({ titulo, icono, children }) => {
    const [abierto, setAbierto] = useState(true);

    return (
        <div className="bloque-colapsable">
            <div className="cabecera" onClick={() => setAbierto(!abierto)}>
                <div className="titulo-bloque">
                    {icono && <img src={icono} alt="" className="icono" />}
                    <h6>{titulo}</h6>
                </div>
                {abierto ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>

            {abierto && <div className="contenido-scroll">{children}</div>}
        </div>
    );
};

const InfoPanel = () => {
    return (
      <div className="panel infoPanel">
        <div className="contenido-scroll-panel">
          <BloqueColapsable titulo="Origen">
            <div className="etiqueta-bandera">
              <span className="icon-bandera" />
              <div>
                <p className="etiqueta">Punto de contacto inicial</p>
                <span className="detalle">Campaña de Facebook</span>
              </div>
            </div>
          </BloqueColapsable>
  
          <BloqueColapsable titulo="Canales">
            <div className="detalle canales">
              <i className="icon-whatsapp" />
              <span className="linea-separadora" />
              <i className="icon-llamada" />
            </div>
          </BloqueColapsable>
  
          <BloqueColapsable titulo="Sentimientos">
            <div className="sentimientos">
              {['triste', 'neutro', 'feliz'].map((tipo) => (
                <div className="emoji-wrap" key={tipo}>
                  <div className={`emoji ${tipo} ${tipo === 'feliz' ? 'activo' : ''}`} />
                  <div className={`barra barra-${tipo} ${tipo === 'feliz' ? 'activo' : ''}`} />
                </div>
              ))}
            </div>
          </BloqueColapsable>
  
          <BloqueColapsable titulo="Etiquetas">
            <Form.Control
              placeholder="Crea o asigna etiquetas para"
              size="sm"
            />
          </BloqueColapsable>
  
          <BloqueColapsable titulo="Comentarios">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Escribe tu comentario aquí."
            />
          </BloqueColapsable>
        </div>
      </div>
    );
  };

  export default InfoPanel;