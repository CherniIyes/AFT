import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, RefreshControl } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from 'react-native-elements/dist/helpers';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProfitCalculatorScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarVisible: true,
    });
  }, [navigation]);

  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dailyProfit, setDailyProfit] = useState(0);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
        day: date,
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
      return (
        <View style={styles.tableRow}>
          <Text style={[styles.tableText, styles.firstRow]}>Date</Text>
          <Text style={[styles.tableText, styles.firstRow]}>Price</Text>
          <Text style={[styles.tableText, styles.firstRow]}>Quantity</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>{item.day}</Text>
          <Text style={styles.tableText}>{item.price} Dt</Text>
          <Text style={styles.tableText}>{item.quantity} L</Text>
        </View>
      );
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setDate(currentDate.toISOString().split('T')[0]); // Format the date
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <GestureHandlerRootView style={styles.fullcontainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Date:</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={showDatepicker}>
            <Ionicons name="calendar-outline" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={date}
            onFocus={showDatepicker}
            keyboardType="default"
          />
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
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
        <TouchableOpacity style={styles.button} onPress={calculateProfit}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <View style={styles.profitContainer}>
          {renderProfitCards()}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
    marginTop: 105,
    marginBottom: 23,
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
