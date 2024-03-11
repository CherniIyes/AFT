import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, Button, TouchableOpacity, Platform, FlatList } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";

const Expenses = () => {
      const [input1, setInput1] = useState("");
      const [input2, setInput2] = useState("");
      const [input3, setInput3] = useState("");
      const [input4, setInput4] = useState("");
      const [input5, setInput5] = useState("");
      const [date, setDate] = useState(new Date());
      const [showDatePicker, setShowDatePicker] = useState(false);
      const [selectedDate, setSelectedDate] = useState("");
      const [expensesData, setExpensesData] = useState([]);
      const [selectedYear, setSelectedYear] = useState("");
      const [showFilterDatePicker, setShowFilterDatePicker] = useState(false);


      const handleFilterDateChange = (event, newDate) => {
            if (Platform.OS === "android") {
                  setShowFilterDatePicker(false);
            }
            if (newDate) {
                  setDate(newDate);
                  const formattedDate = newDate.toLocaleDateString();
                  setSelectedDate(formattedDate);

                  // Extract the year from the selected date
                  const year = newDate.getFullYear();
                  setSelectedYear(year.toString());
            }
      };

      const handleFilterDateIconPress = () => {
            setShowFilterDatePicker(true);
      };





      // <TouchableOpacity style={styles.dateIcon} onPress={handleFilterDateIconPress}>
      //       <Text>{selectedDate || "Date"}</Text>
      // </TouchableOpacity>
      // {
      //       showFilterDatePicker && (
      //             <DateTimePicker
      //                   value={date}
      //                   mode="date"
      //                   display="spinner"
      //                   onChange={handleFilterDateChange}
      //             />
      //       )
      // }








      const handleDateIconPress = () => {
            setShowDatePicker(true);
      };

      const handleDateChange = (event, newDate) => {
            if (Platform.OS === "android") {
                  setShowDatePicker(false);
            }
            if (newDate) {
                  setDate(newDate);
                  const formattedDate = newDate.toLocaleDateString();
                  setSelectedDate(formattedDate);
            }
      };


      const handleButtonPress = async () => {
            try {
                  // const response = await axios.post("http://192.168.100.43:6464/exp/add", {
                  //       handwork: input1,
                  //       fodder: input2,
                  //       bills: input3,
                  //       medicalexpenses: input4,
                  //       hay: input5,
                  //       date: selectedDate,
                  // });
                  const response = await axios.post("http://192.168.43.138:6464/exp/add", {
                  const response = await axios.post("192.168.13.177:6464/exp/add", {
                        handwork: input1,
                        fodder: input2,
                        bills: input3,
                        medicalexpenses: input4,
                        hay: input5,
                        date: selectedDate,
                  });

                  // Handle the response as needed
                  console.log("Data added successfully:", response.data);

                  // Fetch and update the data after successful addition
                  fetchExpensesData();
            } catch (error) {
                  console.error("Error adding data:", error);
            }
      };


      const fetchExpensesData = async () => {
            try {
                  const response = await axios.get("http://192.168.13.177:6464/exp/getall");
                  // const response = await axios.get("http://192.168.100.52:6464/exp/getall");
                  setExpensesData(response.data);
            } catch (error) {
                  console.error("Error fetching data:", error);
            }
      };

      useEffect(() => {
            // Fetch data when the component mounts
            fetchExpensesData();
      }, [])

      return (
            <View style={styles.fullcontainer}>
                  <Text>Expenses</Text>
                  <View style={styles.inputsContainer}>
                        <TextInput
                              style={styles.input}
                              placeholder="HandWork"
                              value={input1}
                              onChangeText={(text) => setInput1(text)}
                        />
                        <TextInput
                              style={styles.input}
                              placeholder="Fodder"
                              value={input2}
                              onChangeText={(text) => setInput2(text)}
                        />
                        <TextInput
                              style={styles.input}
                              placeholder="Bills"
                              value={input3}
                              onChangeText={(text) => setInput3(text)}
                        />
                        <TextInput
                              style={styles.input}
                              placeholder="Medical Expenses"
                              value={input4}
                              onChangeText={(text) => setInput4(text)}
                        />
                        <TextInput
                              style={styles.input}
                              placeholder="Hay"
                              value={input5}
                              onChangeText={(text) => setInput5(text)}
                        />
                        <TouchableOpacity style={styles.dateIcon} onPress={handleDateIconPress}>
                              <Text>{selectedDate || "📅"}</Text>
                        </TouchableOpacity>
                  </View>
                  {/* <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                        <Text>Submit</Text>
                  </TouchableOpacity> */}
                  <Button title="Submit" onPress={handleButtonPress} style={styles.button} color="#107c2e" />
                  {showDatePicker && (
                        <DateTimePicker
                              value={date}
                              mode="date"
                              display="spinner"
                              onChange={handleDateChange}
                        />
                  )}
                  {expensesData.length > 0 && (
                        <View style={styles.tableContainer}>
                              <Text style={styles.tableHeader}>Expenses:</Text>
                              <View style={styles.tableRowHeader}>
                                    <Text style={styles.tableCellHeader}>Handwork</Text>
                                    <Text style={styles.tableCellHeader}>Fodder</Text>
                                    <Text style={styles.tableCellHeader}>Bills</Text>
                                    <Text style={styles.tableCellHeader}>Medical Expenses</Text>
                                    <Text style={styles.tableCellHeader}>Hay</Text>
                                    <TouchableOpacity style={styles.dateIcon} onPress={handleFilterDateIconPress}>
                                          <Text>{selectedDate || "Date"}</Text>
                                    </TouchableOpacity>
                                    {
                                          showFilterDatePicker && (
                                                <DateTimePicker
                                                      value={date}
                                                      mode="date"
                                                      display="spinner"
                                                      onChange={handleFilterDateChange}
                                                />
                                          )
                                    }
                              </View>
                              <FlatList
                                    data={expensesData.filter((item) => item.date.includes(selectedYear))}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => (
                                          <View style={styles.tableRow}>
                                                <Text style={styles.tableCell}>{item.handwork}</Text>
                                                <Text style={styles.tableCell}>{item.fodder}</Text>
                                                <Text style={styles.tableCell}>{item.bills}</Text>
                                                <Text style={styles.tableCell}>{item.medicalexpenses}</Text>
                                                <Text style={styles.tableCell}>{item.hay}</Text>
                                                <Text style={styles.tableCell}>{item.date}</Text>
                                          </View>
                                    )}
                              />
                        </View>
                  )}
            </View>
      );
};

const styles = StyleSheet.create({
      fullcontainer: {
            flex: 1,
            padding: 4,
            backgroundColor: '#FFFFFF',
            position: 'relative',
            marginTop: 105,
            marginBottom: 23,
      },
      tableContainer: {
            marginTop: 20,
      },
      tableHeader: {
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
      },
      tableRowHeader: {
            flexDirection: "row",
            backgroundColor: "#f2f2f2",
            padding: 10,
      },
      tableCellHeader: {
            flex: 1,
            textAlign: "center",
            fontWeight: "bold",
      },
      tableRow: {
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingVertical: 10,
      },
      tableCell: {
            flex: 1,
            textAlign: "center",
      },
      container: {
            padding: 20,
            flex: 1,
            position: "relative",
            top: 15,

      },
      inputsContainer: {
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: 20,
      },
      input: {
            marginRight: 10,
            borderWidth: 0.5,
            padding: 7,
            marginBottom: 20
      },
      dateIcon: {
            marginRight: 10,
            borderWidth: 0.5,
            padding: 9,
      },
      button: {
            backgroundColor: "#107c2e",
            padding: 10,
            alignItems: "center",
            borderRadius: 5,
            marginTop: 20,
      },
});

export default Expenses;