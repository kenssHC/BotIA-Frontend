import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/auth/login.scss';
import logo from '../assets/img/logo.png';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/login'); // Redirigir a la página de inicio de sesión
  }

  return (
    <div className="verifyEmailContainer">
      <div className="verifyEmailBox">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Verifica tu correo</h1>
        <p className="subtitle">
          Hemos enviado un enlace a tu correo para restablecer tu contraseña
        </p>
        <hr className="divider" />
        <button className="returnButton" onClick={handleRedirect}>
          Regresar a inicio de sesión
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
