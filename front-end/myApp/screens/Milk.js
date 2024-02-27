import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
      const response = await fetch('http://localhost:6464/milk');
      const data = await response.json();
      setTableData(data);
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
      const response = await fetch('http://localhost:6464/milk/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: date,
          price: price,
          quantity: quantity
        }),
      });
      if (response.ok) {
        fetchData();
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

      <Button title="Calculate Profit" onPress={calculateProfit} />

      <Text>Daily Profit: {dailyProfit.toFixed(2)}</Text>
      <Text>Monthly Profit: {monthlyProfit.toFixed(2)}</Text>
      <Text>Yearly Profit: {yearlyProfit.toFixed(2)}</Text>

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
  // Table styles
  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
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
