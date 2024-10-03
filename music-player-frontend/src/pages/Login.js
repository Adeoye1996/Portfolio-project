// src/pages/Login.js
import React, { useState } from 'react';
import { login } from '../services/auth';  // Import the login service

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const result = await login(userData);
      console.log(result);  // Handle result (e.g., store token, redirect)
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
