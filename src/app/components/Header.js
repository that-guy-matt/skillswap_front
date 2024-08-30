"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { decode } from 'jwt-decode';

const Header = () => {
  const [user, setUser] = useState(null);

  // get token from client user storage
  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      try {
        // decode token to get user info
        const decoded = jwtDecode(token);
        setUser(decoded.email);

      } catch (error) {
        console.error("Invalid token", error);
        handleLogout();
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold"><Link href="/">SkillSwap</Link></h1>

      <nav className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/signup" className="bg-green-500 hover:bg=green=600 p-2 rounded">
              Sign Up
            </Link>
            <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;