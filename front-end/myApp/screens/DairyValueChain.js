// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';



// const DairyValueChain = () => {
//   const [cowNumber, setCowNumber] = useState('');
//   const [cowRace, setCowRace] = useState('');
//   const [aiDate, setAiDate] = useState('');
//   const [aiTriggered, setAiTriggered] = useState(false);
//   const [calculatedDates, setCalculatedDates] = useState(null);

//   const handleSubmit = () => {

//     const aiDateObj = new Date(aiDate);
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

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Dairy Value Chain</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Cow Number"
//         value={cowNumber}
//         onChangeText={setCowNumber}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Cow Race"
//         value={cowRace}
//         onChangeText={setCowRace}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Artificial Insemination Date (YYYY-MM-DD)"
//         value={aiDate}
//         onChangeText={setAiDate}
//       />
//       <View style={styles.switchContainer}>
//         <Text style={styles.switchText}>Artificial Insemination Triggered:</Text>
//         <Switch value={aiTriggered} onValueChange={handleToggle} />
//       </View>
//       <Button title="Submit" onPress={handleSubmit} style={styles.button} color="#107c2e" />
//       {calculatedDates && (
//         <>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateText}>Return in Heat Control Date</Text>
//             <TextInput
//               style={styles.dateInput}
//               value={calculatedDates.returnInHeatControlDate.toISOString().split('T')[0]}
//               editable={false}
//             />
//           </View>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateText}>Pregnancy Detection Date</Text>
//             <TextInput
//               style={styles.dateInput}
//               value={calculatedDates.pregnancyDetectionDate.toISOString().split('T')[0]}
//               editable={false}
//             />
//           </View>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateText}>Drying Off Date</Text>
//             <TextInput
//               style={styles.dateInput}
//               value={calculatedDates.dryingOffDate.toISOString().split('T')[0]}
//               editable={false}
//             />
//           </View>
//           <View style={styles.dateContainer}>
//             <Text style={styles.dateText}>Calving and Delivery Date</Text>
//             <TextInput
//               style={styles.dateInput}
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
//   container: {
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#107c2e',
//     fontWeight: 'bold',
//   },
//   input: {
//     marginBottom: 10,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: '#ccc',
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   switchText: {
//     marginRight: 10,
//   },
//   dateContainer: {
//     marginBottom: 10,
//   },
//   dateText: {
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   dateInput: {
//     marginBottom: 10,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: '#ccc',
//   },
//   button: {
//     backgroundColor: '',
//     padding: 10,
//     borderRadius: 5,
//   },
// });

// export default DairyValueChain;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';


const DairyValueChain = () => {
  const [cowNumber, setCowNumber] = useState('');
  const [cowRace, setCowRace] = useState('');
  const [aiDate, setAiDate] = useState('');
  const [aiTriggered, setAiTriggered] = useState(false);
  const [calculatedDates, setCalculatedDates] = useState(null);

  const handleSubmit = () => {
    const aiDateObj = new Date(aiDate);
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
    // Prepare data to send to backend
    const cowData = {
      cow_number: cowNumber,
      cow_race: cowRace,
      artificial_insemination_date: aiDate,
      artificial_insemination_triggered: aiTriggered ? "Yes" : "No", // Convert boolean to "Yes" or "No"
      return_in_heat_control_date: calculatedDates.returnInHeatControlDate.toISOString().split('T')[0],
      pregnancy_detection_date: calculatedDates.pregnancyDetectionDate.toISOString().split('T')[0],
      drying_off_date: calculatedDates.dryingOffDate.toISOString().split('T')[0],
      calving_and_delivery_date: calculatedDates.calvingAndDeliveryDate.toISOString().split('T')[0]
    };


    fetch('http://192.168.100.53:6464/cows/add', {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dairy Value Chain</Text>
      <TextInput
        style={styles.input}
        placeholder="Cow Number"
        value={cowNumber}
        onChangeText={setCowNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Cow Race"
        value={cowRace}
        onChangeText={setCowRace}
      />
      <TextInput
        style={styles.input}
        placeholder="Artificial Insemination Date (YYYY-MM-DD)"
        value={aiDate}
        onChangeText={setAiDate}
      />
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
          <Button title="Save to Database" onPress={saveToDatabase} style={styles.button} color="#107c2e" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#FFFFFF',
    marginTop: 105,
    marginBottom: 23,
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
  },
  button: {
    backgroundColor: '',
    padding: 10,
    borderRadius: 5,
  },
});

export default DairyValueChain;
