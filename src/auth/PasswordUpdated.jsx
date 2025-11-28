import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/auth/login.scss';
import logo from '../assets/img/logo.png';

const PasswordUpdated = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/login'); // Redirigir a la página de inicio de sesión
  };

  return (
    <div className="passwordUpdatedContainer">
      <div className="passwordUpdatedBox">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">
          Tu contraseña se ha actualizado correctamente
        </h1>
        <p className="subtitle">
          Ahora puedes ingresar con tu nueva contraseña.
        </p>
        <hr className="divider" />
        <button className="returnButton" onClick={handleRedirect}>
          Regresar a inicio de sesión
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdated;
