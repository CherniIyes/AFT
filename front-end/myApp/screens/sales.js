import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Platform, FlatList ,Pressable,Modal,} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const SalesList = () => {
  const [allAftData, setAllAftData] = useState([]);
  const [filteredAftData, setFilteredAftData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [updatedProductDetails, setUpdatedProductDetails] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);
  const [years, setYears] = useState([]);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newProductDetails, setNewProductDetails] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.50.59:5464/sales/getAll');
        setAllAftData(response.data);
        setFilteredAftData(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
        setError('Network error. Please check your connection and try again.');
      }
    };

    fetchData();
  }, []);

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

  const onViewDetails = (item) => {
    console.log('Item details:', item);
  };

  const onOpenUpdateModal = (item) => {
    setSelectedItem(item);
    setUpdatedProduct(item.product);
    setUpdatedPrice(item.price.toString());
    setUpdatedDate(item.date);
    setUpdatedProductDetails(item.productdetails);
    setUpdateModalVisible(true);
  };

  const onUpdate = () => {
    const updatedItem = {
      product: updatedProduct,
      price: parseFloat(updatedPrice),
      date: updatedDate,
      productdetails: updatedProductDetails,
    };

    const updatedData = filteredAftData.map((item) =>
      item.id === selectedItem.id ? { ...item, ...updatedItem } : item
    );

    setFilteredAftData(updatedData);
    setUpdateModalVisible(false);
  };

  const onDelete = (item) => {
    const updatedData = filteredAftData.filter((i) => i.id !== item.id);
    setFilteredAftData(updatedData);
  };

  const onOpenAddModal = () => {
    setAddModalVisible(true);
  };
  
  const onAdd = async () => {
    try {
      const response = await axios.post("http://192.168.50.59:5464/sales/Add", {
        product: newProduct,
        price: parseFloat(newPrice),
        date: date,
        productdetails: newProductDetails,
      });
  
      const newProductItem = response.data;
  
      setFilteredAftData([...filteredAftData, newProductItem]);
      setAddModalVisible(false);
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle the error as needed
    }
  };

  const calculateTotal = () => {
    const totalPrice = filteredAftData.reduce((acc, item) => acc + item.price, 0);
    return totalPrice.toFixed(2);
  };

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.salesListTitle}>Sales List</Text>

      {/* Dropdown for selecting the year */}
      <DropDownPicker
        items={years.map((year) => ({ label: year, value: year }))}
        defaultValue={selectedYear}
        containerStyle={{ height: 40, margin: 10 }}
        onChangeItem={(item) => setSelectedYear(item.value)}
      />

      <FlatList
        data={filteredAftData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Pressable onPress={() => onViewDetails(item)}>
              <View>
              <Text>{item.product}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
               
                <Text>Price: {item.price.toFixed(2)}DT</Text>
                <Text>{item.productdetails}</Text>
              </View>
            </Pressable>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.updateButton} onPress={() => onOpenUpdateModal(item)}>
                <Text style={styles.buttonText}>Update</Text>
              </Pressable>
              <Pressable style={styles.deleteButton} onPress={() => onDelete(item)}>
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      {/* Add Button */}
      <Pressable style={styles.addButton} onPress={onOpenAddModal}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>

      {/* Add Modal */}
      <Modal visible={isAddModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Product"
              value={newProduct}
              onChangeText={(text) => setNewProduct(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={newPrice}
              onChangeText={(text) => setNewPrice(text)}
            />
            <TouchableOpacity style={styles.dateIcon} onPress={handleDateIconPress}>
                              <Text>{selectedDate || "📅"}</Text>
                        </TouchableOpacity>
                        {showDatePicker && (
  <DateTimePicker
    value={date}
    mode="date"
    display="spinner"
    onChange={handleDateChange}
    textColor="#000"  // Set the text color to black
    style={{ backgroundColor: '#fff' }}  // Set the background color to white
  />
)}

            {/* <TextInput
              style={styles.input}
              placeholder="Date"
              value={newDate}
              onChangeText={(text) => setNewDate(text)}
            /> */}
            <TextInput
              style={styles.input}
              placeholder="Product Details"
              value={newProductDetails}
              onChangeText={(text) => setNewProductDetails(text)}
            />
            <Pressable style={styles.rectangleView} onPress={onAdd}>
              <Text style={styles.login}>Add Product</Text>
            </Pressable>
            <Pressable style={styles.rectangleView} onPress={() => setAddModalVisible(false)}>
              <Text style={styles.login}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Update Modal */}
      <Modal visible={isUpdateModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Product"
              value={updatedProduct}
              onChangeText={(text) => setUpdatedProduct(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={updatedPrice}
              onChangeText={(text) => setUpdatedPrice(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Date"
              value={updatedDate}
              onChangeText={(text) => setUpdatedDate(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Product Details"
              value={updatedProductDetails}
              onChangeText={(text) => setUpdatedProductDetails(text)}
            />
            <Pressable style={styles.rectangleView} onPress={onUpdate}>
              <Text style={styles.login}>Update</Text>
            </Pressable>
            <Pressable style={styles.rectangleView} onPress={() => setUpdateModalVisible(false)}>
              <Text style={styles.login}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Display Total */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: {calculateTotal()}DT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    dateIcon: {
        marginRight: 10,
        borderWidth: 0.5,
        padding: 9,
  },
  container: {
    flex: 1,
  },
  salesListTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  rectangleView: {
    borderRadius: 7,
    backgroundColor: 'darkolivegreen',
    width: 240,
    height: 32,
    marginTop: 10,
  },
  login: {
    fontSize: 16,
    color: 'orange',
    textAlign: 'center',
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  dateText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SalesList;
