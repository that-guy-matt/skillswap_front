"use client";

import { useState } from 'react';
import axios from 'axios';
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(apiUrl,
            {
                email,
                password,
            });
            
            if (response.status === 201) {
                setMessage('Signup successful!');
            } else {
                setMessage(`Signup failed: ${response.data.error}`);
            }
        } catch (error) {
            setMessage(`Signup failed: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br/>
                <label htmlFor="password">Password: </label>
                <input 
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br/>
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;