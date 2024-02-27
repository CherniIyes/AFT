import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';

const ProfitCalculatorScreen = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dailyProfit, setDailyProfit] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.100.66:6464/milk');
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateProfit = () => {
    const dailyProfit = parseFloat(price) * parseInt(quantity);
    setDailyProfit(dailyProfit);

    const monthlyProfit = dailyProfit * 30; // Assuming 30 days in a month
    setMonthlyProfit(monthlyProfit);

    const yearlyProfit = dailyProfit * 365; // Assuming 365 days in a year
    setYearlyProfit(yearlyProfit);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.100.66:6464/milk/add', {
        day: date,
        price: price,
        quantity: quantity
      });
      if (response.status === 200) {
        fetchData(); // Fetch updated data after successful addition
        setPrice('');
        setQuantity('');
      } else {
        console.error('Failed to add data');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableText}>{item.date}</Text>
      <Text style={styles.tableText}>{item.price}</Text>
      <Text style={styles.tableText}>{item.quantity}</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Date:</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          keyboardType="datetime"
        />
        <Text>Price per Litre:</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="decimal-pad"
        />
        <Text>Quantity (Litres):</Text>
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={calculateProfit}>
          <Text style={styles.buttonText}>Calculate Profit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <Text style={styles.profitText}>Daily Profit: {dailyProfit.toFixed(2)}</Text>
        <Text style={styles.profitText}>Monthly Profit: {monthlyProfit.toFixed(2)}</Text>
        <Text style={styles.profitText}>Yearly Profit: {yearlyProfit.toFixed(2)}</Text>

        {tableData.length > 0 && (
          <View style={styles.tableContainer}>
            <Text style={styles.tableHeader}>Table Data</Text>
            <FlatList
              data={tableData}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()} // Assuming each item has an 'id' property
            />
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Color.colorWhite
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
  button: {
    backgroundColor: '#107c2e', // Adjust button style to match Property1Default
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10, // Adjust spacing as needed
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profitText: {
    // Style your profit text here to match the startYourJourney text
    // Example: color: '#000000'
  },
  // Table styles
  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    // Additional styles to match the startYourJourney text
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
});

export default ProfitCalculatorScreen;
