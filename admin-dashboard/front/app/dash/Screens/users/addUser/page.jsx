'use client'
import React, { useState } from 'react';
import axios from 'axios';
import './addUser.css';

const AddUserPage = () => {
      const [userData, setUserData] = useState({
            username: '',
            email: '',
            password: ''
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setUserData({ ...userData, [name]: value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])/;
                  if (!passwordRegex.test(userData.password)) {
                        alert("Password must contain at least one capital letter and one number");
                        return;
                  }

                  const registerResponse = await axios.post('http://localhost:4646/user/register', userData);

                  if (registerResponse.status === 201) {
                        alert("Sign up successful");
                        setUserData({ username: '', email: '', password: '' });
                        // Handle navigation logic here
                  } else {
                        console.error("User registration failed:", registerResponse.data);
                        alert("User creation failed. Please try again.");
                  }
            } catch (error) {
                  console.error("Error during user creation:", error);
                  alert("User creation failed. Please try again.");
            }
      };

      return (
            <div className="addUser_full_container">
                  <form className="form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="username" name="username" value={userData.username} onChange={handleChange} required />
                        <input type="email" placeholder="email" name="email" value={userData.email} onChange={handleChange} required />
                        <input type="password" placeholder="password" name="password" value={userData.password} onChange={handleChange} required />
                        <button type="submit">Submit</button>
                  </form>
            </div>
      );
};

export default AddUserPage;