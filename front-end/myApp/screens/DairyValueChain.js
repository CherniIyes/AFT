

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';


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
      <TextInput
        style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
        placeholder="Artificial Insemination Date (YYYY-MM-DD)"
        value={aiDate}
        onChangeText={setAiDate}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Artificial Insemination Triggered:</Text>
        <Switch value={aiTriggered} onValueChange={handleToggle} />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
      {calculatedDates && (
        <>
          <View>
            <Text style={{ marginBottom: 5 }}>Return in heat control date</Text>
            <TextInput
              style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
              value={calculatedDates.returnInHeatControlDate.toISOString().split('T')[0]}
              editable={false}
            />
          </View>
          <View>
            <Text style={{ marginBottom: 5 }}>Pregnancy detection date</Text>
            <TextInput
              style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
              value={calculatedDates.pregnancyDetectionDate.toISOString().split('T')[0]}
              editable={false}
            />
          </View>
          <View>
            <Text style={{ marginBottom: 5 }}>Drying off date</Text>
            <TextInput
              style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
              value={calculatedDates.dryingOffDate.toISOString().split('T')[0]}
              editable={false}
            />
          </View>
          <View>
            <Text style={{ marginBottom: 5 }}>Calving and delivery date</Text>
            <TextInput
              style={{ marginBottom: 10, borderWidth: 1, padding: 5 }}
              value={calculatedDates.calvingAndDeliveryDate.toISOString().split('T')[0]}
              editable={false}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default DairyValueChain;


