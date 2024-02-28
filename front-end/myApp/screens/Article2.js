import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

function Article2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.137.1:6464/article2')
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
    <View>
      {data.map((item, index) => (
        <View key={index}>
          <Text>{item.part_name}</Text>
          <Text>{item.content}</Text>
          <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
        </View>
      ))}
    </View>
  );
}

export default Article2;
