import React, { useState, useEffect } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  Pressable,
  Modal,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const SalesList = () => {
  const [allAftData, setAllAftData] = useState([]);
  const [filteredAftData, setFilteredAftData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const [updatedProduct, setUpdatedProduct] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedDate, setUpdatedDate] = useState(new Date());
  const [updatedProductDetails, setUpdatedProductDetails] = useState('');

  const [newProduct, setNewProduct] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newProductDetails, setNewProductDetails] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isUpdateModalVisible, setUpdateModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.100.70:5464/sales/getAll');
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

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  const onViewDetails = (item) => {
    console.log('Item details:', item);
  };

  const onOpenAddModal = () => {
    setAddModalVisible(true);
  };

  const onOpenUpdateModal = (item) => {
    setSelectedItem(item);
    setUpdatedProduct(item.product);
    setUpdatedPrice(item.price.toString());
    setUpdatedDate(new Date(item.date));
    setUpdatedProductDetails(item.productdetails);
    setUpdateModalVisible(true);
  };

  const onUpdate = async () => {
    try {
      const updatedItem = {
        product: updatedProduct,
        price: parseFloat(updatedPrice),
        date: updatedDate.toLocaleDateString(),
        productdetails: updatedProductDetails,
      };

      await axios.put(`http://192.168.100.70:5464/sales/Update/${selectedItem.id}`, updatedItem);

      // Update the state dynamically
      setFilteredAftData((prevData) =>
        prevData.map((item) => (item.id === selectedItem.id ? { ...item, ...updatedItem } : item))
      );

      setUpdateModalVisible(false);
    } catch (error) {
      console.error('Error updating sales item:', error);
      setError('Error updating item. Please try again.');
    }
  };

  const onDelete = async (item) => {
    try {
      await axios.delete(`http://192.168.100.70:5464/sales/delete/${item.id}`);
  
      // Update the state dynamically by excluding the deleted item
      setFilteredAftData((prevData) => prevData.filter((dataItem) => dataItem.id !== item.id));
    } catch (error) {
      console.error('Error deleting sales item:', error);
      setError('Error deleting item. Please try again.');
    }
  };

  const onAdd = async () => {
    try {
      const response = await axios.post('http://192.168.100.70:5464/sales/Add', {
        product: newProduct,
        price: parseFloat(newPrice),
        date: selectedDate.toLocaleDateString(),
        productdetails: newProductDetails,
      });

      const newProductItem = response.data;

      // Update the state dynamically
      setFilteredAftData((prevData) => [...prevData, newProductItem]);
      setAllAftData((prevData) => [...prevData, newProductItem]); // Update all data as well
      setAddModalVisible(false);

      // Clear input fields after successful addition
      setNewProduct('');
      setNewPrice('');
      setSelectedDate(new Date());
      setNewProductDetails('');
    } catch (error) {
      console.error('Error adding product:', error);
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
      <View style={styles.salesList}>
        <Text style={styles.salesListTitle}>Sales List</Text>

        <TouchableOpacity style={styles.dateIcon} onPress={handleDateIconPress}>
          <Text>{selectedDate.toLocaleDateString() || '📅'}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            textColor="#000"
            style={{ backgroundColor: '#fff' }}
          />
        )}

        <FlatList
          data={filteredAftData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Pressable onPress={() => onViewDetails(item)}>
                <View>
                  <Text style={styles.productName}>{item.product}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text>Price: {item.price}DT</Text>
                  <Text>{item.productdetails}</Text>
                </View>
              </Pressable>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.rectangleView} onPress={() => onOpenUpdateModal(item)}>
                  <Text style={styles.login}>Update</Text>
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
          <Text style={styles.login}>+</Text>
        </Pressable>

        {/* Add Modal */}
        <Modal visible={isAddModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                placeholder="Product"
                placeholderTextColor="#A0A0A0"
                value={newProduct}
                onChangeText={(text) => setNewProduct(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Price"
                placeholderTextColor="#A0A0A0"
                value={newPrice}
                onChangeText={(text) => setNewPrice(text)}
              />
              {Platform.OS === 'ios' && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="spinner"
                  onChange={(event, newDate) => setSelectedDate(newDate)}
                  textColor="#000"
                  style={{ backgroundColor: '#fff' }}
                />
              )}
              {Platform.OS === 'android' && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  onChange={(event, newDate) => setSelectedDate(newDate)}
                  textColor="#000"
                  style={{ backgroundColor: '#fff' }}
                />
              )}
              <TextInput
                style={styles.input}
                placeholder="Product Details"
                placeholderTextColor="#A0A0A0"
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
                placeholderTextColor="#A0A0A0"
                value={updatedProduct}
                onChangeText={(text) => setUpdatedProduct(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Price"
                placeholderTextColor="#A0A0A0"
                value={updatedPrice}
                onChangeText={(text) => setUpdatedPrice(text)}
              />
              {Platform.OS === 'ios' && (
                <DateTimePicker
                  value={updatedDate}
                  mode="date"
                  display="spinner"
                  onChange={(event, newDate) => setUpdatedDate(newDate)}
                  textColor="#000"
                  style={{ backgroundColor: '#fff' }}
                />
              )}
              {Platform.OS === 'android' && (
                <DateTimePicker
                  value={updatedDate}
                  mode="date"
                  onChange={(event, newDate) => setUpdatedDate(newDate)}
                  textColor="#000"
                  style={{ backgroundColor: '#fff' }}
                />
              )}
              <TextInput
                style={styles.input}
                placeholder="Product Details"
                placeholderTextColor="#A0A0A0"
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
     </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    marginTop: 105,  // Adjusted to provide space for the headerContainer
    marginBottom: 23,  // Adjusted to provide space for the tabBarContainer
  },
  
  salesListTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  dateIcon: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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
    backgroundColor: '#4CAF50', // Green color, you can change this
    padding: 10,
    borderRadius: 5,
    marginRight: 10, // Adjust spacing as needed
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'darkolivegreen',
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
    width: 115,
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
    marginTop: 10,
  },
});

export default SalesList;
