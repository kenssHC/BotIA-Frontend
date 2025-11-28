import React, { useState, useEffect } from 'react';
import '../../assets/scss/bandeja-mensajes/ClientesPanel.scss';
import { Badge } from 'react-bootstrap';

const ClientesPanel = ({ numeros = [], selectedPhone, onSelectPhone }) => {
  const [sortedNumeros, setSortedNumeros] = useState([]);

  useEffect(() => {
    console.log("Numeros recibidos en ClientesPanel:", numeros); // Log toda la prop 'numeros'
    numeros.forEach(item => {
        console.log(`  Cliente ${item.numero_telefono}: Tags =`, item.tags);
        console.log(`  Cliente ${item.numero_telefono}: Estado Conversación =`, item.estado_conversacion); // También revisa esto
    });

    const sorted = [...numeros].sort((a, b) => {
      // DEBUG: Log los timestamps para cada item
      console.log(`  - Cliente ${a.numero_telefono} timestamp: ${a.ultimo_mensaje_timestamp}`);
      console.log(`  - Cliente ${b.numero_telefono} timestamp: ${b.ultimo_mensaje_timestamp}`);

      // Intenta crear los objetos Date. Si el timestamp es inválido, new Date() resultará en "Invalid Date".
      const dateA = new Date(a.ultimo_mensaje_timestamp);
      const dateB = new Date(b.ultimo_mensaje_timestamp);

      // DEBUG: Log los resultados de new Date() y getTime()
      console.log(`  - dateA (${a.numero_telefono}):`, dateA, dateA.getTime());
      console.log(`  - dateB (${b.numero_telefono}):`, dateB, dateB.getTime());

      // Manejo de casos donde los timestamps puedan ser nulos/undefined o inválidos
      // Prioriza los que tienen timestamp válido
      if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) {
        return 0; // Si ambos son inválidos, no cambiar el orden relativo
      }
      if (isNaN(dateA.getTime())) {
        return 1; // 'a' es inválido, 'b' es válido -> 'b' va antes ('a' va después)
      }
      if (isNaN(dateB.getTime())) {
        return -1; // 'b' es inválido, 'a' es válido -> 'a' va antes ('b' va después)
      }

      // Ordenar en orden descendente (más reciente primero)
      return dateB.getTime() - dateA.getTime();
    });
    setSortedNumeros(sorted);
  }, [numeros]); // Re-ordenar cada vez que la prop 'numeros' cambia

  const displayNumeros = sortedNumeros;

  return (
    <div className="clientes-panel-wrapper">
      <div className="clientes-panel-header">
        <h6 className="clientes-panel-title">CLIENTES</h6>
      </div>

      {displayNumeros.length === 0 ? (
        <div className="clientes-panel-empty-state">
          No hay clientes disponibles
        </div>
      ) : (
        <div className="clientes-list-scroll-container">
          <ul className="clientes-list">
            {displayNumeros.map(item => (
              <li
                key={item.numero_telefono}
                className={`cliente-item ${selectedPhone === item.numero_telefono ? 'activo' : ''}`}
                onClick={() => onSelectPhone(item.numero_telefono)}
              >
                {/* Asumo que 'item.nombre' existe en algunos casos, si no, solo item.numero_telefono */}
                <div className="cliente-numero">{item.nombre || item.numero_telefono}</div>
                <div className="cliente-mensajes-info">
                  {/* Asegúrate que 'cantidad_mensajes' venga del backend */}
                  {item.cantidad_mensajes} mensaje{item.cantidad_mensajes !== 1 ? 's' : ''}
                  {/* Asegúrate que 'nuevos_mensajes' venga del backend y sea > 0 para que se muestre */}
                  {item.nuevos_mensajes > 0 && (
                    <Badge pill bg="danger" className="nuevo-mensaje-badge">
                      {item.nuevos_mensajes}
                    </Badge>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClientesPanel;