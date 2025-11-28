import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="auth-wrapper">
      <Outlet />
    </div>
  );
};

export default Auth;