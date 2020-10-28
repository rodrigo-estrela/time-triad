import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import '../styles/components/login.css';

function Login() {
  return (
    <div className="grey darken-3 login-form">
      <a href="/auth/google" className="google-btn">
        <FcGoogle className="google-icon" />
        <span className="google-btn-text">Login with Google</span>
      </a>
      OR
      <a href="/auth/facebook" className="facebook-btn">
        <FaFacebook className="facebook-icon" />
        <span className="facebook-btn-text">Login with Facebook</span>
      </a>
    </div>
  );
}

export default Login;
