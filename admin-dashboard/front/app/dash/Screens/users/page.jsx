'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "@/app/Components/search/search.jsx";
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import "./users.css";

const Users = () => {
      const [data, setData] = useState([]);

      const fetchData = async () => {
            try {
                  const response = await axios.get("http://localhost:4646/user/get");
                  if (Array.isArray(response.data)) {
                        setData(response.data);
                  } else {
                        console.error("Invalid data format:", response.data);
                  }
            } catch (error) {
                  console.error("Error fetching data:", error);
            }
      };

      useEffect(() => {
            fetchData();
      }, []);

      const deleteUser = async (id) => {
            try {
                  await axios.delete(`http://localhost:4646/user/del/${id}`);
                  // After successful deletion, fetch updated data
                  fetchData();
            } catch (error) {
                  console.error("Error deleting user:", error);
            }
      };

      const banUser = async (id) => {
            try {
                  await axios.put(`http://localhost:4646/user/ban/${id}`);
                  // After successful ban, fetch updated data
                  fetchData();
            } catch (error) {
                  console.error("Error banning user:", error);
            }
      };

      const unbanUser = async (id) => {
            try {
                  await axios.put(`http://localhost:4646/user/unban/${id}`);
                  // After successful unban, fetch updated data
                  fetchData();
            } catch (error) {
                  console.error("Error unbanning user:", error);
            }
      };

      return (
            <div className="user-container">
                  <div className="container">
                        <Search placeholder="Search for a user" />
                        <Link href="/dash/Screens//users/addUser">
                              <button className="addButton">Add User</button>
                        </Link>
                  </div>

                  <table className="table">
                        <thead>
                              <tr>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Status</th>
                                    <th>Action</th>
                              </tr>
                        </thead>
                        <tbody>
                              {data.map((item) => (
                                    <tr key={item.id}>
                                          <td>{item.id}</td>
                                          <td>{item.email}</td>
                                          <td>{item.username}</td>
                                          <td>{item.is_banned}</td>

                                          <div className="buttons">
                                                {item.is_banned === "true" ? (
                                                      <button className="unbanButton" onClick={() => unbanUser(item.id)}>Unban User</button>
                                                ) : (
                                                      <button className="banButton" onClick={() => banUser(item.id)}>Ban User</button>
                                                )}
                                                <button className="deleteButton" onClick={() => deleteUser(item.id)}>Delete User</button>
                                          </div>
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default Users;