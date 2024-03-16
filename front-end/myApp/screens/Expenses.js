import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Text, Button, TouchableOpacity, Platform, FlatList, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/Rstore';

const Expenses = () => {
      const user = useRecoilValue(userState);
      const [input1, setInput1] = useState("");
      const [input2, setInput2] = useState("");
      const [input3, setInput3] = useState("");
      const [input4, setInput4] = useState("");
      const [input5, setInput5] = useState("");
      const [date, setDate] = useState(new Date());
      const [showDatePicker, setShowDatePicker] = useState(false);
      const [selectedYear, setSelectedYear] = useState("");


      const [expensesData, setExpensesData] = useState([]);
      const [selectedDate, setSelectedDate] = useState("");
      const [showFilterDatePicker, setShowFilterDatePicker] = useState(false);
      const [filterdate, setfilterDate] = useState(new Date());
      const [selectedfilterdate, setfilterdate] = useState("");




      const handleFilterDateChange = (event, newDate) => {
            if (Platform.OS === "android") {
                  setShowFilterDatePicker(false);
            }
            if (newDate) {
                  setfilterDate(newDate);
                  const formattedDate = newDate.toLocaleDateString();
                  setfilterdate(formattedDate);

                  // Extract the year from the selected date
                  const year = newDate.getFullYear();
                  setSelectedYear(year.toString());
            }
      };

      const handleFilterDateIconPress = () => {
            setShowFilterDatePicker(true);
      };




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
                  const response = await axios.post("http://192.168.1.4:6464/exp/add", {
                        userId: user.id,
                        handwork: input1,
                        fodder: input2,
                        bills: input3,
                        medicalexpenses: input4,
                        hay: input5,
                        date: selectedDate,
                  });
                  console.log("Data added successfully:", response.data);
                  fetchExpensesData();
            } catch (error) {
                  console.error("Error adding data:", error);
            }
      };


      const fetchExpensesData = async () => {
            try {
                  const response = await axios.get(`http://192.168.1.4:6464/exp/getone/${user.id}`);
                  setExpensesData(response.data);
            } catch (error) {
                  console.error("Error fetching data:", error);
            }
      };

      useEffect(() => {
            fetchExpensesData();
      }, [])

      return (

            <ScrollView style={styles.ScrollView}>


                  <View style={styles.fullcontainer}>
                        <Text style={styles.titre}>Enter Your Expenses:</Text>
                        <View style={styles.allinputsContainer}>


                              <View style={styles.inputContainer}>
                                    <Ionicons name="hammer-sharp" size={24} color="#107c2e" />
                                    <TextInput
                                          style={styles.input}
                                          placeholder="HandWork"
                                          value={input1}
                                          onChangeText={(text) => setInput1(text)}
                                          keyboardType="numeric"
                                    />
                              </View>

                              <View style={styles.inputContainer}>
                                    <MaterialIcons name="grass" size={24} color="#107c2e" />
                                    <TextInput
                                          style={styles.input}
                                          placeholder="Fodder"
                                          value={input2}
                                          onChangeText={(text) => setInput2(text)}
                                          keyboardType="numeric" // Set keyboardType to "numeric"
                                    />
                              </View>

                              <View style={styles.inputContainer}>
                                    <Ionicons name="newspaper-sharp" size={24} color="#107c2e" />
                                    <TextInput
                                          style={styles.input}
                                          placeholder="Bills"
                                          value={input3}
                                          onChangeText={(text) => setInput3(text)}
                                          keyboardType="numeric" // Set keyboardType to "numeric"
                                    />
                              </View>

                              <View style={styles.inputContainer}>
                                    <AntDesign name="medicinebox" size={24} color="#107c2e" />
                                    <TextInput
                                          style={styles.input}
                                          placeholder="Medical Expenses"
                                          value={input4}
                                          onChangeText={(text) => setInput4(text)}
                                          keyboardType="numeric" // Set keyboardType to "numeric"
                                    />
                              </View>


                              <View style={styles.inputContainer}>
                                    <MaterialCommunityIcons name="cylinder" size={24} color="#107c2e" />
                                    <TextInput
                                          style={styles.input}
                                          placeholder="Hay"
                                          value={input5}
                                          onChangeText={(text) => setInput5(text)}
                                          keyboardType="numeric"
                                    />
                              </View>

                              <View style={styles.inputContainer}>
                                    <TouchableOpacity onPress={handleDateIconPress}>
                                          <FontAwesome5 name="calendar-alt" size={24} color="#107c2e" style={styles.icon} />
                                    </TouchableOpacity>
                                    <TextInput
                                          style={[styles.input, { color: '#000', opacity: 0.5 }]} // You can change color and opacity to make it visually distinct
                                          value={selectedDate}
                                          onFocus={handleDateIconPress}
                                          keyboardType="default"
                                          placeholder="Select Date"
                                          editable={false} // Set editable to false to make it uneditable
                                    />
                              </View>




                        </View>

                        {showDatePicker && (
                              <DateTimePicker
                                    value={date}
                                    mode="date"
                                    display="default"
                                    onChange={handleDateChange}
                              />
                        )}
                        <Button title="Submit" onPress={handleButtonPress} style={styles.button} color="#107c2e" />
                        {expensesData.length > 0 && (
                              <View style={styles.tableContainer}>
                                    <View style={styles.tableRowHeader}>
                                          <Text style={styles.tableCellHeader}>Handwork</Text>
                                          <Text style={styles.tableCellHeader}>Fodder</Text>
                                          <Text style={styles.tableCellHeader}>Bills</Text>
                                          <Text style={styles.tableCellHeader}>Medical Expenses</Text>
                                          <Text style={styles.tableCellHeader}>Hay</Text>

                                          <TouchableOpacity style={styles.dateIcon} onPress={handleFilterDateIconPress}>
                                                <Text>{selectedfilterdate || "Date"}</Text>
                                          </TouchableOpacity>
                                          {
                                                showFilterDatePicker && (
                                                      <DateTimePicker
                                                            value={filterdate}
                                                            mode="date"
                                                            display="default"
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
                                                      <Text style={styles.tableCellDate}>{item.date}</Text>
                                                </View>
                                          )}
                                    />
                              </View>
                        )}
                  </View>
            </ScrollView>
      );
};

