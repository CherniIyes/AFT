import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from 'react-native-elements/dist/helpers';

const ProfitCalculatorScreen = () => {
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dailyProfit, setDailyProfit] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(true)
  useEffect(() => {
    fetchData();
  }, [reload]);
  const fetchData = async () => {
    try {
      // const response = await axios.get('http://192.168.100.62:6464/milk');
      // If you want to use a different endpoint, you should change the URL in the line above.
      // const response = await axios.get('http://192.168.100.43:6464/milk');
      const response = await axios.get('http://192.168.100.52:6464/milk');
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data: ' + error.message);
    }
  };
  const handleSubmit = async () => {
    try {
      // The URL in the following line seems to have a typo, fix it.
      // const response = await axios.post('http://192.168.100.62:6464/milk/add', {
      //   day: date,
      //   price: parseFloat(price), // Ensure price is converted to a number
      //   quantity: parseInt(quantity), // Ensure quantity is converted to an integer
      // });
      // If you want to use a different endpoint, you should change the URL in the line above.
      // const response = await axios.post('http://192.168.100.43:6464/milk/add', {
      //   day: date,
      //   price: parseFloat(price),
      //   quantity: parseInt(quantity),
      // }); 
      const response = await axios.post('http://192.168.100.52:6464/milk/add', {
        day: date,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      });
      if (response.status === 200) {
        // Update frontend state with the new entry
        setReload(!reload)
        // Calculate total price
        const totalPrice = tableData.reduce((acc, curr) => acc + parseFloat(curr.price), 0);
        setTotalPrice(totalPrice);

        // Reset input fields
        setPrice('');
        setQuantity('');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error posting data: ' + error.message);
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

  const renderProfitCards = () => {
    return [
      { title: 'Daily Profit', value: dailyProfit.toFixed(2), icon: 'money-bill-wave' },
      { title: 'Monthly Profit', value: monthlyProfit.toFixed(2), icon: 'money-bill-wave' },
      { title: 'Yearly Profit', value: yearlyProfit.toFixed(2), icon: 'money-bill-wave' }
    ].map((item, index) => (
      <Card key={index} style={styles.card}>
        <Card.Content>
          <FontAwesome5 name={item.icon} size={24} color="#107c2e" style={styles.profitIcon} />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardText}>{item.value}</Text>
        </Card.Content>
      </Card>
    ));
  };

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      // Render headers in the first row
      return (
        <View style={styles.tableRow}>
          <Text style={[styles.tableText, styles.firstRow]}>Date</Text>
          <Text style={[styles.tableText, styles.firstRow]}>Price</Text>
          <Text style={[styles.tableText, styles.firstRow]}>Quantity</Text>
        </View>
      );
    } else {
      // Render data rows
      return (
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>{item.day}</Text>
          <Text style={styles.tableText}>{item.price} Dt</Text>
          <Text style={styles.tableText}>{item.quantity} L</Text>
        </View>
      );
    }
  };

  return (

    <GestureHandlerRootView style={styles.fullcontainer}>
      <ScrollView>
        <Text>Date:</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            keyboardType="default"
          />
        </View>
        <Text>Price per Litre:</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="cash-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>
        <Text>Quantity (Litres):</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="cube-outline" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
        </View>

        {/* <TouchableOpacity style={styles.button} onPress={calculateProfit}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity> */}
        <Button title="Calculate" onPress={calculateProfit} style={styles.button} color="#107c2e" />
        <View style={styles.profitContainer}>
          {renderProfitCards()}
        </View>
        {/* <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity> */}
        <Button title="Submit" onPress={handleSubmit} style={styles.button} color="#107c2e" />
        {error && <Text style={styles.errorText}>{error}</Text>}
        {tableData.length > 0 && (
          <View style={styles.tableContainer}>
            <Text style={styles.tableHeader}>Table Milk Data : </Text>
            <FlatList
              data={tableData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
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
    position: 'relative',
    marginTop: 105,  // Adjusted to provide space for the headerContainer
    marginBottom: 23,  // Adjusted to provide space for the tabBarContainer
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
    backgroundColor: '#107c2e',
    padding: 8,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#f7b304',
    fontWeight: 'bold',
  },
  profitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,

  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
  },
  submitButton: {
    backgroundColor: '#107c2e',
    padding: 8,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  profitIcon: {
    alignSelf: 'center',
    marginBottom: 10,
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
  firstRow: {
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default ProfitCalculatorScreen;
