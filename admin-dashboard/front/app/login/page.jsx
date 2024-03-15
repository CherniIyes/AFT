"use client"
import React, { useState } from "react";
import Link from 'next/link';
import axios from 'axios'; // Import axios for making HTTP requests

import "./login.css";

const LoginPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleEmailChange = (event) => {
            setEmail(event.target.value);
      };

      const handleEmailBlur = () => {
            if (!email.includes('@gmail.com')) {
                  setEmail(email + '@gmail.com');
            }
      };

      const handlePasswordChange = (event) => {
            setPassword(event.target.value);
      };

      const handleSignIn = async () => {
            try {
                  if (!email || !password) {
                        alert("Please enter both email and password.");
                        return;
                  }

                  const loginResponse = await axios.post('http://localhost:4646/user/login', {
                        email,
                        password,
                  });

                  if (!loginResponse || !loginResponse.data || loginResponse.data.error) {
                        console.error("Login error:", loginResponse.data?.error);
                        alert("Invalid email or password. Please try again.");
                        return;
                  }
                  const userData = loginResponse.data;

                  // Navigate to another page after successful login
                  alert(`Sign in successful! Welcome, ${userData.username}`);
                  // Replace the URL below with the destination page's URL
                  window.location.href = '/dash/Screens/users'; // Change this URL

            } catch (error) {
                  console.error("Error during sign-in:", error);

                  if (error.response && error.response.status === 404) {
                        alert("Login endpoint not found. Please check the server configuration.");
                  } else {
                        alert("Sign in failed. Please try again.");
                  }
            }
      };

      return (
            <div className="login_container">
                  <form className="form">
                        <h1>Login</h1>
                        <input type="text" placeholder="Email" name="Email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
                        <input type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />
                        <button type="button" onClick={handleSignIn}>Login</button>
                  </form>
            </div>
      );
};

export default LoginPage;