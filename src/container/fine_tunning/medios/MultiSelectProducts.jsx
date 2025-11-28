import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';

const MultiSelectProducts = ({ label = 'Asignar al producto', options = [], selected = [], onChange, placeholder = 'Buscar producto...', defaultText = 'Selecciona productos' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    if (!selected.includes(option)) {
      onChange([...selected, option]);
    }
    setSearchText('');
    setIsOpen(false);
  };

  const handleRemoveOption = (optionToRemove) => {
    onChange(selected.filter(option => option !== optionToRemove));
  };

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchText.toLowerCase()) && 
    !selected.includes(option)
  );

  return (
    <div 
      ref={containerRef} 
      className="multi-select-container" 
      style={{ 
        position: 'relative',
        marginBottom: '24px'
      }}
    >
      <label className="form-label">{label}</label>
      
      <div 
        className="multi-select-input"
        onClick={handleToggleMenu}
        style={{
          border: '1px solid #C1C5D0',
          borderRadius: '8px',
          padding: '8px 12px',
          minHeight: '44px',
          cursor: 'pointer',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '8px',
          background: '#fff'
        }}
      >
        {selected.length === 0 && (
          <span style={{ color: '#9CA3AF', fontSize: '14px' }}>
            {defaultText}
          </span>
        )}

        {selected.map((option) => (
          <span
            key={option}
            style={{
              background: '#EEF0FF',
              color: '#4F46E5',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {option}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveOption(option);
              }}
              style={{
                border: 'none',
                background: 'none',
                padding: '0',
                cursor: 'pointer',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <FiX size={16} />
            </button>
          </span>
        ))}

        <span style={{ marginLeft: 'auto' }}>
          <FiChevronDown 
            size={20} 
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease',
              color: '#6B7280'
            }}
          />
        </span>
      </div>

      {isOpen && (
        <div
          className="multi-select-menu"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid #C1C5D0',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            zIndex: 1000,
            maxHeight: '220px',
            overflow: 'hidden'
          }}
        >
          <div style={{ padding: '8px' }}>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder={placeholder}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>

          <div 
            style={{ 
              maxHeight: '160px', 
              overflowY: 'auto',
              borderTop: '1px solid #E5E7EB'
            }}
          >
            {filteredOptions.length === 0 ? (
              <div style={{ 
                padding: '12px',
                color: '#9CA3AF',
                fontSize: '14px',
                textAlign: 'center'
              }}>
                No hay resultados
              </div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelectOption(option)}
                  style={{
                    padding: '8px 12px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: '#374151',
                    transition: 'background-color 0.2s ease',
                    hover: {
                      backgroundColor: '#F3F4F6'
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {option}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectProducts; 