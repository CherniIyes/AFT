import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function Article1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.137.1:6464/articles')
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
            <Text>{item.part_name}</Text>
            <Text>{item.content}</Text>
            <Image source={{ uri: item.image_url }} style={{ width: 100, height: 100 }} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Article1;
