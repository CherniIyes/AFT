'use client'
import { MdSupervisedUserCircle } from "react-icons/md";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";

const Card = () => {

      const [totalUsers, setTotalUsers] = useState(0);
      const fetchTotalUsers = async () => {
            try {
                  const response = await axios.get("http://localhost:4646/user/totalUsers");
                  setTotalUsers(response.data.totalUsers);
            } catch (error) {
                  console.error("Error fetching total users:", error);
            }
      };

      useEffect(() => {
            fetchTotalUsers();
      }, []);


      return (
            <div className="big_container">
                  <MdSupervisedUserCircle size={24} />
                  <div className="texts">
                        <span className="title">Total Users</span>
                        <span className="number">{totalUsers}</span>
                  </div>
            </div >
      );
};

export default Card;