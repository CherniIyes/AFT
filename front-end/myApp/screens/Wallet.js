import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, Pressable, Modal, } from 'react-native';
export default function Wallet() {
      const [allAftData, setAllAftData] = useState([]);
      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get('http://192.168.100.52:6464/sales/getAll');
                        setAllAftData(response.data);
                        setFilteredAftData(response.data);
                  } catch (error) {
                        console.error('Error fetching sales data:', error);
                        setError('Network error. Please check your connection and try again.');
                  }
            };

            fetchData();
      }, []);

      const [expensesData, setExpensesData] = useState([]);
      useEffect(() => {
            fetchExpensesData();
      }, [])
      const fetchExpensesData = async () => {
            try {
                  // const response = await axios.get("http://192.168.1.4:6464/exp/getall");
                  const response = await axios.get("http://192.168.100.52:6464/exp/getall");
                  setExpensesData(response.data);
            } catch (error) {
                  console.error("Error fetching data:", error);
            }
      };




      const [tableData, setTableData] = useState([]);
      useEffect(() => {
            fetchData();
      }, []);
      const fetchData = async () => {
            try {
                  const response = await axios.get('http://192.168.100.52:6464/milk');
                  setTableData(response.data);
            } catch (error) {
                  console.error('Error fetching data:', error.message);
                  setError('Error fetching data: ' + error.message);
            }
      };

      return (
            <View>
                  <Text>Wallet</Text>
            </View>
      )
}