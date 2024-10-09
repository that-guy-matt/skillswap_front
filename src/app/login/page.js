"use client";

import { useState } from 'react';
import axios from 'axios';
import Api from '../Api';
import { useRouter } from 'next/navigation';
import Header from "../components/Header.js";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;

const LoginPage = () => {
  const router = useRouter();
  // state to hold form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // function to handle form input
  const handleSubmit = (event) => {
    Api.Auth.login(email, password).then(response => {
      const { token } = response.data;
      localStorage.setItem("Auth-Token", token);
      setMessage("Success");
      router.push('/');
    }).catch(error => {
      console.error("Login failed: ", error);
      setMessage("An error occurred during login");
    });
  };


  return (
    <main>
      <Header />
      <h1>Login</h1>
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
      <button onClick={handleSubmit}>Login</button>
      {message && <p>{message}</p>}
    </main>
  );
};

export default LoginPage;