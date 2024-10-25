"use client";

import { useState } from 'react';
import axios from 'axios';
import Header from "./components/Header.js";
import MatchList from './components/MatchList.js';
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/signup`;

const HomePage = () => {

  return (
    <div>
      <Header />
      <h1>Welcome to SkillSwap</h1>
      <MatchList />

    </div>
  )
}

export default HomePage;