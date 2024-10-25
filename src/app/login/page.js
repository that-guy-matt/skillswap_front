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

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mt-5">
            <div className="card text-center shadow p-2" >
              <div className='card-header'>
                <h1 className="card-title fs-4 fw-bold">Login</h1>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder='email@example.com'
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-primary w-75" onClick={handleSubmit}>Log In</button>

                {message && <p className="mt-3">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default LoginPage;