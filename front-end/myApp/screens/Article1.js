// Article1.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

function Article1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.100.53:6464/articles')
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
    <ScrollView style={styles.container}>
      <View style={styles.articleContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.partName}>{item.part_name}</Text>
            <Text style={styles.itemContent}>{item.content}</Text>
            <Image source={{ uri: item.image_url }} style={styles.image} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginTop: '30%'
  },
  articleContainer: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  partName: {
    fontSize: 24,
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default Article1;
