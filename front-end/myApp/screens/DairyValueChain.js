

// import React, { useState } from 'react';
// import { TextInput, Button, Switch , StyleSheet, View, Text, TouchableOpacity, Platform, FlatList} from 'react-native';
// import DateTimePicker from "@react-native-community/datetimepicker";
// const DairyValueChain = () => {
//   const [cowNumber, setCowNumber] = useState('');
//   const [cowRace, setCowRace] = useState('');
//   const [aiDate, setAiDate] = useState('');
//   const [aiTriggered, setAiTriggered] = useState(false);
//   const [calculatedDates, setCalculatedDates] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [date, setDate] = useState(new Date());

//   const handleSubmit = () => {
//     const aiDateObj = new Date(date);
//     const returnInHeatControlDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 18));
//     const pregnancyDetectionDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 27));
//     const dryingOffDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 175));
//     const calvingAndDeliveryDate = new Date(aiDateObj.setDate(aiDateObj.getDate() + 63));

//     setCalculatedDates({
//       returnInHeatControlDate,
//       pregnancyDetectionDate,
//       dryingOffDate,
//       calvingAndDeliveryDate,
//     });
//   };

//   const handleToggle = () => {
//     setAiTriggered(!aiTriggered);
    
//     if (!aiTriggered) {
//       setCalculatedDates(null);
//     }
//   };

//   const handleDateIconPress = () => {
//     setShowDatePicker(true);
// };

// const handleDateChange = (event, newDate) => {
//     if (Platform.OS === "android") {
//           setShowDatePicker(false);
//     }
//     if (newDate) {
//           setDate(newDate);
//           const formattedDate = newDate.toLocaleDateString();
//           setSelectedDate(formattedDate);
//     }
// };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 24, marginBottom: 20 }}>Dairy Value Chain</Text>
//       <TextInput
//         style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
//         placeholder="Cow Number"
//         value={cowNumber}
//         onChangeText={setCowNumber}
//       />
//       <TextInput
//         style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
//         placeholder="Cow Race"
//         value={cowRace}
//         onChangeText={setCowRace}
//       />
//       <TouchableOpacity style={styles.dateIcon} onPress={handleDateIconPress}>
//                               <Text>{selectedDate || "📅"}</Text>
//                         </TouchableOpacity>
//                         {showDatePicker && (
//                         <DateTimePicker
//                               value={date}
//                               mode="date"
//                               display="spinner"
//                               onChange={handleDateChange}
//                         />
//                   )}
//       {/* <TextInput
//         style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
//         placeholder="Artificial Insemination Date (YYYY-MM-DD)"
//         value={aiDate}
//         onChangeText={setAiDate}
//       /> */}
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
//         <Text>Artificial Insemination Triggered:</Text>
//         <Switch value={aiTriggered} onValueChange={handleToggle} />
//       </View>
//       <Button title="Submit" onPress={handleSubmit} />
//       {calculatedDates && (
//         <>
//           <View>
//             <Text style={{ marginBottom: 5 }}>Return in heat control date</Text>
//             <TextInput
//               style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
//               value={calculatedDates.returnInHeatControlDate.toISOString().split('T')[0]}
//               editable={false}
//             />
//           </View>
//           <View>
//             <Text style={{ marginBottom: 5 }}>Pregnancy detection date</Text>
//             <TextInput
//               style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
//               value={calculatedDates.pregnancyDetectionDate.toISOString().split('T')[0]}
//               editable={false}
//             />
//           </View>
//           <View>
//             <Text style={{ marginBottom: 5 }}>Drying off date</Text>
//             <TextInput
//               style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
//               value={calculatedDates.dryingOffDate.toISOString().split('T')[0]}
//               editable={false}
//             />
//           </View>
//           <View>
//             <Text style={{ marginBottom: 5 }}>Calving and delivery date</Text>
//             <TextInput
//               style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
//               value={calculatedDates.calvingAndDeliveryDate.toISOString().split('T')[0]}
//               editable={false}
//             />
//           </View>
//         </>
//       )}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     dateIcon: {
//         marginRight: 10,
//         borderWidth: 0.5,
//         padding: 9,
//   },

// });
// export default DairyValueChain;

import React, { useState } from 'react';
import { TextInput, Button, Switch, StyleSheet, View, Text, TouchableOpacity, Platform, FlatList } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";

const DairyValueChain = () => {
  const [cowNumber, setCowNumber] = useState('');
  const [cowRace, setCowRace] = useState('');
  const [aiDate, setAiDate] = useState('');
  const [aiTriggered, setAiTriggered] = useState(false);
  const [calculatedDates, setCalculatedDates] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = async () => {
    const data = {
      cow_number: cowNumber,
      cow_race: cowRace,
      artificial_insemination_date: selectedDate,
      artificial_insemination_triggered: aiTriggered ? 'Yes' : 'No',
      // You may need to include other fields as needed
    };

    try {
      const response = await fetch('http://192.168.100.60:6464/cows/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      
      setCowNumber('');
      setCowRace('');
      setAiDate('');
      setAiTriggered(false);
      setCalculatedDates(null);
      setShowDatePicker(false);
      setSelectedDate('');
    } catch (error) {
      console.error(error);
  
    }
  };

  const handleToggle = () => {
    setAiTriggered(!aiTriggered);
    
    if (!aiTriggered) {
      setCalculatedDates(null);
    }
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

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Dairy Value Chain</Text>
      <TextInput
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
        placeholder="Cow Number"
        value={cowNumber}
        onChangeText={setCowNumber}
      />
      <TextInput
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
        placeholder="Cow Race"
        value={cowRace}
        onChangeText={setCowRace}
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
        />
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Artificial Insemination Triggered:</Text>
        <Switch value={aiTriggered} onValueChange={handleToggle} />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
      {calculatedDates && (
        <>
          {/* Display calculated dates */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateIcon: {
    marginRight: 10,
    borderWidth: 0.5,
    padding: 9,
  },
});

export default DairyValueChain;
