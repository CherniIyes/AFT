// Article2.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function Article2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.100.51:6464/article2') // Assuming this endpoint is correct
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);

  return (
    <ScrollView>
      <View>
        {data.map((item, index) => (
          <View key={index}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
            <Image source={{ url: item.image_url }} style={{ width: 100, height: 100 }} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Article2;
