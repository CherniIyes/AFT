import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, RefreshControl } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/Rstore';
const ProfitCalculatorScreen = ({ navigation }) => {
  const user = useRecoilValue(userState);



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
      const response = await axios.get(`http://192.168.1.4:6464/milk/getone/${user.id}`);

      // If data returned, update tableData state
      setTableData(response.data);

    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data: ' + error.message);
    }
  };
  const handleSubmit = async () => {
    // Log the data object before making the POST request
    console.log("Data to be sent:", {
      day: date,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      userId: user.id,
    });

    try {
      const response = await axios.post("http://192.168.1.4:6464/milk/add", {
        day: date,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        userId: user.id,
      });
      console.log("Data added successfully:", response.data);
      setTableData(prevTableData => [...prevTableData, response.data]);
      setDate('');
      setPrice('');
      setQuantity('');
      setDailyProfit(0);
      setMonthlyProfit(0);
      setYearlyProfit(0);
      setError(null);
      fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };


  const calculateProfit = () => {
    if (!price || !quantity) {
      setError('Please enter price and quantity to calculate profit.');
      return;
    }

    const dailyProfit = parseFloat(price) * parseInt(quantity);
    setDailyProfit(dailyProfit);
    const monthlyProfit = dailyProfit * 30;
    setMonthlyProfit(monthlyProfit);
    const yearlyProfit = dailyProfit * 365;
    setYearlyProfit(yearlyProfit);
    setError(null);
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
    console.log('Rendering item:', item); // Log the item being rendered
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
  const handleDateIconPress = () => {
    setShowDatePicker(true);
  };
  return (
    <GestureHandlerRootView style={styles.fullcontainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.sectionTitle}>Enter Your Dairy Production:</Text>



        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={showDatepicker}>
            <FontAwesome5 name="calendar-alt" size={24} color="#107c2e" style={styles.icon} />
          </TouchableOpacity>
          <TextInput
            style={[styles.input, { color: '#000', opacity: 0.5 }]}
            value={date}
            onFocus={showDatepicker}
            keyboardType="default"
            placeholder="Select Date"
            editable={false}
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



        <View style={styles.inputContainer}>
          <FontAwesome5 name="money-bill" size={24} color="#107c2e" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholder="Price per Litre"
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="cubes" size={24} color="#107c2e" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
            placeholder="Quantity (Litres)"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={calculateProfit}>
          <Text style={styles.buttonText}>Calculate Profit</Text>
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
            <Text style={styles.tableHeader}>Milk:</Text>
            <View style={styles.tableRowHeader}>
              <Text style={styles.tableCellHeader}>Quantity</Text>
              <Text style={styles.tableCellHeader}>Price</Text>
              <Text style={styles.tableCellHeader}>Date</Text>
            </View>
            <FlatList
              data={tableData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>{item.quantity}</Text>
                  <Text style={styles.tableCell}>{item.price}</Text>
                  <Text style={styles.tableCell}>{item.day}</Text>
                </View>
              )}
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
    padding: 16,
    marginTop: 120,
    marginBottom: 33,
    backgroundColor: '#FFFFFF',
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
    fontSize: 15,
    color: '#107c2e',

  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#107c2e',
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
  button: {
    backgroundColor: '#107c2e',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#f7b304',
    fontWeight: 'bold',
    fontSize: 16,
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
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#107c2e',
  },
  cardText: {
    fontSize: 16,
    color: '#107c2e',
  },
  submitButton: {
    backgroundColor: '#107c2e',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  profitIcon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  tableContainer: {
    marginTop: 20,
  },
  tableHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#107c2e',
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
    fontSize: 16,
    color: '#107c2e',
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