"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken.email);
      } catch (error) {
        console.error("Invalid token: ", error);
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(apiUrl, { email, password });
      const token = response.data.token;

      // save token to localStorage
      localStorage.setItem("token", token);

      // decode token and set the user
      const userData = jwtDecode(token);
      setUser(userData);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);