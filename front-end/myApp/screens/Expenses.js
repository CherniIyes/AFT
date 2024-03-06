import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProfitCalculatorScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarVisible: true,
    });
  }, [navigation]);

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dailyProfit, setDailyProfit] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.10:6464/milk');
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data: ' + error.message);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.1.10:6464/milk/add', {
        day: selectedDate,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      });
      if (response.status === 200) {
        setRefreshing(true);
        setDate('');
        setPrice('');
        setQuantity('');
        setRefreshing(false);
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error posting data: ' + error.message);
    }
  };

  const calculateProfit = () => {
    const dailyProfit = parseFloat(price) * parseInt(quantity);
    setDailyProfit(dailyProfit);
    const monthlyProfit = dailyProfit * 30;
    setMonthlyProfit(monthlyProfit);
    const yearlyProfit = dailyProfit * 365;
    setYearlyProfit(yearlyProfit);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, []);

  const handleDateIconPress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, newDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (newDate) {
      setDate(newDate);
      const formattedDate = newDate.toLocaleDateString();
      setSelectedDate(formattedDate);
    }
  };

  const clearDate = () => {
    setSelectedDate('');
    setDate(new Date());
  };

  return (
    <GestureHandlerRootView style={styles.fullcontainer}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={styles.scrollView}>
        <Text>Date:</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="calendar-alt" size={24} color="#f7b304" style={styles.icon} />
          <DateTimePicker
            value={date}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            placeholder="Select Date"
            style={styles.datePicker}
            textColor="#f7b304" // Adjust calendar text color
          />
          {selectedDate !== '' && (
            <TouchableOpacity onPress={clearDate} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text>Price per Litre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <Text>Quantity (Litres):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={calculateProfit}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {error && <Text style={styles.errorText}>{error}</Text>}
        {tableData.length > 0 && (
          <View style={styles.tableContainer}>
            <Text style={styles.tableHeader}>Table Milk Data:</Text>
            {tableData.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableText}>{item.day}</Text>
                <Text style={styles.tableText}>{item.price} Dt</Text>
                <Text style={styles.tableText}>{item.quantity} L</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  fullcontainer: {
    flex: 1,
    padding: 4,
    backgroundColor: '#FFFFFF',
    marginTop: 105,
    marginBottom: 23,
  },
  scrollView: {
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  button: {
    backgroundColor: '#f7b304', // Changed button color
    padding: 8,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#107c2e', // Changed button text color
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#f7b304', // Changed button color
    padding: 8,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  tableText: {
    flex: 1,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: '#f7b304',
    padding: 8,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#107c2e',
    fontWeight: 'bold',
  },
  datePicker: {
    flex: 1,
  },
});

export default ProfitCalculatorScreen;
