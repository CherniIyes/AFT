import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Platform, ScrollView, FlatList } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/Rstore';
import axios from 'axios';

const DairyValueChain = () => {
  const user = useRecoilValue(userState);

  const [cowNumber, setCowNumber] = useState('');
  const [cowRace, setCowRace] = useState('');
  const [aiDate, setAiDate] = useState('');
  const [aiTriggered, setAiTriggered] = useState(false);
  const [calculatedDates, setCalculatedDates] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");


  const [allCows, setAllCows] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const fetchAllCows = async () => {
    // fetch(`http://192.168.1.6:6464/cows/getbyid/${user.id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('All cows data:', data);
    //     setAllCows(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching all cows:', error);
    //   });


    try {
      const response = await axios.get(`http://192.168.1.4:6464/cows/getbyid/${user.id}`);
      if (response.data.length === 0) {
        // If no data returned, set tableData to an empty array
        setAllCows([]);
      } else {
        // If data returned, update tableData state
        setAllCows(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data: ' + error.message);
    }


  };

  useEffect(() => {

    fetchAllCows();
  }, []);

  const handleSubmit = () => {
    if (!selectedDate) {
      console.error('Please select a date for artificial insemination.');
      return;
    }

    const aiDateObj = new Date(selectedDate);
    const returnInHeatControlDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 18));
    const pregnancyDetectionDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 27));
    const dryingOffDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 175));
    const calvingAndDeliveryDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 63));

    setCalculatedDates({
      returnInHeatControlDate,
      pregnancyDetectionDate,
      dryingOffDate,
      calvingAndDeliveryDate,
    });
  };

  const handleToggle = () => {
    setAiTriggered(!aiTriggered);

    if (!aiTriggered) {
      setCalculatedDates(null);
    }
  };

  const saveToDatabase = () => {
    const cowData = {
      cow_number: cowNumber,
      cow_race: cowRace,
      artificial_insemination_date: aiDate,
      artificial_insemination_triggered: aiTriggered ? "Yes" : "No",
      return_in_heat_control_date: calculatedDates.returnInHeatControlDate.toISOString().split('T')[0],
      pregnancy_detection_date: calculatedDates.pregnancyDetectionDate.toISOString().split('T')[0],
      drying_off_date: calculatedDates.dryingOffDate.toISOString().split('T')[0],
      calving_and_delivery_date: calculatedDates.calvingAndDeliveryDate.toISOString().split('T')[0],
      userId: user.id,
    };

    fetch('http://192.168.1.4:6464/cows/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cowData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data successfully saved:', data);
        setCowNumber('');
        setCowRace('');
        setAiDate('');
        setCalculatedDates(null);
        setAiTriggered(false);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  const handleDateIconPress = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, newDate) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (newDate) {
      const formattedDate = newDate.toISOString().split('T')[0];
      setSelectedDate(formattedDate);
      setAiDate(formattedDate);
      setShowDatePicker(false);
    }
  };

  const toggleTableVisibility = () => {
    setShowTable(!showTable);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Dairy Value Chain</Text>
        <TextInput
          style={styles.input}
          placeholder="Cow Number"
          value={cowNumber}
          onChangeText={setCowNumber}
          keyboardType="numeric"

        />
        <TextInput
          style={styles.input}
          placeholder="Cow Race"
          value={cowRace}
          onChangeText={setCowRace}
        />
        <TouchableOpacity style={styles.dateIcon} onPress={handleDateIconPress}>
          <Text>{selectedDate || "Artificial insemination date"}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Artificial Insemination Triggered:</Text>
          <Switch value={aiTriggered} onValueChange={handleToggle} />
        </View>
        <Button title="Submit" onPress={handleSubmit} style={styles.button} color="#107c2e" />
        {calculatedDates && (
          <>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Return in Heat Control Date</Text>
              <TextInput
                style={styles.dateInput}
                value={calculatedDates.returnInHeatControlDate.toISOString().split('T')[0]}
                editable={false}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Pregnancy Detection Date</Text>
              <TextInput
                style={styles.dateInput}
                value={calculatedDates.pregnancyDetectionDate.toISOString().split('T')[0]}
                editable={false}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Drying Off Date</Text>
              <TextInput
                style={styles.dateInput}
                value={calculatedDates.dryingOffDate.toISOString().split('T')[0]}
                editable={false}
              />
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>Calving and Delivery Date</Text>
              <TextInput
                style={styles.dateInput}
                value={calculatedDates.calvingAndDeliveryDate.toISOString().split('T')[0]}
                editable={false}
              />
            </View>
            <Button title="Save to Database" onPress={saveToDatabase} style={styles.Button} color="#107c2e" />
          </>
        )}

        {/* Button to show/hide all cows */}
        <TouchableOpacity style={styles.showAllButton} onPress={toggleTableVisibility}>
          <Text style={styles.showAllButtonText}>{showTable ? 'Hide All Cows' : 'Show All Cows'}</Text>
        </TouchableOpacity>

        {/* Render all cows in a table if showTable is true */}
        {showTable && allCows.length > 0 && (
          <View style={styles.tableContainer}>
            <Text style={styles.tableTitle}>All Cows</Text>
            <View style={styles.tableHeader}>
              <Text style={styles.columnHeader}>Cow Number</Text>
              <Text style={styles.columnHeader}>Cow Race</Text>
              <Text style={styles.columnHeader}>AI Date</Text>
              <Text style={styles.columnHeader}>AI Triggered</Text>
              <Text style={styles.columnHeader}>Return in Heat Control</Text>
              <Text style={styles.columnHeader}>Pregnancy Detection</Text>
              <Text style={styles.columnHeader}>Drying Off</Text>
              <Text style={styles.columnHeader}>Calving and Delivery</Text>
            </View>
            <FlatList
              data={allCows}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={styles.cell}>{item.cow_number}</Text>
                  <Text style={styles.cell}>{item.cow_race}</Text>
                  <Text style={styles.cell}>{item.artificial_insemination_date}</Text>
                  <Text style={styles.cell}>{item.artificial_insemination_triggered}</Text>
                  <Text style={styles.cell}>{item.return_in_heat_control_date}</Text>
                  <Text style={styles.cell}>{item.pregnancy_detection_date}</Text>
                  <Text style={styles.cell}>{item.drying_off_date}</Text>
                  <Text style={styles.cell}>{item.calving_and_delivery_date}</Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    paddingTop: '30%', // Adjusted paddingTop instead of marginTop
    minHeight: '100%',
    paddingBottom: '30%'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#107c2e',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    width: responsiveWidth(95),
    height: responsiveHeight(5),

  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    marginRight: 10,
  },
  dateContainer: {
    marginBottom: 10,
  },
  dateText: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  dateInput: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    width: responsiveWidth(95),
    height: responsiveHeight(5)
  },

  button: {
    backgroundColor: '#107c2e',
    padding: 10,

  },
  dateIcon: {
    marginRight: 10,
    borderWidth: 0.5,
    padding: 9,
  },
  showAllButton: {
    marginTop: 4,
    backgroundColor: '#107c2e',
    padding: 10,
    borderRadius: 2,
    marginBottom: 10,
  },
  showAllButtonText: {
    color: '#fff',
    textAlign: 'center',

  },
  tableContainer: {
    borderWidth: 10,
    borderColor: '#ccc',
    padding: 1,
  },
  tableTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    padding: 3,
    fontSize: 10,
    borderBottomWidth: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,

  },
  cell: {
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1, // Add border to the right of each cell
    borderColor: '#ccc', // Color of the border
    padding: 5, // Adjust padding as needed
    fontSize: 11
  },
});

export default DairyValueChain;