const styles = StyleSheet.create({
      ScrollView: {
            flex: 1,
      },
      fullcontainer: {
            flex: 1,
            padding: 4,
            backgroundColor: '#FFFFFF',
            position: 'relative',
            marginTop: 120,
            marginBottom: 33,
            padding: 16,

      },

      inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
            borderColor: '#ccc',
            borderBottomWidth: 1,
      },
      icon: {
            marginRight: 10,
      },
      input: {
            flex: 1,
            height: 40,
            paddingVertical: 8,
            fontSize: 16,
      },
      tableContainer: {
            marginTop: 20,
      },
      titre: {
            fontSize: 24,
            marginBottom: 20,
            color: '#107c2e',
            fontWeight: 'bold',
      },
      tableHeader: {
            fontSize: 15,
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
            fontSize: 13.1,

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
            fontSize: 12,
      },
      container: {
            padding: 20,
            flex: 1,
            position: "relative",
            top: 15,

      },
      allinputsContainer: {
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: 20,
      },

      dateIcon: {
            fontSize: 10,
            marginRight: 10,
            // borderWidth: 0.5,
            // padding: 9,
            alignItems: "center",
            // borderRadius: 5,
            // borderColor: '#ccc',
            // borderBottomWidth: 1,
      },
      // dateIcon: {
      //       marginBottom: 12,
      //       paddingHorizontal: 12,
      //       paddingVertical: 10,
      //       borderWidth: 1,
      //       // borderRadius: 5,

      //       alignItems: "center",
      // },
      button: {
            backgroundColor: "#107c2e",
            padding: 10,
            alignItems: "center",
            borderRadius: 5,
            marginTop: 20,
      },
});

export default Expenses;