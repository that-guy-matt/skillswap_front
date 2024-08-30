"use client";

import { useState } from 'react';
import axios from 'axios';
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/signup`;

const HomePage = () => {

  return (
    <div>
      <h1>Welcome to SkillSwap</h1>
    </div>
  )
}

export default HomePage;