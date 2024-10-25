"use client";

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import Api from '../Api';

const Header = () => {
  const [user, setUser] = useState();
  console.log(user);
  useEffect(() => {
    console.log("test")
    if (localStorage.getItem("Auth-Token")) {
      fetchUser();
    }
  }, [])


  const fetchUser = () => {
    Api.Profile.get().then((res) => {
      setUser(res.data);
    })
  }

  const logout = () => {
    localStorage.removeItem('Auth-Token');
    setUser(null);
  }
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold"><Link href="/">SkillSwap</Link></h1>

      <nav className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.email}</span>
            <button
              onClick={logout}
              className="btn btn-danger">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/signup"
              className="btn btn-secondary">
              Sign Up
            </Link>
            <Link href="/login"
              className="btn btn-primary">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;