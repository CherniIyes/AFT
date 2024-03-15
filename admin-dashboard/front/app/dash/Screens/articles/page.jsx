'use client'

import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "@/app/Components/search/search.jsx";
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import "./articles.css";



const Articles = () => {
      const [data, setData] = useState([]);

      const fetchData = async () => {
            try {
                  const response = await axios.get("http://localhost:4646/articles/getall");
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

      const deleteArticle = async (id) => {
            try {
                  await axios.delete(`http://localhost:4646/articles/del/${id}`);
                  // After successful deletion, fetch updated data
                  fetchData();
            } catch (error) {
                  console.error("Error deleting user:", error);
            }
      };

      return (
            <div className="user-container">
                  <div className="container">
                        <Search placeholder="Search for a Article" />
                        <Link href="/dash/Screens/articles/addArticle">
                              <button className="addButton">Add Article</button>
                        </Link>
                  </div>

                  <table className="table">
                        <thead>
                              <tr>
                                    <th>ID</th>
                                    <th>Img</th>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Author</th>
                                    <th>Date</th>
                              </tr>
                        </thead>
                        <tbody>
                              {data.map((item) => (
                                    <tr key={item.id}>
                                          <td>{item.id}</td>
                                          <td><img src={item.img} alt="" /></td>
                                          <td>{item.title}</td>
                                          <td>{item.content}</td>
                                          <td>{item.Author}</td>
                                          <td>{item.date}</td>
                                          <td>
                                                <div className="buttons">
                                                      <button className="deleteButton" onClick={() => deleteArticle(item.id)}>Delete Article</button>
                                                </div>
                                          </td>
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};
export default Articles;