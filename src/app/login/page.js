"use client";

import { useState } from 'react';
import axios from 'axios';

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;

const LoginPage = () => {
  // state to hold form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // function to handle form input
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiUrl, { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        setMessage(`Login successful! Welcome back, ${email}`);
        localStorage.setItem('token', token);
        console.log("JWT Token: ", token);
      } else {
        // if log in fails
        setMessage(`Login failed: #{response.data.error}`);
      }
    } catch (error) {
      console.error("Error: ", error);
      setMessage("An error occurred during login");
    }
  };


  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
};

export default LoginPage;